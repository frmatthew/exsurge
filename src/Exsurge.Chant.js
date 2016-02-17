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
import { Step, Pitch, Rect, Point, Margins } from './Exsurge.Core'
import { ctxt, QuickSvg, ChantLayoutElement, ChantNotationElement, GlyphCode, GlyphVisualizer, Lyric, Annotation, DropCap } from './Exsurge.Drawing'
import { Glyphs } from './Exsurge.Glyphs'
import { Custod } from './Exsurge.Chant.Signs'
import { Gabc } from './Exsurge.Gabc'


export var NoteShape = {
  Default: 0,

  Inclinatum: 1,
  Virga: 2,
  Quilisma: 3,
  Cavum: 4,
  OriscusAscending: 5,
  OriscusDescending: 6,

  Apostropha: 7,

  AscLiquescent: 8,
  DesLiquescent: 9,
};

/**
 * @class
 */
export class Note extends ChantLayoutElement {

  /**
   * @para {Pitch} pitch
   */
  constructor(pitch) {
    super();

    if (typeof pitch !== 'undefined')
      this.pitch = pitch;
    else
      this.pitch = null;

    this.glyphVisualizer = null;
    this.staffPosition = 0;
    this.isLiquescent = false;
    this.shape = NoteShape.Default;
    this.markings = [];
  }

  setGlyphShape(ctxt, glyphCode) {
    if (this.glyphVisualizer)
      this.glyphVisualizer.setGlyphShape(ctxt, glyphCode);
    else
      this.glyphVisualizer = new GlyphVisualizer(ctxt, glyphCode);
  }

  performLayout(ctxt) {

    if (this.glyphVisualizer == null) {
      console.log("Tried to perform layout on a note with no glyphCode assigned!");
    }

    this.glyphVisualizer.setStaffPosition(ctxt, this.staffPosition);

    // assign glyphvisualizer metrics to this note
    this.bounds.x = this.glyphVisualizer.bounds.x;
    this.bounds.y = this.glyphVisualizer.bounds.y;
    this.bounds.width = this.glyphVisualizer.bounds.width;
    this.bounds.height = this.glyphVisualizer.bounds.height;

    this.origin.x = this.glyphVisualizer.origin.x;
    this.origin.y = this.glyphVisualizer.origin.y;

    for (var i = 0; i < this.markings.length; i++) {
      var marking = this.markings[i];

      marking.performLayout(ctxt);
    }

    //this.drawable.attr({onclick: "Audio.playNoteInt(" + this.pitch.toInt() + ');',
    //  "data-pitch": this.pitch.toInt()
    //});
  }

  draw(ctxt) {

    this.glyphVisualizer.bounds.x = this.bounds.x;
    this.glyphVisualizer.bounds.y = this.bounds.y;

    this.glyphVisualizer.draw(ctxt);
  }

  createDrawable(ctxt) {

    this.glyphVisualizer.bounds.x = this.bounds.x;
    this.glyphVisualizer.bounds.y = this.bounds.y;
    return this.glyphVisualizer.createDrawable(ctxt);
  }
}

export class Clef extends ChantNotationElement {

  constructor(staffPosition, octave) {
    super();

    this.isClef = true;
    this.staffPosition = staffPosition;
    this.octave = octave;
    this.defaultAccidental = null;
    this.activeAccidental = null;
  }

  resetAccidentals() {
    this.activeAccidental = this.defaultAccidental;
  }

  updateChantLogic() {
    super.updateChantLogic();

    ctxt.activeClef = this;
  }

  pitchToStaffPosition(pitch) {

  }
}

export class DoClef extends Clef {

  constructor(staffPosition, octave) {
    super(staffPosition, octave);

    this.leadingSpace = 0.0;
  }

  pitchToStaffPosition(pitch) {
    return (pitch.octave - this.octave) * 7 + this.staffPosition +
            Pitch.stepToStaffOffset(pitch.step) -
            Pitch.stepToStaffOffset(Step.Do);
  }

  staffPositionToPitch(staffPosition) {
    var offset = staffPosition - this.staffPosition;
    var octaveOffset = Math.floor(offset / 7);

    var step = Pitch.staffOffsetToStep(offset);

    if (this.defaultAccidental != null && step == this.defaultAccidental.step)
      step += this.defaultAccidental.accidentalType;

    return new Pitch(step, this.octave + octaveOffset);
  }

