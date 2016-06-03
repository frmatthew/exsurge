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
import { QuickSvg, ChantLayoutElement, GlyphVisualizer, RoundBraceVisualizer, CurlyBraceVisualizer, Lyric, DropCap } from 'Exsurge.Drawing'
import { ChantLineBreak } from 'Exsurge.Chant'
import { Glyphs } from 'Exsurge.Glyphs'
import { Custos } from 'Exsurge.Chant.Signs'
import { MarkingPositionHint, HorizontalEpisemaAlignment, HorizontalEpisema, BraceShape, BracePoint } from 'Exsurge.Chant.Markings'


// a chant line represents one staff line on the page. ChantLines are created by the score
// and laid out by the page
export class ChantLine extends ChantLayoutElement {

  constructor(score) {
    super();

    this.score = score;

    this.notationsStartIndex = 0;
    this.numNotationsOnLine = 0;
    this.notationBounds = null; // Rect

    this.staffLeft = 0;
    this.staffRight = 0;

    this.startingClef = null; // necessary for the layout process
    this.custos = null;

    this.justify = true;

    // these are markings that exist at the chant line level rather than at the neume level.
    this.ledgerLines = [];
    this.braces = [];

    this.nextLine = null;
    this.previousLine = null; // for layout assistance

    this.lyricLineHeights = []; // height of each text line
    this.lyricLineBaselines = []; // offsets from the top of the text line to the baseline

    // fixme: make these configurable values from the score
    this.spaceAfterNotations = 0; // the space between the notation bounds and the first text track
    this.spaceBetweenTextTracks = 0; // spacing between each text track
  }

  performLayout(ctxt) {

    // start off with a rectangle that holds at least the four staff lines
    // we fudge the 3 to 3.1 so that the svg doesn't crop off the upper/lower staff lines...
    this.notationBounds = new Rect(this.staffLeft, -3.1 * ctxt.staffInterval,
      this.staffRight - this.staffLeft, 6.2 * ctxt.staffInterval);

    // run through all the elements of the line and calculate the bounds of the notations,
    // as well as the bounds of each text track we will use
    var i;
    var notations = this.score.notations;
    var lastIndex = this.notationsStartIndex + this.numNotationsOnLine;
    var notation = null;

    this.notationBounds.union(this.startingClef.bounds);

    // reset the lyric line offsets before we [re]calculate them now
    this.lyricLineHeights = [];
    this.lyricLineBaselines = [];

    for (i = this.notationsStartIndex; i < lastIndex; i++) {
      notation = notations[i];

      this.notationBounds.union(notation.bounds);

      // keep track of lyric line offsets
      for (j = 0; j < notation.lyrics.length; j++) {
        if (this.lyricLineHeights.length < j + 1) {
          this.lyricLineHeights.push(0);
          this.lyricLineBaselines.push(0);
        }

        this.lyricLineHeights[j] = Math.max(this.lyricLineHeights[j], notation.lyrics[j].bounds.height);
        this.lyricLineBaselines[j] = Math.max(this.lyricLineBaselines[j], notation.lyrics[j].origin.y);
      }
    }

    if (this.custos)
      this.notationBounds.union(this.custos.bounds);

    // finalize the lyrics placement
    for (i = this.notationsStartIndex; i < lastIndex; i++) {
      notation = notations[i];

      var offset = this.notationBounds.y + this.notationBounds.height;

      for (var j = 0; j < notation.lyrics.length; j++) {
        notation.lyrics[j].bounds.y = offset + this.lyricLineBaselines[j];
        offset += this.lyricLineHeights[j];
      }
    }

    // add any braces to the notationBounds as well
    for (i = 0; i < this.braces.length; i++)
      this.notationBounds.union(this.braces[i].bounds);

    var totalHeight = this.notationBounds.height;

    // add up the lyric line heights to get the total height of the chant line
    for (i = 0; i < this.lyricLineHeights.length; i++)
      totalHeight += this.lyricLineHeights[i];

    // dropCap and the annotations
    if (this.notationsStartIndex === 0) {

      if (this.score.dropCap !== null) {

        var dropCapY;
        if (this.lyricLineHeights.length > 0) {
          dropCapY = this.notationBounds.y + this.notationBounds.height + this.lyricLineBaselines[0];
        } else
          dropCapY = this.notationBounds.y + this.notationBounds.height;

        // drop caps and annotations are drawn from their center, so aligning them
        // horizontally is as easy as this.staffLeft / 2
        this.score.dropCap.bounds.x = this.staffLeft / 2;
        this.score.dropCap.bounds.y = dropCapY;
      }

      if (this.score.annotation !== null) {
        // annotations use dominant-baseline to align text to the top
        this.score.annotation.bounds.x = this.staffLeft / 2;
        this.score.annotation.bounds.y =  - ctxt.staffInterval * 3;
      }
    }

    this.notationBounds.height += ctxt.lyricTextSize;

    this.bounds.x = 0;
    this.bounds.y = this.notationBounds.y;
    this.bounds.width = this.notationBounds.right();
    this.bounds.height = totalHeight;

    // the origin of the chant line's coordinate space is at the center line of the left extremity of the staff
    this.origin = new Point(this.staffLeft, -this.notationBounds.y);
  }

