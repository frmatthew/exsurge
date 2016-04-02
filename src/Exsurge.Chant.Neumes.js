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
import { Note, LiquescentType, NoteShape, NoteShapeModifiers } from 'Exsurge.Chant'
import { Glyphs } from 'Exsurge.Glyphs'

/*
 * Neumes base class
 */
export class Neume extends ChantNotationElement {

  constructor() {
    super();

    this.isNeume = true;  // poor man's reflection

    this.notes = [];

    // neumes keep track of listeners so that we can notify them when we are changed
    this.changeListeners = [];
  }

  performLayout(ctxt) {
    super.performLayout(ctxt);
  }

  finishLayout(ctxt) {

    // allow subclasses an opportunity to position their own markings...
    this.positionMarkings();

    // layout the markings of the notes
    for (var i = 0; i < this.notes.length; i++) {
      var note = this.notes[i];

      for (var j = 0; j < note.markings.length; j++) {
        var marking = note.markings[j];

        marking.performLayout(ctxt);
        this.addVisualizer(marking.visualizer);
      }
    }

    super.finishLayout(ctxt);
  }

  // subclasses can override this in order to correctly place markings in a neume specific way
  positionMarkings() {

  }

  layoutNotesAsPodatus(ctxt, lowerNote, upperNote, startingX = 0) {

    var overhangUpperNote = true;

    if (lowerNote.liquescent === LiquescentType.InitioDebilis) {

      // liquescent upper note or not?
      if (upperNote.liquescent === LiquescentType.None)
        upperNote.setGlyph(ctxt, GlyphCode.PunctumQuadratum);
      else
        upperNote.setGlyph(ctxt, GlyphCode.PunctumQuadratumDesLiquescent);

      lowerNote.setGlyph(ctxt, GlyphCode.TerminatingDesLiquescent);
      overhangUpperNote = false;
    } else if (upperNote.liquescent & LiquescentType.Small) {
      lowerNote.setGlyph(ctxt, GlyphCode.BeginningAscLiquescent);
      upperNote.setGlyph(ctxt, GlyphCode.TerminatingAscLiquescent);
    } else if (upperNote.liquescent & LiquescentType.Ascending) {
      lowerNote.setGlyph(ctxt, GlyphCode.PunctumQuadratum);
      upperNote.setGlyph(ctxt, GlyphCode.PunctumQuadratumAscLiquescent);
      overhangUpperNote = false;
    } else if (upperNote.liquescent & LiquescentType.Descending) {
      lowerNote.setGlyph(ctxt, GlyphCode.PunctumQuadratum);
      upperNote.setGlyph(ctxt, GlyphCode.PunctumQuadratumDesLiquescent);
      overhangUpperNote = false;
    } else {
      // standard shape
      lowerNote.setGlyph(ctxt, GlyphCode.PodatusLower);
      upperNote.setGlyph(ctxt, GlyphCode.PodatusUpper);
    }

    // allow a quilisma pes
    if (lowerNote.shape === NoteShape.Quilisma)
      lowerNote.setGlyph(ctxt, GlyphCode.Quilisma);

    lowerNote.bounds.x = startingX;

    var line = new NeumeLineVisualizer(ctxt, lowerNote, upperNote, false);
    line.bounds.x = lowerNote.bounds.right() - line.bounds.width;
    this.addVisualizer(line);

    // if it's overhanging, then right align the glyph
    if (overhangUpperNote === true)
      upperNote.bounds.x += line.bounds.right() - upperNote.bounds.width;
    else
      upperNote.bounds.x += line.bounds.x;

    // add the elements
    this.addVisualizer(lowerNote);
    this.addVisualizer(upperNote);
  }