  performLayout(ctxt) {
    super.performLayout(ctxt);

    var glyph = new GlyphVisualizer(ctxt, GlyphCode.DoClef);
    glyph.setStaffPosition(ctxt, this.staffPosition);
    this.addVisualizer(glyph);

    // fixme: implement this
    /*
    if (this.defaultAccidental != null) {
      var x = glyph.bounds.right() + ctxt.intraNeumeSpacing;

      glyph = new GlyphVisualizer(ctxt, GlyphCode.Flat, this.staffPosition - 1);
      glyph.bounds.x += x;
      this.addVisualizer(glyph);
    }
    */

    this.finishLayout(ctxt);
  }

  clone() {
    return new DoClef(this.staffPosition, this.octave);
  }
}


export class FaClef extends Clef {

  constructor(staffPosition, octave) {
    super(staffPosition, octave);

    this.octave = octave;

    this.leadingSpace = 0;
  }

  pitchToStaffPosition(pitch) {
    return (pitch.octave - this.octave) * 7 + this.staffPosition +
            Pitch.stepToStaffOffset(pitch.step) -
            Pitch.stepToStaffOffset(Step.Fa);
  }

  staffPositionToPitch(staffPosition) {
    var offset = staffPosition - this.staffPosition + 3; // + 3 because it's a fa clef (3 == offset from Do)
    var octaveOffset = Math.floor(offset / 7);

    var step = Pitch.staffOffsetToStep(offset);

    if (step == Step.Ti && this.defaultAccidental == AccidentalType.Flat)
      step = Step.Te;

    return new Pitch(step, this.octave + octaveOffset);
  }

  performLayout(ctxt) {
    super.performLayout(ctxt);

    var glyph = new GlyphVisualizer(ctxt, GlyphCode.FaClef);
    glyph.setStaffPosition(ctxt, this.staffPosition);
    this.addVisualizer(glyph);

    this.finishLayout(ctxt);
  }

  clone() {
    return new FaClef(this.staffPosition, this.octave);
  }
}

export class ChantLineBreak extends ChantNotationElement {

  constructor(justify) {
    super();

    this.justify = justify;
  }

  performLayout(ctxt) {

    // reset the bounds before doing a layout
    this.bounds = new Rect(0, 0, 0, 0);
  }

  clone() {
    var lb = new ChantLineBreak();
    lb.justify = this.justify;

    return lb;
  }
}


// a chant line represents one staff line on the page. ChantLines are created by the score
// and laid out by the page
export class ChantLine extends ChantLayoutElement {

  constructor(score) {
    super();

    this.score = score;

    this.scoreNotationStart = 0;
    this.scoreNotationCount = 0;
    this.notations = [];
    this.notationBounds = null; // Rect

    this.lyricBounds = null; // Rect

    this.staffLeft = 0;
    this.staffRight = 0;

    this.custod = null;

    this.justify = true;

    this.startingClef = null; // necessary for the layout process

    this.nextLine = null;
    this.previousLine = null; // for layout assistance

    // fixme: make these configurable values from the score
    this.spaceAfterNotations = 30; // the space between the notation bounds and the first text track
    this.spaceBetweenTextTracks = 20; // spacing between each text track
  }

  setStartingClef(clef) {
    this.startingClef = clef.clone();
  }

  performLayout(ctxt) {

    // start off with a rectangle that holds at least the four staff lines
    // we fudge the 3 to 3.1 so that the svg doesn't crop off the upper/lower staff lines...
    this.notationBounds = new Rect(this.staffLeft, -3.1 * ctxt.staffInterval,
      this.staffRight - this.staffLeft, 6.2 * ctxt.staffInterval);

    // run through all the elements of the line and calculate the bounds of the notations,
    // as well as the bounds of each text track we will use
    var i;
    var notation = null;

    for (i = 0; i < this.notations.length; i++)
      this.notationBounds.union(this.notations[i].bounds);

    this.lyricVerticalOffset = this.notationBounds.y + this.notationBounds.height + ctxt.lyricTextSize;

    // finalize the lyrics placement
    for (i = 0; i < this.notations.length; i++) {
      notation = this.notations[i];

      if (!notation.hasLyric())
        continue;

      notation.lyric.bounds.y = this.lyricVerticalOffset;
    }

    // dropCap and the annotations
    if (this.scoreNotationStart == 0 && this.score.dropCap != null) {

      // drop caps and annotations are drawn from their center, so aligning them
      // horizontally is as easy as this.staffLeft / 2

      this.score.dropCap.bounds.x = this.staffLeft / 2;
      this.score.dropCap.bounds.y = this.lyricVerticalOffset;

      if (this.score.annotation != null) {
        this.score.annotation.bounds.x += this.staffLeft / 2;
        this.score.annotation.bounds.y += -ctxt.staffInterval * 1.5;
      }
    }

    this.notationBounds.height += ctxt.lyricTextSize;

    this.bounds.x = 0;
    this.bounds.y = this.notationBounds.y;
    this.bounds.width = this.notationBounds.right();
    this.bounds.height = this.notationBounds.height;

    // the origin of the chant line's coordinate space is at the center line of the left extremity of the staff
    this.origin = new Point(this.staffLeft, -this.notationBounds.y);
  }

