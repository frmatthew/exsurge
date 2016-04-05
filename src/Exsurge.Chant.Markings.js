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
import { ctxt, QuickSvg, ChantLayoutElement, GlyphCode, GlyphVisualizer, HorizontalEpisemaVisualizer } from 'Exsurge.Drawing'
import { Note, NoteShape } from 'Exsurge.Chant'


// for positioning markings on notes
export var MarkingPositionHint = {
  Default:      0,
  Above:        1,
  Below:        2
};

export class Marking extends ChantLayoutElement {

  constructor(note) {
    super();

    this.note = note;
    this.horizontalOffset = 0;
    this.verticalOffset = 0;
    this.positionHint = MarkingPositionHint.Default;

    // each marking has its own visualizer
    this.visualizer = null;
  }

  performLayout(ctxt) {

  }
}

export class AcuteAccent extends Marking {

  constructor(note) {
    super(note);

    this.positionHint = MarkingPositionHint.Above;
  }

  performLayout(ctxt) {

    this.visualizer = new GlyphVisualizer(ctxt, GlyphCode.AcuteAccent);

    // fixme: acute markings might need to be positioned vertically over
    // the notation bounds of the chantline after everything has already
    // been laid out on the line...for now we just place them at
    // reasonable height above the staff line.
    this.verticalOffset = -ctxt.staffInterval * 4;
    this.horizontalOffset = this.visualizer.bounds.width / 2; // center on the note itself

    this.bounds = this.visualizer.bounds.clone();
    this.bounds.x += this.horizontalOffset;
    this.bounds.y += this.verticalOffset;

    // position the visualizer too...
    this.visualizer.bounds.x = this.bounds.x;
    this.visualizer.bounds.y = this.bounds.y;

    super.performLayout(ctxt);
  }
}

// for positioning markings on notes
export var HorizontalEpisemaAlignment = {
  Default:      0,
  Left:         1,
  Center:       2,
  Right:        3
};

/*
 * HorizontalEpisema
 */
export class HorizontalEpisema extends Marking {

  constructor(note) {
    super(note);
    
    this.terminating = false; // indicates if this episema should terminate itself or not
    this.alignment = HorizontalEpisemaAlignment.Default;
  }

  updateY(y) {
    this.bounds.y = y;
    this.visualizer.bounds.y = y;
  }

  updateWidth(width) {
    this.bounds.width = width;
    this.visualizer.bounds.width = width;
  }

  performLayout(ctxt) {
    super.performLayout(ctxt);

    // following logic helps to keep the episemae away from staff lines if they get too close
    // the placement is based on a review of the Vatican and solesmes editions, which
    // seem to always place the epismata centered between staff lines. Probably helps
    // for visual layout, rather than letting epismata be at various heights.

    var y = 0, step;
    var minDistanceAway = ctxt.staffInterval * 0.4; // min distance from neume

    if (this.positionHint === MarkingPositionHint.Below) {
      y = this.note.bounds.bottom() + minDistanceAway; // the highest the line could be at
      step = Math.floor(y / ctxt.staffInterval);

      // if it's an odd step, that means we're on a staff line,
      // so we shift to between the staff line
      if (Math.abs(step % 2) === 1)
        step = step + 1;
    } else {
      y = this.note.bounds.y - minDistanceAway; // the lowest the line could be at
      step = Math.ceil(y / ctxt.staffInterval);

      // if it's an odd step, that means we're on a staff line,
      // so we shift to between the staff line
      if (Math.abs(step % 2) === 1)
        step = step - 1;
    }

    y = step * ctxt.staffInterval;

    var glyphCode = this.note.glyphVisualizer.glyphCode;
    var width;

    // The porrectus requires special handling of the note width,
    // otherwise the width is just that of the note itself
    if (glyphCode === GlyphCode.Porrectus1 ||
        glyphCode === GlyphCode.Porrectus2 ||
        glyphCode === GlyphCode.Porrectus3 ||
        glyphCode === GlyphCode.Porrectus4)
      width = ctxt.staffInterval;
    else
      width = this.note.bounds.width;

    var x = this.note.bounds.x;

    // also, the position hint can affect the x/width of the episema
    if (this.alignment === HorizontalEpisemaAlignment.Left) {
      width *= .80;
    } else if (this.alignment === HorizontalEpisemaAlignment.Center) {
      x += width * .20;
      width *= .60;
    } else if (this.alignment === HorizontalEpisemaAlignment.Right) {
      x += width * .20;
      width *= .80;
    }

    this.bounds.x = x;
    this.bounds.y = y;
    this.bounds.width = width;
    this.bounds.height = ctxt.episemaLineWeight;

    this.origin.x = 0;
    this.origin.y = 0;

    this.visualizer = new HorizontalEpisemaVisualizer(ctxt, x, y, width);
  }
}