  layoutNotesAsClivis(ctxt, upper, lower, startingX = 0) {

    var line;

    if (upper.shape === NoteShape.Oriscus) {
      upper.setGlyph(ctxt, GlyphCode.OriscusDes);
      upper.bounds.x = startingX;
    } else {
      upper.setGlyph(ctxt, GlyphCode.PunctumQuadratum);
      upper.bounds.x = startingX;

      // add an ascending line
      line = new NeumeLineVisualizer(ctxt, lower, upper, true);
      line.bounds.x = upper.bounds.x;
      this.addVisualizer(line);
    }

    if (lower.liquescent & LiquescentType.Small) {
      lower.setGlyph(ctxt, GlyphCode.TerminatingDesLiquescent);
      lower.bounds.x -= lower.bounds.width; // right aligned
    } else if (lower.liquescent === LiquescentType.Ascending)
      lower.setGlyph(ctxt, GlyphCode.PunctumQuadratumAscLiquescent);
    else if (lower.liquescent === LiquescentType.Descending)
      lower.setGlyph(ctxt, GlyphCode.PunctumQuadratumDesLiquescent);
    else
      lower.setGlyph(ctxt, GlyphCode.PunctumQuadratum);

    var x = upper.bounds.right();

    // do we need to draw a descending line?
    if (upper.staffPosition - lower.staffPosition > 1) {
      line = new NeumeLineVisualizer(ctxt, upper, lower, false);
      line.bounds.x = x - line.bounds.width;
      this.addVisualizer(line);

      if (!(lower.liquescent & LiquescentType.Small))
        x -= line.bounds.width;
    }

    lower.bounds.x += x;

    this.addVisualizer(upper);
    this.addVisualizer(lower);
  }

  // lays out a sequence of notes that are inclinati (e.g., climacus, pes subpunctis)
  layoutNotesAsInclinati(ctxt, notes, startingX) {

    var staffPosition = notes[0].staffPosition, prevStaffPosition = notes[0].staffPosition;

    // it is important to advance by the width of the inclinatum glyph itself
    // rather than by individual note widths, so that any liquescents are spaced
    // the same as non-liquscents
    var advanceWidth = Glyphs.PunctumInclinatum.bounds.width * ctxt.glyphScaling;

    // now add all the punctum inclinati
    for (var i = 0; i < notes.length; i++, prevStaffPosition = staffPosition) {
      var note = notes[i];

      if (note.liquescent & LiquescentType.Small)
        note.setGlyph(ctxt, GlyphCode.PunctumInclinatumLiquescent);
      else if (note.liquescent & LiquescentType.Large)
        // fixme: is the large inclinatum liquescent the same as the apostropha?
        note.setGlyph(ctxt, GlyphCode.Apostropha);
      else 
        // fixme: some climaci in the new chant books end with a punctum quadratum
        // (see, for example, the antiphon "Sancta Maria" for October 7).
        note.setGlyph(ctxt, GlyphCode.PunctumInclinatum);

      staffPosition = note.staffPosition;

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

      startingX += advanceWidth * multiple;
      note.bounds.x += startingX;

      this.addVisualizer(note);
    }
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

    note.setGlyph(ctxt, Apostropha.determineNoteGlyphCode(note));
    this.addVisualizer(note);

    this.origin.x = note.origin.x;
    this.origin.y = note.origin.y;

    this.finishLayout(ctxt);
  }

  static determineNoteGlyphCode(note) {

    if (note.shape === NoteShape.Stropha)
      return GlyphCode.Stropha;

    if (note.liquescent !== LiquescentType.None)
      note.setGlyph(ctxt, GlyphCode.StrophaLiquescent);

    if (note.shapeModifiers & NoteShapeModifiers.Cavum)
      return GlyphCode.PunctumCavum;

    return GlyphCode.PunctumQuadratum;
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

    note1.setGlyph(ctxt, Virga.getGlyphCode(note1.staffPosition));
    note2.setGlyph(ctxt, Virga.getGlyphCode(note1.staffPosition));

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

    note1.setGlyph(ctxt, Virga.getGlyphCode(note1.staffPosition));
    note2.setGlyph(ctxt, Virga.getGlyphCode(note1.staffPosition));
    note2.bounds.x += note1.bounds.width + ctxt.intraNeumeSpacing;

    note3.setGlyph(ctxt, Virga.getGlyphCode(note1.staffPosition));
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
    var virga = this.notes[0];
    virga.setGlyph(ctxt, Virga.getGlyphCode(virga.staffPosition));

    this.addVisualizer(virga);

    this.layoutNotesAsInclinati(ctxt, this.notes.slice(1), virga.bounds.right() + ctxt.intraNeumeSpacing / 2);

    this.origin.x = virga.origin.x;
    this.origin.y = virga.origin.y;

    this.finishLayout(ctxt);
  }
}