  createDrawable(ctxt) {
    var inner = "";

    // add the chant lines
    var x1 = this.staffLeft, x2 = this.staffRight;

    // create the staff lines
    for (var i = -3; i <= 3; i += 2) {

      inner += QuickSvg.createFragment('line', {
        'x1': x1,
        'y1': ctxt.staffInterval * i,
        'x2': x2,
        'y2': ctxt.staffInterval * i,
        'stroke': ctxt.staffLineColor,
        'stroke-width': ctxt.staffLineWeight,
        'class': 'StaffLine'
      });
    }

    // dropCap and the annotations
    if (this.scoreNotationStart == 0 && this.score.dropCap != null) {

      inner += this.score.dropCap.createDrawable(ctxt);

      if (this.score.annotation != null)
        inner += this.score.annotation.createDrawable(ctxt);
    }

    // add all of the notations
    for (var i = 0; i < this.notations.length; i++)
      inner += this.notations[i].createDrawable(ctxt);

    return QuickSvg.createFragment('g', {
      'class': 'ChantLine',
      'transform': 'translate(' + this.bounds.x + ',' + this.bounds.y + ')'
    }, inner);
  }


  buildFromChantNotationIndex(ctxt, newElementStart, width) {

    // todo: reset / clear the children we have in case they have data
    this.scoreNotationStart = newElementStart;
    this.scoreNotationCount = 0;
    this.notations = [];

    this.staffLeft = 0;

    if (width > 0)
      this.staffRight = this.staffLeft + width;
    else
      this.staffRight = 99999999; // no limit to staff size

    // Begin with the drop cap
    if (this.scoreNotationStart == 0 && this.score.dropCap != null) {
      // add a little padding around the dropcap
      this.staffLeft += this.score.dropCap.bounds.width + this.score.dropCap.padding * 2;
    }

    // set up the clef...
    // Also, add the clef as a child (which will also set the clef in the context)
    this.setStartingClef(ctxt.activeClef);
    this.startingClef.performLayout(ctxt);
    this.startingClef.bounds.x = this.staffLeft;
    this.notations.push(this.startingClef);

    var current = this.startingClef, previous = null, previousWithLyric = null;

    // todo: estimate how much space we have available to us
    var rightBoundary = this.staffRight - Glyphs.CustodLong.bounds.width - ctxt.intraNeumeSpacing * 4; // possible custod on the line

    // todo: iterate through the notations, fittng what we can on this line
    var scoreNotations = this.score.notations;

    for (var i = newElementStart; i < scoreNotations.length; i++) {

      if (current.hasLyric())
        previousWithLyric = current;

      previous = current;
      current = scoreNotations[i];

      // try to fit the current element on this line.
      // if it doesn't fit, we finish up here.
      var fitsOnLine = this.positionNotationElement(ctxt, previousWithLyric, previous, current, rightBoundary);
      if (fitsOnLine === false) {

        // check if the previous elements want to be kept with this one
        for (var k = i - 1; k > this.scoreNotationStart; k--) {
          var cne = this.score.notations[k];

          if (cne.keepWithNext === true) {
            this.notations.pop(); // remove it from our notations
            this.scoreNotationCount--;
          } else
            break;
        }

        // we are at the end of the line!
        break;
      }

      current.chantLine = this;
      this.notations.push(current);
      this.scoreNotationCount++;

      // line breaks are a special case indicating to stop processing here
      if (current.constructor.name == 'ChantLineBreak' && width > 0) {
        this.justify = current.justify;
        break;
      }
    }

    var extraSpace = 0;

    if (this.notations.length > 0) {
      var last = this.notations[this.notations.length - 1];

      if (last.hasLyric() && last.getLyricRight() > (last.bounds.right() + last.trailingSpace))
        extraSpace = this.staffRight - last.getLyricRight();
      else
        extraSpace = this.staffRight - (last.bounds.right() + last.trailingSpace);
    }

    // create the custod at the end of the line (if we need it!)
    // if we find an element following this one that is a neume, we create a custod for it
    for (var i = this.scoreNotationStart + this.scoreNotationCount; i < this.score.notations.length; i++) {
      var notation = this.score.notations[i];

      if ('notes' in notation && notation.notes.length > 0) {

        var custod = new Custod();
        custod.referringNeume = notation;

        custod.performLayout(ctxt);

        if (this.notations.length > 0) {
          var last = this.notations[this.notations.length - 1];
          custod.bounds.x = last.bounds.x + last.bounds.width;
        }

        this.custod = custod;
        this.notations.push(custod);

        extraSpace -= custod.bounds.width + custod.leadingSpace;

        // nothing more to see here...
        break;
      }
    }

    if (width <= 0 && this.notations.length > 0) {
      // set the staff width based on the notations.
      this.staffRight = this.notations[this.notations.length - 1].bounds.right();
    }

    // Justify the line if we are not the last one
    if (this.justify === true && width > 0 && this.scoreNotationStart + this.scoreNotationCount < this.score.notations.length && extraSpace > 0)
      this.justifyElements(extraSpace);
  }


