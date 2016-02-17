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

import * as Exsurge from 'Exsurge.Core'
import { Step, Pitch, Rect, Point, Margins } from 'Exsurge.Core'
import { ctxt, QuickSvg, ChantLayoutElement, ChantNotationElement, GlyphCode, GlyphVisualizer, NeumeLineVisualizer, HorizontalEpisemaLineVisualizer } from 'Exsurge.Drawing'
import { Note, NoteShape } from 'Exsurge.Chant'

/*
 * Neumes base class
 */
export class Neume extends ChantNotationElement {

  constructor() {
    super();

    this.notes = [];
  }

  performLayout(ctxt) {
    super.performLayout(ctxt);
  }

  finishLayout(ctxt) {

/*
    var startEpisema = null;
    var boundsToMark;

    var neume = this;
    var createEpisema = function() {
      var line = new HorizontalEpisemaLineVisualizer(ctxt, boundsToMark, startEpisema.positionHint);
      neume.drawable.appendChild(line.drawable);
    };

    // layout the markings of the notes
    for (var i = 0; i < this.notes.length; i++) {
      var note = this.notes[i];

      for (var j = 0; j < note.markings.length; j++) {
        var marking = note.markings[j];

        // episemas we treat specially because we try to combine them when possible
        if (marking.constructor.name == "HorizontalEpisema") {

          if (startEpisema == null) {
            // first one we've seen
            startEpisema = marking;
            boundsToMark = note.bounds.clone();
          } else {
            // try to continue the previous one if possible
            if (marking.positionHint == startEpisema.positionHint) {
              boundsToMark.union(note.bounds);
            } else {
              // can't combine them, terminate the previous one and start a new one.
              createEpisema();

              startEpisema = marking;
              boundsToMark = note.bounds.clone();
            }
          }
        } else {

          if (marking.drawable != null) {
            this.drawable.appendChild(marking.drawable);

            QuickSvg.translate(marking.drawable, note.bounds.x + note.origin.x + marking.bounds.x, marking.bounds.y);
          }
        }
      }

      // end of the note processing...if we are the last one and we have an episema started, we need to terminate it here
      if (i == this.notes.length - 1 && startEpisema != null)
        createEpisema();
    }

    if (this.hasLyric()) {
      // add ui support for note playback on click
      this.lyric.svgText.setAttribute('onclick', "alert('Clicked lyric: " + this.lyric.text + "');");
    }
*/
    super.finishLayout(ctxt);
  }

  // this will handle quilismae, mora, and horizontal episemae.
  // subclasses can override for their own nuances to note rhythms
  generatePlaybackData() {

    var playbackData = [];

    var prevIsQuilisma = false;
    for (var i = 0; i < this.notes; i++) {
      var note = this.notes[i];

      var duration = 1.0; // reset to standard length
      var multiplier = 1.0;

      if (prevIsQuilisma)
        multiplier *= 0.5;

      if (note.shape == NoteShape.Quilisma) {
        multiplier *= 2;
        prevIsQuilisma = true;
      } else
        prevIsQuilisma = false;
       
      // check markings
      for (var j = 0; j < note.markings.length; j++) {
        var marking = note.markings[j];

        if (marking.className == 'Mora')
          multiplier = Math.max(multiplier, 2);
        else if (marking.className == 'HorizontalEpisema' || ctxt.horizontalEpisemaActive)
          multiplier = Math.max(multiplier, 2);
      }

      duration *= multiplier;

      playbackData.push({
        type: 'note',
        duration: duration,
        pitch: note.pitch
      })
    }

    return playbackData;
  }
}

/*
 * Apostropha
 */
export class Apostropha extends Neume {

  performLayout(ctxt) {
    super.performLayout(ctxt);

    // determine the glyph to use
    var note = this.notes[0];

    if (note.isLiquescent)
      note.setGlyphShape(ctxt, GlyphCode.ApostrophaLiquescent);
    else
      note.setGlyphShape(ctxt, GlyphCode.Apostropha);

    note.performLayout(ctxt);
    this.addVisualizer(note);

    this.origin.x = note.origin.x;
    this.origin.y = note.origin.y;

    this.finishLayout(ctxt);
  }
}

/*
 * Bivirga
 *
 * For simplicity in implementation, Bivirga's have two notes in the object
 * structure. These technically must be the same pitch though.
 */
export class Bivirga extends Neume {

