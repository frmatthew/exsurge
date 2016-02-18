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

'use strict';

import { Annotation, ChantContext } from 'Exsurge.Drawing'
import { Gabc } from 'Exsurge.Gabc'

// client side support
var ChantVisualElementPrototype = Object.create(HTMLElement.prototype);

ChantVisualElementPrototype.createdCallback = function() {
  var ctxt = new ChantContext();
  
  ctxt.lyricTextFont = "'Crimson Text', serif";
  ctxt.lyricTextSize *= 1.2;
  ctxt.dropCapTextFont = ctxt.lyricTextFont;
  ctxt.annotationTextFont = ctxt.lyricTextFont;

  var useDropCap = true;
  var useDropCapAttr = this.getAttribute("use-drop-cap");
  if (useDropCapAttr === 'false')
    useDropCap = false;

  var score = Gabc.loadChantScore(ctxt, this.innerText, useDropCap);

  var annotationAttr = this.getAttribute("annotation");
  if (annotationAttr) {
    // add an annotation
    score.annotation = new Annotation(ctxt, annotationAttr);
  }

  var _element = this;

  // perform layout on the chant
  score.performLayout(ctxt, function() {
    score.layoutChantLines(ctxt, 0, function() {
      // render the score to svg code
      _element.innerHTML = score.createDrawable(ctxt);
    });
  });
}

ChantVisualElementPrototype.attachedCallback = function() {
  console.log("Attached a chant-visual");
}

// register the custom element
export var ChantVisualElement = document.registerElement('chant-visual', {
  prototype: ChantVisualElementPrototype
});


export * from 'Exsurge.Core'
export * from 'Exsurge.Text'
export * from 'Exsurge.Glyphs'
export * from 'Exsurge.Drawing'
export * from 'Exsurge.Chant'
export * from 'Exsurge.Chant.Markings'
export * from 'Exsurge.Chant.Signs'
export * from 'Exsurge.Chant.Neumes'
export * from 'Exsurge.Gabc'