  justifyElements(extraSpace) {

    var indices = [];

    var prev = null, curr = null, prevWithLyrics = null;

    // if we have a custod, place it at the end of the line
    if (this.custod != null) 
      this.custod.bounds.x = this.staffRight - this.custod.bounds.width - this.custod.leadingSpace;

    // first pass: determine the neumes we can space apart
    // start at 1 to skip the clef
    for (var i = 1; i < this.notations.length - 1; i++) {

      if (curr != null && curr.hasLyric())
        prevWithLyrics = curr;

      prev = curr;
      curr = this.notations[i];

      if (prev != null && prev.keepWithNext === true)
        continue;

      if (prevWithLyrics != null && prevWithLyrics.lyric.allowsConnector() && !prevWithLyrics.lyric.needsConnector)
        continue;

      if (curr.constructor.name == 'ChantLineBreak')
        continue;

      // otherwise, we can add space before this element
      indices.push(i);
    }

    if (indices.length == 0)
      return;

    var offset = 0;
    var increment = extraSpace / indices.length;
    var lastIndex = (this.notations[this.notations.length - 1].constructor.name == 'Custod') ? this.notations.length - 1 : this.notations.length;
    for (var i = 1; i < lastIndex; i++) {

      curr = this.notations[i];

      if (indices.indexOf(i) >= 0) {
        curr.bounds.x += offset + increment;
        offset += increment;
      } else
        curr.bounds.x += offset;
    }

    offset = offset;
  }