  performLayout(ctxt) {
    super.performLayout(ctxt);

    var note1 = this.notes[0];
    var note2 = this.notes[1];

    note1.setGlyphShape(ctxt, Virga.getGlyphCode(note1.staffPosition));
    note1.performLayout(ctxt);

    note2.setGlyphShape(ctxt, Virga.getGlyphCode(note1.staffPosition));
    note2.performLayout(ctxt);
    note2.bounds.x += note1.bounds.width + ctxt.intraNeumeSpacing;

    this.addVisualizer(note1);
    this.addVisualizer(note2);

    this.origin.x = note1.origin.x;
    this.origin.y = note1.origin.y;

    this.finishLayout(ctxt);
  }
}

/*
 * Trivirga
 *
 * For simplicity in implementation, Trivirga's have three notes in the object
 * structure. These technically must be the same pitch though.
 */
export class Trivirga extends Neume {

  performLayout(ctxt) {
    super.performLayout(ctxt);

    var note1 = this.notes[0];
    var note2 = this.notes[1];
    var note3 = this.notes[2];

    note1.setGlyphShape(ctxt, Virga.getGlyphCode(note1.staffPosition));
    note1.performLayout(ctxt);

    note2.setGlyphShape(ctxt, Virga.getGlyphCode(note1.staffPosition));
    note2.performLayout(ctxt);
    note2.bounds.x += note1.bounds.width + ctxt.intraNeumeSpacing;

    note3.setGlyphShape(ctxt, Virga.getGlyphCode(staffPosition));
    note3.performLayout(ctxt);
    note3.bounds.x += note1.bounds.width + ctxt.intraNeumeSpacing + note2.bounds.width + ctxt.intraNeumeSpacing;

    this.addVisualizer(note1);
    this.addVisualizer(note2);
    this.addVisualizer(note3);

    this.origin.x = note1.origin.x;
    this.origin.y = note1.origin.y;

    this.finishLayout(ctxt);
  }
}

/*
 * Climacus
 */
export class Climacus extends Neume {

  performLayout(ctxt) {
    super.performLayout(ctxt);

    // the first note is always a virga...
    var staffPosition, prevStaffPosition;
    var x = 0;

    var note = this.notes[0];
    staffPosition = note.staffPosition;
    note.setGlyphShape(ctxt, Virga.getGlyphCode(staffPosition));
    note.performLayout(ctxt);

    x += note.bounds.width * 1.2; // fixme: correct spacing after virga

    this.addVisualizer(note);

    this.origin.x = note.origin.x;
    this.origin.y = note.origin.y;

    // now add all the punctum inclinati
    prevStaffPosition = this.notes[1].staffPosition;
    for (var i = 1; i < this.notes.length; i++, prevStaffPosition = staffPosition) {
      note = this.notes[i];

      if (note.isLiquescent)
        note.setGlyphShape(ctxt, GlyphCode.punctumInclinatumLiquescent);
      else {
        // fixme: some climaci in the new chant books end with a punctum cuadratum
        // (see, for example, the antiphon "Sancta Maria" for October 7).
        note.setGlyphShape(ctxt, GlyphCode.PunctumInclinatum);
      }

      staffPosition = note.staffPosition;

      note.performLayout(ctxt);

      // fixme: how do these calculations look for puncti inclinati based on staff position offsets?
      var multiple;
      switch (Math.abs(prevStaffPosition - staffPosition)) {
        case 0:
          multiple = 0;
          break;
        case 1:
          multiple = 0.8;
          break;
        default:
          multiple = 1.2;
          break;
      }

      x += note.bounds.width * multiple;
      note.bounds.x += x;

      this.addVisualizer(note);
    }

    this.finishLayout(ctxt);
  }
}

/*
 * Clivis
 */
export class Clivis extends Neume {

  performLayout(ctxt) {
    super.performLayout(ctxt);

    var line;
    var isLiquescent;

    var upper = this.notes[0];
    var lower = this.notes[1];

    if (lower.isLiquescent || upper.isLiquescent) {
      upper.setGlyphShape(ctxt, GlyphCode.BeginningDesLiquescent);
      lower.setGlyphShape(ctxt, GlyphCode.TerminatingDesLiquescent);
      isLiquescent = true;
    } else {
      upper.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);
      lower.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);
      isLiquescent = false;
    }

    var upperStaffPos = upper.staffPosition;
    var lowerStaffPos = lower.staffPosition;

    upper.performLayout(ctxt);
    lower.performLayout(ctxt);

    // add the ascending line
    line = new NeumeLineVisualizer(ctxt, lower, upper, true);
    line.bounds.x = upper.bounds.x;

    this.addVisualizer(line);
    line = null;

    var x = upper.bounds.right();

    // do we need to draw a descending line?
    if (upperStaffPos - lowerStaffPos > 1) {
      line = new NeumeLineVisualizer(ctxt, upper, lower, false);
      x -= line.bounds.width;
      line.bounds.x = x;
      this.addVisualizer(line);
    }

    if (isLiquescent) {
      if (line != null)
        x -= lower.bounds.width - line.bounds.width;
      else
        x -= lower.bounds.width;
    }

    lower.bounds.x = x;

    this.addVisualizer(upper);
    this.addVisualizer(lower);

    this.origin.x = upper.origin.x;
    this.origin.y = upper.origin.y;

    this.finishLayout(ctxt);
  }
}