  draw(ctxt) {

    var canvasCtxt = ctxt.canvasCtxt;

    canvasCtxt.translate(this.bounds.x, this.bounds.y);

    // draw the chant lines
    var i, x1 = this.staffLeft, x2 = this.staffRight, y;

    canvasCtxt.lineWidth = Math.round(ctxt.staffLineWeight);
    canvasCtxt.strokeStyle = ctxt.staffLineWeight;

    for (i = -3; i <= 3; i += 2) {

      y = Math.round(ctxt.staffInterval * i) + 0.5;

      canvasCtxt.beginPath();
      canvasCtxt.moveTo(x1, y);
      canvasCtxt.lineTo(x2, y);
      canvasCtxt.stroke();
    }

    // draw the ledger lines
    for (i = 0; i < this.ledgerLines.length; i++) {

      var ledgerLine = this.ledgerLines[i];
      y = ctxt.calculateHeightFromStaffPosition(ledgerLine.staffPosition);

      canvasCtxt.beginPath();
      canvasCtxt.moveTo(ledgerLine.x1, y);
      canvasCtxt.lineTo(ledgerLine.x2, y);
      canvasCtxt.stroke();
    }

    // fixme: draw the braces

    // draw the dropCap and the annotations
    if (this.notationsStartIndex === 0) {

      if (this.score.dropCap !== null)
        this.score.dropCap.draw(ctxt);

      if (this.score.annotation !== null)
        this.score.annotation.draw(ctxt);
    }

    // draw the notations
    var notations = this.score.notations;
    var lastIndex = this.notationsStartIndex + this.numNotationsOnLine;

    for (i = this.notationsStartIndex; i < lastIndex; i++)
      notations[i].draw(ctxt);

    this.startingClef.draw(ctxt);

    if (this.custos)
      this.custos.draw(ctxt);

    canvasCtxt.translate(-this.bounds.x, -this.bounds.y);
  }

  createSvgFragment(ctxt) {
    var inner = "";

    // add the chant lines
    var i, x1 = this.staffLeft, x2 = this.staffRight;

    // create the staff lines
    for (i = -3; i <= 3; i += 2) {

      inner += QuickSvg.createFragment('line', {
        'x1': x1,
        'y1': ctxt.staffInterval * i,
        'x2': x2,
        'y2': ctxt.staffInterval * i,
        'stroke': ctxt.staffLineColor,
        'stroke-width': ctxt.staffLineWeight,
        'class': 'staffLine'
      });
    }

    // create the ledger lines
    for (i = 0; i < this.ledgerLines.length; i++) {

      var ledgerLine = this.ledgerLines[i];
      var y = ctxt.calculateHeightFromStaffPosition(ledgerLine.staffPosition);

      inner += QuickSvg.createFragment('line', {
        'x1': ledgerLine.x1,
        'y1': y,
        'x2': ledgerLine.x2,
        'y2': y,
        'stroke': ctxt.staffLineColor,
        'stroke-width': ctxt.staffLineWeight,
        'class': 'ledgerLine'
      });
    }

    // add any braces
    for (i = 0; i < this.braces.length; i++)
      inner += this.braces[i].createSvgFragment(ctxt);

    // dropCap and the annotations
    if (this.notationsStartIndex === 0) {

      if (this.score.dropCap !== null)
        inner += this.score.dropCap.createSvgFragment(ctxt);

      if (this.score.annotation !== null)
          inner += this.score.annotation.createSvgFragment(ctxt);
    }

    inner += this.startingClef.createSvgFragment(ctxt);

    var notations = this.score.notations;
    var lastIndex = this.notationsStartIndex + this.numNotationsOnLine;

    // add all of the notations
    for (i = this.notationsStartIndex; i < lastIndex; i++)
      inner += notations[i].createSvgFragment(ctxt);

    if (this.custos)
      inner += this.custos.createSvgFragment(ctxt);

    return QuickSvg.createFragment('g', {
      'class': 'chantLine',
      'transform': 'translate(' + this.bounds.x + ',' + this.bounds.y + ')'
    }, inner);
  }