  // this is where the real core of positioning neumes takes place
  // returns true if positioning was able to fit the neume before rightBoundary.
  // returns false if cannot fit before given right margin.
  // fixme: if this returns false, shouldn't we set the connectors on prev to be activated?!
  positionNotationElement(ctxt, prevWithLyric, prev, curr, rightBoundary) {

    // To begin we just place the current notation right after the previous,
    // irrespective of lyrics.
    curr.bounds.x = prev.bounds.right() + prev.trailingSpace;

    if (prevWithLyric == null) {

      var maxRight = curr.bounds.right() + curr.trailingSpace;

      // if the lyric left is negative, then offset the neume appropriately
      if (curr.hasLyric()) {
        curr.lyric.setNeedsConnector(false); // we hope for the best!

        if (curr.getLyricLeft() < 0)
          curr.bounds.x += -curr.getLyricLeft();

        maxRight = Math.max(maxRight, curr.getLyricRight());
      }

      if (maxRight > rightBoundary)
        return false;
      else
        return true;
    }

    if (curr.hasLyric() === false) {

      if (prevWithLyric.lyric.allowsConnector())
        prevWithLyric.lyric.setNeedsConnector(true);

      if (curr.bounds.right() + curr.trailingSpace < rightBoundary)
        return true;
      else {
        //curr.bounds.x = this.startingClef.bounds.right();
        return false;
      }
    }

    curr.lyric.setNeedsConnector(false); // we hope for the best!

    var currLyricLeft = curr.getLyricLeft();
    var prevLyricRight = prevWithLyric.getLyricRight();

    if (prevWithLyric.lyric.allowsConnector() === false) {

      // No connector needed, but include space between words if necessary!
      if (prevLyricRight + ctxt.minLyricWordSpacing > currLyricLeft) {
        // push the current element over a bit.
        curr.bounds.x += prevLyricRight + ctxt.minLyricWordSpacing - currLyricLeft;
      }

    } else {

      // we may need a connector yet...

      if (prevLyricRight > currLyricLeft) {
        // in this case, the lyric elements actually overlap.
        // so nope, no connector needed. instead, we just place the lyrics together
        // fixme: for better text layout, we could actually use the kerning values
        // between the prev and curr lyric elements!
        curr.bounds.x += prevLyricRight - currLyricLeft;

      } else {

        // bummer, looks like we couldn't merge the syllables together. Better add a connector...
        prevWithLyric.lyric.setNeedsConnector(true);
        prevLyricRight = prevWithLyric.getLyricRight();

        if (prevLyricRight > currLyricLeft)
          curr.bounds.x += prevLyricRight - currLyricLeft;
      }
    }

    if (curr.bounds.right() + curr.trailingSpace < rightBoundary)
      return true;

    // if we made it this far, then the element won't fit on this line.
    // set the position of the current element to the beginning of a chant line,
    // and mark the previous lyric as connecting if needed.
    // curr.bounds.x = this.startingClef.bounds.right();

    if (prevWithLyric.lyric != null && prevWithLyric.lyric.allowsConnector())
      prevWithLyric.lyric.setNeedsConnector(true);

    return false;
  }
}

/*
 * Score, document
 */
export class ChantScore {

  constructor() {

    this.startingClef = null; // Clef

    this.notations = [];
    this.lines = [];
    this.notes = [];

    this.dropCap = null;
    this.annotation = null;

    this.compiled = false;

    this.autoColoring = true;

    // valid after chant lines are created...
    this.bounds = new Rect();
  }

  performLayout(ctxt, finishedCallback) {

    // first order of business: let the clef perform layout
    this.startingClef.performLayout(ctxt);

    if (this.dropCap)
      this.dropCap.recalculateMetrics(ctxt);

    if (this.annotation)
      this.annotation.recalculateMetrics(ctxt);

    // add all text items to the svg measurer in order to calculate their bounds
    /*for (var i = 0; i < this.notations.length; i++) {
      if (this.notations[i].hasLyric())
        ctxt.svgTextMeasurer.insertAdjacentHTML('beforeend', this.notations[i].lyric.createDrawable(ctxt));
    }

    // annotations and drop caps
    if (this.dropCap != null)
      ctxt.svgTextMeasurer.insertAdjacentHTML('beforeend', this.dropCap.createDrawable(ctxt));

    if (this.annotation != null)
      ctxt.svgTextMeasurer.insertAdjacentHTML('beforeend', this.annotation.createDrawable(ctxt));
*/

    // give the system a chance to render the text items, then measure them
    // and boot the compilation process
    setTimeout(() => {
      for (var i = 0; i < this.notations.length; i++) {
        if (this.notations[i].hasLyric())
          ;//this.notations[i].lyric.updateMetricsFromSvg();
      }

      this.compileElement(ctxt, 0, finishedCallback);
    }, 0);
  }

  compileElement(ctxt, index, finishedCallback) {

    if (index >= this.notations.length) {

      if (!this.compiled) {
        this.compiled = true;
        setTimeout(() => {
          if (finishedCallback)
            finishedCallback();
        }, 0);
      }

      return;
    }

    var timeout = new Date().getTime() + 50; // process for fifty milliseconds
    do {
      var notation = this.notations[index++];
      notation.performLayout(ctxt);
    } while (index < this.notations.length && timeout < new Date().getTime());

    // schedule the next block of processing
    setTimeout(() => {
      this.compileElement(ctxt, index, finishedCallback);
    }, 0);
  }

