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
import { ctxt, QuickSvg, ChantLayoutElement, GlyphCode, GlyphVisualizer, HorizontalEpisemaVisualizer } from './Exsurge.Drawing'
import { Note, NoteShape } from './Exsurge.Chant'

export class Marking extends ChantLayoutElement {

  constructor(note) {
    super();

    this.note = note;
    this.horizontalOffset = 0;
    this.verticalOffset = 0;
    this.positionHint = Exsurge.MarkingPositionHint.Default;

    // each marking has its own visualizer
    this.visualizer = null;
  }

  performLayout(ctxt) {

  }
}

export class AcuteAccent extends Marking {

  constructor(note) {
    super(note);

    this.positionHint = Exsurge.MarkingPositionHint.Above;
  }

  performLayout(ctxt) {

    this.visualizer = new GlyphVisualizer(ctxt, GlyphCode.AcuteAccent);

    // fixme: acute markings might need to be positioned vertically over
    // the notation bounds of the chantline after everything has already
    // been laid out on the line...for now we just place them a
    // reasonable height above the staff line.
    this.verticalOffset = -ctxt.staffInterval * 5;
    this.horizontalOffset = -this.visualizer.bounds.x; // center on the note itself

    this.bounds = this.visualizer.bounds.clone();
    this.bounds.x += this.horizontalOffset;
    this.bounds.y += this.verticalOffset;

    // position the visualizer too...
    this.visualizer.bounds.x = this.bounds.x;
    this.visualizer.bounds.y = this.bounds.y;

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
    // The idea is this: since the staff lines are odd numbered multiples of ctxt.staffInterval,
    // Math.round(y / ctxt.staffInterval) % 2 tells us if we're closer to a space or a line.
    // If it's an odd number then we shift away from line by adding .5 to the step, which puts
    // us the closest we want to be to a line.

    var y = 0;
    var minDistanceAway = ctxt.staffInterval * 0.4; // min distance from neume

    if (this.positionHint == Exsurge.MarkingPositionHint.Below) {
      y = this.note.bounds.bottom() + minDistanceAway; // the highest the line could be at

      var step = Math.round(y / ctxt.staffInterval);

      // if it's an odd step, that means we're near a line, and therefore
      // need to shift down
      if (Math.abs(step % 2) === 1)
        y = (step + 0.5) * ctxt.staffInterval;
    } else {
      y = this.note.bounds.y - minDistanceAway; // the lowest the line could be at

      var step = Math.round(y / ctxt.staffInterval);

      // if it's an odd step, that means we're near a line, and therefore
      // need to shift up
      if (Math.abs(step % 2) === 1)
        y = (step - 0.5) * ctxt.staffInterval;
    }

    this.bounds.x = this.note.bounds.x;
    this.bounds.y = y;
    this.bounds.width = this.note.bounds.width;
    this.bounds.height = ctxt.episemaLineWeight;

    this.origin.x = 0;
    this.origin.y = 0;

    this.visualizer = new HorizontalEpisemaVisualizer(ctxt, this.note.bounds.x, y, this.note.bounds.width);
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

    if (this.positionHint == Exsurge.MarkingPositionHint.Above) {
      glyphCode = GlyphCode.VerticalEpisemaAbove;
    } else {
      glyphCode = GlyphCode.VerticalEpisemaBelow;
    }

    var staffPosition = this.note.staffPosition;
    
    this.horizontalOffset = this.note.bounds.width / 2;
    this.verticalOffset = 0;

    switch (glyphCode) {
      case GlyphCode.VerticalEpisemaAbove:
        if (staffPosition % 2 == 0)
          this.verticalOffset -= ctxt.staffInterval * 1.5;
        else
          this.verticalOffset -= ctxt.staffInterval * .9;
        break;

      case GlyphCode.VerticalEpisemaBelow:
      default:
        if (staffPosition % 2 == 0)
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

  constructor(note) {
    super(note);
  }

  performLayout(ctxt) {

    var staffPosition = this.note.staffPosition;

    this.visualizer = new GlyphVisualizer(ctxt, GlyphCode.Mora);
    this.visualizer.setStaffPosition(ctxt, staffPosition);

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

    this.bounds = this.visualizer.bounds.clone();
    this.bounds.x += this.note.bounds.right() + this.horizontalOffset;
    this.bounds.y += this.verticalOffset;

    this.visualizer.bounds.x = this.bounds.x;
    this.visualizer.bounds.y = this.bounds.y;

    super.performLayout(ctxt);
  }
}