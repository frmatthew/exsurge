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
import { Note, LiquescentType, NoteShape } from 'Exsurge.Chant'

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

    // allow subclasses an opportunity position their own markings...
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
}

/*
 * Apostropha
 */
export class Apostropha extends Neume {

  performLayout(ctxt) {
    super.performLayout(ctxt);

    // determine the glyph to use
    var note = this.notes[0];

    if (note.liquescent !== LiquescentType.None)
      note.setGlyphShape(ctxt, GlyphCode.StrophaLiquescent);
    else
      note.setGlyphShape(ctxt, GlyphCode.Stropha);

    note.performLayout(ctxt);
    this.addVisualizer(note);

    this.origin.x = note.origin.x;
    this.origin.y = note.origin.y;

    this.finishLayout(ctxt);
  }

  static determineNoteGlyphCode(note) {

    switch (note.shape) {
      case NoteShape.Stropha:
        return GlyphCode.Stropha;
      case NoteShape.Cavum:
        return GlyphCode.PunctumCavum;
      default:
        return GlyphCode.PunctumCuadratum;
    }
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

      if (note.liquescent === LiquescentType.LargeAscending ||
        note.liquescent === LiquescentType.LargeDescending)
        // fixme: is the large inclinatum liquescent the same as the apostropha?
        note.setGlyphShape(ctxt, GlyphCode.Apostropha);
      else if (note.liquescent === LiquescentType.SmallAscending ||
        note.liquescent === LiquescentType.SmallDescending)
        note.setGlyphShape(ctxt, GlyphCode.PunctumInclinatumLiquescent);
      else
        // fixme: some climaci in the new chant books end with a punctum cuadratum
        // (see, for example, the antiphon "Sancta Maria" for October 7).
        note.setGlyphShape(ctxt, GlyphCode.PunctumInclinatum);

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

    var line;
    var smallLiquescent = false;

    var upper = this.notes[0];
    var lower = this.notes[1];

    if (lower.liquescent === LiquescentType.LargeAscending) {
      upper.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);
      lower.setGlyphShape(ctxt, GlyphCode.PunctumCuadratumAscLiquescent);
    } else if (lower.liquescent === LiquescentType.LargeDescending) {
      upper.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);
      lower.setGlyphShape(ctxt, GlyphCode.PunctumCuadratumDesLiquescent);
    } else if (lower.liquescent === LiquescentType.SmallDescending ||
        lower.liquescent === LiquescentType.SmallAscending) {
      upper.setGlyphShape(ctxt, GlyphCode.BeginningDesLiquescent);
      lower.setGlyphShape(ctxt, GlyphCode.TerminatingDesLiquescent);
      smallLiquescent = true;
    } else {
      upper.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);
      lower.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);
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

    if (smallLiquescent) {
      if (line !== null)
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

    note1.setGlyphShape(ctxt, Apostropha.determineNoteGlyphCode(note1));
    note1.performLayout(ctxt);

    note2.setGlyphShape(ctxt, Apostropha.determineNoteGlyphCode(note2));
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

    if (note.shape === NoteShape.OriscusAscending)
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

    if (lower.shape === NoteShape.OriscusAscending)
      lower.setGlyphShape(ctxt, GlyphCode.OriscusAsc);
    else
      lower.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);

    if (upper.liquescent === LiquescentType.LargeDescending)
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

    if (lower.shape === NoteShape.Quilisma)
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

      if (note.liquescent !== LiquescentType.None)
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

    var lower = this.notes[0];
    var upper = this.notes[1];
    var overhangUpperNote = true;

    if (lower.liquescent === LiquescentType.InitioDebilis) {

      // liquescent upper note or not?
      if (upper.liquescent === LiquescentType.None)
        upper.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);
      else
        upper.setGlyphShape(ctxt, GlyphCode.PunctumCuadratumDesLiquescent);

      lower.setGlyphShape(ctxt, GlyphCode.TerminatingDesLiquescent);
      overhangUpperNote = false;
    } else if (upper.liquescent === LiquescentType.LargeAscending) {
      lower.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);
      upper.setGlyphShape(ctxt, GlyphCode.PunctumCuadratumAscLiquescent);
      overhangUpperNote = false;
    } else if (upper.liquescent === LiquescentType.LargeDescending) {
      lower.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);
      upper.setGlyphShape(ctxt, GlyphCode.PunctumCuadratumDesLiquescent);
      overhangUpperNote = false;
    } else if (upper.liquescent === LiquescentType.SmallAscending) {
      lower.setGlyphShape(ctxt, GlyphCode.BeginningAscLiquescent);
      upper.setGlyphShape(ctxt, GlyphCode.TerminatingAscLiquescent);
    } else {
      // standard shape
      lower.setGlyphShape(ctxt, GlyphCode.PodatusLower);
      upper.setGlyphShape(ctxt, GlyphCode.PodatusUpper);
    }

    // allow a quilisma pes
    if (lower.shape === NoteShape.Quilisma)
      lower.setGlyphShape(ctxt, GlyphCode.Quilisma);

    lower.performLayout(ctxt);
    upper.performLayout(ctxt);

    var line = new NeumeLineVisualizer(ctxt, lower, upper, false);
    line.bounds.x = lower.bounds.right() - line.bounds.width;
    this.addVisualizer(line);

    // if it's overhanging, then right align the glyph
    if (overhangUpperNote === true)
      upper.bounds.x += line.bounds.right() - upper.bounds.width;
    else
      upper.bounds.x += line.bounds.x;

    // add the elements
    this.addVisualizer(lower);
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
      x -= line.bounds.width;
      line.bounds.x = x;
      this.addVisualizer(line);
    }

    var overhangThirdNote = true;

    if (third.liquescent === LiquescentType.SmallAscending)
      third.setGlyphShape(ctxt, GlyphCode.TerminatingAscLiquescent);
    else if (third.liquescent === LiquescentType.LargeDescending) {
      third.setGlyphShape(ctxt, GlyphCode.PunctumCuadratumDesLiquescent);
      overhangThirdNote = false;
    } else
      third.setGlyphShape(ctxt, GlyphCode.PodatusUpper);

    third.performLayout(ctxt);

    if (overhangThirdNote)
      third.bounds.x = second.bounds.right() - third.bounds.width;
    else
      third.bounds.x = x;

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

    if (note.liquescent !== LiquescentType.None) {
      if (note.shape === NoteShape.Inclinatum)
        note.setGlyphShape(ctxt, GlyphCode.PunctumInclinatumLiquescent);
      else if (note.liquescent === LiquescentType.LargeAscending)
        note.setGlyphShape(ctxt, GlyphCode.PunctumCuadratumAscLiquescent);
      else if (note.liquescent === LiquescentType.LargeDescending)
        note.setGlyphShape(ctxt, GlyphCode.PunctumCuadratumDesLiquescent);

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
    if (second.shape === NoteShape.Quilisma)
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
    if (second.shape === NoteShape.Quilisma)
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
    var drawFirstLine = note2.staffPosition - note1.staffPosition > 1;
    var note3SmallLiquescent = false;
    var line;

    if (note1.liquescent === LiquescentType.InitioDebilis) {
      note1.setGlyphShape(ctxt, GlyphCode.TerminatingDesLiquescent);
      drawFirstLine = true; // always draw first line with an initio debilis
    } else
      note1.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);

    note2.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);

    if (note3.liquescent === LiquescentType.LargeAscending)
      note3.setGlyphShape(ctxt, GlyphCode.PunctumCuadratumAscLiquescent);
    else if (note3.liquescent === LiquescentType.LargeDescending)
      note3.setGlyphShape(ctxt, GlyphCode.PunctumCuadratumDesLiquescent);
    else if (note3.liquescent === LiquescentType.SmallAscending || 
        note3.liquescent === LiquescentType.SmallDescending) {
      note3.setGlyphShape(ctxt, GlyphCode.TerminatingDesLiquescent);
      note3SmallLiquescent = true;
    } else
      note3.setGlyphShape(ctxt, GlyphCode.PunctumCuadratum);

    note1.performLayout(ctxt);
    note2.performLayout(ctxt);
    note3.performLayout(ctxt);

    var x = note1.bounds.right();

    // do we need to draw the first (ascending) line?
    if (drawFirstLine) {
      line = new NeumeLineVisualizer(ctxt, note1, note2, false);
      x -= line.bounds.width;
      line.bounds.x = x;
      this.addVisualizer(line);
    }

    note2.bounds.x = x;
    x += note2.bounds.width;

    // do we need to draw a descending line?
    if (note2.staffPosition - note3.staffPosition > 1) {
      line = new NeumeLineVisualizer(ctxt, note2, note3, false);
      x -= line.bounds.width;
      line.bounds.x = x;
      this.addVisualizer(line);
    }

    if (note3SmallLiquescent)
      note3.bounds.x = x - note3.bounds.width;
    else
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

    note1.setGlyphShape(ctxt, Apostropha.determineNoteGlyphCode(note1));
    note1.performLayout(ctxt);

    note2.setGlyphShape(ctxt, Apostropha.determineNoteGlyphCode(note2));
    note2.performLayout(ctxt);
    note2.bounds.x += note1.bounds.width + ctxt.intraNeumeSpacing;

    note3.setGlyphShape(ctxt, Apostropha.determineNoteGlyphCode(note3));
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
    if (Math.abs(staffPosition) % 2 === 1)
      return GlyphCode.VirgaLong;
    else
      return GlyphCode.VirgaShort;

    // fixme: add logic for virgas low on the staff that are probably short also...
  }
}