  layoutChantLines(ctxt, width, finishedCallback) {

    this.lines = [];

    var y = 0;
    var currIndex = 0;

    if (ctxt.activeClef == null)
      ctxt.activeClef = this.startingClef;

    do {

      var line = new ChantLine(this);

      line.buildFromChantNotationIndex(ctxt, currIndex, width);
      currIndex += line.scoreNotationCount;
      line.performLayout(ctxt);
      this.lines.push(line);

      line.bounds.y = -line.bounds.y + y;
      y += line.bounds.height + ctxt.staffInterval * 3;

    } while (currIndex < this.notations.length);

    var lastLine = this.lines[this.lines.length - 1];

    this.bounds.x = 0;
    this.bounds.y = 0;
    this.bounds.width = lastLine.bounds.width;
    this.bounds.height = y;

    if (finishedCallback)
      finishedCallback(this);
  }

  createDrawable(ctxt) {

    var drawable = "";

    // create defs section
    for (var def in ctxt.defs)
      drawable += ctxt.defs[def];

    drawable = QuickSvg.createFragment('defs', {}, drawable);

    for (var i = 0; i < this.lines.length; i++)
      drawable += this.lines[i].createDrawable(ctxt);

    drawable = QuickSvg.createFragment('g', {}, drawable);

    drawable = QuickSvg.createFragment('svg', {
      'xmlns': 'http://www.w3.org/2000/svg',
      'version': '1.1',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      'class': 'ChantScore',
      'width': this.bounds.width,
      'height': this.bounds.height
    }, drawable);

    return drawable;
  }

  prepareNotesForAudio() {

    this.notes = [];

    // run through all of the notations...
    var prevNeume = null;
    var currNotation = null;
    for (var i = 0; i < this.notations.length; i++) {
      var currNotation = this.notations[i];

      if (typeof currNotation.notes !== 'undefined') {

        // copy the notes to the score for playback
        for (var j = 0; j < currNotation.notes.length; j++)
          this.notes.push(currNotation.notes[j]);

        prevNeume = currNotation;
      } else {
        // not a neume...if it's a full bar or a double bar, we can lengthen the notes here
        if (prevNeume != null && currNotation.constructor.name == 'FullBar' || currNotation.constructor.name == 'DoubleBar') {

        }
      }
    }
  }

  unserializeFromJson(data) {
    this.autoColoring = data['auto-coloring'];

    if (data.annotation != null && data.annotation != "") {
      // create the annotation
      this.annotation = new Annotation(ctxt, data.annotation);
    } else
      this.annotation = null;

    var createDropCap = data['drop-cap'] == 'auto' ? true : false;

    Gabc.parseChantNotations(data.notations, this, createDropCap);
  }

  serializeToJson() {
    var data = {};

    data['type'] = "score";
    data['auto-coloring'] = true;

    if (this.annotation != null)
      data.annotation = this.annotation.unsanitizedText;
    else
      data.annotation = "";

    

    return data;
  }
}

export class ChantDocument {
  constructor() {

    var defaults = {
      layout: {
        units: "mm",
        'default-font': {
          'font-family': "Crimson",
          'font-size': 14
        },
        page: {
          width: 8.5,
          height: 11,
          'margin-left': 0,
          'margin-top': 0,
          'margin-right': 0,
          'margin-bottom': 0,
        }
      },
      scores: [],
    };

    // default layout
    this.copyLayout(this, defaults);

    this.scores = defaults.scores;
  }

  copyLayout(to, from) {

    to.layout = {
      units: from.layout.units,
      'default-font': {
        'font-family': from.layout['default-font']['font-family'],
        'font-size': from.layout['default-font']['font-size']
      },
      page: {
        width: from.layout.page.width,
        height: from.layout.page.height,
        'margin-left': from.layout.page['margin-left'],
        'margin-top': from.layout.page['margin-top'],
        'margin-right': from.layout.page['margin-right'],
        'margin-bottom': from.layout.page['margin-bottom'],
      }
    };
  }

  unserializeFromJson(data) {

    this.copyLayout(this, data);

    this.scores = [];

    // read in the scores
    for (var i = 0; i < data.scores.length; i++) {
      var score = new ChantScore();

      score.unserializeFromJson(data.scores[i]);
      this.scores.push(score);
    }
  }

  serializeToJson() {
    var data = {};

    this.copyLayout(data, this);

    data.scores = [];

    // save scores...
    for (var i = 0; i < this.scores.length; i++)
      data.scores.push(this.scores[i].serializeToJson());

    return data;
  }
}
