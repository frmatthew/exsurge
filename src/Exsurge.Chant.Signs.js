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
import { ctxt, GlyphCode, GlyphVisualizer, DividerLineVisualizer, ChantNotationElement } from 'Exsurge.Drawing'

/*
 *
 */
export class Custod extends ChantNotationElement {

  constructor() {
    super();
    this.referringNeume = null;
    this.note = null;
  }

  performLayout(ctxt) {
    super.performLayout(ctxt);

    var staffPosition = 0; // a default value just to make sure we don't fail rebuilding
    var glyphCode;

    if (this.referringNeume !== null) {
      if (this.referringNeume.notes.length > 0)
        staffPosition = this.referringNeume.notes[0].staffPosition;
    } else if (note !== null)
      staffPosition = this.note.staffPosition;

    glyphCode = Custod.getGlyphCode(staffPosition);

    var glyph = new GlyphVisualizer(ctxt, glyphCode);
    glyph.setStaffPosition(ctxt, staffPosition);
    this.addVisualizer(glyph);

    this.finishLayout(ctxt);
  }

  static getGlyphCode(staffPosition) {

    if (staffPosition <= 2) {

      // ascending custodes
      if (Math.abs(staffPosition) % 2 === 1)
        return GlyphCode.CustodLong;
      else
        return GlyphCode.CustodShort;
    } else {

      // descending custodes
      if (Math.abs(staffPosition) % 2 === 1)
        return GlyphCode.CustodDescLong;
      else
        return GlyphCode.CustodDescShort;
    }
  }
}

/*
 * DividingLine
 */
export class DividingLine extends ChantNotationElement {

  constructor() {
    super();

    this.resetsAccidentals = true;
  }
}

/*
 * QuarterBar
 */
export class QuarterBar extends DividingLine {

  performLayout(ctxt) {
    super.performLayout(ctxt);
    this.addVisualizer(new DividerLineVisualizer(ctxt, 2, 4));

    this.origin.x = this.bounds.width / 2;

    this.finishLayout(ctxt);
  }
}

/*
 * HalfBar
 */
export class HalfBar extends DividingLine {

  performLayout(ctxt) {
    super.performLayout(ctxt);

    this.addVisualizer(new DividerLineVisualizer(ctxt, -2, 2));

    this.origin.x = this.bounds.width / 2;

    this.finishLayout(ctxt);
  }
}

/*
 * FullBar
 */
export class FullBar extends DividingLine {

  performLayout(ctxt) {
    super.performLayout(ctxt);
    
    this.addVisualizer(new DividerLineVisualizer(ctxt, -3, 3));

    this.origin.x = this.bounds.width / 2;

    this.finishLayout(ctxt);
  }
}

/*
 * DoubleBar
 */
export class DoubleBar extends DividingLine {

  performLayout(ctxt) {
    super.performLayout(ctxt);

    var line0 = new DividerLineVisualizer(ctxt, -3, 3);
    line0.bounds.x = 0;
    this.addVisualizer(line0);

    var line1 = new DividerLineVisualizer(ctxt, -3, 3);
    line1.bounds.x = ctxt.intraNeumeSpacing * 2;
    this.addVisualizer(line1);

    this.origin.x = this.bounds.width / 2;

    this.finishLayout(ctxt);
  }
}

export const AccidentalType = {
  Flat: -1,
  Natural: 0,
  Sharp: 1
};

/*
 * Accidental
 */
export class Accidental extends ChantNotationElement {

  constructor(staffPosition, accidentalType) {
    super();
    this.isAccidental = true;
    this.keepWithNext = true; // accidentals should always stay connected...
    
    this.staffPosition = staffPosition;
    this.accidentalType = accidentalType;
  }

  performLayout(ctxt) {
    super.performLayout(ctxt);

    this.addVisualizer(this.createGlyphVisualizer(ctxt));

    this.finishLayout(ctxt);
  }

  // creation of the glyph visualizer is refactored out or performLayout
  // so that clefs can use the same logic for their accidental glyph
  createGlyphVisualizer(ctxt) {

    var glyphCode = GlyphCode.Flat;

    switch (this.accidentalType) {
      case AccidentalType.Natural:
        glyphCode = GlyphCode.Natural;
        break;
      case AccidentalType.Sharp:
        glyphCode = GlyphCode.Sharp;
        break;
      default:
        glyphCode = GlyphCode.Flat;
        break;
    }

    var glyph = new GlyphVisualizer(ctxt, glyphCode);
    glyph.setStaffPosition(ctxt, this.staffPosition);

    return glyph;
  }

  adjustStep(step) {
    switch (this.accidentalType) {
      case AccidentalType.Flat:
        if (step === Step.Ti) return Step.Te;
        if (step === Step.Mi) return Step.Me;
        break;
      case AccidentalType.Sharp:
        if (step === Step.Do) return Step.Du;
        if (step === Step.Fa) return Step.Fu;
        break;
      case AccidentalType.Natural:
        if (step === Step.Te) return Step.Ti;
        if (step === Step.Me) return Step.Mi;
        if (step === Step.Du) return Step.Do;
        if (step === Step.Fu) return Step.Fa;
        break;
    }

    // no adjustment needed
    return step;
  }

  applyToPitch(pitch) {

    // fixme: this is broken since we changed to staff positions

    // no adjusment needed
    if (this.octave !== pitch.octave)
      return;

    pitch.step = this.adjustStep(pitch.step);
  }
}

/*
 * Virgula
 */
export class Virgula extends ChantNotationElement {

  constructor() {
    super();

    // fixme: the staff position of the virgula is customizable, so that it
    // can be placed on different lines (top or bottom) depending on the
    // notation tradition of what is being notated (e.g., Benedictine has it
    //  on top line, Norbertine at the bottom)
    this.staffPosition = 3;
  }

  performLayout(ctxt) {
    super.performLayout(ctxt);

    var glyph = new GlyphVisualizer(ctxt, GlyphCode.Virgula);
    glyph.setStaffPosition(ctxt, this.staffPosition);

    this.addVisualizer(glyph);

    this.origin.x = this.bounds.width / 2;

    this.finishLayout(ctxt);
  }
}