/*
 * Clivis
 */
export class Clivis extends Neume {

  positionMarkings() {

    var hasLowerMora = false;
    var marking, i;

    // 1. morae need to be lined up if both notes have morae
    // 2. like the podatus, mora on lower note needs to below
    //    under certain circumstances
    for (i = 0; i < this.notes[1].markings.length; i++) {
      marking = this.notes[1].markings[i];

      if (marking.constructor.name === 'Mora') {

        hasLowerMora = true;

        if (this.notes[0].staffPosition - this.notes[1].staffPosition === 1 &&
            Math.abs(this.notes[1].staffPosition % 2) === 1)
          marking.positionHint = Exsurge.MarkingPositionHint.Below;
      }
    }

    for (i = 0; i < this.notes[0].markings.length; i++) {
      marking = this.notes[0].markings[i];

      if (marking.constructor.name === 'Mora' && hasLowerMora) {
        marking.positionHint = Exsurge.MarkingPositionHint.Above;
        marking.horizontalOffset += this.notes[1].bounds.right() - this.notes[0].bounds.right();
      }
    }    
  }

  performLayout(ctxt) {
    super.performLayout(ctxt);

    var upper = this.notes[0];
    var lower = this.notes[1];

    this.layoutNotesAsClivis(ctxt, upper, lower);

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

    note1.setGlyph(ctxt, Apostropha.determineNoteGlyphCode(note1));
    note2.setGlyph(ctxt, Apostropha.determineNoteGlyphCode(note2));
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

    if (note.liquescent !== LiquescentType.None) {
      note.setGlyph(ctxt, GlyphCode.OriscusLiquescent);
    } else {
      if (note.shapeModifiers & NoteShapeModifiers.Ascending)
        note.setGlyph(ctxt, GlyphCode.OriscusAsc);
      else if (note.shapeModifiers & NoteShapeModifiers.Descending)
        note.setGlyph(ctxt, GlyphCode.OriscusDes);
      else {
        // by default we take the descending form, unless we can figure out by a lookahead here
        note.setGlyph(ctxt, GlyphCode.OriscusDes);

        // try to find a neume following this one
        var neume = ctxt.findNextNeume();

        if (neume) {
          var nextNoteStaffPosition = ctxt.activeClef.pitchToStaffPosition(neume.notes[0].pitch);

          if (nextNoteStaffPosition > note.staffPosition)
            note.setGlyph(ctxt, GlyphCode.OriscusAsc);
        }
      }
    }

    this.addVisualizer(note);

    this.origin.x = note.origin.x;
    this.origin.y = note.origin.y;

    this.finishLayout(ctxt);
  }