/*
 * Ictus
 */
export class Ictus extends Marking {

  constructor(note) {
    super(note);
  }

  performLayout(ctxt) {

    var glyphCode;

    // fixme: this positioning logic doesn't work for the ictus on a virga apparently...?

    if (this.positionHint === MarkingPositionHint.Above) {
      glyphCode = GlyphCode.VerticalEpisemaAbove;
    } else {
      glyphCode = GlyphCode.VerticalEpisemaBelow;
    }

    var staffPosition = this.note.staffPosition;
    
    this.horizontalOffset = this.note.bounds.width / 2;
    this.verticalOffset = 0;

    switch (glyphCode) {
      case GlyphCode.VerticalEpisemaAbove:
        if (staffPosition % 2 === 0)
          this.verticalOffset -= ctxt.staffInterval * 1.5;
        else
          this.verticalOffset -= ctxt.staffInterval * .9;
        break;

      case GlyphCode.VerticalEpisemaBelow:
      default:
        if (staffPosition % 2 === 0)
          this.verticalOffset += ctxt.staffInterval * 1.5;
        else
          this.verticalOffset += ctxt.staffInterval * .8;
        break;
    }

    this.visualizer = new GlyphVisualizer(ctxt, glyphCode);
    this.visualizer.setStaffPosition(ctxt, staffPosition);

    this.bounds = this.visualizer.bounds.clone();
    this.bounds.x = this.note.bounds.x + this.horizontalOffset - this.visualizer.origin.x;
    this.bounds.y += this.verticalOffset;

    this.visualizer.bounds.x = this.bounds.x;
    this.visualizer.bounds.y = this.bounds.y;

    super.performLayout(ctxt);
  }
}

/*
 * Mora
 */
export class Mora extends Marking {

  constructor(note, horizontalOffset) {
    super(note);

    this.horizontalOffset = horizontalOffset;
  }

  performLayout(ctxt) {

    var staffPosition = this.note.staffPosition;

    this.visualizer = new GlyphVisualizer(ctxt, GlyphCode.Mora);
    this.visualizer.setStaffPosition(ctxt, staffPosition);

    this.verticalOffset = 0;
    if (this.positionHint === MarkingPositionHint.Above) {
      if (staffPosition % 2 === 0)
        this.verticalOffset -= ctxt.staffInterval + ctxt.staffInterval * .75;
      else
        this.verticalOffset -= ctxt.staffInterval * .75;
    } else if (this.positionHint === MarkingPositionHint.Below) {
      if (staffPosition % 2 === 0)
        this.verticalOffset += ctxt.staffInterval + ctxt.staffInterval * .75;
      else
        this.verticalOffset += ctxt.staffInterval * .75;
    } else {
      if (Math.abs(staffPosition) % 2 === 1)
        this.verticalOffset -= ctxt.staffInterval * .75;
    }

    this.bounds = this.visualizer.bounds.clone();
    this.bounds.x += this.note.bounds.right() + this.horizontalOffset;
    this.bounds.y += this.verticalOffset;

    this.visualizer.bounds.x = this.bounds.x;
    this.visualizer.bounds.y = this.bounds.y;

    super.performLayout(ctxt);
  }
}