/*
 * Distropha
 *
 * For simplicity in implementation, Distropha's have two notes in the object
 * structure. These technically must be the same pitch though (like Bivirga).
 */
export class Distropha extends Neume {

  performLayout(ctxt) {
    super.performLayout(ctxt);

    var note1 = this.notes[0];
    var note2 = this.notes[1];

    note1.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);
    note1.performLayout(ctxt);

    note2.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);
    note2.performLayout(ctxt);
    note2.bounds.x += note1.bounds.width + ctxt.intraNeumeSpacing;

    this.addVisualizer(note1);
    this.addVisualizer(note2);

    this.origin.x = note1.origin.x;
    this.origin.y = note1.origin.y;

    this.finishLayout(ctxt);
  }
}

/*
 * Oriscus
 */
export class Oriscus extends Neume {

  performLayout(ctxt) {
    super.performLayout(ctxt);

    // determine the glyph to use
    var note = this.notes[0];

    if (note.shape == NoteShape.OriscusAscending)
      note.setGlyphShape(ctxt, GlyphCode.OriscusAsc);
    else
      note.setGlyphShape(ctxt, GlyphCode.OriscusDes);

    note.performLayout(ctxt);
    this.addVisualizer(note);

    this.origin.x = note.origin.x;
    this.origin.y = note.origin.y;

    this.finishLayout(ctxt);
  }
}

/*
 * PesQuassus
 */
export class PesQuassus extends Neume {

  performLayout(ctxt) {
    super.performLayout(ctxt);

    var x = 0;

    var lower = this.notes[0];
    var upper = this.notes[1];
    var line;

    var lowerStaffPos = lower.staffPosition;
    var upperStaffPos = upper.staffPosition;

    lower.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);

    if (upper.isLiquescent)
      upper.setGlyphShape(ctxt, GlyphCode.PunctumCuadratumDesLiquescent);
    else
      upper.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);

    lower.performLayout(ctxt);
    lower.bounds.x = x;
    this.addVisualizer(lower);

    x += lower.bounds.right();

    var needsLines = upperStaffPos - lowerStaffPos > 1;
    if (needsLines) {
      line = new NeumeLineVisualizer(ctxt, lower, upper, false);
      x -= line.bounds.width;
      line.bounds.x = x;
      this.addVisualizer(line);
    }

    upper.bounds.x = x;

    upper.performLayout(ctxt);
    upper.bounds.x = x;
    this.addVisualizer(upper);

    x += upper.bounds.width;

    // add a hanging line if we need it
    if (needsLines) {
      line = new NeumeLineVisualizer(ctxt, upper, lower, true);
      x -= line.bounds.width;
      line.bounds.x = x;
      this.addVisualizer(line);
    }

    this.origin.x = lower.origin.x;
    this.origin.y = lower.origin.y;

    this.finishLayout(ctxt);
  }
}

/*
 * PesSubpunctis
 */
export class PesSubpunctis extends Neume {