  // code below based on code by: https://gist.github.com/alexhornbake
  //
  // optimized for braces that are only drawn horizontally.
  // returns svg path string ready to insert into svg doc
  generateCurlyBraceDrawable(ctxt, x1, x2, y, isAbove) {

    var h;

    if (isAbove)
      h = -ctxt.staffInterval / 2;
    else
      h = ctxt.staffInterval / 2;

    // and q factor, .5 is normal, higher q = more expressive bracket 
    var q = 0.6;

    var dx = -1;
    var len = x2 - x1;

    //Calculate Control Points of path,
    var qx1 = x1;
    var qy1 = y  + q*h;
    var qx2 = x1 + .25*len;
    var qy2 = y  + (1-q)*h;
    var tx1 = x1 + .5*len;
    var ty1 = y  + h;
    var qx3 = x2;
    var qy3 = y  + q*h;
    var qx4 = x1 + .75*len;
    var qy4 = y  + (1-q)*h;
    var d   =  ( "M " +  x1 + " " +  y +
            " Q " + qx1 + " " + qy1 + " " + qx2 + " " + qy2 + 
            " T " + tx1 + " " + ty1 +
            " M " +  x2 + " " +  y +
            " Q " + qx3 + " " + qy3 + " " + qx4 + " " + qy4 + 
            " T " + tx1 + " " + ty1);

    return QuickSvg.createFragment('path', {
      'd': d,
      'stroke': ctxt.neumeLineColor,
      'stroke-width': ctxt.neumeLineWeight + 'px',
      'fill': 'none'
    });
  }