  resetDependencies() {
    // a single oriscus tries to automatically use the right direction
    // based on the following neumes. if we don't have a manually designated
    // direction, then we reset our layout so that we can try to guess it
    // at next layout phase.
    if (this.notes[0].shapeModifiers & NoteShapeModifiers.Ascending ||
      this.notes[0].shapeModifiers & NoteShapeModifiers.Descending)
      return;

    this.needsLayout = true;
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

    if (lower.shape === NoteShape.Oriscus)
      lower.setGlyph(ctxt, GlyphCode.OriscusAsc);
    else
      lower.setGlyph(ctxt, GlyphCode.PunctumQuadratum);

    if (upper.liquescent === LiquescentType.LargeDescending)
      upper.setGlyph(ctxt, GlyphCode.PunctumQuadratumDesLiquescent);
    else if (upperStaffPos - lowerStaffPos === 1) // use a virga glyph in this case
      upper.setGlyph(ctxt, Virga.getGlyphCode(upper.staffPosition));
    else
      upper.setGlyph(ctxt, GlyphCode.PunctumQuadratum);

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

    // layout is a podatus followed by inclinati
    this.layoutNotesAsPodatus(ctxt, this.notes[0], this.notes[1]);
    this.layoutNotesAsInclinati(ctxt, this.notes.slice(2), this.notes[0].bounds.right() + ctxt.intraNeumeSpacing / 2);

    this.origin.x = this.notes[0].origin.x;
    this.origin.y = this.notes[0].origin.y;

    this.finishLayout(ctxt);
  }
}

/*
 * Podatus
 *
 * This podatus class handles a few neume types actually, depending on the note
 * data: Podatus (including various liquescent types on the upper note),
 * Podatus initio debilis, and Quilisma-Pes
 */
export class Podatus extends Neume {

  positionMarkings() {
    var marking, i;

    // 1. episema on lower note should always be below, upper note above
    // 2. morae: 
    //   a. if podatus difference is 1 and lower note is on a line,
    //      the lower mora should be below
    for (i = 0; i < this.notes[0].markings.length; i++) {
      marking = this.notes[0].markings[i];

      if (marking.constructor.name === 'HorizontalEpisema')
        marking.positionHint = Exsurge.MarkingPositionHint.Below;
      else if (marking.constructor.name === 'Mora' &&
          (this.notes[1].staffPosition - this.notes[0].staffPosition) === 1 &&
          Math.abs(this.notes[0].staffPosition % 2) === 1)
        marking.positionHint = Exsurge.MarkingPositionHint.Below;
    }

    for (i = 0; i < this.notes[1].markings.length; i++) {
      marking = this.notes[1].markings[i];

      if (marking.constructor.name === 'HorizontalEpisema')
        marking.positionHint = Exsurge.MarkingPositionHint.Above;
    }    
  }

  performLayout(ctxt) {
    super.performLayout(ctxt);

    this.layoutNotesAsPodatus(ctxt, this.notes[0], this.notes[1]);

    this.origin.x = this.notes[0].origin.x;
    this.origin.y = this.notes[0].origin.y;

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
        first.setGlyph(ctxt, GlyphCode.Porrectus1);
        break;
      case 2:
        first.setGlyph(ctxt, GlyphCode.Porrectus2);
        break;
      case 3:
        first.setGlyph(ctxt, GlyphCode.Porrectus3);
        break;
      case 4:
        first.setGlyph(ctxt, GlyphCode.Porrectus4);
        break;
      default:
        // fixme: should we generate an error here?
        first.setGlyph(ctxt, GlyphCode.None);
        break;
    }


    // the second glyph does not draw anything, but it still has logical importance for the editing
    // environment...it can respond to changes which will then change the swash glyph of the first.
    second.setGlyph(ctxt, GlyphCode.None);

    // add the first line and the swash
    line = new NeumeLineVisualizer(ctxt, first, second, true);

    line.bounds.x = first.bounds.x;
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