  performLayout(ctxt) {
    super.performLayout(ctxt);

    var lower = this.notes[0];
    var upper = this.notes[1];
    var staffPosition, prevStaffPosition;
    var x = 0;

    if (lower.isLiquescent || upper.isLiquescent) {
      lower.setGlyphShape(ctxt, GlyphCode.BeginningAscLiquescent);
      upper.setGlyphShape(ctxt, GlyphCode.TerminatingAscLiquescent);
    } else {
      lower.setGlyphShape(ctxt, GlyphCode.PodatusLower);
      upper.setGlyphShape(ctxt, GlyphCode.PodatusUpper);
    }

    if (lower.shape == NoteShape.Quilisma)
      lower.setGlyphShape(ctxt, GlyphCode.Quilisma);

    lower.performLayout(ctxt);
    upper.performLayout(ctxt);

    var line = new NeumeLineVisualizer(ctxt, lower, upper, false);

    line.bounds.x = lower.bounds.right() - line.bounds.width;
    upper.bounds.x = lower.bounds.right() - upper.bounds.width;

    // add the elements
    this.addVisualizer(lower);
    this.addVisualizer(line);
    this.addVisualizer(upper);

    x += Math.max(lower.bounds.width, upper.bounds.width) * 1.2; // fixme: correct spacing after podatus

    // now add all the punctum inclinati
    staffPosition = upper.staffPosition;
    prevStaffPosition = lower.staffPosition;
    for (var i = 2; i < this.notes.length; i++, prevStaffPosition = staffPosition) {
      var note = this.notes[i];

      if (note.isLiquescent)
        note.setGlyphShape(ctxt, GlyphCode.PunctumInclinatumLiquescent);
      else {
        // fixme: some climaci in the new chant books end with a punctum cuadratum
        // (see, for example, the antiphon "Sancta Maria" for October 7).
        note.setGlyphShape(ctxt, GlyphCode.PunctumInclinatum);
      }

      staffPosition = note.staffPosition;

      note.performLayout(ctxt);

      // fixme: how do these calculations look for puncti inclinati based on staff position offsets?
      var multiple;
      switch (Math.abs(prevStaffPosition - staffPosition)) {
        case 0:
          multiple = 0;
          break;
        case 1:
          multiple = 0.8;
          break;
        default:
          multiple = 1.2;
          break;
      }

      x += note.bounds.width * multiple;
      note.bounds.x += x;

      this.addVisualizer(note);
    }

    this.origin.x = lower.origin.x;
    this.origin.y = lower.origin.y;

    this.finishLayout(ctxt);
  }
}

/*
 * Podatus
 */
export class Podatus extends Neume {

  performLayout(ctxt) {
    super.performLayout(ctxt);

    var lower = this.notes[0];
    var upper = this.notes[1];

    if (lower.isLiquescent || upper.isLiquescent) {
      lower.setGlyphShape(ctxt, GlyphCode.BeginningAscLiquescent);
      upper.setGlyphShape(ctxt, GlyphCode.TerminatingAscLiquescent);
    } else {
      lower.setGlyphShape(ctxt, GlyphCode.PodatusLower);
      upper.setGlyphShape(ctxt, GlyphCode.PodatusUpper);
    }

    if (lower.shape == NoteShape.Quilisma)
      lower.setGlyphShape(ctxt, GlyphCode.Quilisma);

    upper.performLayout(ctxt);
    lower.performLayout(ctxt);

    var line = new NeumeLineVisualizer(ctxt, lower, upper, false);

    line.bounds.x = lower.bounds.right() - line.bounds.width;
    upper.bounds.x = lower.bounds.right() - upper.bounds.width;

    // add the elements
    this.addVisualizer(lower);
    this.addVisualizer(line);
    this.addVisualizer(upper);

    this.origin.x = lower.origin.x;
    this.origin.y = lower.origin.y;

    this.finishLayout(ctxt);
  }
}

/*
 * Porrectus
 */
export class Porrectus extends Neume {

  performLayout(ctxt) {
    super.performLayout(ctxt);

    var line;
    var first = this.notes[0];
    var second = this.notes[1];
    var third = this.notes[2];
    var x = 0.0;

    var firstStaffPosition = first.staffPosition;
    var secondStaffPosition = second.staffPosition;
    var thirdStaffPosition = third.staffPosition;

    switch (firstStaffPosition - secondStaffPosition) {
      case 1:
        first.setGlyphShape(ctxt, GlyphCode.Porrectus1);
        break;
      case 2:
        first.setGlyphShape(ctxt, GlyphCode.Porrectus2);
        break;
      case 3:
        first.setGlyphShape(ctxt, GlyphCode.Porrectus3);
        break;
      case 4:
        first.setGlyphShape(ctxt, GlyphCode.Porrectus4);
        break;
      default:
        // fixme: should we generate an error here?
        first.setGlyphShape(ctxt, GlyphCode.None);
        break;
    }

    first.performLayout(ctxt);

    // the second glyph does not draw anything, but it still has logical importance for the editing
    // environment...it can respond to changes which will then change the swash glyph of the first.
    second.setGlyphShape(ctxt, GlyphCode.None);
    second.performLayout(ctxt);

    // add the first line and the swash
    line = new NeumeLineVisualizer(ctxt, first, second, true);

    x = line.bounds.x = first.bounds.x;
    x = first.bounds.right();
    second.bounds.x = x - second.bounds.width;
    x = second.bounds.right();

    this.addVisualizer(line);
    this.addVisualizer(first);
    this.addVisualizer(second);


    // add the connecting line
    if (thirdStaffPosition - secondStaffPosition > 1) {
      line = new NeumeLineVisualizer(ctxt, second, third, false);
      line.bounds.x = x - line.bounds.width;
      this.addVisualizer(line);
    }

    if (third.isLiquescent)
      third.setGlyphShape(ctxt, GlyphCode.TerminatingAscLiquescent);
    else
      third.setGlyphShape(ctxt, GlyphCode.PodatusUpper);

    third.performLayout(ctxt);
    third.bounds.x += x;

    this.addVisualizer(third);

    this.origin.x = first.origin.x;
    this.origin.y = first.origin.y;

    this.finishLayout(ctxt);
  }
}

