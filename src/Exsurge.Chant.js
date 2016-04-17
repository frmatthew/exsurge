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
import { QuickSvg, ChantLayoutElement, ChantNotationElement, GlyphCode, GlyphVisualizer, Lyric, Annotation, DropCap } from 'Exsurge.Drawing'
import { ChantLine } from 'Exsurge.Chant.ChantLine'
import { AccidentalType } from 'Exsurge.Chant.Signs'
import { MarkingPositionHint, HorizontalEpisemaAlignment, HorizontalEpisema, BraceStart, BraceEnd } from 'Exsurge.Chant.Markings'
import { Gabc } from 'Exsurge.Gabc'

export var LiquescentType = {
  None: 0,

  // flags that can be combined, though of course it
  // it doesn't make sense to combine some!
  Large: 1 << 0,
  Small: 1 << 1,
  Ascending: 1 << 2,
  Descending: 1 << 3,
  InitioDebilis: 1 << 4,

  // handy liquescent types
  LargeAscending: 1 << 0 | 1 << 2,
  LargeDescending: 1 << 0 | 1 << 3,
  SmallAscending: 1 << 1 | 1 << 2,
  SmallDescending: 1 << 1 | 1 << 3
};

export var NoteShape = {
  // shapes
  Default:    0,
  Virga:      1,
  Inclinatum: 2,
  Quilisma:   3,
  Stropha:    4,
  Oriscus:    5
};

export var NoteShapeModifiers = {

  // flags which modify the shape
  // not all of them apply to every shape of course
  None:       0,
  Ascending:  1 << 0,
  Descending: 1 << 1,
  Cavum:      1 << 2,
  Stemmed:    1 << 3
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

    // The staffPosition on a note is an integer that indicates the vertical position on the staff.
    // 0 is the center space on the staff (equivalent to gabc 'g'). Positive numbers go up
    // the staff, and negative numbers go down, i.e., 1 is gabc 'h', 2 is gabc 'i', -1 is gabc 'f', etc.
    this.staffPosition = 0;
    this.liquescent = LiquescentType.None;
    this.shape = NoteShape.Default;
    this.shapeModifiers = NoteShapeModifiers.None;

    // notes keep track of the neume they belong to in order to facilitate layout
    // this.neume gets set when a note is added to a neume via Neume.addNote()
    this.neume = null;

    // various markings that can exist on a note, organized by type
    // for faster access and simpler code logic
    this.epismata = [];
    this.morae = []; // silly to have an array of these, but gabc allows multiple morae per note!

    // these are set on the note when they are needed, otherwise, they're undefined
    // this.ictus
    // this.accuteAccent
    // this.braceStart
    // this.braceEnd
  }

  setGlyph(ctxt, glyphCode) {
    if (this.glyphVisualizer)
      this.glyphVisualizer.setGlyph(ctxt, glyphCode);
    else
      this.glyphVisualizer = new GlyphVisualizer(ctxt, glyphCode);

    this.glyphVisualizer.setStaffPosition(ctxt, this.staffPosition);

    // assign glyphvisualizer metrics to this note
    this.bounds.x = this.glyphVisualizer.bounds.x;
    this.bounds.y = this.glyphVisualizer.bounds.y;
    this.bounds.width = this.glyphVisualizer.bounds.width;
    this.bounds.height = this.glyphVisualizer.bounds.height;

    this.origin.x = this.glyphVisualizer.origin.x;
    this.origin.y = this.glyphVisualizer.origin.y;
  }

  // a utility function for modifiers
  shapeModifierMatches(shapeModifier) {
    if (shapeModifier === NoteShapeModifiers.None)
      return this.shapeModifier === NoteShapeModifiers.None;
    else
      return this.shapeModifier & shapeModifier !== 0;
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

  constructor(staffPosition, octave, defaultAccidental = null) {
    super();

    this.isClef = true;
    this.staffPosition = staffPosition;
    this.octave = octave;
    this.defaultAccidental = defaultAccidental;
    this.activeAccidental = defaultAccidental;
  }

  resetAccidentals() {
    this.activeAccidental = this.defaultAccidental;
  }

  pitchToStaffPosition(pitch) {

  }

  performLayout(ctxt) {

    ctxt.activeClef = this;

    if (this.defaultAccidental)
      this.defaultAccidental.performLayout(ctxt);

    super.performLayout(ctxt);
  }

  finishLayout(ctxt) {

    // if we have a default accidental, then add a glyph for it now
    if (this.defaultAccidental) {
      var accidentalGlyph = this.defaultAccidental.createGlyphVisualizer(ctxt);
      accidentalGlyph.bounds.x += this.visualizers[0].bounds.right() + ctxt.intraNeumeSpacing;
      this.addVisualizer(accidentalGlyph);
    }

    super.finishLayout(ctxt);
  }

  static default() {
    return __defaultDoClef;
  }
}