      if (third.liquescent & LiquescentType.Descending)
        x -= line.bounds.width;
    }

    if (third.liquescent & LiquescentType.Small) {
      third.setGlyph(ctxt, GlyphCode.TerminatingAscLiquescent);
      third.bounds.x -= third.bounds.width; // right aligned
    } else if (third.liquescent & LiquescentType.Descending)
      third.setGlyph(ctxt, GlyphCode.PunctumQuadratumDesLiquescent);
    else {
      third.setGlyph(ctxt, GlyphCode.PodatusUpper);
      third.bounds.x -= third.bounds.width; // right aligned
    }

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
        first.setGlyph(ctxt, GlyphCode.Porrectus1);
        break;
      case 2:
        first.setGlyph(ctxt, GlyphCode.Porrectus2);
        break;
      case 3:
        first.setGlyph(ctxt, GlyphCode.Porrectus3);
        break;
      case 4:
        first.setGlyph(ctxt, GlyphCode.Porrectus4);
        break;
      default:
        // fixme: should we generate an error here?
        first.setGlyph(ctxt, GlyphCode.None);
        break;
    }

    // add the first line and the swash
    line = new NeumeLineVisualizer(ctxt, first, second, true);

    x = line.bounds.x = first.bounds.x;
    x = first.bounds.right();
    this.addVisualizer(line);
    this.addVisualizer(first);


    // the second glyph does not draw anything, but it still has logical importance for the editing
    // environment...it can respond to changes which will then change the swash glyph of the first.
    second.setGlyph(ctxt, GlyphCode.None);
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

    third.setGlyph(ctxt, GlyphCode.PunctumQuadratum);
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

    fourth.setGlyph(ctxt, GlyphCode.PunctumQuadratum);
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

    if (note.liquescent !== LiquescentType.None) {
      if (note.shape === NoteShape.Inclinatum)
        note.setGlyph(ctxt, GlyphCode.PunctumInclinatumLiquescent);
      else if (note.shape === NoteShape.Oriscus)
        note.setGlyph(ctxt, GlyphCode.OriscusLiquescent);
      else if (note.liquescent & LiquescentType.Ascending)
        note.setGlyph(ctxt, GlyphCode.PunctumQuadratumAscLiquescent);
      else if (note.liquescent & LiquescentType.Descending)
        note.setGlyph(ctxt, GlyphCode.PunctumQuadratumDesLiquescent);

    } else {

      if (note.shapeModifiers & NoteShapeModifiers.Cavum)
        note.setGlyph(ctxt, GlyphCode.PunctumCavum);
      else if (note.shape === NoteShape.Inclinatum)
        note.setGlyph(ctxt, GlyphCode.PunctumInclinatum);
      else if (note.shape === NoteShape.Quilisma)
        note.setGlyph(ctxt, GlyphCode.Quilisma);
      else
        note.setGlyph(ctxt, GlyphCode.PunctumQuadratum);
    }

    this.addVisualizer(note);

    this.origin.x = note.origin.x;
    this.origin.y = note.origin.y;

    this.finishLayout(ctxt);
  }
}

/*
 * Salicus
 */
export class Salicus extends Neume {

  performLayout(ctxt) {
    super.performLayout(ctxt);

    var first = this.notes[0];
    var second = this.notes[1];
    var third = this.notes[2];

    var x = 0;

    // first note of a salicus is always a punctum quadratum
    first.setGlyph(ctxt, GlyphCode.PunctumQuadratum);
    x += first.bounds.width;

    // if the next note doesn't require a stem connector, then add a tad bit
    // of spacing here
    if (!(second.shapeModifiers & NoteShapeModifiers.Stemmed))
      x += ctxt.intraNeumeSpacing;

    // second note is always an oriscus, which may or may not be stemmed
    // to the first
    second.setGlyph(ctxt, GlyphCode.OriscusAsc);

    // do we need a line between first and second notes?
    if (second.shapeModifiers & NoteShapeModifiers.Stemmed &&
      second.staffPosition - first.staffPosition > 1) { // need stem when notes are greater than 1 space apart

      var line = new NeumeLineVisualizer(ctxt, first, second, false);
      x -= line.bounds.width;
      line.bounds.x = x;
      this.addVisualizer(line);
    }

    second.bounds.x = x;
    x += second.bounds.width;

    // third note can be a punctum quadratum or various liquescent forms
    if (third.liquescent & LiquescentType.Small) {
      third.setGlyph(ctxt, GlyphCode.TerminatingAscLiquescent);
      third.bounds.x -= third.bounds.width; // right aligned
    } else if (third.liquescent === LiquescentType.Ascending)
      third.setGlyph(ctxt, GlyphCode.PunctumQuadratumAscLiquescent);
    else if (third.liquescent === LiquescentType.Descending)
      third.setGlyph(ctxt, GlyphCode.PunctumQuadratumDesLiquescent);
    else {
      // virga terminator
      third.setGlyph(ctxt, Virga.getGlyphCode(third.staffPosition));
    }

    // do we need a line between second and third notes?
    if (third.staffPosition - second.staffPosition > 1) {
      
      line = new NeumeLineVisualizer(ctxt, second, third, false);
      line.bounds.x = second.bounds.right() - line.bounds.width;
      this.addVisualizer(line);

      if (!(third.liquescent & LiquescentType.Small))
        x -= line.bounds.width;
    }

    third.bounds.x += x;

    // add the note elements
    this.addVisualizer(first);
    this.addVisualizer(second);
    this.addVisualizer(third);

    this.origin.x = first.origin.x;
    this.origin.y = first.origin.y;

    this.finishLayout(ctxt);
  }
}