/*
 * PorrectusFlexus
 */
export class PorrectusFlexus extends Neume {

  performLayout(ctxt) {
    super.performLayout(ctxt);

    var line;
    var first = this.notes[0];
    var second = this.notes[1];
    var third = this.notes[2];
    var fourth = this.notes[3];
    var x = 0;

    var firstStaffPosition = first.staffPosition;
    var secondStaffPosition = second.staffPosition;
    var thirdStaffPosition = third.staffPosition;
    var fourthStaffPosition = fourth.staffPosition;

    switch (firstStaffPosition - secondStaffPosition) {
      case 1:
        first.setGlyphShape(ctxt, GlyphCode.Porrectus1);
        break;
      case 2:
        first.setGlyphShape(ctxt, GlyphCode.Porrectus2);
        break;
      case 3:
        first.setGlyphShape(ctxt, GlyphCode.Porrectus3);
        break;
      case 4:
        first.setGlyphShape(ctxt, GlyphCode.Porrectus4);
        break;
      default:
        // fixme: should we generate an error here?
        first.setGlyphShape(ctxt, GlyphCode.None);
        break;
    }

    first.performLayout(ctxt);

    // add the first line and the swash
    line = new NeumeLineVisualizer(ctxt, first, second, true);

    x = line.bounds.x = first.bounds.x;
    x = first.bounds.right();
    this.addVisualizer(line);
    this.addVisualizer(first);


    // the second glyph does not draw anything, but it still has logical importance for the editing
    // environment...it can respond to changes which will then change the swash glyph of the first.
    second.setGlyphShape(ctxt, GlyphCode.None);
    second.performLayout(ctxt);
    second.bounds.x = x;
    x = second.bounds.right();
    this.addVisualizer(second);


    // add a connecting line
    if (thirdStaffPosition - secondStaffPosition > 1) {
      line = new NeumeLineVisualizer(ctxt, second, third, false);
      x -= line.bounds.width;
      line.bounds.x += x;
      this.addVisualizer(line);
    }

    third.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);
    third.performLayout(ctxt);
    third.bounds.x = x;
    x = third.bounds.right();
    this.addVisualizer(third);

    // add a connecting line
    if (thirdStaffPosition - fourthStaffPosition > 1) {
      line = new NeumeLineVisualizer(ctxt, third, fourth, false);
      x -= line.bounds.width;
      line.bounds.x += x;
      this.addVisualizer(line);
    }

    fourth.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);
    fourth.performLayout(ctxt);
    fourth.bounds.x = x;
    this.addVisualizer(fourth);

    this.origin.x = first.origin.x;
    this.origin.y = first.origin.y;

    this.finishLayout(ctxt);
  }
}

/*
 * Punctum
 */
export class Punctum extends Neume {

  performLayout(ctxt) {
    super.performLayout(ctxt);

    // determine the glyph to use

    var note = this.notes[0];

    if (note.isLiquescent) {
      if (note.shape == NoteShape.Inclinatum)
        note.setGlyphShape(ctxt, GlyphCode.PunctumInclinatumLiquescent);
      else {
        // fixme: implement two types of punctum liquescents
        note.setGlyphShape(ctxt, GlyphCode.PunctumCuadratumAscLiquescent);
      }
    } else {
      switch (note.shape) {
        case NoteShape.Cavum:
          note.setGlyphShape(ctxt, GlyphCode.PunctumCavum);
          break;

        case NoteShape.Inclinatum:
          note.setGlyphShape(ctxt, GlyphCode.PunctumInclinatum);
          break;

        case NoteShape.Quilisma:
          note.setGlyphShape(ctxt, GlyphCode.Quilisma);
          break;

        default:
          note.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);
          break;
      }
    }

    note.performLayout(ctxt);
    this.addVisualizer(note);

    this.origin.x = note.origin.x;
    this.origin.y = note.origin.y;

    this.finishLayout(ctxt);
  }
}

/*
 * Scandicus
 */
export class Scandicus extends Neume {