export class DoClef extends Clef {

  constructor(staffPosition, octave, defaultAccidental = null) {
    super(staffPosition, octave, defaultAccidental);

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

    if (this.defaultAccidental !== null && step === this.defaultAccidental.step)
      step += this.defaultAccidental.accidentalType;

    return new Pitch(step, this.octave + octaveOffset);
  }

  performLayout(ctxt) {
    super.performLayout(ctxt);

    var glyph = new GlyphVisualizer(ctxt, GlyphCode.DoClef);
    glyph.setStaffPosition(ctxt, this.staffPosition);
    this.addVisualizer(glyph);

    this.finishLayout(ctxt);
  }

  clone() {
    return new DoClef(this.staffPosition, this.octave, this.defaultAccidental);
  }
}

var __defaultDoClef = new DoClef(1, 2);

export class FaClef extends Clef {

  constructor(staffPosition, octave, defaultAccidental = null) {
    super(staffPosition, octave, defaultAccidental);

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

    if (step === Step.Ti && this.defaultAccidental === AccidentalType.Flat)
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
    return new FaClef(this.staffPosition, this.octave, this.defaultAccidental);
  }
}

/*
 * TextOnly
 */
export class TextOnly extends ChantNotationElement {

  constructor() {
    super();
  }

  performLayout(ctxt) {
    super.performLayout(ctxt);

    // add an empty glyph as a placeholder
    this.addVisualizer(new GlyphVisualizer(ctxt, GlyphCode.None));

    this.origin.x = 0;
    this.origin.y = 0;

    this.finishLayout(ctxt);
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

// a chant mapping is a lightweight format independent way of
// tracking how a chant language (e.g., gabc) has been
// mapped to exsurge notations.
export class ChantMapping {

  // source can be any object type. in the case of gabc, source is a text
  // string that maps to a gabc word (e.g.: "no(g)bis(fg)").
  // notations is an array of ChantNotationElements
  constructor(source, notations) {
    this.source = source;
    this.notations = notations;
  }
}


/*
 * Score, document
 */
export class ChantScore {

  // mappings is an array of ChantMappings.
  constructor(ctxt, mappings = [], useDropCap) {

    this.mappings = mappings;

    this.lines = [];
    this.notes = [];

    this.startingClef = null;

    this.useDropCap = useDropCap;
    this.dropCap = null;

    this.annotation = null;

    this.compiled = false;

    this.autoColoring = true;
    this.needsLayout = true;

    // valid after chant lines are created...
    this.bounds = new Rect();

    this.updateNotations(ctxt);
  }

  updateNotations(ctxt) {

    var i;

    // flatten all mappings into one array for N(0) access to notations
    this.notations = [];
    for(i = 0; i < this.mappings.length; i++)
      this.notations = this.notations.concat(this.mappings[i].notations);

    // find the starting clef...
    // start with a default clef in case the notations don't provide one.
    this.startingClef = null;
    var defaultClef = new DoClef(1, 2);

    for (i = 0; i < this.notations.length; i++) {

      // if there are neumes before the clef, then we just keep the default clef above
      if (this.notations[i].isNeume) {
        this.startingClef = defaultClef;
        break;        
      }

      // otherwise, if we find a clef, before neumes then we use that as our default
      if (this.notations[i].isClef) {
        this.startingClef = this.notations[i];

        // the clef is taken out of the notations...
        this.notations.splice(i, 1); // remove a single notation

        break;
      }
    }

    // if we've reached this far and we *still* don't have a clef, then there aren't even
    // any neumes in the score. still, set the default clef just for good measure
    if (!this.startingClef)
      this.startingClef = defaultClef;

    // update drop cap
    if (this.useDropCap)
      this.recreateDropCap(ctxt);

    this.needsLayout = true;
  }

  recreateDropCap(ctxt) {

    // find the first notation with lyrics to use
    for (var i = 0; i < this.notations.length; i++) {
      if (this.notations[i].hasLyrics() && this.notations[i].lyrics[0] !== null) {
        this.dropCap = this.notations[i].lyrics[0].generateDropCap(ctxt);
        return;
      }
    } 
  }

  // this is the the synchronous version of performLayout that
  // process everything without yielding to any other workers/threads.
  // good for server side processing or very small chant pieces.
  performLayout(ctxt) {

    if (this.needsLayout === false)
      return; // nothing to do here!

    // setup the context
    ctxt.activeClef = this.startingClef;
    ctxt.notations = this.notations;
    ctxt.currNotationIndex = 0;

    if (this.dropCap)
      this.dropCap.recalculateMetrics(ctxt);

    if (this.annotation)
      this.annotation.recalculateMetrics(ctxt);

    for (var i = 0; i < this.notations.length; i++) {
      this.notations[i].performLayout(ctxt);
      ctxt.currNotationIndex++;
    }

    this.needsLayout = false;
  }

  // for web applications, probably performLayoutAsync would be more
  // apppropriate that the above performLayout, since it will process
  // the notations without locking up the UI thread.
  performLayoutAsync(ctxt, finishedCallback) {

    if (this.needsLayout === false) {
      if (finishedCallback)
        setTimeout(() => finishedCallback(), 0);

      return; // nothing to do here!
    }

    // setup the context
    ctxt.activeClef = this.startingClef;
    ctxt.notations = this.notations;
    ctxt.currNotationIndex = 0;

    if (this.dropCap)
      this.dropCap.recalculateMetrics(ctxt);

    if (this.annotation)
      this.annotation.recalculateMetrics(ctxt);

    setTimeout(() => this.layoutElementsAsync(ctxt, 0, finishedCallback), 0);
  }

  layoutElementsAsync(ctxt, index, finishedCallback) {

    if (index >= this.notations.length) {
      this.needsLayout = false;

      if (finishedCallback)
        setTimeout(() => finishedCallback(), 0);

      return;
    }

    if (index === 0)
      ctxt.activeClef = this.startingClef;

    var timeout = new Date().getTime() + 50; // process for fifty milliseconds
    do {
      var notation = this.notations[index];
      if (notation.needsLayout) {
        ctxt.currNotationIndex = index;
        notation.performLayout(ctxt);
      }

      index++;

    } while (index < this.notations.length && new Date().getTime() < timeout);

    // schedule the next block of processing
    setTimeout(() => this.layoutElementsAsync(ctxt, index, finishedCallback), 0);
  }

  layoutChantLines(ctxt, width, finishedCallback) {

    this.lines = [];

    var y = 0;
    var currIndex = 0;

    ctxt.activeClef = this.startingClef;

    do {

      var line = new ChantLine(this);

      line.buildFromChantNotationIndex(ctxt, currIndex, width);
      currIndex = line.notationsStartIndex + line.numNotationsOnLine;
      line.performLayout(ctxt);
      this.lines.push(line);

      line.bounds.y = -line.bounds.y + y;
      y += line.bounds.height + ctxt.staffInterval * 1.5;

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

    var i, drawable = "";

    // create defs section
    for (var def in ctxt.defs)
      if (ctxt.defs.hasOwnProperty(def))
        drawable += ctxt.defs[def];

    drawable = QuickSvg.createFragment('defs', {}, drawable);

    for (i = 0; i < this.lines.length; i++)
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

  unserializeFromJson(data) {
    this.autoColoring = data['auto-coloring'];

    if (data.annotation !== null && data.annotation !== "") {
      // create the annotation
      this.annotation = new Annotation(ctxt, data.annotation);
    } else
      this.annotation = null;

    var createDropCap = data['drop-cap'] === 'auto' ? true : false;

    Gabc.parseChantNotations(data.notations, this, createDropCap);
  }

  serializeToJson() {
    var data = {};

    data['type'] = "score";
    data['auto-coloring'] = true;

    if (this.annotation !== null)
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
          'margin-bottom': 0
        }
      },
      scores: []
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
        'margin-bottom': from.layout.page['margin-bottom']
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