/*
 * Salicus Flexus
 */
export class SalicusFlexus extends Neume {

  performLayout(ctxt) {
    super.performLayout(ctxt);

    var first = this.notes[0];
    var second = this.notes[1];
    var third = this.notes[2];
    var fourth = this.notes[3];

    var x = 0;

    // first note of a salicus is always a punctum quadratum
    first.setGlyph(ctxt, GlyphCode.PunctumQuadratum);
    x += first.bounds.width;

    // if the next note doesn't require a stem connector, then add a tad bit
    // of spacing here
    if (!(second.shapeModifiers & NoteShapeModifiers.Stemmed))
      x += ctxt.intraNeumeSpacing;

    // second note is always an oriscus, which may or may not be stemmed
    // to the first
    second.setGlyph(ctxt, GlyphCode.OriscusAsc);

    // do we need a line between first and second notes?
    if (second.shapeModifiers & NoteShapeModifiers.Stemmed &&
      second.staffPosition - first.staffPosition > 1) { // need stem when notes are greater than 1 space apart

      var line = new NeumeLineVisualizer(ctxt, first, second, false);
      x -= line.bounds.width;
      line.bounds.x = x;
      this.addVisualizer(line);
    }

    second.bounds.x = x;
    x += second.bounds.width;

    // third note can be a punctum quadratum or various liquescent forms,
    // ...based on note four though!
    if (fourth.liquescent & LiquescentType.Small)
      third.setGlyph(ctxt, GlyphCode.PunctumQuadratumDesLiquescent);
    else
      third.setGlyph(ctxt, GlyphCode.PunctumQuadratum);

    // do we need a line between second and third notes?
    if (third.staffPosition - second.staffPosition > 1) {
      
      line = new NeumeLineVisualizer(ctxt, second, third, false);
      line.bounds.x = second.bounds.right() - line.bounds.width;
      this.addVisualizer(line);

      x -= line.bounds.width;
    }

    third.bounds.x += x;
    x += third.bounds.width;

    // finally, do the fourth note
    if (fourth.liquescent & LiquescentType.Small) {
      fourth.setGlyph(ctxt, GlyphCode.TerminatingDesLiquescent);
      fourth.bounds.x -= fourth.bounds.width; // right-aligned
    } else if (fourth.liquescent & LiquescentType.Ascending)
      fourth.setGlyph(ctxt, GlyphCode.PunctumQuadratumAscLiquescent);
    else if (fourth.liquescent & LiquescentType.Descending)
      fourth.setGlyph(ctxt, GlyphCode.PunctumQuadratumDesLiquescent);
    else 
      fourth.setGlyph(ctxt, GlyphCode.PunctumQuadratum);

    // do we need a line between second and third notes?
    if (third.staffPosition - fourth.staffPosition > 1) {
      
      line = new NeumeLineVisualizer(ctxt, third, fourth, false);
      line.bounds.x = third.bounds.right() - line.bounds.width;
      this.addVisualizer(line);

      if (!(fourth.liquescent & LiquescentType.Small))
        x -= line.bounds.width;
    }

    fourth.bounds.x += x;

    // add the note elements
    this.addVisualizer(first);
    this.addVisualizer(second);
    this.addVisualizer(third);
    this.addVisualizer(fourth);

    this.origin.x = first.origin.x;
    this.origin.y = first.origin.y;

    this.finishLayout(ctxt);
  }
}