  // fixme: for now, we render the scandicus as a punctum followed by a podatus. however,
  // it could also be a podatus followed by a virga...see LU, "Preface," xj.
  //
  // perhaps the best way to indicate the virga form is to check if the note shape of
  // the third note is a virga!
  performLayout(ctxt) {
    super.performLayout(ctxt);

    var first = this.notes[0];
    var second = this.notes[1];
    var third = this.notes[2];

    first.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);

    if (second.isLiquescent || third.isLiquescent) {
      second.setGlyphShape(ctxt, GlyphCode.BeginningAscLiquescent);
      third.setGlyphShape(ctxt, GlyphCode.TerminatingAscLiquescent);
    } else {
      second.setGlyphShape(ctxt, GlyphCode.PodatusLower);
      third.setGlyphShape(ctxt, GlyphCode.PodatusUpper);
    }

    // fixme: can a scandicus have a quilisma like this?
    if (second.shape == NoteShape.Quilisma)
      second.setGlyphShape(ctxt, GlyphCode.Quilisma);

    first.performLayout(ctxt);
    second.performLayout(ctxt);
    third.performLayout(ctxt);

    var line = new NeumeLineVisualizer(ctxt, second, third, false);

    second.bounds.x = first.bounds.right();
    line.bounds.x = second.bounds.right() - line.bounds.width;
    third.bounds.x = second.bounds.right() - third.bounds.width;

    // add the elements
    this.addVisualizer(first);
    this.addVisualizer(second);
    this.addVisualizer(line);
    this.addVisualizer(third);

    this.origin.x = first.origin.x;
    this.origin.y = first.origin.y;

    this.finishLayout(ctxt);
  }
}


/*
 * Scandicus Flexus
 */
export class ScandicusFlexus extends Neume {

  // see notes in Scandicus about determining the first three notes.
  performLayout(ctxt) {
    super.performLayout(ctxt);

    var first = this.notes[0];
    var second = this.notes[1];
    var third = this.notes[2];
    var fourth = this.notes[3];

    first.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);

    if (second.iisLiquescent || third.isLiquescent) {
      second.setGlyphShape(ctxt, GlyphCode.BeginningAscLiquescent);
      third.setGlyphShape(ctxt, GlyphCode.TerminatingAscLiquescent);
    } else {
      second.setGlyphShape(ctxt, GlyphCode.PodatusLower);
      third.setGlyphShape(ctxt, GlyphCode.PodatusUpper);
    }

    // fixme: can a scandicus have a quilisma like this?
    if (second.shape == NoteShape.Quilisma)
      second.setGlyphShape(ctxt, GlyphCode.Quilisma);

    first.performLayout(ctxt);
    second.performLayout(ctxt);
    third.performLayout(ctxt);
    fourth.performLayout(ctxt);

    var line = new NeumeLineVisualizer(ctxt, second, third, false);

    second.bounds.x = first.bounds.right();
    line.bounds.x = second.bounds.right() - line.bounds.width;
    third.bounds.x = second.bounds.right() - third.bounds.width;
    fourth.bounds.x = third.bounds.right();

    // do we need to draw a descending line?
    var staffPos3 = third.staffPosition;
    var staffPos4 = fourth.staffPosition;
    if (staffPos3 - staffPos4 > 1) {
      var extraLine = new NeumeLineVisualizer(ctxt, third, fourth, false);
      fourth.bounds.x -= extraLine.bounds.width;
      extraLine.bounds.x -= extraLine.bounds.width;
      this.addVisualizer(extraLine);
    }

    // add the elements
    this.addVisualizer(first);
    this.addVisualizer(second);
    this.addVisualizer(line);
    this.addVisualizer(third);
    this.addVisualizer(fourth);

    this.origin.x = first.origin.x;
    this.origin.y = first.origin.y;

    this.finishLayout(ctxt);
  }
}

/*
 * TextOnly
 */
export class TextOnly extends Neume {

  performLayout(ctxt) {
    super.performLayout(ctxt);

    // add an empty glyph as a placeholder
    this.addVisualizer(new GlyphVisualizer(ctxt, GlyphCode.None));

    this.origin.x = 0;
    this.origin.y = 0;

    this.finishLayout(ctxt);
  }
}

/*
 * Torculus
 */
export class Torculus extends Neume {

