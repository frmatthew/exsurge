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
import { QuickSvg, ChantLayoutElement, GlyphCode, GlyphVisualizer } from 'Exsurge.Drawing'
import { Note, NoteShape } from 'Exsurge.Chant'


// for positioning markings on notes
export var MarkingPositionHint = {
  Default:      0,
  Above:        1,
  Below:        2
};

export class AcuteAccent extends GlyphVisualizer {

  constructor(ctxt, note) {
    super(ctxt, GlyphCode.AcuteAccent);
    this.note = note;
    this.positionHint = MarkingPositionHint.Above;
  }

  performLayout(ctxt) {

    this.bounds.x += this.bounds.width / 2; // center on the note itself

    // this puts the acute accent either over the staff lines, or over the note if the
    // note is above the staff lines
    this.setStaffPosition(ctxt, Math.max(this.note.staffPosition + 1, 4))
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
 *
 * A horizontal episema marking is it's own visualizer (that is, it implements createDrawable)
 */
export class HorizontalEpisema extends ChantLayoutElement {

  constructor(note) {
    super();

    this.note = note;
    
    this.positionHint = MarkingPositionHint.Default;
    this.terminating = false; // indicates if this episema should terminate itself or not
    this.alignment = HorizontalEpisemaAlignment.Default;
  }

  performLayout(ctxt) {

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
  }

  createDrawable(ctxt) {

    return QuickSvg.createFragment('rect', {
      'x': this.bounds.x,
      'y': this.bounds.y,
      'width': this.bounds.width,
      'height': this.bounds.height,
      'fill': ctxt.neumeLineColor,
      'class': 'horizontalEpisema'
    });
  }
}

/*
 * Ictus
 */
export class Ictus extends GlyphVisualizer {

  constructor(ctxt, note) {
    super(ctxt, GlyphCode.VerticalEpisemaAbove);
    this.note = note;
    this.positionHint = MarkingPositionHint.Default;
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
    
    var horizontalOffset = this.note.bounds.width / 2;
    var verticalOffset = 0;

    switch (glyphCode) {
      case GlyphCode.VerticalEpisemaAbove:
        if (staffPosition % 2 === 0)
          verticalOffset -= ctxt.staffInterval * 1.5;
        else
          verticalOffset -= ctxt.staffInterval * .9;
        break;

      case GlyphCode.VerticalEpisemaBelow:
      default:
        if (staffPosition % 2 === 0)
          verticalOffset += ctxt.staffInterval * 1.5;
        else
          verticalOffset += ctxt.staffInterval * .8;
        break;
    }

    this.setGlyph(ctxt, glyphCode);
    this.setStaffPosition(ctxt, staffPosition);

    this.bounds.x =  this.note.bounds.x + horizontalOffset - this.origin.x;
    this.bounds.y += verticalOffset;
  }
}

/*
 * Mora
 */
export class Mora extends GlyphVisualizer {

  constructor(ctxt, note) {
    super(ctxt, GlyphCode.Mora);
    this.note = note;
    this.positionHint = MarkingPositionHint.Default;
  }

  performLayout(ctxt) {

    var staffPosition = this.note.staffPosition;

    this.setStaffPosition(ctxt, staffPosition);

    var verticalOffset = 0;
    if (this.positionHint === MarkingPositionHint.Above) {
      if (staffPosition % 2 === 0)
        verticalOffset -= ctxt.staffInterval + ctxt.staffInterval * .75;
      else
        verticalOffset -= ctxt.staffInterval * .75;
    } else if (this.positionHint === MarkingPositionHint.Below) {
      if (staffPosition % 2 === 0)
        verticalOffset += ctxt.staffInterval + ctxt.staffInterval * .75;
      else
        verticalOffset += ctxt.staffInterval * .75;
    } else {
      if (Math.abs(staffPosition) % 2 === 1)
        verticalOffset -= ctxt.staffInterval * .75;
    }

    this.bounds.x += this.note.bounds.right() + ctxt.staffInterval / 4.0;
    this.bounds.y += verticalOffset;
  }
}

// indicates the shape of the brace
export var BraceShape = {
  RoundBrace: 0,
  CurlyBrace: 1,
  AccentedCurlyBrace: 2
};

// indicates how the brace is alignerd to the note to which it's connected
export var BraceAttachment = {
  Left: 0,
  Right: 1
};


export class BracePoint extends ChantLayoutElement {

  constructor(note, isAbove, shape, attachment) {
    super();

    this.note = note;
    this.isAbove = isAbove;
    this.shape = shape;
    this.attachment = attachment;
  }

  getAttachmentX() {
    if (this.attachment === BraceAttachment.Left)
      return this.note.neume.bounds.x + this.note.bounds.x;
    else
      return this.note.neume.bounds.x + this.note.bounds.right();
  }
}