  buildFromChantNotationIndex(ctxt, newElementStart, width) {

    // todo: reset / clear the children we have in case they have data
    var notations = this.score.notations;
    this.notationsStartIndex = newElementStart;
    this.numNotationsOnLine = 0;

    this.staffLeft = 0;

    if (width > 0)
      this.staffRight = width;
    else
      this.staffRight = 99999999; // no limit to staff size

    // If this is the first chant line, then we have to make room for a
    // drop cap and/or annotation, if present
    if (this.notationsStartIndex === 0) {

      var padding = 0;

      if (this.score.dropCap !== null)
        padding = this.score.dropCap.bounds.width + this.score.dropCap.padding * 2;

      if (this.score.annotation !== null)
        padding = Math.max(padding, this.score.annotation.bounds.width + this.score.annotation.padding * 4);

      this.staffLeft += padding;
    }

    // set up the clef...
    // if the first notation on the line is a starting clef, then we treat it a little differently...
    // the clef becomes this line's starting clef and we skip over the clef in the notations array
    if (notations[newElementStart].isClef) {
      ctxt.activeClef = notations[newElementStart].clone();
      newElementStart++;
      this.notationsStartIndex++;
    }

    // make a copy for this line to use at the beginning
    this.startingClef = ctxt.activeClef.clone();
    this.startingClef.performLayout(ctxt);
    this.startingClef.bounds.x = this.staffLeft;

    var curr = this.startingClef, prev = null, prevWithLyrics = null;

    // estimate how much space we have available to us
    var rightNotationBoundary = this.staffRight - Glyphs.CustosLong.bounds.width * ctxt.glyphScaling - ctxt.intraNeumeSpacing * 4; // possible custos on the line

    // iterate through the notations, fittng what we can on this line
    var i, j, lastNotationIndex = notations.length - 1;


    for (i = newElementStart; i <= lastNotationIndex; i++) {

      if (curr.hasLyrics())
        prevWithLyrics = curr;

      prev = curr;
      curr = notations[i];
      
      var actualRightBoundary;
      if(i === lastNotationIndex) {
        // on the last notation of the score, we don't need a custos or trailing space, so we use staffRight as the
        // right boundary.
        actualRightBoundary = this.staffRight;
      } else if (i === lastNotationIndex - 1) {
        // on the penultimate notation, make sure there is at least enough room for whichever takes up less space,
        // between the final notation and a custos:
        actualRightBoundary = Math.max(rightNotationBoundary, this.staffRight - notations[lastNotationIndex].bounds.width);
      } else {
        // Otherwise, we use rightNotationBoundary, which leaves room for a custos...
        actualRightBoundary = rightNotationBoundary;
      }

      // try to fit the curr element on this line.
      // if it doesn't fit, we finish up here.
      var fitsOnLine = this.positionNotationElement(ctxt, prevWithLyrics, prev, curr, actualRightBoundary);
      if (fitsOnLine === false) {

        // check if the prev elements want to be kept with this one
        for (j = i - 1; j > this.notationsStartIndex; j--) {
          var cne = notations[j];

          if (cne.keepWithNext === true || (j === i - 1 && curr.isDivider))
            this.numNotationsOnLine--;
          else
            break;
        }

        // we are at the end of the line!
        break;
      }

      curr.chantLine = this;
      this.numNotationsOnLine++;

      if (curr.isClef)
        ctxt.activeClef = curr;

      // line breaks are a special case indicating to stop processing here
      if (curr.constructor.name === ChantLineBreak.name && width > 0) {
        this.justify = curr.justify;
        break;
      }
    }

    // create the automatic custos at the end of the line if there are neumes left in the notations
    for (i = this.notationsStartIndex + this.numNotationsOnLine; i < notations.length; i++) {
      var notation = notations[i];

      if (notation.isNeume) {

        this.custos = new Custos(true);
        ctxt.currNotationIndex = i - 1; // make sure the context knows where the custos is 
        this.custos.performLayout(ctxt);

        // Put the custos at the very end of the line
        this.custos.bounds.x = this.staffRight - this.custos.bounds.width - this.custos.leadingSpace;

        // nothing more to see here...
        break;
      }
    }

    // if the provided width is less than zero, then set the width of the line
    // based on the last notation
    var last = notations[this.notationsStartIndex + this.numNotationsOnLine - 1];
    if (width <= 0) {
      this.staffRight = last.bounds.right();
      this.justify = false;
    } else if (this.notationsStartIndex + this.numNotationsOnLine === notations.length) {
      // this is the last chant line.
      this.justify = true;
      this.justify = last.isDivider && ((this.staffRight - last.bounds.right()) / this.staffRight < .1);
    }
    
    // Justify the line if we need to
    if (this.justify === true)
      this.justifyElements();

    this.finishLayout(ctxt);
  }

  justifyElements() {

    var i;
    var toJustify = [];
    var notations = this.score.notations;
    var lastIndex = this.notationsStartIndex + this.numNotationsOnLine;

    // first step of justification is to determine how much space we have to use up
    var extraSpace = 0;

    if (this.numNotationsOnLine > 0) {
      var last = notations[lastIndex - 1], lastWithLyrics = null;

      for (i = lastIndex - 1; i >= this.notationsStartIndex; i--) {
        if (notations[i].hasLyrics()) {
          lastWithLyrics = notations[i];
          break;
        }
      }

      if (lastWithLyrics)
        extraSpace = this.staffRight - Math.max(lastWithLyrics.getAllLyricsRight(), last.bounds.right() + last.trailingSpace);
      else
        extraSpace = this.staffRight - (last.bounds.right() + last.trailingSpace);  
    }

    if (this.custos)
      extraSpace -= this.custos.bounds.width + this.custos.leadingSpace;

    if (extraSpace <= 0)
      return;

    var prev = null, curr = null, prevWithLyrics = null;

    // first pass: determine the neumes we can space apart
    for (i = this.notationsStartIndex; i < lastIndex; i++) {

      if (curr !== null && curr.hasLyrics())
        prevWithLyrics = curr;

      prev = curr;
      curr = notations[i];

      if (prev !== null && prev.keepWithNext === true)
        continue;

      if (prevWithLyrics !== null && prevWithLyrics.lyrics[0].allowsConnector() && !prevWithLyrics.lyrics[0].needsConnector)
        continue;

      if (curr.constructor.name === ChantLineBreak.name)
        continue;

      // otherwise, we can add space before this element
      toJustify.push(curr);
    }

    if (toJustify.length === 0)
      return;

    var offset = 0;
    var increment = extraSpace / toJustify.length;
    var toJustifyIndex = 0;
    for (i = this.notationsStartIndex; i < lastIndex; i++) {

      curr = notations[i];

      if (toJustifyIndex < toJustify.length && toJustify[toJustifyIndex] === curr) {
        offset += increment;
        toJustifyIndex++;
      }

      curr.bounds.x += offset;
    }
  }