  performLayout(ctxt) {
    super.performLayout(ctxt);

    var note1 = this.notes[0];
    var note2 = this.notes[1];
    var note3 = this.notes[2];
    var line;

    // fixme: implement liquescents
    note1.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);
    note2.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);
    note3.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);

    var staffPos1 = note1.staffPosition;
    var staffPos2 = note2.staffPosition;
    var staffPos3 = note3.staffPosition;

    note1.performLayout(ctxt);
    note2.performLayout(ctxt);
    note3.performLayout(ctxt);

    var x = note1.bounds.right();

    // do we need to draw the first (ascending) line?
    if (staffPos2 - staffPos1 > 1) {
      line = new NeumeLineVisualizer(ctxt, note1, note2, false);
      x -= line.bounds.width;
      line.bounds.x = x;
      this.addVisualizer(line);
    }

    note2.bounds.x = x;
    x += note2.bounds.width;

    // do we need to draw a descending line?
    if (staffPos2 - staffPos3 > 1) {
      line = new NeumeLineVisualizer(ctxt, note2, note3, false);
      x -= line.bounds.width;
      line.bounds.x = x;
      this.addVisualizer(line);
    }

    note3.bounds.x = x;

    this.addVisualizer(note1);
    this.addVisualizer(note2);
    this.addVisualizer(note3);

    this.origin.x = note1.origin.x;
    this.origin.y = note1.origin.y;

    this.finishLayout(ctxt);
  }
}

/*
 * TorculusResupinus
 */
export class TorculusResupinus extends Neume {

  performLayout(ctxt) {
    super.performLayout(ctxt);

    var line;
    var first = this.notes[0];
    var second = this.notes[1];
    var third = this.notes[2];
    var fourth = this.notes[3];
    var x = 0;

    // first, figure out the porrectus swash
    var firstStaffPosition = first.staffPosition;
    var secondStaffPosition = second.staffPosition;
    var thirdStaffPosition = third.staffPosition;
    var fourthStaffPosition = fourth.staffPosition;

    switch (first.shape) {
      case NoteShape.Quilisma:
        first.setGlyphShape(ctxt, GlyphCode.Quilisma);
        break;

      default:
        first.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);
        break;
    }

    first.performLayout(ctxt);
    x = first.bounds.right();
    this.addVisualizer(first);

    // if we need a line between the first punctum and the porrectus swash, add it now
    if (secondStaffPosition - firstStaffPosition > 1) {
      line = new NeumeLineVisualizer(ctxt, first, second, false);
      x -= line.bounds.width;
      line.bounds.x = x;
      this.addVisualizer(line);
    }


    switch (Math.abs(secondStaffPosition - thirdStaffPosition)) {
      case 1:
        second.setGlyphShape(ctxt, GlyphCode.Porrectus1);
        break;
      case 2:
        second.setGlyphShape(ctxt, GlyphCode.Porrectus2);
        break;
      case 3:
        second.setGlyphShape(ctxt, GlyphCode.Porrectus3);
        break;
      case 4:
        second.setGlyphShape(ctxt, GlyphCode.Porrectus4);
        break;
      default:
        // fixme: this should be an error!
        second.setGlyphShape(ctxt, GlyphCode.Porrectus1);
        break;
    }

    second.performLayout(ctxt);
    second.bounds.x = x;
    x = second.bounds.right();
    this.addVisualizer(second);

    // the third glyph does not draw anything, but it still has logical importance for the editing
    // environment...it can respond to changes which will then change the swash glyph of the first.
    third.setGlyphShape(ctxt, GlyphCode.None);
    third.performLayout(ctxt);

    // do we need an ascending line after the porrectus swash?
    if (fourthStaffPosition - thirdStaffPosition > 1) {
      line = new NeumeLineVisualizer(ctxt, third, fourth, false);
      line.bounds.x = x - line.bounds.width;
      this.addVisualizer(line);
    }

    if (fourth.isLiquescent)
      fourth.setGlyphShape(ctxt, GlyphCode.TerminatingAscLiquescent);
    else
      fourth.setGlyphShape(ctxt, GlyphCode.PodatusUpper);

    fourth.performLayout(ctxt);
    fourth.bounds.x += x;
    this.addVisualizer(fourth);

    this.origin.x = first.origin.x;
    this.origin.y = first.origin.y;

    this.finishLayout(ctxt);
  }
}

/*
 * TorculusResupinusFlexus
 */
export class TorculusResupinusFlexus extends Neume {

  performLayout(ctxt) {
    super.performLayout(ctxt);

    var line;
    var first = this.notes[0];
    var second = this.notes[1];
    var third = this.notes[2];
    var fourth = this.notes[3];
    var fifth = this.notes[4];
    var x = 0;

    var firstStaffPosition = first.staffPosition;
    var secondStaffPosition = second.staffPosition;
    var thirdStaffPosition = third.staffPosition;
    var fourthStaffPosition = fourth.staffPosition;
    var fifthStaffPosition = fifth.staffPosition;

    switch (first.shape) {
      case NoteShape.Quilisma:
        first.setGlyphShape(ctxt, GlyphCode.Quilisma);
        break;

      default:
        first.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);
        break;
    }

