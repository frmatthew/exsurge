//
// Author(s):
// Fr. Matthew Spencer, OSJ <mspencer@osjusa.org>
//
// Copyright (c) 2008-2016 Fr. Matthew Spencer, OSJ
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//

import { Units, Pitch, Point, Rect, Margins, Size, Step, MarkingPositionHint } from 'Exsurge.Core'
import { LyricType, Lyric, DropCap } from 'Exsurge.Drawing'
import { Note, LiquescentType, NoteShape, NoteShapeModifiers, ChantScore, ChantDocument, Clef, DoClef, FaClef, ChantLineBreak } from 'Exsurge.Chant'
import * as Markings from 'Exsurge.Chant.Markings'
import * as Signs from 'Exsurge.Chant.Signs'
import * as Neumes from 'Exsurge.Chant.Neumes'
import { ctxt } from 'Exsurge.Drawing'



// reusable reg exps
var __syllablesRegex = /(?=.)((?:[^(])*)(?:\(?([^)]*)\)?)?/g;
var __notationsRegex = /z0|z|Z|::|:|;|,|`|c1|c2|c3|c4|f3|f4|cb3|cb4|\/\/|\/| |\!|-?[a-mA-M][oOwWvVrRsxy#~\+><_\.'012345]*/g;

export var Gabc = {

  loadChantScore: function (ctxt, gabcNotations, createDropCap) {

    var score = new ChantScore();
    
    this.parseChantNotations(ctxt, gabcNotations, score, createDropCap);

    return score;
  },

  parseChantNotations: function (ctxt, gabcNotations, score, createDropCap) {

    score.notations = []; 

    var changeClefCallback = function(ctxt_, clef) {
      if (score.startingClef === null)
        score.startingClef = clef;

      ctxt_.activeClef = clef;
    }

    // split the notations on whitespace boundaries, unless the space is inside
    // of parentheses. Prior to doing that, we replace all whitespace with
    // spaces, which prevents tabs and newlines from ending up in the notation
    // data.
    gabcNotations = gabcNotations.replace(/\s/g, ' ');
    var words = gabcNotations.split(/ +(?=[^\)]*(?:\(|$))/g);

    for (var i = 0; i < words.length; i++) {
      var word = words[i].trim();

      if (word === '')
        continue;

      var notations = this.parseWord(ctxt, word, changeClefCallback);
      score.notations = score.notations.concat(notations);
    }

    // if we are to create a dropCap and we haven't done so yet, do it now
    if (createDropCap && score.dropCap === null) {

      // find the first notation with lyrics to use
      var notationWithLyrics = null;
      for (i = 0; i < score.notations.length; i++) {
        if (score.notations[i].hasLyrics() && score.notations[i].lyrics[0] !== null) {
          notationWithLyrics = score.notations[i];
          break;
        }
      }

      if (notationWithLyrics)
        score.dropCap = notationWithLyrics.lyrics[0].generateDropCap(ctxt);
    }

    // after parsing all of the notations, we need to make one pass over
    // the neumes/notes to update custods without ref neumes and automatic oriscus
    // directions (ascending or descending)
    //
    // fixme: should we also automatically resolve liquescent ascending/descending?
    var custodToUpdate = null;
    var oriscusToUpdate = null;
    for (i = 0; i < score.notations.length; i++) {
      var notation = score.notations[i];

      if (notation.constructor.name === Signs.Custod.name && notation.note === null) {
        custodToUpdate = notation;
        continue;
      }

      // ignore notations that aren't neumes
      if (typeof notation.notes === 'undefined')
        continue;

      if (custodToUpdate !== null) {
        custodToUpdate.referringNeume = notation;
        custodToUpdate = null;
      }

      for (var j = 0; j < notation.notes.length; j++) {
        var note = notation.notes[j];

        if (oriscusToUpdate !== null) {
          if (oriscusToUpdate.pitch.isHigherThan(note.pitch))
            oriscusToUpdate.shapeModifiers |= NoteShapeModifiers.Descending;
          else if (oriscusToUpdate.pitch.isLowerThan(note.pitch))
            oriscusToUpdate.shapeModifiers |= NoteShapeModifiers.Ascending;

          oriscusToUpdate = null;
        }

        if (note.shape === NoteShape.Oriscus)
          oriscusToUpdate = note;
      }
    }
  },

  // returns an array of notations made from the word
  parseWord: function(ctxt, word, changeClefCallback) {

    var matches = [];
    var notations = [];
    var currSyllable = 0;
    
    while ((match = __syllablesRegex.exec(word)))
      matches.push(match);

    for (var j = 0; j < matches.length; j++) {
      var match = matches[j];

      var lyricText = match[1].trim();
      var notationData = match[2];

      var items = this.createNotations(ctxt, notationData, changeClefCallback);

      if (items.length === 0)
        continue;

      notations = notations.concat(items);

      // add the lyrics to the first notation that makes sense...
      var notationWithLyrics = null;
      for (var i = 0; i < items.length; i++) {
        var cne = items[i];

        if (cne.constructor.name === "Accidental")
          continue;

        notationWithLyrics = cne
        break;
      }

      if (notationWithLyrics === null)
        return notations;
    
      var proposedLyricType;
      
      // if it's not a neume then make the lyrics a directive
      if (typeof cne.notes === 'undefined')
        proposedLyricType = LyricType.Directive;
      // otherwise trye to guess the lyricType for the first lyric anyway
      else if (currSyllable === 0 && matches.length === 1)
        proposedLyricType = LyricType.SingleSyllable;
      else if (currSyllable === 0 && matches.length > 1)
        proposedLyricType = LyricType.BeginningSyllable;
      else if (currSyllable === matches.length - 1)
        proposedLyricType = LyricType.EndingSyllable;
      else
        proposedLyricType = LyricType.MiddleSyllable;

      currSyllable++;

      // also, new words reset the accidentals, per the Solesmes style (see LU xviij)
      if (proposedLyricType === LyricType.BeginningSyllable ||
          proposedLyricType === LyricType.SingleSyllable)
          ctxt.activeClef.resetAccidentals();

      var lyrics = this.parseSyllableLyrics(ctxt, lyricText, proposedLyricType);

      if (lyrics === null || lyrics.length === 0)
        continue;

      notationWithLyrics.lyrics = lyrics;
    }

    return notations;
  },

  // returns an array of lyrics (an array because each syllable can have multiple lyrics)
  parseSyllableLyrics: function (ctxt, text, proposedLyricType) {

    var lyrics = [];

    // an extension to gabc: multiple lyrics per syllable
    var lyricTexts = text.split('|');

    for (var i = 0; i < lyricTexts.length; i++) {

      var lyricText = lyricTexts[i];

      // gabc allows lyrics to indicate the centering part of the text by
      // using braces to indicate how to center the lyric. So a lyric can
      // look like "f{i}re" or "{fenced}" to center on the i or on the entire
      // word, respectively. Here we determine if the lyric should be spaced
      // manually with this method of using braces.
      var centerStartIndex = lyricText.indexOf('{');
      var centerLength = 0;

      if (centerStartIndex >= 0) {
        var indexClosingBracket = lyricText.indexOf('}');

        if (indexClosingBracket >= 0 && indexClosingBracket > centerStartIndex) {
          centerLength = indexClosingBracket - centerStartIndex - 1;

          // strip out the brackets...is this better than string.replace?
          lyricText = lyricText.substring(0, centerStartIndex) +
            lyricText.substring(centerStartIndex + 1, indexClosingBracket) + 
            lyricText.substring(indexClosingBracket + 1, lyricText.length);
        } else
          centerStartIndex = -1; // if there's no closing bracket, don't enable centering
      }

      var lyric = this.makeLyric(ctxt, lyricText, proposedLyricType);

      // if we have manual lyric centering, then set it now
      if (centerStartIndex >= 0) {
        lyric.centerStartIndex = centerStartIndex;
        lyric.centerLength = centerLength;
      }

      lyrics.push(lyric);
    }

    return lyrics;
  },

  makeLyric: function (ctxt, text, lyricType) {

    if (text.length > 1 && text[text.length - 1] === '-') {
      if (lyricType === LyricType.EndingSyllable)
        lyricType = LyricType.MiddleSyllable;
      else if (lyricType === LyricType.SingleSyllable)
        lyricType = LyricType.BeginningSyllable;

      text = text.substring(0, text.length - 1);
    }

    var elides = false;
    if (text.length > 1 && text[text.length - 1] === '_') {
      // must be an elision
      elides = true;
      text = text.substring(0, text.length - 1);
    }

    if (text === "*" || text === "†")
      lyricType = LyricType.Directive;

    var lyric = new Lyric(ctxt, text, lyricType);
    lyric.elidesToNext = elides;

    return lyric;
  },

  createNotations: function (ctxt, data, changeClefCallback) {

    var notations = [];

    // if there is no data, then this must be a text only object
    if (data === undefined || data === null || data === "") {
      notations.push(new Neumes.TextOnly());
      return notations;
    }

    var notes = [];
    var out = { trailingSpace: -1 };

    var that = this;
    var addNotation = function(notation) {

      // first, if we have any notes left over, we create a neume out of them
      if (notes.length > 0) {
        // create neume(s)

        var neumes = that.createNeumesFromNotes(ctxt, notes, out.trailingSpace);
        for (var i = 0; i < neumes.length; i++)
          notations.push(neumes[i]);

        // reset the trailing space
        out.trailingSpace = -1;

        notes = [];
      }

      // then, if we're passed a notation, let's add it
      // also, perform chant logic here
      if (notation !== null) {

        if (notation.isClef) {
          changeClefCallback(ctxt, notation);
          return;
        } else if (notation.isAccidental)
          ctxt.activeClef.activeAccidental = notation;
        else if (notation.resetsAccidentals)
          ctxt.activeClef.resetAccidentals();

        notations.push(notation);
      }
    };

    var atoms = data.match(__notationsRegex);

    for (var i = 0; i < atoms.length; i++) {

      var atom = atoms[i];

      // handle the clefs and dividers here
      switch (atom) {
        case ",":
          addNotation(new Signs.QuarterBar());
          break;
        case "`":
          addNotation(new Signs.Virgula());
          break;
        case ";":
          addNotation(new Signs.HalfBar());
          break;
        case ":":
          addNotation(new Signs.FullBar());
          break;
        case "::":
          addNotation(new Signs.DoubleBar());
          break;
          // other gregorio dividers are not supported

        case "c1":
          changeClefCallback(ctxt, new DoClef(-3, 2));
          addNotation(ctxt.activeClef);
          break;

        case "c2":
          changeClefCallback(ctxt, new DoClef(-1, 2));
          addNotation(ctxt.activeClef);
          break;

        case "c3":
          changeClefCallback(ctxt, new DoClef(1, 2));
          addNotation(ctxt.activeClef);
          break;

        case "c4":
          changeClefCallback(ctxt, new DoClef(3, 2));
          addNotation(ctxt.activeClef);
          break;

        case "f3":
          changeClefCallback(ctxt, new FaClef(1, 2));
          addNotation(ctxt.activeClef);
          break;

        case "f4":
          changeClefCallback(ctxt, new FaClef(3, 2));
          addNotation(ctxt.activeClef);
          break;

        case "cb3":
          changeClefCallback(ctxt, new DoClef(1, 2, new Signs.Accidental(0, Signs.AccidentalType.Flat)));
          addNotation(ctxt.activeClef);
          break;

        case "cb4":
          changeClefCallback(ctxt, new DoClef(3, 2, new Signs.Accidental(2, Signs.AccidentalType.Flat)));
          addNotation(ctxt.activeClef);
          break;

          case "z":
            addNotation(new ChantLineBreak(true));
            break;
          case "Z":
            addNotation(new ChantLineBreak(false));
            break;
          case "z0":
            addNotation(new Signs.Custod());
            break;

          // spacing indicators
          case "!":
            out.trailingSpace = 0;
            addNotation(null);
            break;
          case "/":
            out.trailingSpace = ctxt.intraNeumeSpacing;
            addNotation(null);
            break;
          case "//":
            out.trailingSpace = ctxt.intraNeumeSpacing * 2;
            addNotation(null);
            break;
          case ' ':
            // fixme: is this correct? logically what is the difference in gabc
            // between putting a space between notes vs putting '//' between notes?
            out.trailingSpace = ctxt.intraNeumeSpacing * 2;
            addNotation(null);
            break;


          default:
            // might be a custod, might be an accidental, or might be a note
            if (atom.length > 1 && atom[1] === '+') {
              // custod
              var custod = new Signs.Custod();

              custod.staffPosition = this.convertGabcStaffPositionToScribamStaffPosition(data[0]);

              addNotation(custod);

            } else if (atom.length > 1 && (atom[1] === 'x' || atom[1] === 'y' || atom[1] === '#')) {

              var accidentalType;

              switch (atom[1]) {
                case 'y':
                  accidentalType = Signs.AccidentalType.Natural;
                  break;
                case '#':
                  accidentalType = Signs.AccidentalType.Sharp;
                  break;
                default:
                  accidentalType = Signs.AccidentalType.Flat;
                  break;
              }

              var noteArray = [];
              this.createNoteFromData(ctxt, ctxt.activeClef, atom, noteArray);
              var accidental = new Signs.Accidental(noteArray[0].staffPosition, accidentalType);
              accidental.trailingSpace = ctxt.intraNeumeSpacing * 2;

              ctxt.activeClef.activeAccidental = accidental;
              
              addNotation(accidental);
            } else {

              // to make our interpreter more robust, make sure we have a clef to work with
              if (ctxt.activeClef === null)
                changeClefCallback(new DoClef(1, 2));

              // looks like it's a note
              this.createNoteFromData(ctxt, ctxt.activeClef, atom, notes);
            }
            break;
      }
    }

    // finish up any remaining notes we have left
    addNotation(null);

    return notations;
  },

  createNeumesFromNotes: function (ctxt, notes, finalTrailingSpace) {
    
    var neumes = [];
    var intraNeumeSpacing = ctxt.intraNeumeSpacing;
    var firstNoteIndex = 0;
    var currNoteIndex = 0;

    // here we use a simple finite state machine to create the neumes from the notes
    // createNeume is helper function which returns the next state after a neume is created
    // (unknownState). Each state object has a neume() function and a handle() function.
    // neume() allows us to create the neume of the state in the event that we run out
    // of notes. handle() gives the state an opportunity to examine the currNote and
    // determine what to do...either transition to a different neume/state, or
    // continue building the neume of that state. handle() returns the next state

    var createNeume = function (neume, includeCurrNote, includePrevNote = true) {

      // add the notes to the neume
      var lastNoteIndex;
      if (includeCurrNote)
        lastNoteIndex = currNoteIndex;
      else if (includePrevNote)
        lastNoteIndex = currNoteIndex - 1;
      else
        lastNoteIndex = currNoteIndex - 2;

      if (lastNoteIndex < 0)
        return;

      while (firstNoteIndex <= lastNoteIndex)
        neume.notes.push(notes[firstNoteIndex++]);

      neumes.push(neume);

      if (includeCurrNote === false) {
        currNoteIndex--;

        if (includePrevNote === false)
        currNoteIndex--;

        neume.keepWithNext = true;
        neume.trailingSpace = intraNeumeSpacing;
      }

      return unknownState;
    };

    var unknownState = {
      neume: function() {
        return new Neumes.Punctum();
      },
      handle: function(currNote, prevNote) {

        if (currNote.shape === NoteShape.Virga)
          return virgaState;
        else if (currNote.shape === NoteShape.Stropha)
          return apostrophaState;
        else if (currNote.shape === NoteShape.Oriscus)
          return oriscusState;
        else if (currNote.shapeModifiers & NoteShapeModifiers.Cavum)
          return createNeume(new Neumes.Punctum(), true);
        else
          return punctumState;
      }
    };

    var punctumState = {
      neume: function() {
        return new Neumes.Punctum();
      },
      handle: function(currNote, prevNote) {
        
        if (currNote.staffPosition > prevNote.staffPosition)
          return podatusState;
        else if (currNote.staffPosition < prevNote.staffPosition) {
          if (currNote.shape === NoteShape.Inclinatum)
            return climacusState;
          else
            return clivisState;
        } else
          return distrophaState;
      }
    };

    var oriscusState = {
      neume: function() {
        return new Neumes.Oriscus();
      },
      handle: function(currNote, prevNote) {
        
        if (currNote.shape === NoteShape.Default) {

          if (currNote.staffPosition > prevNote.staffPosition) {
            prevNote.shapeModifiers |= NoteShapeModifiers.Ascending;
            return createNeume(new Neumes.PesQuassus(), true);
          } else if (currNote.staffPosition < prevNote.staffPosition) {
            prevNote.shapeModifiers |= NoteShapeModifiers.Descending;
            return createNeume(new Neumes.Clivis(), true);
          }
        } else
          // stand alone oriscus
          return createNeume(new Neumes.Oriscus(), true);
      }
    };

    var podatusState = {
      neume: function() {
        return new Neumes.Podatus();
      },
      handle: function(currNote, prevNote) {

        if (currNote.staffPosition > prevNote.staffPosition) {

          if (prevNote.shape === NoteShape.Oriscus)
            return salicusState;
          else
            return scandicusState;

        } else if (currNote.staffPosition < prevNote.staffPosition) {
          if (currNote.shape === NoteShape.Inclinatum)
            return pesSubpunctisState;
          else
            return torculusState;
        } else
          return createNeume(new Neumes.Podatus(), false);
      }
    };

    var clivisState = {
      neume: function() {
        return new Neumes.Clivis();
      },
      handle: function(currNote, prevNote) {

        if (currNote.shape === NoteShape.Default && currNote.staffPosition > prevNote.staffPosition)
          return porrectusState;
        else
          return createNeume(new Neumes.Clivis(), false);
      }
    };

    var climacusState = {
      neume: function() {
        return new Neumes.Climacus();
      },
      handle: function(currNote, prevNote) {
        if (currNote.shape !== NoteShape.Inclinatum)
          return createNeume(new Neumes.Climacus(), false);
        else
          return state;
      }
    };

    var porrectusState = {
      neume: function() {
        return new Neumes.Porrectus();
      },
      handle: function(currNote, prevNote) {

        if (currNote.shape === NoteShape.Default && currNote.staffPosition < prevNote.staffPosition)
          return createNeume(new Neumes.PorrectusFlexus(), true);
        else
          return createNeume(new Neumes.Porrectus(), false);
      }
    };

    var pesSubpunctisState = {
      neume: function() {
        return new Neumes.PesSubpunctis();
      },
      handle: function(currNote, prevNote) {
    
        if (currNote.shape !== NoteShape.Inclinatum)
          return createNeume(new Neumes.PesSubpunctis(), false);
        else
          return state;
      }
    };

    var salicusState = {
      neume: function() {
        return new Neumes.Salicus();
      },
      handle: function(currNote, prevNote) {

        if (currNote.staffPosition < prevNote.staffPosition)
          return salicusFlexusState;
        else
          return createNeume(new Neumes.Salicus(), false);
      }
    };

    var salicusFlexusState = {
      neume: function() {
        return new Neumes.SalicusFlexus();
      },
      handle: function(currNote, prevNote) {
        return createNeume(new Neumes.SalicusFlexus(), false);
      }
    };

    var scandicusState = {
      neume: function() {
        return new Neumes.Scandicus();
      },
      handle: function(currNote, prevNote) {

        if (currNote.shape === NoteShape.Default && currNote.staffPosition < prevNote.staffPosition)
          return scandicusFlexusState;
        else
          return createNeume(new Neumes.Scandicus(), false);
      }
    };

    var scandicusFlexusState = {
      neume: function() {
        return new Neumes.ScandicusFlexus();
      },
      handle: function(currNote, prevNote) {
        return createNeume(new Neumes.ScandicusFlexus(), false);
      }
    };

    var virgaState = {
      neume: function() {
        return new Neumes.Virga();
      },
      handle: function(currNote, prevNote) {
    
        if (currNote.shape === NoteShape.Inclinatum && currNote.staffPosition < prevNote.staffPosition)
          return climacusState;
        else if (currNote.shape === NoteShape.Virga && currNote.staffPosition === prevNote.staffPosition)
          return bivirgaState;
        else
          return createNeume(new Neumes.Virga(), false);
      }
    };

    var bivirgaState = {
      neume: function() {
        return new Neumes.Bivirga();
      },
      handle: function(currNote, prevNote) {
    
        if (currNote.shape === NoteShape.Virga && currNote.staffPosition === prevNote.staffPosition)
          return createNeume(new Neumes.Trivirga(), true);
        else
          return createNeume(new Neumes.Bivirga(), false);
      }
    };

    var apostrophaState = {
      neume: function() {
        return new Neumes.Apostropha();
      },
      handle: function(currNote, prevNote) {
        if (currNote.staffPosition === prevNote.staffPosition)
          return distrophaState;
        else
          return createNeume(new Neumes.Apostropha(), false);
      }
    };

    var distrophaState = {
      neume: function() {
        return new Neumes.Distropha();
      },
      handle: function(currNote, prevNote) {
        if (currNote.staffPosition === prevNote.staffPosition)
          return tristrophaState;
        else
          return createNeume(new Neumes.Apostropha(), false, false);
      }
    };

    var tristrophaState = {
      neume: function() {
        return new Neumes.Tristropha();
      },
      handle: function(currNote, prevNote) {
        // we only create a tristropha when the note run ends after three
        // and the neume() function of this state is called. Otherwise
        // we always interpret the third note to belong to the next sequence
        // of notes.
        //
        // fixme: gabc allows any number of punctum/stropha in succession...
        // is this a valid neume type? Or is it just multiple *stropha neumes
        // in succession? Should we simplify the apostropha/distropha/
        // tristropha classes to a generic stropha neume that can have 1 or
        // more successive notes?
        return createNeume(new Neumes.Distropha(), false, false);
      }
    };

    var torculusState = {
      neume: function() {
        return new Neumes.Torculus();
      },
      handle: function(currNote, prevNote) {
        if (currNote.shape === NoteShape.Default && currNote.staffPosition > prevNote.staffPosition)
          return torculusResupinusState;
        else
          return createNeume(new Neumes.Torculus(), false);
      }
    };

    var torculusResupinusState = {
      neume: function() {
        return new Neumes.TorculusResupinus();
      },
      handle: function(currNote, prevNote) {
        if (currNote.shape === NoteShape.Default && currNote.staffPosition < prevNote.staffPosition)
          return createNeume(new Neumes.TorculusResupinusFlexus(), true);
        else
          return createNeume(new Neumes.TorculusResupinus(), false);
      }
    };

    var state = unknownState;

    while (currNoteIndex < notes.length) {

      var prevNote = currNoteIndex > 0 ? notes[currNoteIndex - 1] : null;
      var currNote = notes[currNoteIndex];

      state = state.handle(currNote, prevNote);

      // if we are on the last note, then try to create a neume if we need to.
      if (currNoteIndex === notes.length - 1 && state !== unknownState)
        createNeume(state.neume(), true);

      currNoteIndex++;
    }

    if (neumes.length > 0) {
      if (finalTrailingSpace >= 0) {
        neumes[neumes.length - 1].keepWithNext = true;
        neumes[neumes.length - 1].trailingSpace = finalTrailingSpace;
      }
    }

    return neumes;
  },

  // appends any notes created to the notes array argument
  createNoteFromData: function (ctxt, clef, data, notes) {

    var note = new Note();

    if (data.length < 1)
      throw 'Invalid note data: ' + data;

    if (data[0] === '-') { // liquescent initio debilis
      note.liquescent = LiquescentType.InitioDebilis;
      data = data.substring(1);
    }

    if (data.length < 1)
      throw 'Invalid note data: ' + data;

    // the next char is always the pitch
    var pitch = this.convertGabcStaffPositionToScribamPitch(clef, data[0]);

    if (data[0] === data[0].toUpperCase())
      note.shape = NoteShape.Inclinatum;

    note.staffPosition = this.convertGabcStaffPositionToScribamStaffPosition(data[0]);
    note.pitch = pitch;

    var mark;

    // process the modifiers
    for (var i = 1; i < data.length; i++) {

      var c = data[i];
      var lookahead = '\0';

      var haveLookahead = i + 1 < data.length;
      if (haveLookahead)
        lookahead = data[i + 1];

      switch (c) {

        // rhythmic markings
        case '.':
          mark = new Markings.Mora(note, ctxt.staffInterval / 4.0);
          if (haveLookahead && lookahead === '1')
            mark.positionHint = MarkingPositionHint.Above;
          else if (haveLookahead && lookahead === '0')
            mark.positionHint = MarkingPositionHint.Below;
          
          note.markings.push(mark);
          break;

        case '_':
          mark = new Markings.HorizontalEpisema(note);
          if (haveLookahead) {
            if (lookahead === '0')
              mark.positionHint = MarkingPositionHint.Below;
            else if (lookahead === '1')
              mark.positionHint = MarkingPositionHint.Above;
            else if (lookahead === '2')
              mark.terminating = true;

            // check for another lookahead...
            if (++i + 1 < data.length && data[i + 1] === '2') {
              mark.terminating = true;
              i++;
            }
          }
          note.markings.push(mark);
          break;

        case '\'':
          mark = new Markings.Ictus(note);
          if (haveLookahead && lookahead === '1')
            mark.positionHint = MarkingPositionHint.Above;
          else if (haveLookahead && lookahead === '0')
            mark.positionHint = MarkingPositionHint.Below;

          note.markings.push(mark);
          break;

        //note shapes
        case 'r':
          if (haveLookahead && lookahead === '1') {
            note.markings.push(new Markings.AcuteAccent(note));
            i++;
          } else
            note.shapeModifiers |= NoteShapeModifiers.Cavum;
          break;

        case 's':

          if (note.shape === NoteShape.Stropha) {
            // if we're already a stropha, that means this is gabc's
            // quick stropha feature (e.g., gsss). create a new note
            notes.push(note);
            note = new Note();
          }
          
          note.shape = NoteShape.Stropha;
          break;

        case 'v':

          if (note.shape === NoteShape.Virga) {
            // if we're already a stropha, that means this is gabc's
            // quick virga feature (e.g., gvvv). create a new note
            notes.push(note);
            note = new Note();
          }

          note.shape = NoteShape.Virga;
          break;

        case 'w':
          note.shape = NoteShape.Quilisma;
          break;

        case 'o':
          note.shape = NoteShape.Oriscus;
          if (haveLookahead && lookahead === '<') {
            note.shapeModifiers |= NoteShapeModifiers.Ascending;
            i++;
          } else if (haveLookahead && lookahead === '>') {
            note.shapeModifiers |= NoteShapeModifiers.Descending;
            i++;
          } else
            note.shapeModifiers |= NoteShapeModifiers.Ascending;
          break;

        case 'O':
          note.shape = NoteShape.Oriscus;
          if (haveLookahead && lookahead === '<') {
            note.shapeModifiers |= NoteShapeModifiers.Ascending | NoteShapeModifiers.Stemmed;
            i++;
          } else if (haveLookahead && lookahead === '>') {
            note.shapeModifiers |= NoteShapeModifiers.Descending | NoteShapeModifiers.Stemmed;
            i++;
          } else
            note.shapeModifiers |= NoteShapeModifiers.Ascending | NoteShapeModifiers.Stemmed;
          break;

        // liquescents
        case '~':
          if (note.shape === NoteShape.Inclinatum)
            note.liquescent |= LiquescentType.Small;
          else if (note.shape === NoteShape.Oriscus)
            note.liquescent |= LiquescentType.Large;
          else
            note.liquescent |= LiquescentType.Small;
          break;
        case '<':
          note.liquescent |= LiquescentType.Ascending;
          break;
        case '>':
          note.liquescent |= LiquescentType.Descending;
          break;

        // accidentals
        case 'x':
          if (note.pitch.step === Step.Mi)
            note.pitch.step = Step.Me;
          else if (note.pitch.step === Step.Ti)
            note.pitch.step = Step.Te;
          break;
        case 'y':
          if (note.pitch.step === Step.Te)
            note.pitch.step = Step.Ti;
          else if (note.pitch.step === Step.Me)
            note.pitch.step = Step.Mi;
          else if (note.pitch.step === Step.Du)
            note.pitch.step = Step.Do;
          else if (note.pitch.step === Step.Fu)
            note.pitch.step = Step.Fa;
          break;
        case '#':
          if (note.pitch.step === Step.Do)
            note.pitch.step = Step.Du;
          else if (note.pitch.step === Step.Fa)
            note.pitch.step = Step.Fu;
          break;
      }
    }

    notes.push(note);
  },

  // returns pitch
  convertGabcStaffPositionToScribamStaffPosition: function (gabcStaffPos) {
    return gabcStaffPos.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) - 6;
  },

  // returns pitch
  convertGabcStaffPositionToScribamPitch: function (clef, gabcStaffPos) {
    var scribamStaffPosition = this.convertGabcStaffPositionToScribamStaffPosition(gabcStaffPos)

    var pitch = clef.staffPositionToPitch(scribamStaffPosition);

    if (clef.activeAccidental !== null)
      clef.activeAccidental.applyToPitch(pitch);

    return pitch;
  }
};