/*
 * Scandicus
 */
export class Scandicus extends Neume {

  // if the third note shape is a virga, then the scadicus is rendered
  // as a podatus followed by a virga. Otherwise, it's rendered as a
  // punctum followed by a podatus...
  performLayout(ctxt) {
    super.performLayout(ctxt);

    var first = this.notes[0];
    var second = this.notes[1];
    var third = this.notes[2];

    if (third.shape === NoteShape.Virga) {
      this.layoutNotesAsPodatus(ctxt, first, second);
      third.setGlyph(ctxt, Virga.getGlyphCode(third.staffPosition));
      third.bounds.x = second.bounds.right();
      this.addVisualizer(third);
    } else {
      first.setGlyph(ctxt, GlyphCode.PunctumQuadratum);
      this.addVisualizer(first);

      this.layoutNotesAsPodatus(ctxt, second, third, first.bounds.width);
    }

    this.origin.x = first.origin.x;
    this.origin.y = first.origin.y;

    this.finishLayout(ctxt);
  }
}


/*
 * Scandicus Flexus
 */
export class ScandicusFlexus extends Neume {

  // fixme: for now we just draw the scandicus flexus as a podatus with a clivis,
  // but we need to review all the forms this neume can take and implement them.
  performLayout(ctxt) {
    super.performLayout(ctxt);

    var first = this.notes[0];
    var second = this.notes[1];
    var third = this.notes[2];
    var fourth = this.notes[3];

    this.layoutNotesAsPodatus(ctxt, first, second);
    this.layoutNotesAsClivis(ctxt, third, fourth, second.bounds.right() + ctxt.intraNeumeSpacing);

    this.origin.x = first.origin.x;
    this.origin.y = first.origin.y;

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
    var drawFirstLine = note2.staffPosition - note1.staffPosition > 1;
    var line;

    if (note1.liquescent === LiquescentType.InitioDebilis) {
      note1.setGlyph(ctxt, GlyphCode.TerminatingDesLiquescent);
      drawFirstLine = true; // always draw first line with an initio debilis
    } else
      note1.setGlyph(ctxt, GlyphCode.PunctumQuadratum);

    note2.setGlyph(ctxt, GlyphCode.PunctumQuadratum);

    if (note3.liquescent & LiquescentType.Small) {
      note3.setGlyph(ctxt, GlyphCode.TerminatingDesLiquescent);
      note3.bounds.x -= note3.bounds.width; // right aligned
    } else if (note3.liquescent & LiquescentType.Ascending)
      note3.setGlyph(ctxt, GlyphCode.PunctumQuadratumAscLiquescent);
    else if (note3.liquescent & LiquescentType.Descending)
      note3.setGlyph(ctxt, GlyphCode.PunctumQuadratumDesLiquescent);
    else 
      note3.setGlyph(ctxt, GlyphCode.PunctumQuadratum);

    var x = note1.bounds.right();

    // do we need to draw the first (ascending) line?
    if (drawFirstLine) {
      line = new NeumeLineVisualizer(ctxt, note1, note2, false);
      x -= line.bounds.width;
      line.bounds.x = x;
      this.addVisualizer(line);
    }

    note2.bounds.x += x;
    x += note2.bounds.width;

    // do we need to draw a descending line?
    if (note2.staffPosition - note3.staffPosition > 1) {
      line = new NeumeLineVisualizer(ctxt, note2, note3, false);
      line.bounds.x = x - line.bounds.width;
      this.addVisualizer(line);

      if (!(note3.liquescent & LiquescentType.Small))
        x -= line.bounds.width;
    }

    note3.bounds.x += x;

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
        first.setGlyph(ctxt, GlyphCode.Quilisma);
        break;

      default:
        first.setGlyph(ctxt, GlyphCode.PunctumQuadratum);
        break;
    }

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
        second.setGlyph(ctxt, GlyphCode.Porrectus1);
        break;
      case 2:
        second.setGlyph(ctxt, GlyphCode.Porrectus2);
        break;
      case 3:
        second.setGlyph(ctxt, GlyphCode.Porrectus3);
        break;
      case 4:
        second.setGlyph(ctxt, GlyphCode.Porrectus4);
        break;
      default:
        // fixme: this should be an error!
        second.setGlyph(ctxt, GlyphCode.Porrectus1);
        break;
    }

    second.bounds.x = x;
    x = second.bounds.right();
    this.addVisualizer(second);

    // the third glyph does not draw anything, but it still has logical importance for the editing
    // environment...it can respond to changes which will then change the swash glyph of the first.
    third.setGlyph(ctxt, GlyphCode.None);

    // do we need an ascending line after the porrectus swash?
    if (fourthStaffPosition - thirdStaffPosition > 1) {
      line = new NeumeLineVisualizer(ctxt, third, fourth, false);
      line.bounds.x = x - line.bounds.width;
      this.addVisualizer(line);
    }

    if (fourth.isLiquescent)
      fourth.setGlyph(ctxt, GlyphCode.TerminatingAscLiquescent);
    else
      fourth.setGlyph(ctxt, GlyphCode.PodatusUpper);

    fourth.bounds.x += x - fourth.bounds.width; // fourth note is always right aligned
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
        first.setGlyph(ctxt, GlyphCode.Quilisma);
        break;

      default:
        first.setGlyph(ctxt, GlyphCode.PunctumQuadratum);
        break;
    }

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
        second.setGlyph(ctxt, GlyphCode.Porrectus1);
        break;
      case 2:
        second.setGlyph(ctxt, GlyphCode.Porrectus2);
        break;
      case 3:
        second.setGlyph(ctxt, GlyphCode.Porrectus3);
        break;
      case 4:
        second.setGlyph(ctxt, GlyphCode.Porrectus4);
        break;
      default:
        // fixme: should we generate an error here?
        second.setGlyph(ctxt, GlyphCode.None);
        break;
    }

    second.bounds.x = x;
    x = second.bounds.right();
    this.addVisualizer(second);

    // the second glyph does not draw anything, but it still has logical importance for the editing
    // environment...it can respond to changes which will then change the swash glyph of the first.
    third.setGlyph(ctxt, GlyphCode.None);
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

    fourth.setGlyph(ctxt, GlyphCode.PunctumQuadratum);
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

    fifth.setGlyph(ctxt, GlyphCode.PunctumQuadratum);
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

    note1.setGlyph(ctxt, Apostropha.determineNoteGlyphCode(note1));

    note2.setGlyph(ctxt, Apostropha.determineNoteGlyphCode(note2));
    note2.bounds.x += note1.bounds.width + ctxt.intraNeumeSpacing;

    note3.setGlyph(ctxt, Apostropha.determineNoteGlyphCode(note3));
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
    note.setGlyph(ctxt, glyphCode);

    this.addVisualizer(note);

    this.origin.x = note.origin.x;
    this.origin.y = note.origin.y;

    this.finishLayout(ctxt);
  }

  // The virga's glyph depends on its staff position. This is a helper function
  // that can be used by other neumes that use the virga glyphs...
  static getGlyphCode(staffPosition) {
    if (Math.abs(staffPosition) % 2 === 1)
      return GlyphCode.VirgaLong;
    else
      return GlyphCode.VirgaShort;

    // fixme: add logic for virgas low on the staff that are probably short also...
  }
}