  finishLayout(ctxt) {

    this.ledgerLines = []; // clear any existing ledger lines

    var notations = this.score.notations;
    var lastIndex = this.notationsStartIndex + this.numNotationsOnLine;

    // an element needs to have a staffPosition property, as well as the standard
    // bounds property. so it could be a note, or it could be a custos
    // offsetX and offsetY can be used to add to the position info for the element,
    // useful in the case of notes.
    var processElementForLedgerLine = (element, offsetX = 0, offsetY = 0) => {

      // do we need a ledger line for this note?
      var staffPosition = element.staffPosition;

      if (staffPosition >= 5 || staffPosition <= -5) {

        var x1 = offsetX + element.bounds.x - ctxt.intraNeumeSpacing;
        var x2 = offsetX + element.bounds.x + element.bounds.width + ctxt.intraNeumeSpacing;

        // round the staffPosition to the nearest line
        if (staffPosition > 0)
          staffPosition = staffPosition - (staffPosition - 1) % 2;
        else
          staffPosition = staffPosition - (staffPosition + 1) % 2;

        // if we have a ledger line close by, then average out the distance between the two
        var minLedgerSeperation = ctxt.staffInterval * 5;

        if (this.ledgerLines.length > 0 &&
            this.ledgerLines[this.ledgerLines.length - 1].x2 + minLedgerSeperation >= x1) {

          // average out the distance
          var half = (x1 - this.ledgerLines[this.ledgerLines.length - 1].x2) / 2;
          this.ledgerLines[this.ledgerLines.length - 1].x2 += half;
          x1 -= half;
        }

        // never let a ledger line extend past the staff width
        if (x2 > this.staffRight)
          x2 = this.staffRight;

        // finally, add the ledger line
        this.ledgerLines.push({
          x1: x1,
          x2: x2,
          staffPosition: staffPosition
        });
      }
    };

    var epismata = []; // keep track of epismata in case we can connect some
    var startBrace = null, startBraceNotationIndex = 0;
    var minY = Number.MAX_VALUE, maxY = Number.MIN_VALUE; // for braces

    // make a final pass over all of the notes to add any necessary
    // ledger lines and to smooth out epismata
    for (var i = this.notationsStartIndex; i < lastIndex; i++) {

      minY = Math.min(minY, notations[i].bounds.y);
      maxY = Math.max(maxY, notations[i].bounds.bottom());

      if (notations[i].constructor.name === Custos.name) {
        processElementForLedgerLine(notations[i]);
        continue;
      }

      // if it's not a neume then just skip here
      if (!notations[i].isNeume)
        continue;

      var neume = notations[i];

      for (var j = 0; j < neume.notes.length; j++) {
        var k, note = neume.notes[j];

        processElementForLedgerLine(note, neume.bounds.x, neume.bounds.y);

        // blend epismata as we're able
        for (k = 0; k < note.epismata.length; k++) {

          var episema = note.epismata[k];

          var spaceBetweenEpismata = 0;

          // calculate the distance between the last epismata and this one...
          // lots of code for a simple: currEpismata.left - prevEpismata.right
          if (epismata.length > 0)
            spaceBetweenEpismata = neume.bounds.x + episema.bounds.x - (epismata[epismata.length - 1].note.neume.bounds.x + epismata[epismata.length - 1].bounds.right());

          // we try to blend the episema if we're able.
          if (epismata.length === 0 ||
              epismata[epismata.length - 1].positionHint !== episema.positionHint ||
              epismata[epismata.length - 1].terminating === true ||
              epismata[epismata.length - 1].alignment === HorizontalEpisemaAlignment.Left ||
              episema.alignment === HorizontalEpisemaAlignment.Right ||
              spaceBetweenEpismata > ctxt.intraNeumeSpacing * 2) {

            // start a new set of epismata to potentially blend
            epismata = [];
            epismata.push(episema);
          } else {
            // blend all previous with this one
            var newY;

            if (episema.positionHint === MarkingPositionHint.Below)
              newY = Math.max(episema.bounds.y, epismata[epismata.length - 1].bounds.y);
            else
              newY = Math.min(episema.bounds.y, epismata[epismata.length - 1].bounds.y);

            if (episema.bounds.y !== newY)
              episema.bounds.y = newY;
            else {
              for (var l = 0; l < epismata.length; l++)
                epismata[l].bounds.y = newY;
            }

            // extend the last episema to meet the new one
            var newWidth = (neume.bounds.x + episema.bounds.x) - (epismata[epismata.length - 1].note.neume.bounds.x + epismata[epismata.length - 1].bounds.x);
            epismata[epismata.length - 1].bounds.width = newWidth;

            epismata.push(episema);
          }
        }

        if (note.braceEnd) {

          // calculate the y value of the brace by iterating over all notations
          // under/over the brace.
          var y;
          var dy = ctxt.intraNeumeSpacing / 2; // some safe space between brace and notes.
          if (startBrace.isAbove) {
            y = ctxt.calculateHeightFromStaffPosition(4);
            for (k = startBraceNotationIndex; k <= i; k++)
              y = Math.min(y, notations[k].bounds.y - dy);
          } else {
            y = ctxt.calculateHeightFromStaffPosition(-4);
            for (k = startBraceNotationIndex; k <= i; k++)
              y = Math.max(y, notations[k].bounds.y + dy);
          }

          if (startBrace === null) {
            // fixme: this brace must have started on the previous line...what to do here, draw half a brace?
          } else {
            var addAcuteAccent = false;

            if (startBrace.shape === BraceShape.RoundBrace) {

              this.braces.push(new RoundBraceVisualizer(ctxt,
                startBrace.getAttachmentX(),
                note.braceEnd.getAttachmentX(),
                y,
                startBrace.isAbove));

            } else {

              if (startBrace.shape === BraceShape.AccentedCurlyBrace)
                addAcuteAccent = true;

              this.braces.push(new CurlyBraceVisualizer(ctxt,
                startBrace.getAttachmentX(),
                note.braceEnd.getAttachmentX(),
                y,
                startBrace.isAbove,
                addAcuteAccent));
            }
          }
        }

        if (note.braceStart) {
          startBrace = note.braceStart;
          startBraceNotationIndex = i;
        }

        // update the active brace y position if there is one
        if (startBrace !== null) {
          if (startBrace.isAbove)
            startBrace.bounds.y = Math.min(startBrace.bounds.y, note.bounds.y);
          else
            startBrace.bounds.y = Math.max(startBrace.bounds.y, note.bounds.bottom());
        }
      }
    }

    // if we still have an active brace, that means it spands two chant lines!
    if (startBrace !== null) {
      startBrace = startBrace;
    }

    // don't forget to also include the final custos, which may need a ledger line too
    if (this.custos)
      processElementForLedgerLine(this.custos);
  }


