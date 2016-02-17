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

import * as Exsurge from './Exsurge.Core'
import { ctxt, QuickSvg, ChantLayoutElement, GlyphCode, GlyphVisualizer } from './Exsurge.Drawing'
import { Note, NoteShape } from './Exsurge.Chant'

export class Marking extends ChantLayoutElement {

  constructor(note) {
    super();

    this.note = note;
    this.horizontalOffset = 0;
    this.verticalOffset = 0;
    this.positionHint = Exsurge.MarkingPositionHint.Default;
  }

  performLayout(ctxt) {

  }
}

export class AcuteAccent extends Marking {

  constructor(note) {
    super(note);

    this.positionHint = Exsurge.MarkingPositionHint.Above;
    this.glyph = null;
  }

  performLayout(ctxt) {

    this.glyph = new GlyphVisualizer(ctxt, GlyphCode.AcuteAccent);

    this.glyph.performLayout(ctxt);

    // fixme: acute markings might need to be positioned vertically over
    // the notation bounds of the chantline after everything has already
    // been laid out on the line...for now we just place them a
    // reasonable height above the staff line.
    this.verticalOffset = -ctxt.staffInterval * 5;
    this.horizontalOffset = -this.glyph.bounds.x; // center on the note itself

    this.bounds = this.glyph.bounds.clone();
    this.bounds.x += this.orizontalOffset;
    this.bounds.y += this.verticalOffset;

    super.performLayout(ctxt);
  }
}

/*
 * HorizontalEpisema
 */
export class HorizontalEpisema extends Marking {

  constructor(note) {
    super(note);
  }

  performLayout(ctxt) {
    super.performLayout(ctxt);

    // the horizontal episema object is a little different from other markings in that it is a
    // logical object and doesn't do layout on its own. the layout for the episema happens in
    // Neume.finishLayout
  }
}

/*
 * Ictus
 */
export class Ictus extends Marking {

  constructor(note) {
    super(note);

    this.glyph = null;
  }

  performLayout(ctxt) {

    var glyphCode;
    var staffPosition;

    // fixme: this positioning logic doesn't work for the ictus on a virga apparently...?

    if (this.positionHint == Exsurge.MarkingPositionHint.Above) {
      glyphCode = GlyphCode.VerticalEpisemaAbove;
    } else {
      glyphCode = GlyphCode.VerticalEpisemaBelow;
    }

    staffPosition = this.note.staffPosition;
    
    this.horizontalOffset = this.note.bounds.width / 2;
    this.verticalOffset = 0;

    switch (glyphCode) {
      case GlyphCode.VerticalEpisemaAbove:
        if (staffPosition % 2 == 0)
          this.verticalOffset -= ctxt.staffInterval * 1.5;
        else
          this.verticalOffset -= ctxt.staffInterval * .8;
        break;

      case GlyphCode.VerticalEpisemaBelow:
      default:
        if (staffPosition % 2 == 0)
          this.verticalOffset += ctxt.staffInterval * 1.5;
        else
          this.verticalOffset += ctxt.staffInterval * .8;
        break;
    }

    this.glyph = new GlyphVisualizer(ctxt, glyphCode);
    this.glyph.setStaffPosition(ctxt, staffPosition);

    this.bounds = this.glyph.bounds.clone();
    this.bounds.x += this.note.bounds.x + this.horizontalOffset;
    this.bounds.y += this.verticalOffset;

    super.performLayout(ctxt);
  }
}

/*
 * Mora
 */
export class Mora extends Marking {

  constructor(note) {
    super(note);

    this.glyph = null;
  }

  performLayout(ctxt) {

    var staffPosition = this.note.staffPosition;

    this.glyph = new GlyphVisualizer(ctxt, GlyphCode.Mora);
    this.glyph.setStaffPosition(ctxt, staffPosition);

    this.verticalOffset = 0;
    switch (this.positionHint) {
      case Exsurge.MarkingPositionHint.Below:
        if (staffPosition % 2 == 0)
          this.verticalOffset += ctxt.staffInterval / 3.0;
        else
          this.verticalOffset += (ctxt.staffInterval * 2) / 3.0;
        break;

      case Exsurge.MarkingPositionHint.Default:
      case Exsurge.MarkingPositionHint.Above:
      default:
        if (staffPosition % 2 == 0)
          this.verticalOffset -= ctxt.staffInterval / 3.0;
        else
          this.verticalOffset -= (ctxt.staffInterval * 2) / 3.0;
        break;
    }

    this.bounds = this.glyph.bounds.clone();
    this.bounds.x += this.note.bounds.right() + this.horizontalOffset;
    this.bounds.y += this.verticalOffset;

    // this.drawable = this.glyph.drawable;
    // this.drawable.classList.add('Mora');
    // QuickSvg.translate(this.drawable, this.bounds.x, this.bounds.y);

    super.performLayout(ctxt);
  }
}