    first.performLayout(ctxt);
    x = first.bounds.right();
    this.addVisualizer(first);

    // if we need a line between the first punctum and the porrectus swash, add it now
    if (secondStaffPosition - firstStaffPosition > 1) {
      line = new NeumeLineVisualizer(ctxt, first, second, false);
      x -= line.bounds.width;
      line.bounds.x = x;
      this.addVisualizer(line);
    }


    switch (secondStaffPosition - thirdStaffPosition) {
      case 1:
        second.setGlyphShape(ctxt, GlyphCode.Porrectus1);
        break;
      case 2:
        second.setGlyphShape(ctxt, GlyphCode.Porrectus2);
        break;
      case 3:
        second.setGlyphShape(ctxt, GlyphCode.Porrectus3);
        break;
      case 4:
        second.setGlyphShape(ctxt, GlyphCode.Porrectus4);
        break;
      default:
        // fixme: should we generate an error here?
        second.setGlyphShape(ctxt, GlyphCode.None);
        break;
    }

    second.performLayout(ctxt);
    second.bounds.x = x;
    x = second.bounds.right();
    this.addVisualizer(second);

    // the second glyph does not draw anything, but it still has logical importance for the editing
    // environment...it can respond to changes which will then change the swash glyph of the first.
    third.setGlyphShape(ctxt, GlyphCode.None);
    third.performLayout(ctxt);
    third.bounds.x = x;
    x = third.bounds.right();
    this.addVisualizer(third);

    // add a connecting line
    if (fourthStaffPosition - thirdStaffPosition > 1) {
      line = new NeumeLineVisualizer(ctxt, third, fourth, false);
      x -= line.bounds.width;
      line.bounds.x += x;
      this.addVisualizer(line);
    }

    fourth.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);
    fourth.performLayout(ctxt);
    fourth.bounds.x = x;
    x = fourth.bounds.right();
    this.addVisualizer(fourth);

    // add a connecting line
    if (fourthStaffPosition - fifthStaffPosition > 1) {
      line = new NeumeLineVisualizer(ctxt, fourth, fifth, false);
      x -= line.bounds.width * 1.5;
      line.bounds.x += x;
      this.addVisualizer(line);
    }

    fifth.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);
    fifth.performLayout(ctxt);
    fifth.bounds.x = x;
    this.addVisualizer(fifth);

    this.origin.x = first.origin.x;
    this.origin.y = first.origin.y;

    this.finishLayout(ctxt);
  }
}

/*
 * Tristropha
 *
 * For simplicity in implementation, Tristropha's have three notes in the object
 * structure. These technically must be the same pitch though (like the
 * Distropha and Bivirga).
 */
export class Tristropha extends Neume {

  performLayout(ctxt) {
    super.performLayout(ctxt);

    var note1 = this.notes[0];
    var note2 = this.notes[1];
    var note3 = this.notes[2];

    var staffPosition = note1.staffPosition;

    note1.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);
    note1.performLayout(ctxt);

    note2.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);
    note2.performLayout(ctxt);
    note2.bounds.x += note1.bounds.width + ctxt.intraNeumeSpacing;

    note3.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);
    note3.performLayout(ctxt);
    note3.bounds.x += note1.bounds.width + note2.bounds.width + ctxt.intraNeumeSpacing * 2;

    this.addVisualizer(note1);
    this.addVisualizer(note2);
    this.addVisualizer(note3);

    this.origin.x = note1.origin.x;
    this.origin.y = note1.origin.y;

    this.finishLayout(ctxt);
  }
}

/*
 * Virga
 */
export class Virga extends Neume {

  performLayout(ctxt) {
    super.performLayout(ctxt);

    var note = this.notes[0];

    var staffPosition = note.staffPosition;

    var glyphCode = Virga.getGlyphCode(staffPosition);
    note.setGlyphShape(ctxt, glyphCode);
    note.performLayout(ctxt);

    this.addVisualizer(note);

    this.origin.x = note.origin.x;
    this.origin.y = note.origin.y;

    this.finishLayout(ctxt);
  }

  // The virga's glyph depends on its staff position. This is a helper function
  // that can be used by other neumes that use the virga glyphs...
  static getGlyphCode(staffPosition) {
    if (Math.abs(staffPosition) % 2 == 1)
      return GlyphCode.VirgaLong;
    else
      return GlyphCode.VirgaShort;

    // fixme: add logic for virgas low on the staff that are probably short also...
  }
}