  // this is where the real core of positioning neumes takes place
  // returns true if positioning was able to fit the neume before rightNotationBoundary.
  // returns false if cannot fit before given right margin.
  // fixme: if this returns false, shouldn't we set the connectors on prev to be activated?!
  positionNotationElement(ctxt, prevWithLyrics, prev, curr, rightNotationBoundary) {

    var i;

    // To begin we just place the current notation right after the previous,
    // irrespective of lyrics.
    curr.bounds.x = prev.bounds.right() + prev.trailingSpace;

    // if the previous notation has no lyrics, then we simply make sure the
    // current notation with lyrics is in the bounds of the line
    if (prevWithLyrics === null) {

      var maxRight = curr.bounds.right() + curr.trailingSpace;

      // if the lyric left is negative, then offset the neume appropriately
      for (i = 0; i < curr.lyrics.length; i++) {

        curr.lyrics[i].setNeedsConnector(false); // we hope for the best!

        if (curr.getLyricLeft(i) < 0)
          curr.bounds.x += -curr.getLyricLeft(i);

        maxRight = Math.max(maxRight, curr.getLyricRight(i));
      }

      if (maxRight > rightNotationBoundary)
        return false;
      else
        return true;
    }

    // if the curr notation has no lyrics, then we force the prev notation
    // with lyrics to have syllable connectors.
    if (curr.hasLyrics() === false) {

      for (i = 0; i < prevWithLyrics.lyrics.length; i++) {

        if (prevWithLyrics.lyrics[i] !== null && prevWithLyrics.lyrics[i].allowsConnector())
          prevWithLyrics.lyrics[i].setNeedsConnector(true);
      }

      if (curr.bounds.right() + curr.trailingSpace < rightNotationBoundary)
        return true;
      else
        return false;
    }

    // if we have multiple lyrics on the current or the previous notation,
    // then we simplify the process. We don't try to eliminate syllable
    // connectors but we require them on every syllable in the previous
    // notation that permits a connector.
    //
    // A nice (but probably tricky) enhancement would be to combine lyrics
    // when possible, taking into consideration hyphenation of each syllable!
    var lyricCount = Math.max(prevWithLyrics.lyrics.length, curr.lyrics.length);

    if (lyricCount > 1) {

      var prevLyricRightMax = Number.MIN_VALUE;
      var currLyricLeftMin = Number.MAX_VALUE;
      var currLyricRightMax = Number.MIN_VALUE;

      for (i = 0; i < lyricCount; i++) {
          
        if (i < prevWithLyrics.lyrics.length && prevWithLyrics.lyrics[i] !== null) {

          var right = prevWithLyrics.getLyricRight(i);

          if (prevWithLyrics.lyrics[i].allowsConnector()) {
            prevWithLyrics.lyrics[i].setNeedsConnector(true);
            right += prevWithLyrics.lyrics[i].widthWithConnector - prevWithLyrics.lyrics[i].widthWithoutConnector;
          } else
            right += ctxt.minLyricWordSpacing;

          prevLyricRightMax = Math.max(prevLyricRightMax, right);
        }

        if (i < curr.lyrics.length && curr.lyrics[i] !== null) {
          currLyricLeftMin = Math.min(currLyricLeftMin, curr.getLyricLeft(i));
          currLyricRightMax = Math.max(currLyricRightMax, curr.getLyricRight(i));
        }
      }
      
      // if the lyrics overlap, then we need to shift over the current element a bit
      if (prevLyricRightMax > currLyricLeftMin) {
        curr.bounds.x += prevLyricRightMax - currLyricLeftMin;
        currLyricRightMax += prevLyricRightMax - currLyricLeftMin;
      }

      if (curr.bounds.right() < rightNotationBoundary && currLyricRightMax <= this.staffRight)
        return true;
      else {
        curr.bounds.x = 0 ;
        return false;
      }
    }
    
    // handling single lyric lines is a little more nuanced, since we carefully
    // eliminate syllable connectors when we're able...
    curr.lyrics[0].setNeedsConnector(false); // we hope for the best!

    var currLyricLeft = curr.getLyricLeft(0);
    var prevLyricRight = prevWithLyrics.getLyricRight(0);

    if (prevWithLyrics.lyrics[0].allowsConnector() === false) {

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
        prevWithLyrics.lyrics[0].setNeedsConnector(true);
        prevLyricRight = prevWithLyrics.getLyricRight(0);

        if (prevLyricRight > currLyricLeft)
          curr.bounds.x += prevLyricRight - currLyricLeft;
      }
    }

    if (curr.bounds.right() + curr.trailingSpace < rightNotationBoundary &&
        curr.getLyricRight(0) <= this.staffRight)
      return true;

    // if we made it this far, then the element won't fit on this line.
    // set the position of the current element to the beginning of a chant line,
    // and mark the previous lyric as connecting if needed.
    // curr.bounds.x = this.startingClef.bounds.right();

    if (prevWithLyrics.hasLyrics() && prevWithLyrics.lyrics[0].allowsConnector())
      prevWithLyrics.lyrics[0].setNeedsConnector(true);

    return false;
  }
}
