(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("exsurge", [], factory);
	else if(typeof exports === 'object')
		exports["exsurge"] = factory();
	else
		root["exsurge"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

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
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ChantVisualElement = undefined;
	
	var _Exsurge = __webpack_require__(1);
	
	var _loop = function _loop(_key10) {
	  if (_key10 === "default") return 'continue';
	  Object.defineProperty(exports, _key10, {
	    enumerable: true,
	    get: function get() {
	      return _Exsurge[_key10];
	    }
	  });
	};
	
	for (var _key10 in _Exsurge) {
	  var _ret = _loop(_key10);
	
	  if (_ret === 'continue') continue;
	}
	
	var _Exsurge2 = __webpack_require__(2);
	
	var _loop2 = function _loop2(_key11) {
	  if (_key11 === "default") return 'continue';
	  Object.defineProperty(exports, _key11, {
	    enumerable: true,
	    get: function get() {
	      return _Exsurge2[_key11];
	    }
	  });
	};
	
	for (var _key11 in _Exsurge2) {
	  var _ret2 = _loop2(_key11);
	
	  if (_ret2 === 'continue') continue;
	}
	
	var _Exsurge3 = __webpack_require__(3);
	
	var _loop3 = function _loop3(_key12) {
	  if (_key12 === "default") return 'continue';
	  Object.defineProperty(exports, _key12, {
	    enumerable: true,
	    get: function get() {
	      return _Exsurge3[_key12];
	    }
	  });
	};
	
	for (var _key12 in _Exsurge3) {
	  var _ret3 = _loop3(_key12);
	
	  if (_ret3 === 'continue') continue;
	}
	
	var _Exsurge4 = __webpack_require__(4);
	
	var _loop4 = function _loop4(_key13) {
	  if (_key13 === "default") return 'continue';
	  Object.defineProperty(exports, _key13, {
	    enumerable: true,
	    get: function get() {
	      return _Exsurge4[_key13];
	    }
	  });
	};
	
	for (var _key13 in _Exsurge4) {
	  var _ret4 = _loop4(_key13);
	
	  if (_ret4 === 'continue') continue;
	}
	
	var _Exsurge5 = __webpack_require__(5);
	
	var _loop5 = function _loop5(_key14) {
	  if (_key14 === "default") return 'continue';
	  Object.defineProperty(exports, _key14, {
	    enumerable: true,
	    get: function get() {
	      return _Exsurge5[_key14];
	    }
	  });
	};
	
	for (var _key14 in _Exsurge5) {
	  var _ret5 = _loop5(_key14);
	
	  if (_ret5 === 'continue') continue;
	}
	
	var _ExsurgeChant = __webpack_require__(8);
	
	var _loop6 = function _loop6(_key15) {
	  if (_key15 === "default") return 'continue';
	  Object.defineProperty(exports, _key15, {
	    enumerable: true,
	    get: function get() {
	      return _ExsurgeChant[_key15];
	    }
	  });
	};
	
	for (var _key15 in _ExsurgeChant) {
	  var _ret6 = _loop6(_key15);
	
	  if (_ret6 === 'continue') continue;
	}
	
	var _ExsurgeChant2 = __webpack_require__(6);
	
	var _loop7 = function _loop7(_key16) {
	  if (_key16 === "default") return 'continue';
	  Object.defineProperty(exports, _key16, {
	    enumerable: true,
	    get: function get() {
	      return _ExsurgeChant2[_key16];
	    }
	  });
	};
	
	for (var _key16 in _ExsurgeChant2) {
	  var _ret7 = _loop7(_key16);
	
	  if (_ret7 === 'continue') continue;
	}
	
	var _ExsurgeChant3 = __webpack_require__(9);
	
	var _loop8 = function _loop8(_key17) {
	  if (_key17 === "default") return 'continue';
	  Object.defineProperty(exports, _key17, {
	    enumerable: true,
	    get: function get() {
	      return _ExsurgeChant3[_key17];
	    }
	  });
	};
	
	for (var _key17 in _ExsurgeChant3) {
	  var _ret8 = _loop8(_key17);
	
	  if (_ret8 === 'continue') continue;
	}
	
	var _Exsurge6 = __webpack_require__(7);
	
	var _loop9 = function _loop9(_key18) {
	  if (_key18 === "default") return 'continue';
	  Object.defineProperty(exports, _key18, {
	    enumerable: true,
	    get: function get() {
	      return _Exsurge6[_key18];
	    }
	  });
	};
	
	for (var _key18 in _Exsurge6) {
	  var _ret9 = _loop9(_key18);
	
	  if (_ret9 === 'continue') continue;
	}
	
	// client side support
	var ChantVisualElementPrototype = Object.create(HTMLElement.prototype);
	
	ChantVisualElementPrototype.createdCallback = function () {
	  var ctxt = new _Exsurge4.ChantContext();
	
	  ctxt.lyricTextFont = "'Crimson Text', serif";
	  ctxt.lyricTextSize *= 1.2;
	  ctxt.dropCapTextFont = ctxt.lyricTextFont;
	  ctxt.annotationTextFont = ctxt.lyricTextFont;
	
	  var useDropCap = true;
	  var useDropCapAttr = this.getAttribute("use-drop-cap");
	  if (useDropCapAttr === 'false') useDropCap = false;
	
	  var score = _Exsurge6.Gabc.loadChantScore(ctxt, this.innerText, useDropCap);
	
	  var annotationAttr = this.getAttribute("annotation");
	  if (annotationAttr) {
	    // add an annotation
	    score.annotation = new _Exsurge4.Annotation(ctxt, annotationAttr);
	  }
	
	  var _element = this;
	
	  // perform layout on the chant
	  score.performLayout(ctxt, function () {
	    score.layoutChantLines(ctxt, 0, function () {
	      // render the score to svg code
	      _element.innerHTML = score.createDrawable(ctxt);
	    });
	  });
	};
	
	ChantVisualElementPrototype.attachedCallback = function () {
	  console.log("Attached a chant-visual");
	};
	
	// register the custom element
	var ChantVisualElement = exports.ChantVisualElement = document.registerElement('chant-visual', {
	  prototype: ChantVisualElementPrototype
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.DeviceIndependent = DeviceIndependent;
	exports.Centimeters = Centimeters;
	exports.Millimeters = Millimeters;
	exports.Inches = Inches;
	exports.ToCentimeters = ToCentimeters;
	exports.ToMillimeters = ToMillimeters;
	exports.ToInches = ToInches;
	exports.generateRandomGuid = generateRandomGuid;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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
	
	var Units = exports.Units = {
	  // enums
	  DeviceIndepenedent: 0, // device independent units: 96/inch
	  Centimeters: 1,
	  Millimeters: 2,
	  Inches: 3,
	
	  // constants for device independent units (diu)
	  DIU_PER_INCH: 96,
	  DIU_PER_CENTIMETER: 96 / 2.54,
	
	  ToDeviceIndependent: function ToDeviceIndependent(n, inputUnits) {
	    switch (inputUnits) {
	      case Centimeters:
	        return n * DIU_PER_CENTIMETER;
	      case Millimeters:
	        return n * DIU_PER_CENTIMETER / 10;
	      case Inches:
	        return n * DIU_PER_INCH;
	      default:
	        return n;
	    }
	  },
	
	  FromDeviceIndependent: function FromDeviceIndependent(n, outputUnits) {
	    switch (outputUnits) {
	      case Centimeters:
	        return n / DIU_PER_CENTIMETER;
	      case Millimeters:
	        return n / DIU_PER_CENTIMETER * 10;
	      case Inches:
	        return n / DIU_PER_INCH;
	      default:
	        return n;
	    }
	  },
	
	  StringToUnitsType: function StringToUnitsType(s) {
	    switch (s.ToLower()) {
	      case "in":
	      case "inches":
	        return Inches;
	
	      case "cm":
	      case "centimeters":
	        return Centimeters;
	
	      case "mm":
	      case "millimeters":
	        return Millimeters;
	
	      case "di":
	      case "device-independent":
	        return DeviceIndepenedent;
	
	      default:
	        return DeviceIndepenedent;
	    }
	  },
	
	  UnitsTypeToString: function UnitsTypeToString(units) {
	    switch (units) {
	      case Inches:
	        return "in";
	      case Centimeters:
	        return "cm";
	      case Millimeters:
	        return "mm";
	      case DeviceIndepenedent:
	        return "device-independent";
	      default:
	        return "device-independent";
	    }
	  }
	};
	
	function DeviceIndependent(n) {
	  return n;
	}
	
	function Centimeters(n) {
	  return Units.ToDeviceIndependent(n, Units.Centimeters);
	}
	
	function Millimeters(n) {
	  return Units.ToDeviceIndependent(n, Units.Millimeters);
	}
	
	function Inches(n) {
	  return Units.ToDeviceIndependent(n, Units.Inches);
	}
	
	function ToCentimeters(n) {
	  return Units.FromDeviceIndependent(n, Units.Centimeters);
	}
	
	function ToMillimeters(n) {
	  return Units.FromDeviceIndependent(n, Units.Millimeters);
	}
	
	function ToInches(n) {
	  return Units.FromDeviceIndependent(n, Units.Inches);
	}
	
	/*
	 * Point
	 */
	
	var Point = exports.Point = function () {
	  function Point(x, y) {
	    _classCallCheck(this, Point);
	
	    this.x = typeof x !== 'undefined' ? x : 0;
	    this.y = typeof y !== 'undefined' ? y : 0;
	  }
	
	  _createClass(Point, [{
	    key: "clone",
	    value: function clone() {
	      return new Point(this.x, this.y);
	    }
	  }, {
	    key: "equals",
	    value: function equals(point) {
	      return this.x === point.x && this.y === point.y;
	    }
	  }]);
	
	  return Point;
	}();
	
	;
	
	/*
	 * Rect
	 */
	
	var Rect = exports.Rect = function () {
	  function Rect(x, y, width, height) {
	    _classCallCheck(this, Rect);
	
	    this.x = typeof x !== 'undefined' ? x : Infinity;
	    this.y = typeof y !== 'undefined' ? y : Infinity;
	    this.width = typeof width !== 'undefined' ? width : -Infinity;
	    this.height = typeof height !== 'undefined' ? height : -Infinity;
	  }
	
	  _createClass(Rect, [{
	    key: "clone",
	    value: function clone() {
	      return new Rect(this.x, this.y, this.width, this.height);
	    }
	  }, {
	    key: "isEmpty",
	    value: function isEmpty() {
	      return this.x === Infinity && this.y === Infinity && this.width === -Infinity && this.height === -Infinity;
	    }
	
	    // convenience method
	
	  }, {
	    key: "right",
	    value: function right() {
	      return this.x + this.width;
	    }
	  }, {
	    key: "bottom",
	    value: function bottom() {
	      return this.y + this.height;
	    }
	  }, {
	    key: "equals",
	    value: function equals(rect) {
	      return this.x === rect.x && this.y === rect.y && this.width === rect.width && this.height === rect.height;
	    }
	
	    // other can be a Point or a Rect
	
	  }, {
	    key: "contains",
	    value: function contains(other) {
	      if (other instanceof Point) {
	        return other.x >= this.x && other.x <= this.x + this.width && other.y >= this.y && other.y <= this.y + this.height;
	      } else {
	        // better be instance of Rect
	        return this.x <= other.x && this.x + this.width >= other.x + other.width && this.y <= other.y && this.y + this.height >= other.y + other.height;
	      }
	    }
	  }, {
	    key: "union",
	    value: function union(rect) {
	
	      var right = Math.max(this.x + this.width, rect.x + rect.width);
	      var bottom = Math.max(this.y + this.height, rect.y + rect.height);
	
	      this.x = Math.min(this.x, rect.x);
	      this.y = Math.min(this.y, rect.y);
	
	      this.width = right - this.x;
	      this.height = bottom - this.y;
	    }
	  }]);
	
	  return Rect;
	}();
	
	/**
	 * Margins
	 *
	 * @class
	 */
	
	
	var Margins = exports.Margins = function () {
	  function Margins(left, top, right, bottom) {
	    _classCallCheck(this, Margins);
	
	    this.left = typeof left !== 'undefined' ? left : 0;
	    this.top = typeof top !== 'undefined' ? top : 0;
	    this.right = typeof right !== 'undefined' ? right : 0;
	    this.bottom = typeof bottom !== 'undefined' ? bottom : 0;
	  }
	
	  _createClass(Margins, [{
	    key: "clone",
	    value: function clone() {
	      return new Margins(this.left, this.top, this.right, this.bottom);
	    }
	  }, {
	    key: "equals",
	    value: function equals(margins) {
	      return this.left === margins.left && this.top === margins.top && this.right === margins.right && this.bottom === margins.bottom;
	    }
	  }]);
	
	  return Margins;
	}();
	
	;
	
	/**
	 * Size
	 *
	 * @class
	 */
	
	var Size = exports.Size = function () {
	  function Size(width, height) {
	    _classCallCheck(this, Size);
	
	    this.width = typeof width !== 'undefined' ? width : 0;
	    this.height = typeof height !== 'undefined' ? height : 0;
	  }
	
	  _createClass(Size, [{
	    key: "clone",
	    value: function clone() {
	      return new Size(this.width, this.height);
	    }
	  }, {
	    key: "equals",
	    value: function equals(size) {
	      return this.width === size.width && this.height === size.height;
	    }
	  }]);
	
	  return Size;
	}();
	
	;
	
	/*
	 * Pitches, notes
	 */
	var Step = exports.Step = {
	  Do: 0,
	  Du: 1,
	  Re: 2,
	  Me: 3,
	  Mi: 4,
	  Fa: 5,
	  Fu: 6,
	  So: 7,
	  La: 9,
	  Te: 10,
	  Ti: 11
	};
	
	// this little array helps map step values to staff positions. The numeric values of steps
	// correspond to whole step increments (2) or half step increments (1). This gives us the ability
	// to compare pitches precisely, but makes it challenging to place steps on the staff. this little
	// array maps the steps to an incremental position the steps take on the staff line. This works
	// so simply because chant only uses do and fa clefs, and only has a flatted ti (te), making
	// for relatively easy mapping to staff line locations.
	//                         Do Du Re Me Mi Fa Fu So    La Te Ti
	var __StepToStaffPosition = [0, 0, 1, 1, 2, 3, 3, 4, 4, 5, 6, 6];
	var __StaffOffsetToStep = [Step.Do, Step.Re, Step.Mi, Step.Fa, Step.So, Step.La, Step.Ti]; // no accidentals in this one
	
	var Pitch = exports.Pitch = function () {
	  function Pitch(step, octave) {
	    _classCallCheck(this, Pitch);
	
	    this.step = step;
	    this.octave = octave;
	  }
	
	  _createClass(Pitch, [{
	    key: "toInt",
	    value: function toInt() {
	      return this.octave * 12 + this.step;
	    }
	  }, {
	    key: "isHigherThan",
	    value: function isHigherThan(pitch) {
	      return this.toInt() > pitch.toInt();
	    }
	  }, {
	    key: "isLowerThan",
	    value: function isLowerThan(pitch) {
	      return this.toInt() < pitch.toInt();
	    }
	  }, {
	    key: "equals",
	    value: function equals(pitch) {
	      return this.toInt() === pitch.toInt();
	    }
	  }], [{
	    key: "stepToStaffOffset",
	    value: function stepToStaffOffset(step) {
	      return __StepToStaffPosition[step];
	    }
	  }, {
	    key: "staffOffsetToStep",
	    value: function staffOffsetToStep(offset) {
	      while (offset < 0) {
	        offset = __StaffOffsetToStep.length + offset;
	      }return __StaffOffsetToStep[offset % __StaffOffsetToStep.length];
	    }
	  }]);
	
	  return Pitch;
	}();
	
	;
	
	// for positioning markings on notes
	var MarkingPositionHint = exports.MarkingPositionHint = {
	  Default: 0,
	  Above: 1,
	  Below: 2
	};
	
	function generateRandomGuid() {
	  function s4() {
	    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	  }
	  return s4() + s4();
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Spanish = exports.Latin = exports.Language = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //
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
	
	var _Exsurge = __webpack_require__(1);
	
	var Exsurge = _interopRequireWildcard(_Exsurge);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * @class
	 */
	
	var Language = exports.Language = function () {
	  function Language(name) {
	    _classCallCheck(this, Language);
	
	    this.name = typeof name !== 'undefined' ? name : "<unknown>";
	  }
	
	  /**
	   * @param {String} text The string to parsed into words.
	   * @return {Word[]} the resulting parsed words from syllabification
	   */
	
	
	  _createClass(Language, [{
	    key: 'syllabify',
	    value: function syllabify(text) {
	
	      var parsedWords = [];
	
	      if (text == undefined || text == "") return parsedWords;
	
	      // Divide the text into words separated by whitespace
	      var words = text.split(/[\s]+/);
	
	      for (var i = 0, end = words.length; i < end; i++) {
	        parsedWords.push(this.syllabifyWord(words[i]));
	      }return parsedWords;
	    }
	  }]);
	
	  return Language;
	}();
	
	/**
	 * @class
	 */
	
	
	var Latin = exports.Latin = function (_Language) {
	  _inherits(Latin, _Language);
	
	  /**
	   * @constructs
	   */
	
	  function Latin() {
	    _classCallCheck(this, Latin);
	
	    // fixme: should we include 'diphthongs' with accented vowels, e.g., áe?
	    // fixme: ui is only diphthong in the exceptional cases below (according to Wheelock's Latin)
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Latin).call(this, "Latin"));
	
	    _this.diphthongs = ["ae", "au", "oe"];
	
	    // some words that are simply exceptions to standard syllabification rules!
	    var wordExceptions = new Object();
	
	    // ui combos pronounced as dipthongs
	    wordExceptions["huius"] = ["hui", "us"];
	    wordExceptions["cuius"] = ["cui", "us"];
	    wordExceptions["huic"] = ["huic"];
	    wordExceptions["cui"] = ["cui"];
	    wordExceptions["hui"] = ["hui"];
	
	    _this.vowels = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú', 'æ', 'œ', 'ǽ', // no accented œ in unicode?
	    'y']; // y is treated as a vowel; not native to Latin but useful for words borrowed from Greek
	
	    _this.muteConsonantsAndF = ['b', 'c', 'd', 'g', 'p', 't', 'f'];
	
	    _this.liquidConsonants = ['l', 'r'];
	    return _this;
	  }
	
	  // c must be lowercase!
	
	
	  _createClass(Latin, [{
	    key: 'isVowel',
	    value: function isVowel(c) {
	      for (var i = 0, end = this.vowels.length; i < end; i++) {
	        if (this.vowels[i] == c) return true;
	      }return false;
	    }
	
	    /**
	     * f is not a mute consonant, but we lump it together for syllabification
	     * since it is syntactically treated the same way
	     *
	     * @param {String} c The character to test; must be lowercase
	     * @return {boolean} true if c is an f or a mute consonant
	     */
	
	  }, {
	    key: 'isMuteConsonantOrF',
	    value: function isMuteConsonantOrF(c) {
	      for (var i = 0, end = this.muteConsonantsAndF.length; i < end; i++) {
	        if (this.muteConsonantsAndF[i] == c) return true;
	      }return false;
	    }
	
	    /**
	     *
	     * @param {String} c The character to test; must be lowercase
	     * @return {boolean} true if c is a liquid consonant
	     */
	
	  }, {
	    key: 'isLiquidConsonant',
	    value: function isLiquidConsonant(c) {
	      for (var i = 0, end = this.liquidConsonants.length; i < end; i++) {
	        if (this.liquidConsonants[i] == c) return true;
	      }return false;
	    }
	
	    /**
	     *
	     * @param {String} s The string to test; must be lowercase
	     * @return {boolean} true if s is a diphthong
	     */
	
	  }, {
	    key: 'isDiphthong',
	    value: function isDiphthong(s) {
	      for (var i = 0, end = this.diphthongs.length; i < end; i++) {
	        if (this.diphthongs[i] == s) return true;
	      }return false;
	    }
	
	    /**
	     * Rules for Latin syllabification (from Collins, "A Primer on Ecclesiastical Latin")
	     *
	     * Divisions occur when:
	     *   1. After open vowels (those not followed by a consonant) (e.g., "pi-us" and "De-us")
	     *   2. After vowels followed by a single consonant (e.g., "vi-ta" and "ho-ra")
	     *   3. After the first consonant when two or more consonants follow a vowel
	     *      (e.g., "mis-sa", "minis-ter", and "san-ctus").
	     *
	     * Exceptions:
	     *   1. In compound words the consonants stay together (e.g., "de-scribo").
	     *   2. A mute consonant (b, c, d, g, p, t) or f followed by a liquid consonant (l, r)
	     *      go with the succeeding vowel: "la-crima", "pa-tris"
	     *
	     * In addition to these rules, Wheelock's Latin provides this sound exception:
	     *   -  Also counted as single consonants are qu and the aspirates ch, ph,
	     *      th, which should never be separated in syllabification:
	     *      architectus, ar-chi-tec-tus; loquacem, lo-qua-cem.
	     *
	     */
	
	  }, {
	    key: 'syllabifyWord',
	    value: function syllabifyWord(word) {
	      var syllables = [];
	      var haveCompleteSyllable = false;
	      var previousWasVowel = false;
	      var workingString = word.toLowerCase();
	      var startSyllable = 0;
	
	      var c, lookahead, haveLookahead;
	
	      // a helper function to create syllables
	      var makeSyllable = function makeSyllable(length) {
	        if (haveCompleteSyllable) {
	          syllables.push(word.substr(startSyllable, length));
	          startSyllable += length;
	        }
	
	        haveCompleteSyllable = false;
	      };
	
	      for (var i = 0, wordLength = workingString.length; i < wordLength; i++) {
	
	        c = workingString[i];
	
	        // get our lookahead in case we need them...
	        lookahead = '*';
	        haveLookahead = i + 1 < wordLength;
	
	        if (haveLookahead) lookahead = workingString[i + 1];
	
	        var cIsVowel = this.isVowel(c);
	
	        // i is a special case for a vowel. when i is at the beginning
	        // of the word (Iesu) or i is between vowels (alleluia),
	        // then the i is treated as a consonant (y)
	        if (c == 'i') {
	          if (i == 0 && haveLookahead && this.isVowel(lookahead)) cIsVowel = false;else if (previousWasVowel && haveLookahead && this.isVowel(lookahead)) {
	            cIsVowel = false;
	          }
	        }
	
	        if (c == '-') {
	
	          // a hyphen forces a syllable break, which effectively resets
	          // the logic...
	
	          haveCompleteSyllable = true;
	          previousWasVowel = false;
	          makeSyllable(i - startSyllable);
	          startSyllable++;
	        } else if (cIsVowel) {
	
	          // once we get a vowel, we have a complete syllable
	          haveCompleteSyllable = true;
	
	          if (previousWasVowel && !this.isDiphthong(workingString[i - 1] + "" + c)) {
	            makeSyllable(i - startSyllable);
	            haveCompleteSyllable = true;
	          }
	
	          previousWasVowel = true;
	        } else if (haveLookahead) {
	
	          if (c == 'q' && lookahead == 'u' || lookahead == 'h' && (c == 'c' || c == 'p' || c == 't')) {
	            // handle wheelock's exceptions for qu, ch, ph and th
	            makeSyllable(i - startSyllable);
	            i++; // skip over the 'h' or 'u'
	          } else if (previousWasVowel && this.isVowel(lookahead)) {
	              // handle division rule 2
	              makeSyllable(i - startSyllable);
	            } else if (this.isMuteConsonantOrF(c) && this.isLiquidConsonant(lookahead)) {
	              // handle exception 2
	              makeSyllable(i - startSyllable);
	            } else if (haveCompleteSyllable) {
	              // handle division rule 3
	              makeSyllable(i + 1 - startSyllable);
	            }
	
	          previousWasVowel = false;
	        }
	      }
	
	      // if we have a complete syllable, we can add it as a new one. Otherwise
	      // we tack the remaining characters onto the last syllable.
	      if (haveCompleteSyllable) syllables.push(word.substr(startSyllable));else if (startSyllable > 0) syllables[syllables.length - 1] += word.substr(startSyllable);
	
	      return syllables;
	    }
	
	    /**
	     * @param {String} s the string to search
	     * @param {Number} startIndex The index at which to start searching for a vowel in the string
	     * @retuns a custom class with three properties: {found: (true/false) startIndex: (start index in s of vowel segment) length ()}
	     */
	
	  }, {
	    key: 'findVowelSegment',
	    value: function findVowelSegment(s, startIndex) {
	
	      var i, end, index;
	      var workingString = s.toLowerCase();
	
	      // do we have a diphthongs?
	      for (i = 0, end = this.diphthongs.length; i < end; i++) {
	        var d = this.diphthongs[i];
	        index = workingString.indexOf(d, startIndex);
	
	        if (index >= 0) return { found: true, startIndex: index, length: d.length };
	      }
	
	      // no diphthongs. Let's look for single vowels then...
	      for (i = 0, end = this.vowels.length; i < end; i++) {
	        index = workingString.indexOf(this.vowels[i], startIndex);
	
	        if (index >= 0) return { found: true, startIndex: index, length: 1 };
	      }
	
	      // no vowels sets found after startIndex!
	      return { found: false, startIndex: -1, length: -1 };
	    }
	  }]);
	
	  return Latin;
	}(Language);
	
	/**
	 * @class
	 */
	
	
	var Spanish = exports.Spanish = function (_Language2) {
	  _inherits(Spanish, _Language2);
	
	  function Spanish() {
	    _classCallCheck(this, Spanish);
	
	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Spanish).call(this, "Spanish"));
	
	    _this2.vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'á', 'é', 'í', 'ó', 'ú', 'ü'];
	
	    _this2.weakVowels = ['i', 'u', 'ü', 'y'];
	
	    _this2.strongVowels = ['a', 'e', 'o', 'á', 'é', 'í', 'ó', 'ú'];
	
	    _this2.dipthongs = ["ai", "ei", "oi", "ui", "ia", "ie", "io", "iu", "au", "eu", "ou", "ua", "ue", "uo", "ái", "éi", "ói", "úi", "iá", "ié", "ió", "iú", "áu", "éu", "óu", "uá", "ué", "uó", "üe", "üi"];
	
	    _this2.uDipthongExpections = ["gue", "gui", "qua", "que", "qui", "quo"];
	    return _this2;
	  }
	
	  // c must be lowercase!
	
	
	  _createClass(Spanish, [{
	    key: 'isVowel',
	    value: function isVowel(c) {
	      for (var i = 0, end = this.vowels.length; i < end; i++) {
	        if (this.vowels[i] == c) return true;
	      }return false;
	    }
	
	    /**
	     * @param {String} c The character to test; must be lowercase
	     * @return {boolean} true if c is an f or a mute consonant
	     */
	
	  }, {
	    key: 'isWeakVowel',
	    value: function isWeakVowel(c) {
	      for (var i = 0, end = this.weakVowels.length; i < end; i++) {
	        if (this.weakVowels[i] == c) return true;
	      }return false;
	    }
	
	    /**
	     * @param {String} c The character to test; must be lowercase
	     * @return {boolean} true if c is an f or a mute consonant
	     */
	
	  }, {
	    key: 'isStrongVowel',
	    value: function isStrongVowel(c) {
	      for (var i = 0, end = this.strongVowels.length; i < end; i++) {
	        if (this.strongVowels[i] == c) return true;
	      }return false;
	    }
	
	    /**
	     *
	     * @param {String} s The string to test; must be lowercase
	     * @return {boolean} true if s is a diphthong
	     */
	
	  }, {
	    key: 'isDiphthong',
	    value: function isDiphthong(s) {
	      for (var i = 0, end = this.diphthongs.length; i < end; i++) {
	        if (this.diphthongs[i] == s) return true;
	      }return false;
	    }
	  }, {
	    key: 'createSyllable',
	    value: function createSyllable(text) {
	
	      /*
	          var accented = false;
	          var ellidesToNext = false;
	      
	          if (text.length > 0) {
	              
	              if (text[0] == '`') {
	                  accented = true;
	                  text = text.substr(1);
	              }
	      
	              if (text[text.length - 1] == '_') {
	                  ellidesToNext = true;
	                  text = text.substr(0, text.length - 1);
	              }
	          }
	      
	          var s = new Syllable(text);
	      
	          s.isMusicalAccent = accented;
	          s.elidesToNext = ellidesToNext;*/
	
	      return text;
	    }
	
	    /**
	     */
	
	  }, {
	    key: 'syllabifyWord',
	    value: function syllabifyWord(word) {
	
	      var syllables = [];
	
	      var haveCompleteSyllable = false;
	      var previousIsVowel = false;
	      var previousIsStrongVowel = false; // only valid if previousIsVowel == true
	      var startSyllable = 0;
	
	      // fixme: first check for prefixes
	
	      for (i = 0; i < word.length; i++) {
	
	        var c = word[i].toLowerCase();
	
	        if (this.isVowel(c)) {
	
	          // we have a complete syllable as soon as we have a vowel
	          haveCompleteSyllable = true;
	
	          var cIsStrongVowel = this.isStrongVowel(c);
	
	          if (previousIsVowel) {
	            // if we're at a strong vowel, then we finish out the last syllable
	            if (cIsStrongVowel) {
	              if (previousIsStrongVowel) {
	                syllables.push(this.createSyllable(word.substr(startSyllable, i - startSyllable)));
	                startSyllable = i;
	              }
	            }
	          }
	
	          previousIsVowel = true;
	          previousIsStrongVowel = cIsStrongVowel;
	        } else {
	          if (!haveCompleteSyllable) {
	            // do nothing since we don't have a complete syllable yet...
	          } else {
	
	              // handle explicit syllable breaks
	              if (word[i] == '-') {
	                // start new syllable
	                syllables.push(this.createSyllable(word.substr(startSyllable, i - startSyllable)));
	                startSyllable = ++i;
	              } else {
	
	                var numberOfConsonants = 1;
	
	                // count how many more consonants there are
	                for (j = i + 1; j < word.length; j++) {
	                  if (this.isVowel(word[j])) break;
	                  numberOfConsonants++;
	                }
	
	                if (numberOfConsonants == 1) {
	                  // start new syllable
	                  syllables.push(this.createSyllable(word.substr(startSyllable, i - startSyllable)));
	                  startSyllable = i;
	                } else if (numberOfConsonants == 2) {
	                  var consonant2 = word[i + 1].toLowerCase();
	                  if (consonant2 == 'l' || consonant2 == 'r' || c == 'c' && consonant2 == 'h') {
	                    // split before the consonant pair
	                    syllables.push(this.createSyllable(word.substr(startSyllable, i - startSyllable)));
	                    startSyllable = i++;
	                  } else {
	                    //split the consonants
	                    syllables.push(this.createSyllable(word.substr(startSyllable, ++i - startSyllable)));
	                    startSyllable = i;
	                  }
	                } else if (numberOfConsonants == 3) {
	                  var consonant2 = word[i + 1].toLowerCase();
	
	                  // if second consonant is s, divide cc-c, otherwise divide c-cc
	                  if (consonant2 == 's') {
	                    i += 2;
	                    syllables.push(this.createSyllable(word.substr(startSyllable, i - startSyllable)));
	                  } else {
	                    syllables.push(this.createSyllable(word.substr(startSyllable, ++i - startSyllable)));
	                  }
	
	                  startSyllable = i;
	                } else if (numberOfConsonants == 4) {
	                  // four always get split cc-cc
	                  syllables.push(this.createSyllable(word.substr(startSyllable, i - startSyllable + 2)));
	                  startSyllable = i + 2;
	                  i += 3;
	                }
	              }
	
	              haveCompleteSyllable = false;
	            }
	
	          previousIsVowel = false;
	        }
	      }
	
	      // if we have a complete syllable, we can add it as a new one. Otherwise
	      // we tack the remaining characters onto the last syllable.
	      if (haveCompleteSyllable) syllables.push(word.substr(startSyllable));else if (startSyllable > 0) syllables[syllables.length - 1] += word.substr(startSyllable);else if (syllables.length == 0) syllables.push(this.createSyllable(word));
	
	      return syllables;
	    }
	
	    /**
	     * @param {String} s the string to search
	     * @param {Number} startIndex The index at which to start searching for a vowel in the string
	     * @retuns a custom class with three properties: {found: (true/false) startIndex: (start index in s of vowel segment) length ()}
	     */
	
	  }, {
	    key: 'findVowelSegment',
	    value: function findVowelSegment(s, startIndex) {
	
	      var i, end, index;
	      var workingString = s.toLowerCase();
	
	      // do we have a diphthongs?
	      for (i = 0, end = this.diphthongs.length; i < end; i++) {
	        var d = this.diphthongs[i];
	        index = workingString.indexOf(d, startIndex);
	
	        if (index >= 0) {
	
	          // check the exceptions...
	          if (d[0] == 'u' && index > 0) {
	            var tripthong = s.substr(index - 1, 3).toLowerCase();
	
	            for (j = 0, endj = this.uDipthongExpections.length; i < endj; j++) {
	              if (tripthong == this.uDipthongExpections[j]) {
	                // search from after the u...
	                return this.findVowelSegment(s, index + 1);
	              }
	            }
	          }
	
	          return { found: true, startIndex: index, length: d.length };
	        }
	      }
	
	      // no diphthongs. Let's look for single vowels then...
	      for (i = 0, end = this.vowels.length; i < end; i++) {
	        index = workingString.indexOf(this.vowels[i], startIndex);
	
	        if (index >= 0) return { found: true, startIndex: index, length: 1 };
	      }
	
	      // no vowels sets found after startIndex!
	      return { found: false, startIndex: -1, length: -1 };
	    }
	  }]);
	
	  return Spanish;
	}(Language);

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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
	
	// generated based on the svg data
	var Glyphs = exports.Glyphs = {
	  "None": {
	    "svgSrc": "<g></g>",
	    "paths": [{
	      "type": "positive",
	      "data": ""
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 0,
	      "height": 0
	    },
	    "origin": {
	      "x": 0,
	      "y": 0
	    }
	  },
	  "AcuteAccent": {
	    "svgSrc": "<path d=\"M4 0C-.614.52-.614.52-.803-3.182l60.768-108.422c4.52-7.182 10.543-13.67 18.075-13.67 5.27 0 14.31 1.264 23.346 7.793 7.53 5.223 8.803 11.752 8.803 16.975 0 3.917-.52 11.1-8.05 17.628L4 0z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M4 0C-.614.52-.614.52-.803-3.182l60.768-108.422c4.52-7.182 10.543-13.67 18.075-13.67 5.27 0 14.31 1.264 23.346 7.793 7.53 5.223 8.803 11.752 8.803 16.975 0 3.917-.52 11.1-8.05 17.628L4 0z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 110.99200439453125,
	      "height": 125.79399108886719
	    },
	    "origin": {
	      "x": 0.8030000329017639,
	      "y": 125.27399444580078
	    }
	  },
	  "Apostropha": {
	    "svgSrc": "<path d=\"M1.22-73.438c4.165 13.02 12.238 27.084 24.217 42.188L49.657 0 34.812 27.344C18.666 55.47-.084 72.396-21.438 78.124c4.687-3.645 7.03-8.593 7.03-14.843 0-8.853-4.947-20.572-14.843-35.155L-48 0 1.22-73.438z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M1.22-73.438c4.165 13.02 12.238 27.084 24.217 42.188L49.657 0 34.812 27.344C18.666 55.47-.084 72.396-21.438 78.124c4.687-3.645 7.03-8.593 7.03-14.843 0-8.853-4.947-20.572-14.843-35.155L-48 0 1.22-73.438z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 97.65699768066406,
	      "height": 151.56201171875
	    },
	    "origin": {
	      "x": 48,
	      "y": 73.43800354003906
	    }
	  },
	  "BeginningAscLiquescent": {
	    "svgSrc": "<path d=\"M-50 43.688V-61c4.167 7.292 12.76 10.938 25.78 10.938 9.376 0 20.053-1.563 32.032-4.688C31.773-60.48 45.833-71.677 50-88.344v117.97C43.75 42.645 32.812 51.5 17.187 56.186-.52 61.398-15.886 64-28.906 64-42.97 64-50 57.23-50 43.687z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M-50 43.688V-61c4.167 7.292 12.76 10.938 25.78 10.938 9.376 0 20.053-1.563 32.032-4.688C31.773-60.48 45.833-71.677 50-88.344v117.97C43.75 42.645 32.812 51.5 17.187 56.186-.52 61.398-15.886 64-28.906 64-42.97 64-50 57.23-50 43.687z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 100,
	      "height": 152.343994140625
	    },
	    "origin": {
	      "x": 50,
	      "y": 88.34400177001953
	    }
	  },
	  "BeginningDesLiquescent": {
	    "svgSrc": "<path d=\"M-50-56.03c0-13.022 7.03-19.532 21.094-19.532 13.02 0 28.385 2.604 46.093 7.812C32.813-63.583 43.75-54.73 50-41.187V76C45.833 59.854 31.77 48.656 7.812 42.406c-11.98-3.125-22.656-4.687-32.03-4.687-13.022 0-21.615 3.905-25.782 11.718v-105.47z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M-50-56.03c0-13.022 7.03-19.532 21.094-19.532 13.02 0 28.385 2.604 46.093 7.812C32.813-63.583 43.75-54.73 50-41.187V76C45.833 59.854 31.77 48.656 7.812 42.406c-11.98-3.125-22.656-4.687-32.03-4.687-13.022 0-21.615 3.905-25.782 11.718v-105.47z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 100,
	      "height": 151.56199645996094
	    },
	    "origin": {
	      "x": 50,
	      "y": 75.56199645996094
	    }
	  },
	  "CustodDescLong": {
	    "svgSrc": "<path d=\"M39.063 273.472c5.73.52 7.29-6.25 4.687-20.312V-65.59c-13.542 2.083-24.22 5.468-32.03 10.156C3.905-50.226 0-43.714 0-35.904V71.91c5.73-5.21 10.677-8.594 14.844-10.157 5.73-1.562 12.24-2.343 19.53-2.343v196.875c0 11.458 1.563 17.187 4.688 17.187z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M39.063 273.472c5.73.52 7.29-6.25 4.687-20.312V-65.59c-13.542 2.083-24.22 5.468-32.03 10.156C3.905-50.226 0-43.714 0-35.904V71.91c5.73-5.21 10.677-8.594 14.844-10.157 5.73-1.562 12.24-2.343 19.53-2.343v196.875c0 11.458 1.563 17.187 4.688 17.187"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 46.35300064086914,
	      "height": 339.58197021484375
	    },
	    "origin": {
	      "x": 0,
	      "y": 65.58999633789062
	    }
	  },
	  "CustodDescShort": {
	    "svgSrc": "<path d=\"M34.375 191.923c0 8.333 1.563 12.24 4.688 11.72 3.125-.522 4.687-7.033 4.687-19.533v-250c-13.542 2.084-24.22 5.47-32.03 10.157C3.905-50.525 0-44.015 0-36.203V71.61c5.73-5.208 10.677-8.593 14.844-10.156 5.73-1.562 12.24-2.344 19.53-2.344v132.813z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M34.375 191.923c0 8.333 1.563 12.24 4.688 11.72 3.125-.522 4.687-7.033 4.687-19.533v-250c-13.542 2.084-24.22 5.47-32.03 10.157C3.905-50.525 0-44.015 0-36.203V71.61c5.73-5.208 10.677-8.593 14.844-10.156 5.73-1.562 12.24-2.344 19.53-2.344v132.813z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 43.75,
	      "height": 270.0530090332031
	    },
	    "origin": {
	      "x": 0,
	      "y": 65.88999938964844
	    }
	  },
	  "CustodLong": {
	    "svgSrc": "<path d=\"M39.063-269.562c5.73-.52 7.29 6.25 4.687 20.312V69.5c-13.542-2.083-24.22-5.47-32.03-10.156C3.905 54.134 0 47.624 0 39.812V-68c5.73 5.208 10.677 8.594 14.844 10.156 5.73 1.563 12.24 2.344 19.53 2.344v-196.875c0-11.458 1.563-17.187 4.688-17.187z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M39.063-269.562c5.73-.52 7.29 6.25 4.687 20.312V69.5c-13.542-2.083-24.22-5.47-32.03-10.156C3.905 54.134 0 47.624 0 39.812V-68c5.73 5.208 10.677 8.594 14.844 10.156 5.73 1.563 12.24 2.344 19.53 2.344v-196.875c0-11.458 1.563-17.187 4.688-17.187z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 46.35300064086914,
	      "height": 339.5820007324219
	    },
	    "origin": {
	      "x": 0,
	      "y": 270.0820007324219
	    }
	  },
	  "CustodShort": {
	    "svgSrc": "<path d=\"M34.375-188.125c0-8.333 1.563-12.24 4.688-11.72 3.125.522 4.687 7.033 4.687 19.532v250c-13.542-2.083-24.22-5.468-32.03-10.156C3.905 54.324 0 47.813 0 40V-67.813c5.73 5.21 10.677 8.594 14.844 10.157 5.73 1.562 12.24 2.344 19.53 2.343v-132.812z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M34.375-188.125c0-8.333 1.563-12.24 4.688-11.72 3.125.522 4.687 7.033 4.687 19.532v250c-13.542-2.083-24.22-5.468-32.03-10.156C3.905 54.324 0 47.813 0 40V-67.813c5.73 5.21 10.677 8.594 14.844 10.157 5.73 1.562 12.24 2.344 19.53 2.343v-132.812z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 43.75,
	      "height": 270.052001953125
	    },
	    "origin": {
	      "x": 0,
	      "y": 200.36500549316406
	    }
	  },
	  "DoClef": {
	    "svgSrc": "<path d=\"M0 98.406V-97.688C0-118 5.99-134.275 17.97-146.516c11.978-12.24 27.603-18.36 46.874-18.36 10.937 0 19.53 3.126 25.78 9.376s9.376 14.583 9.376 25v107.813l-6.25-5.47c-4.167-3.645-10.287-7.42-18.36-11.327-8.072-3.907-16.796-5.86-26.17-5.86-11.46 0-21.486 4.427-30.08 13.282-8.593 8.854-12.89 19.53-12.89 32.03s4.297 23.308 12.89 32.423c8.594 9.115 18.62 13.672 30.08 13.672 9.374 0 18.098-1.822 26.17-5.468 8.073-3.646 14.193-7.292 18.36-10.938l6.25-6.25V132c0 9.896-3.125 18.1-9.375 24.61-6.25 6.51-14.844 9.765-25.78 9.765-19.272 0-34.897-6.25-46.876-18.75C5.99 135.125 0 118.72 0 98.405z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M0 98.406V-97.688C0-118 5.99-134.275 17.97-146.516c11.978-12.24 27.603-18.36 46.874-18.36 10.937 0 19.53 3.126 25.78 9.376s9.376 14.583 9.376 25v107.813l-6.25-5.47c-4.167-3.645-10.287-7.42-18.36-11.327-8.072-3.907-16.796-5.86-26.17-5.86-11.46 0-21.486 4.427-30.08 13.282-8.593 8.854-12.89 19.53-12.89 32.03s4.297 23.308 12.89 32.423c8.594 9.115 18.62 13.672 30.08 13.672 9.374 0 18.098-1.822 26.17-5.468 8.073-3.646 14.193-7.292 18.36-10.938l6.25-6.25V132c0 9.896-3.125 18.1-9.375 24.61-6.25 6.51-14.844 9.765-25.78 9.765-19.272 0-34.897-6.25-46.876-18.75C5.99 135.125 0 118.72 0 98.405z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 100,
	      "height": 331.2510070800781
	    },
	    "origin": {
	      "x": 0,
	      "y": 164.87600708007812
	    }
	  },
	  "FaClef": {
	    "svgSrc": "<path d=\"M85.156-32v193.75c0 9.375-1.562 14.323-4.687 14.844-1.564 0-2.605-.52-3.126-1.563-.52-1.04-.782-2.603-.78-4.686V56.28c-8.335-8.332-19.793-12.5-34.376-12.5-17.71 0-31.77 3.907-42.188 11.72V-32c0-18.23 14.193-27.344 42.578-27.344 28.385 0 42.578 9.115 42.578 27.344zM98.438 93V-92.156c0-19.27 5.73-34.896 17.187-46.875 11.458-11.98 26.562-17.97 45.313-17.97 10.937 0 19.14 2.865 24.61 8.594 5.467 5.73 8.202 13.542 8.202 23.437v103.126l-5.47-4.687c-3.645-3.647-9.374-7.293-17.186-10.94-7.813-3.645-15.886-5.467-24.22-5.468-11.978 0-22.004 4.167-30.077 12.5-8.073 8.334-12.11 18.36-12.11 30.08 0 11.717 4.037 22.004 12.11 30.858s18.1 13.28 30.078 13.28c8.333 0 16.406-1.822 24.22-5.468 7.81-3.645 13.54-7.03 17.186-10.156l5.47-5.468V125.81c0 9.896-2.865 17.84-8.594 23.83-5.73 5.988-13.802 8.983-24.22 8.983-18.75 0-33.853-6.12-45.31-18.36-11.46-12.24-17.19-27.994-17.19-47.265z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M85.156-32v193.75c0 9.375-1.562 14.323-4.687 14.844-1.564 0-2.605-.52-3.126-1.563-.52-1.04-.782-2.603-.78-4.686V56.28c-8.335-8.332-19.793-12.5-34.376-12.5-17.71 0-31.77 3.907-42.188 11.72V-32c0-18.23 14.193-27.344 42.578-27.344 28.385 0 42.578 9.115 42.578 27.344zM98.438 93V-92.156c0-19.27 5.73-34.896 17.187-46.875 11.458-11.98 26.562-17.97 45.313-17.97 10.937 0 19.14 2.865 24.61 8.594 5.467 5.73 8.202 13.542 8.202 23.437v103.126l-5.47-4.687c-3.645-3.647-9.374-7.293-17.186-10.94-7.813-3.645-15.886-5.467-24.22-5.468-11.978 0-22.004 4.167-30.077 12.5-8.073 8.334-12.11 18.36-12.11 30.08 0 11.717 4.037 22.004 12.11 30.858s18.1 13.28 30.078 13.28c8.333 0 16.406-1.822 24.22-5.468 7.81-3.645 13.54-7.03 17.186-10.156l5.47-5.468V125.81c0 9.896-2.865 17.84-8.594 23.83-5.73 5.988-13.802 8.983-24.22 8.983-18.75 0-33.853-6.12-45.31-18.36-11.46-12.24-17.19-27.994-17.19-47.265z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 193.75201416015625,
	      "height": 333.5950012207031
	    },
	    "origin": {
	      "x": 0.001003265380859375,
	      "y": 157.00100708007812
	    }
	  },
	  "Flat": {
	    "svgSrc": "<path d=\"M7.813-204.406c4.166 0 6.25 5.208 6.25 15.625L12.5-10.657C33.854 13.302 54.167 25.28 73.438 25.28c9.374 0 14.062-4.686 14.062-14.06 0-6.25-1.042-11.72-3.125-16.407-2.083-4.688-7.03-9.766-14.844-15.235-7.81-5.47-13.02-8.984-15.624-10.547L27.344-45.81V-80.97c17.187 0 33.073 4.82 47.656 14.454C89.583-56.88 96.875-47.376 96.875-38c0 67.708-.26 101.562-.78 101.563-38.543 0-69.532-12.24-92.97-36.72C0-52.322-1.042-123.936 0-188c0-10.937 2.604-16.406 7.813-16.406z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M7.813-204.406c4.166 0 6.25 5.208 6.25 15.625L12.5-10.657C33.854 13.302 54.167 25.28 73.438 25.28c9.374 0 14.062-4.686 14.062-14.06 0-6.25-1.042-11.72-3.125-16.407-2.083-4.688-7.03-9.766-14.844-15.235-7.81-5.47-13.02-8.984-15.624-10.547L27.344-45.81V-80.97c17.187 0 33.073 4.82 47.656 14.454C89.583-56.88 96.875-47.376 96.875-38c0 67.708-.26 101.562-.78 101.563-38.543 0-69.532-12.24-92.97-36.72C0-52.322-1.042-123.936 0-188c0-10.937 2.604-16.406 7.813-16.406z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 97.91699981689453,
	      "height": 267.968994140625
	    },
	    "origin": {
	      "x": 1.0420000553131104,
	      "y": 204.406005859375
	    }
	  },
	  "Mora": {
	    "svgSrc": "<path d=\"M47.478-24c6.957 0 12.793 2.288 17.49 6.883C69.662-12.52 72-6.904 72-.267c0 6.64-2.337 12.352-7.033 17.118C60.27 21.618 54.435 24 47.477 24c-6.26 0-11.748-2.383-16.444-7.15C26.337 12.086 24 6.374 24-.265c0-6.638 2.337-12.255 7.033-16.85C35.73-21.713 41.217-24 47.478-24z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M47.478-24c6.957 0 12.793 2.288 17.49 6.883C69.662-12.52 72-6.904 72-.267c0 6.64-2.337 12.352-7.033 17.118C60.27 21.618 54.435 24 47.477 24c-6.26 0-11.748-2.383-16.444-7.15C26.337 12.086 24 6.374 24-.265c0-6.638 2.337-12.255 7.033-16.85C35.73-21.713 41.217-24 47.478-24z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 48,
	      "height": 48
	    },
	    "origin": {
	      "x": -24,
	      "y": 24
	    }
	  },
	  "Natural": {
	    "svgSrc": "<path d=\"M7.906-166.563c-2.864 0-5.614.52-8.218 1.563v13.28l.78 56.25.782 78.907v85.157c.52 3.646 2.604 5.73 6.25 6.25l23.438-3.906 23.437-3.907v29.69c0 42.186-.26 63.54-.78 64.06l6.25 2.345c1.04.52 2.082.78 3.124.78 2.603 0 4.947-1.3 7.03-3.905L67.656-71.25c-.52-2.604-2.083-3.906-4.687-3.906-7.814 0-17.19 1.04-28.126 3.125l-19.53 3.124.78-38.28V-165c-2.604-1.042-5.323-1.562-8.188-1.563zM55.938-40v71.875l-41.407 7.03c0-48.436.262-72.655.783-72.655L55.938-40z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M7.906-166.563c-2.864 0-5.614.52-8.218 1.563v13.28l.78 56.25.782 78.907v85.157c.52 3.646 2.604 5.73 6.25 6.25l23.438-3.906 23.437-3.907v29.69c0 42.186-.26 63.54-.78 64.06l6.25 2.345c1.04.52 2.082.78 3.124.78 2.603 0 4.947-1.3 7.03-3.905L67.656-71.25c-.52-2.604-2.083-3.906-4.687-3.906-7.814 0-17.19 1.04-28.126 3.125l-19.53 3.124.78-38.28V-165c-2.604-1.042-5.323-1.562-8.188-1.563zM55.938-40v71.875l-41.407 7.03c0-48.436.262-72.655.783-72.655L55.938-40z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 70.31100463867188,
	      "height": 330.468994140625
	    },
	    "origin": {
	      "x": 0.3120002746582031,
	      "y": 166.56300354003906
	    }
	  },
	  "OriscusAsc": {
	    "svgSrc": "<path d=\"M50 30.25c0 12.5-3.125 21.354-9.375 26.562-3.125 2.605-7.813 3.907-14.063 3.907-3.125 0-5.99-.522-8.593-1.564-2.605-1.04-5.6-2.474-8.986-4.297C5.6 53.035 2.734 51.603.39 50.56c-2.343-1.04-5.338-2.474-8.984-4.296-3.646-1.823-6.77-3.256-9.375-4.297-2.603-1.043-5.468-1.564-8.593-1.564-6.25 0-10.937 1.563-14.062 4.688C-46.875 50.824-50 59.677-50 71.656v-106.25c0-13.02 3.125-21.875 9.375-26.562 3.125-2.604 7.813-3.906 14.063-3.907 3.125 0 5.99.52 8.593 1.563 2.605 1.042 5.73 2.474 9.376 4.297 3.646 1.823 6.51 2.995 8.594 3.516l10.938 5.468c6.25 3.126 11.458 4.69 15.624 4.69 6.25 0 10.938-1.564 14.063-4.69C46.875-55.426 50-64.02 50-76V30.25z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M50 30.25c0 12.5-3.125 21.354-9.375 26.562-3.125 2.605-7.813 3.907-14.063 3.907-3.125 0-5.99-.522-8.593-1.564-2.605-1.04-5.6-2.474-8.986-4.297C5.6 53.035 2.734 51.603.39 50.56c-2.343-1.04-5.338-2.474-8.984-4.296-3.646-1.823-6.77-3.256-9.375-4.297-2.603-1.043-5.468-1.564-8.593-1.564-6.25 0-10.937 1.563-14.062 4.688C-46.875 50.824-50 59.677-50 71.656v-106.25c0-13.02 3.125-21.875 9.375-26.562 3.125-2.604 7.813-3.906 14.063-3.907 3.125 0 5.99.52 8.593 1.563 2.605 1.042 5.73 2.474 9.376 4.297 3.646 1.823 6.51 2.995 8.594 3.516l10.938 5.468c6.25 3.126 11.458 4.69 15.624 4.69 6.25 0 10.938-1.564 14.063-4.69C46.875-55.426 50-64.02 50-76V30.25z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 100,
	      "height": 147.656005859375
	    },
	    "origin": {
	      "x": 50,
	      "y": 76
	    }
	  },
	  "OriscusDes": {
	    "svgSrc": "<path d=\"M-50 30.844v-106.25c0 11.458 3.125 20.052 9.375 25.78 3.125 3.126 7.813 4.69 14.063 4.688 4.687 0 13.41-3.255 26.17-9.765 12.762-6.51 21.746-9.766 26.954-9.766 6.25 0 10.938 1.303 14.063 3.907C46.875-55.874 50-47.02 50-34V72.25c0-11.98-3.125-20.833-9.375-26.563C37.5 42.563 32.812 41 26.562 41 21.875 41 13.023 44.385 0 51.156c-4.167 2.604-8.594 4.948-13.28 7.032-4.69 2.083-9.116 3.124-13.283 3.124-6.25 0-10.937-1.302-14.062-3.906C-46.875 52.198-50 43.344-50 30.844z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M-50 30.844v-106.25c0 11.458 3.125 20.052 9.375 25.78 3.125 3.126 7.813 4.69 14.063 4.688 4.687 0 13.41-3.255 26.17-9.765 12.762-6.51 21.746-9.766 26.954-9.766 6.25 0 10.938 1.303 14.063 3.907C46.875-55.874 50-47.02 50-34V72.25c0-11.98-3.125-20.833-9.375-26.563C37.5 42.563 32.812 41 26.562 41 21.875 41 13.023 44.385 0 51.156c-4.167 2.604-8.594 4.948-13.28 7.032-4.69 2.083-9.116 3.124-13.283 3.124-6.25 0-10.937-1.302-14.062-3.906C-46.875 52.198-50 43.344-50 30.844z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 100,
	      "height": 147.656005859375
	    },
	    "origin": {
	      "x": 50,
	      "y": 75.40599822998047
	    }
	  },
	  "PodatusLower": {
	    "svgSrc": "<path d=\"M-4.688-30.28c22.396 0 34.636-.262 36.72-.782 5.728-1.563 8.593-5.21 8.593-10.938H50v97.656c0 2.604-1.302 4.167-3.906 4.688-5.21.52-21.355.78-48.438.78-23.958 0-38.54-.26-43.75-.78-2.604 0-3.906-1.302-3.906-3.906v-82.032c0-3.646 1.302-5.468 3.906-5.468h2.344c2.604.52 15.625.78 39.063.78z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M-4.688-30.28c22.396 0 34.636-.262 36.72-.782 5.728-1.563 8.593-5.21 8.593-10.938H50v97.656c0 2.604-1.302 4.167-3.906 4.688-5.21.52-21.355.78-48.438.78-23.958 0-38.54-.26-43.75-.78-2.604 0-3.906-1.302-3.906-3.906v-82.032c0-3.646 1.302-5.468 3.906-5.468h2.344c2.604.52 15.625.78 39.063.78z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 100,
	      "height": 103.12399291992188
	    },
	    "origin": {
	      "x": 50,
	      "y": 42
	    }
	  },
	  "PodatusUpper": {
	    "svgSrc": "<path d=\"M-46.094-63.78c13.542 0 24.61 2.473 33.203 7.42C-4.298-51.41 0-43.99 0-34.093V62h-9.375c0-10.938-2.604-19.14-7.812-24.61-5.21-5.468-14.844-8.203-28.907-8.202-18.23 0-33.333 4.166-45.312 12.5v-75.782c0-19.79 15.104-29.687 45.312-29.687z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M-46.094-63.78c13.542 0 24.61 2.473 33.203 7.42C-4.298-51.41 0-43.99 0-34.093V62h-9.375c0-10.938-2.604-19.14-7.812-24.61-5.21-5.468-14.844-8.203-28.907-8.202-18.23 0-33.333 4.166-45.312 12.5v-75.782c0-19.79 15.104-29.687 45.312-29.687z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 91.406005859375,
	      "height": 125.78099822998047
	    },
	    "origin": {
	      "x": 91.406005859375,
	      "y": 63.78099822998047
	    }
	  },
	  "Porrectus1": {
	    "svgSrc": "<path d=\"M233.594 162.875c-58.855 0-107.032-6.25-144.53-18.75C34.895 125.895-11.46 99.855-50 66V-52.75C-21.354-24.625 26.302 6.885 92.97 41.78 123.697 57.928 163.54 66 212.5 66c21.354 0 34.635-9.896 39.844-29.688V151.94c0 7.29-6.25 10.937-18.75 10.937z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M233.594 162.875c-58.855 0-107.032-6.25-144.53-18.75C34.895 125.895-11.46 99.855-50 66V-52.75C-21.354-24.625 26.302 6.885 92.97 41.78 123.697 57.928 163.54 66 212.5 66c21.354 0 34.635-9.896 39.844-29.688V151.94c0 7.29-6.25 10.937-18.75 10.937z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 302.343994140625,
	      "height": 215.6269989013672
	    },
	    "origin": {
	      "x": 50,
	      "y": 52.75
	    }
	  },
	  "Porrectus2": {
	    "svgSrc": "<path d=\"M309.375 259.375c-50.52 0-110.938-22.396-181.25-67.188C48.437 141.667-10.938 94.272-50 50V-68.75C0-3.125 60.417 52.083 131.25 96.875c58.333 36.98 110.677 58.854 157.03 65.625h7.033c16.145 0 26.822-9.896 32.03-29.688v114.844c0 7.812-5.99 11.72-17.968 11.72z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M309.375 259.375c-50.52 0-110.938-22.396-181.25-67.188C48.437 141.667-10.938 94.272-50 50V-68.75C0-3.125 60.417 52.083 131.25 96.875c58.333 36.98 110.677 58.854 157.03 65.625h7.033c16.145 0 26.822-9.896 32.03-29.688v114.844c0 7.812-5.99 11.72-17.968 11.72z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 377.3429870605469,
	      "height": 328.1260070800781
	    },
	    "origin": {
	      "x": 50,
	      "y": 68.75
	    }
	  },
	  "Porrectus3": {
	    "svgSrc": "<path d=\"M309.375 355.78c-48.96-16.666-109.115-55.468-180.47-116.405C79.428 198.23 19.793 134.687-50 48.75V-70C20 40 94.104 103.79 135.25 148.063 190 200 230 230 288.28 258.906c4.168 2.083 8.334 3.125 12.5 3.125 12.5 0 21.355-10.937 26.564-32.81v114.06c0 9.376-3.386 14.063-10.156 14.064-2.084 0-4.688-.522-7.813-1.563z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M309.375 355.78c-48.96-16.666-109.115-55.468-180.47-116.405C79.428 198.23 19.793 134.687-50 48.75V-70C20 40 94.104 103.79 135.25 148.063 190 200 230 230 288.28 258.906c4.168 2.083 8.334 3.125 12.5 3.125 12.5 0 21.355-10.937 26.564-32.81v114.06c0 9.376-3.386 14.063-10.156 14.064-2.084 0-4.688-.522-7.813-1.563z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 377.343994140625,
	      "height": 427.3450012207031
	    },
	    "origin": {
	      "x": 50,
	      "y": 70
	    }
	  },
	  "Porrectus4": {
	    "svgSrc": "<path d=\"M350 453.438c-52.754-22.397-120-77.345-201.74-164.844C90.87 227.656 24.784 147.708-50 48.75V-70C-8.84-1.25 58.406 86.51 151.74 193.28c60.868 69.793 119.13 124.22 174.782 163.282 5.797 3.646 11.014 5.47 15.652 5.47 12.173 0 21.45-11.72 27.826-35.157V441.72c0 9.373-3.19 14.06-9.565 14.06-2.9 0-6.377-.78-10.435-2.342z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M350 453.438c-52.754-22.397-120-77.345-201.74-164.844C90.87 227.656 24.784 147.708-50 48.75V-70C-8.84-1.25 58.406 86.51 151.74 193.28c60.868 69.793 119.13 124.22 174.782 163.282 5.797 3.646 11.014 5.47 15.652 5.47 12.173 0 21.45-11.72 27.826-35.157V441.72c0 9.373-3.19 14.06-9.565 14.06-2.9 0-6.377-.78-10.435-2.342z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 420,
	      "height": 525.780029296875
	    },
	    "origin": {
	      "x": 50,
	      "y": 70
	    }
	  },
	  "PunctumCavum": {
	    "svgSrc": "<path d=\"M0-60.906c33.333 0 50 9.635 50 28.906v94.53C39.062 51.595 22.396 46.126 0 46.126s-39.063 5.47-50 16.406V-32c0-19.27 16.667-28.906 50-28.906z\"/><path fill=\"#fff\" d=\"M.08-42.56c9.585.206 20.126.53 27.954 6.822 4.96 3.9 4.71 10.792 4.574 16.482v51.278C22.09 27.066 7.283 26.072.168 26.01c-7.72.23-21.895.935-32.616 4.674.04-19.197-.083-38.395.064-57.59.567-7.5 7.834-12.33 14.62-13.774 5.818-1.498 11.857-1.86 17.844-1.88z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M0-60.906c33.333 0 50 9.635 50 28.906v94.53C39.062 51.595 22.396 46.126 0 46.126s-39.063 5.47-50 16.406V-32c0-19.27 16.667-28.906 50-28.906z"
	    }, {
	      "type": "negative",
	      "data": "M.08-42.56c9.585.206 20.126.53 27.954 6.822 4.96 3.9 4.71 10.792 4.574 16.482v51.278C22.09 27.066 7.283 26.072.168 26.01c-7.72.23-21.895.935-32.616 4.674.04-19.197-.083-38.395.064-57.59.567-7.5 7.834-12.33 14.62-13.774 5.818-1.498 11.857-1.86 17.844-1.88z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 100,
	      "height": 123.43799591064453
	    },
	    "origin": {
	      "x": 50,
	      "y": 60.90599822998047
	    }
	  },
	  "PunctumCuadratum": {
	    "svgSrc": "<path d=\"M0-60.906c33.333 0 50 9.635 50 28.906v94.53C39.062 51.595 22.396 46.126 0 46.126s-39.063 5.47-50 16.406V-32c0-19.27 16.667-28.906 50-28.906z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M0-60.906c33.333 0 50 9.635 50 28.906v94.53C39.062 51.595 22.396 46.126 0 46.126s-39.063 5.47-50 16.406V-32c0-19.27 16.667-28.906 50-28.906z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 100,
	      "height": 123.43799591064453
	    },
	    "origin": {
	      "x": 50,
	      "y": 60.90599822998047
	    }
	  },
	  "PunctumCuadratumAscLiquescent": {
	    "svgSrc": "<path d=\"M-50 43.688V-61c4.167 7.292 12.76 10.938 25.78 10.938 9.376 0 20.053-1.563 32.032-4.688C31.773-60.48 45.833-71.677 50-88.344v117.97C43.75 42.645 32.812 51.5 17.187 56.186-.52 61.398-15.886 64-28.906 64-42.97 64-50 57.23-50 43.687z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M-50 43.688V-61c4.167 7.292 12.76 10.938 25.78 10.938 9.376 0 20.053-1.563 32.032-4.688C31.773-60.48 45.833-71.677 50-88.344v117.97C43.75 42.645 32.812 51.5 17.187 56.186-.52 61.398-15.886 64-28.906 64-42.97 64-50 57.23-50 43.687z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 100,
	      "height": 152.343994140625
	    },
	    "origin": {
	      "x": 50,
	      "y": 88.34400177001953
	    }
	  },
	  "PunctumCuadratumDesLiquescent": {
	    "svgSrc": "<path d=\"M-50-56.03c0-13.022 7.03-19.532 21.094-19.532 13.02 0 28.385 2.604 46.093 7.812C32.813-63.583 43.75-54.73 50-41.187V76C45.833 59.854 31.77 48.656 7.812 42.406c-11.98-3.125-22.656-4.687-32.03-4.687-13.022 0-21.615 3.905-25.782 11.718v-105.47z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M-50-56.03c0-13.022 7.03-19.532 21.094-19.532 13.02 0 28.385 2.604 46.093 7.812C32.813-63.583 43.75-54.73 50-41.187V76C45.833 59.854 31.77 48.656 7.812 42.406c-11.98-3.125-22.656-4.687-32.03-4.687-13.022 0-21.615 3.905-25.782 11.718v-105.47z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 100,
	      "height": 151.56199645996094
	    },
	    "origin": {
	      "x": 50,
	      "y": 75.56199645996094
	    }
	  },
	  "PunctumInclinatum": {
	    "svgSrc": "<path d=\"M0-75.78L50 0 0 75-50 0 0-75.78z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M0-75.78L50 0 0 75-50 0 0-75.78z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 100,
	      "height": 150.77999877929688
	    },
	    "origin": {
	      "x": 50,
	      "y": 75.77999877929688
	    }
	  },
	  "Quilisma": {
	    "svgSrc": "<path d=\"M-50 34.938V-51c5.73 20.833 13.02 31.25 21.875 31.25 7.813 0 12.5-15.625 14.063-46.875 3.645 12.5 6.9 21.224 9.765 26.172s6.9 7.422 12.11 7.422c5.208 0 9.374-14.324 12.5-42.97 5.73 22.917 10.677 34.375 14.843 34.375 5.73 0 10.677-15.885 14.844-47.656v100c0 17.707-3.125 26.56-9.375 26.56-4.688 0-9.115-5.988-13.28-17.968-2.085 21.875-8.074 32.813-17.97 32.813-7.813 0-16.146-7.292-25-21.875-4.688 20.312-10.677 30.47-17.97 30.47-5.207 0-9.244-2.605-12.108-7.814C-48.568 47.698-50 41.708-50 34.938z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M-50 34.938V-51c5.73 20.833 13.02 31.25 21.875 31.25 7.813 0 12.5-15.625 14.063-46.875 3.645 12.5 6.9 21.224 9.765 26.172s6.9 7.422 12.11 7.422c5.208 0 9.374-14.324 12.5-42.97 5.73 22.917 10.677 34.375 14.843 34.375 5.73 0 10.677-15.885 14.844-47.656v100c0 17.707-3.125 26.56-9.375 26.56-4.688 0-9.115-5.988-13.28-17.968-2.085 21.875-8.074 32.813-17.97 32.813-7.813 0-16.146-7.292-25-21.875-4.688 20.312-10.677 30.47-17.97 30.47-5.207 0-9.244-2.605-12.108-7.814C-48.568 47.698-50 41.708-50 34.938z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 100,
	      "height": 150
	    },
	    "origin": {
	      "x": 50,
	      "y": 89.28199768066406
	    }
	  },
	  "TerminatingAscLiquescent": {
	    "svgSrc": "<path d=\"M-9.375 40.22c0-11.98-4.948-17.97-14.844-17.97-10.936 0-19.53 3.646-25.78 10.938v-53.126c0-6.77 2.604-12.76 7.813-17.968 5.208-5.21 10.677-8.594 16.406-10.157 2.603-.52 5.207-.78 7.81-.78 3.647 0 7.032.78 10.157 2.343C-2.603-43.896 0-39.73 0-34V73.03h-9.375V40.22z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M-9.375 40.22c0-11.98-4.948-17.97-14.844-17.97-10.936 0-19.53 3.646-25.78 10.938v-53.126c0-6.77 2.604-12.76 7.813-17.968 5.208-5.21 10.677-8.594 16.406-10.157 2.603-.52 5.207-.78 7.81-.78 3.647 0 7.032.78 10.157 2.343C-2.603-43.896 0-39.73 0-34V73.03h-9.375V40.22z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 49.999000549316406,
	      "height": 121.87299346923828
	    },
	    "origin": {
	      "x": 49.999000549316406,
	      "y": 48.842994689941406
	    }
	  },
	  "TerminatingDesLiquescent": {
	    "svgSrc": "<path d=\"M-9.375-48.156V-80.97H0V26.845c0 5.73-2.604 9.896-7.813 12.5-3.125 1.562-6.51 2.343-10.156 2.343-2.603 0-5.207-.26-7.81-.78-5.73-1.563-11.2-4.95-16.407-10.157C-47.398 25.542-50 19.292-50 12v-52.344c6.25 7.292 14.844 10.938 25.78 10.938 9.897 0 14.845-6.25 14.845-18.75z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M-9.375-48.156V-80.97H0V26.845c0 5.73-2.604 9.896-7.813 12.5-3.125 1.562-6.51 2.343-10.156 2.343-2.603 0-5.207-.26-7.81-.78-5.73-1.563-11.2-4.95-16.407-10.157C-47.398 25.542-50 19.292-50 12v-52.344c6.25 7.292 14.844 10.938 25.78 10.938 9.897 0 14.845-6.25 14.845-18.75z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 50,
	      "height": 122.65800476074219
	    },
	    "origin": {
	      "x": 50,
	      "y": 80.97000122070312
	    }
	  },
	  "VerticalEpisemaAbove": {
	    "svgSrc": "<path d=\"M-8-80H8L4 0h-8l-4-80z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M-8-80H8L4 0h-8l-4-80z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 16,
	      "height": 80
	    },
	    "origin": {
	      "x": 8,
	      "y": 80
	    }
	  },
	  "VerticalEpisemaBelow": {
	    "svgSrc": "<path d=\"M-8 80H8L4 0h-8l-4 80z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M-8 80H8L4 0h-8l-4 80z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 16,
	      "height": 80
	    },
	    "origin": {
	      "x": 8,
	      "y": 0
	    }
	  },
	  "VirgaLong": {
	    "svgSrc": "<path d=\"M50-38v285.156c0 6.77-2.344 10.937-7.03 12.5-1.564 0-2.605-.78-3.126-2.344-.52-1.562-.782-10.156-.782-25.78V54.186C29.168 45.334 16.146 40.907 0 40.907c-22.917 0-39.583 5.208-50 15.624V-38c0-19.27 16.667-28.906 50-28.906S50-57.27 50-38z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M50-38v285.156c0 6.77-2.344 10.937-7.03 12.5-1.564 0-2.605-.78-3.126-2.344-.52-1.562-.782-10.156-.782-25.78V54.186C29.168 45.334 16.146 40.907 0 40.907c-22.917 0-39.583 5.208-50 15.624V-38c0-19.27 16.667-28.906 50-28.906S50-57.27 50-38z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 100,
	      "height": 326.56201171875
	    },
	    "origin": {
	      "x": 50,
	      "y": 66.90599822998047
	    }
	  },
	  "VirgaShort": {
	    "svgSrc": "<path d=\"M50-38v211.72c0 7.29-2.344 11.457-7.03 12.5-1.564 0-2.606-.783-3.126-2.345-.52-1.563-.782-10.156-.782-25.78V54.187C29.167 45.332 16.146 40.906 0 40.906c-22.917 0-39.583 5.21-50 15.625V-38c0-19.27 16.667-28.906 50-28.906S50-57.27 50-38z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M50-38v211.72c0 7.29-2.344 11.457-7.03 12.5-1.564 0-2.606-.783-3.126-2.345-.52-1.563-.782-10.156-.782-25.78V54.187C29.167 45.332 16.146 40.906 0 40.906c-22.917 0-39.583 5.21-50 15.625V-38c0-19.27 16.667-28.906 50-28.906S50-57.27 50-38z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 100,
	      "height": 253.12600708007812
	    },
	    "origin": {
	      "x": 50,
	      "y": 66.90599822998047
	    }
	  },
	  "Virgula": {
	    "svgSrc": "<path d=\"M8.178-55.66c0-22.137 12.092-33.2 36.287-33.2 11.835 0 23.53 5.66 35.108 16.98C91.15-60.547 96.94-41.766 96.94-15.534c0 53.515-31.646 87.487-94.937 101.895-2.048-2.06-3.077-5.146-3.077-9.273 0-1.03.247-1.8.76-2.316 42.71-19.027 64.075-41.678 64.075-67.92 0-11.322-2.325-20.326-6.945-27.016-4.62-6.69-9.52-11.052-14.676-13.11-5.147-2.048-11.836-3.85-20.07-5.403C12.81-39.707 8.18-45.37 8.18-55.66z\"/>",
	    "paths": [{
	      "type": "positive",
	      "data": "M8.178-55.66c0-22.137 12.092-33.2 36.287-33.2 11.835 0 23.53 5.66 35.108 16.98C91.15-60.547 96.94-41.766 96.94-15.534c0 53.515-31.646 87.487-94.937 101.895-2.048-2.06-3.077-5.146-3.077-9.273 0-1.03.247-1.8.76-2.316 42.71-19.027 64.075-41.678 64.075-67.92 0-11.322-2.325-20.326-6.945-27.016-4.62-6.69-9.52-11.052-14.676-13.11-5.147-2.048-11.836-3.85-20.07-5.403C12.81-39.707 8.18-45.37 8.18-55.66z"
	    }],
	    "bounds": {
	      "x": 0,
	      "y": 0,
	      "width": 98.01399993896484,
	      "height": 175.2209930419922
	    },
	    "origin": {
	      "x": 1.0739939212799072,
	      "y": 88.86000061035156
	    }
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ChantNotationElement = exports.Annotation = exports.DropCap = exports.Lyric = exports.LyricType = exports.TextElement = exports.GlyphVisualizer = exports.HorizontalEpisemaLineVisualizer = exports.NeumeLineVisualizer = exports.DividerLineVisualizer = exports.ChantLayoutElement = exports.ChantContext = exports.QuickSvg = exports.GlyphCode = undefined;
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //
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
	
	var _Exsurge = __webpack_require__(1);
	
	var _Exsurge2 = __webpack_require__(3);
	
	var _Exsurge3 = __webpack_require__(2);
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// load in the web font for special chant characters here:
	var __exsurgeCharactersFont = __webpack_require__(10);
	
	var GlyphCode = exports.GlyphCode = {
	
	  None: "None",
	
	  AcuteAccent: "AcuteAccent",
	  Apostropha: "Apostropha",
	  //  ApostrophaLiquescent: "ApostrophaLiquescent",
	
	  BeginningAscLiquescent: "BeginningAscLiquescent",
	  BeginningDesLiquescent: "BeginningDesLiquescent",
	
	  CustodDescLong: "CustodDescLong",
	  CustodDescShort: "CustodDescShort",
	  CustodLong: "CustodLong",
	  CustodShort: "CustodShort",
	
	  // clefs and other markings
	  DoClef: "DoClef",
	  FaClef: "FaClef",
	  Flat: "Flat",
	  Mora: "Mora",
	  Natural: "Natural",
	  OriscusAsc: "OriscusAsc",
	  OriscusDes: "OriscusDes",
	
	  PodatusLower: "PodatusLower",
	  PodatusUpper: "PodatusUpper",
	
	  Porrectus1: "Porrectus1", // 1 staff line difference,
	  Porrectus2: "Porrectus2", // 2 lines difference, etc...
	  Porrectus3: "Porrectus3",
	  Porrectus4: "Porrectus4",
	
	  PunctumCavum: "PunctumCavum",
	  PunctumCuadratum: "PunctumCuadratum",
	  PunctumCuadratumAscLiquescent: "PunctumCuadratumAscLiquescent",
	  PunctumCuadratumDesLiquescent: "PunctumCuadratumDesLiquescent",
	  PunctumInclinatum: "PunctumInclinatum",
	  //  PunctumInclinatumLiquescent: "PunctumInclinatumLiquescent",
	  Quilisma: "Quilisma",
	
	  TerminatingAscLiquescent: "TerminatingAscLiquescent",
	  TerminatingDesLiquescent: "TerminatingDesLiquescent",
	  VerticalEpisemaAbove: "VerticalEpisemaAbove",
	  VerticalEpisemaBelow: "VerticalEpisemaBelow",
	  VirgaLong: "VirgaLong",
	  VirgaShort: "VirgaShort",
	  Virgula: "Virgula"
	}; // GlyphCode
	
	var QuickSvg = exports.QuickSvg = {
	
	  // namespaces 
	  ns: 'http://www.w3.org/2000/svg',
	  xmlns: 'http://www.w3.org/2000/xmlns/',
	  xlink: 'http://www.w3.org/1999/xlink',
	
	  // create the root level svg object
	  svg: function svg(width, height) {
	    var node = document.createElementNS(this.ns, 'svg');
	
	    node.setAttribute('xmlns', this.ns);
	    node.setAttribute('version', '1.1');
	    node.setAttributeNS(this.xmlns, 'xmlns:xlink', this.xlink);
	
	    node.setAttribute('width', width);
	    node.setAttribute('height', height);
	
	    // create the defs element
	    var defs = document.createElementNS(this.ns, 'defs');
	    node.appendChild(defs);
	
	    node.defs = defs;
	
	    node.clearNotations = function () {
	      // clear out all children except defs
	      node.removeChild(defs);
	
	      while (node.hasChildNodes()) {
	        node.removeChild(node.lastChild);
	      }node.appendChild(defs);
	    };
	
	    return node;
	  },
	
	  defs: function defs() {
	    return node;
	  },
	
	  rect: function rect(width, height) {
	    var node = document.createElementNS(this.ns, 'rect');
	
	    node.setAttribute('width', width);
	    node.setAttribute('height', height);
	
	    return node;
	  },
	
	  line: function line(x1, y1, x2, y2) {
	    var node = document.createElementNS(this.ns, 'line');
	
	    node.setAttribute('x1', x1);
	    node.setAttribute('y1', y1);
	    node.setAttribute('x2', x2);
	    node.setAttribute('y2', y2);
	
	    return node;
	  },
	
	  g: function g() {
	    var node = document.createElementNS(this.ns, 'g');
	
	    return node;
	  },
	
	  text: function text() {
	    var node = document.createElementNS(this.ns, 'text');
	
	    return node;
	  },
	
	  tspan: function tspan(str) {
	    var node = document.createElementNS(this.ns, 'tspan');
	    node.textContent = str;
	
	    return node;
	  },
	
	  // nodeRef should be the id of the object in defs (without the #)
	  use: function use(nodeRef) {
	    var node = document.createElementNS(this.ns, 'use');
	    node.setAttributeNS(this.xlink, "xlink:href", '#' + nodeRef);
	
	    return node;
	  },
	
	  createFragment: function createFragment(name, attributes, child) {
	    if (child === undefined || child === null) child = '';
	
	    var fragment = '<' + name + ' ';
	
	    for (var attr in attributes) {
	      fragment += attr + '="' + attributes[attr] + '" ';
	    }fragment += '>' + child + '</' + name + '>';
	
	    return fragment;
	  },
	
	  parseFragment: function parseFragment(fragment) {
	
	    // create temporary holder
	    var well = document.createElement('svg');
	
	    // act as a setter if svg is given
	    if (fragment) {
	
	      var container = this.g();
	
	      // dump raw svg
	      // do this to allow the browser to automatically create svg nodes?
	      well.innerHTML = '<svg>' + fragment.replace(/\n/, '').replace(/<(\w+)([^<]+?)\/>/g, '<$1$2></$1>') + '</svg>';
	
	      // transplant nodes
	      for (var i = 0, il = well.firstChild.childNodes.length; i < il; i++) {
	        container.appendChild(well.firstChild.firstChild);
	      }return container;
	    }
	  },
	
	  translate: function translate(node, x, y) {
	    node.setAttribute('transform', 'translate(' + x + ',' + y + ')');
	    return node;
	  },
	
	  scale: function scale(node, sx, sy) {
	    node.setAttribute('transform', 'scale(' + sx + ',' + sy + ')');
	    return node;
	  }
	};
	
	/*
	 * ChantContext
	 */
	
	var ChantContext = exports.ChantContext = function () {
	  function ChantContext() {
	    _classCallCheck(this, ChantContext);
	
	    this.defs = {};
	
	    // font styles
	    this.lyricTextSize = 16; // in points?
	    this.lyricTextFont = "'Palatino Linotype', 'Book Antiqua', Palatino, serif";
	    this.lyricTextColor = "#000";
	
	    this.dropCapTextSize = 64;
	    this.dropCapTextFont = this.lyricTextFont;
	    this.dropCapTextColor = this.lyricTextColor;
	
	    this.annotationTextSize = 13;
	    this.annotationTextFont = this.lyricTextFont;
	    this.annotationTextColor = this.lyricTextColor;
	
	    // everything depends on the scale of the punctum
	    this.glyphPunctumWidth = _Exsurge2.Glyphs.PunctumCuadratum.bounds.width;
	    this.glyphPunctumHeight = _Exsurge2.Glyphs.PunctumCuadratum.bounds.height;
	
	    // fixme: for now, we just set these using the glyph scales as noted above, presuming a
	    // staff line size of 0.5 in. Really what we should do is scale the punctum size based
	    // on the text metrics, right? 1 punctum ~ x height size?
	    this.glyphScaling = 1.0 / 16.0;
	
	    this.staffInterval = this.glyphPunctumWidth * this.glyphScaling;
	    this.staffLineWeight = this.glyphPunctumWidth * this.glyphScaling / 8;
	    this.neumeLineWeight = this.glyphPunctumWidth * this.glyphScaling / 8; // the weight of connecting lines in the glyphs.
	    this.dividerLineWeight = this.neumeLineWeight; // of quarter bar, half bar, etc.
	    this.episemaLineWeight = this.neumeLineWeight; // of horizontal episemae
	
	    // for keeping track of the clef
	    this.activeClef = null;
	
	    this.staffLineColor = "#000";
	    this.dividerLineColor = "#000";
	
	    this.defaultLanguage = new _Exsurge3.Latin();
	
	    this.svgTextMeasurer = QuickSvg.svg(1, 1);
	    this.svgTextMeasurer.setAttribute('id', "TextMeasurer");
	    document.querySelector('body').appendChild(this.svgTextMeasurer);
	
	    // measure the size of a hyphen for the lyrics
	    var hyphen = new Lyric(this, "-", LyricType.SingleSyllable);
	    this.hyphenWidth = hyphen.bounds.width;
	
	    this.minLyricWordSpacing = this.hyphenWidth;
	
	    this.intraNeumeSpacing = this.staffInterval / 2.0;
	
	    // for connecting neume syllables...
	    this.syllableConnector = '-';
	
	    this.drawGuides = false;
	    this.drawDebuggingBounds = true;
	
	    // chant notation elements are normally separated by a minimum fixed amount of space
	    // on the staff line. It can happen, however, that two text elements are almost close
	    // enough to merge, only to be separated much more by the required hyphen (or other
	    // connecting string).
	    //
	    // This tolerance value allows a little bit of flexibility to merge two close lyrical
	    // elements, thus bringing the chant notation elements a bit closer than otherwise
	    // would be normally allowed.
	    //
	    // condensing tolerance is a percentage value (0.0-1.0, inclusive) that indicates
	    // how much the default spacing can shrink. E.g., a value of 0.80 allows the layout
	    // engine to separate two glyphs by only 80% of the normal inter-neume spacing value.
	    //
	    // fixme: condensing tolerance is not implemented yet!
	    this.condensingTolerance = 0.9;
	
	    // if auto color is true, then exsurge tries to automatically colorize
	    // some elements of the chant (directives become rubric color, etc.)
	    this.autoColor = true;
	
	    this.insertFontsInDoc();
	  }
	
	  _createClass(ChantContext, [{
	    key: 'calculateHeightFromStaffPosition',
	    value: function calculateHeightFromStaffPosition(staffPosition) {
	      return -staffPosition * this.staffInterval;
	    }
	  }, {
	    key: 'insertFontsInDoc',
	    value: function insertFontsInDoc() {
	
	      var styleElement = document.getElementById('exsurge-fonts');
	
	      if (styleElement === null) {
	        // create it since it doesn't exist yet.
	        styleElement = document.createElement('style');
	        styleElement.id = 'exsurge-fonts';
	
	        styleElement.appendChild(document.createTextNode("@font-face{font-family: 'Exsurge Characters';font-weight: normal;font-style: normal;src: url(" + __exsurgeCharactersFont + ") format('opentype');}"));
	
	        document.head.appendChild(styleElement);
	      }
	    }
	  }]);
	
	  return ChantContext;
	}();
	
	/*
	 * ChantLayoutElement
	 */
	
	
	var ChantLayoutElement = exports.ChantLayoutElement = function () {
	  function ChantLayoutElement() {
	    _classCallCheck(this, ChantLayoutElement);
	
	    this.bounds = new _Exsurge.Rect();
	    this.origin = new _Exsurge.Point(0, 0);
	
	    this.selected = false;
	    this.highlighted = false;
	  }
	
	  // draws the element an html5 canvas
	
	
	  _createClass(ChantLayoutElement, [{
	    key: 'draw',
	    value: function draw(ctxt) {}
	
	    // returns svg code for the element, used for printing support
	
	  }, {
	    key: 'createDrawable',
	    value: function createDrawable(ctxt) {
	      throw "ChantLayout Elements must implement createDrawable(ctxt)";
	    }
	  }]);
	
	  return ChantLayoutElement;
	}();
	
	var DividerLineVisualizer = exports.DividerLineVisualizer = function (_ChantLayoutElement) {
	  _inherits(DividerLineVisualizer, _ChantLayoutElement);
	
	  function DividerLineVisualizer(ctxt, staffPosition0, staffPosition1) {
	    _classCallCheck(this, DividerLineVisualizer);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DividerLineVisualizer).call(this));
	
	    var y0 = ctxt.calculateHeightFromStaffPosition(staffPosition0);
	    var y1 = ctxt.calculateHeightFromStaffPosition(staffPosition1);
	
	    if (y0 > y1) {
	      var temp = y0;
	      y0 = y1;
	      y1 = temp;
	    }
	
	    _this.bounds.x = 0;
	    _this.bounds.y = y0;
	    _this.bounds.width = ctxt.dividerLineWeight;
	    _this.bounds.height = y1 - y0;
	
	    _this.origin.x = _this.bounds.width / 2;
	    _this.origin.y = y0;
	    return _this;
	  }
	
	  _createClass(DividerLineVisualizer, [{
	    key: 'createDrawable',
	    value: function createDrawable(ctxt) {
	
	      return QuickSvg.createFragment('rect', {
	        'x': this.bounds.x,
	        'y': this.bounds.y,
	        'width': ctxt.dividerLineWeight,
	        'height': this.bounds.height,
	        'fill': ctxt.dividerLineColor,
	        'class': 'DividerLine'
	      });
	    }
	  }]);
	
	  return DividerLineVisualizer;
	}(ChantLayoutElement);
	
	var NeumeLineVisualizer = exports.NeumeLineVisualizer = function (_ChantLayoutElement2) {
	  _inherits(NeumeLineVisualizer, _ChantLayoutElement2);
	
	  function NeumeLineVisualizer(ctxt, note0, note1, hanging) {
	    _classCallCheck(this, NeumeLineVisualizer);
	
	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(NeumeLineVisualizer).call(this));
	
	    var y0 = ctxt.calculateHeightFromStaffPosition(note0.staffPosition);
	    var y1 = ctxt.calculateHeightFromStaffPosition(note1.staffPosition);
	
	    if (y0 > y1) {
	      var temp = y0;
	      y0 = y1;
	      y1 = temp;
	    }
	
	    if (hanging) y1 += ctxt.glyphPunctumHeight * ctxt.glyphScaling / 2.2;
	
	    _this2.bounds.x = 0;
	    _this2.bounds.y = y0;
	    _this2.bounds.width = ctxt.neumeLineWeight;
	    _this2.bounds.height = y1 - y0;
	
	    _this2.origin.x = 0;
	    _this2.origin.y = 0;
	    return _this2;
	  }
	
	  _createClass(NeumeLineVisualizer, [{
	    key: 'createDrawable',
	    value: function createDrawable(ctxt) {
	
	      return QuickSvg.createFragment('rect', {
	        'x': this.bounds.x,
	        'y': this.bounds.y,
	        'width': ctxt.neumeLineWeight,
	        'height': this.bounds.height,
	        'fill': ctxt.neumeLineColor,
	        'class': 'NeumeLine'
	      });
	    }
	  }]);
	
	  return NeumeLineVisualizer;
	}(ChantLayoutElement);
	
	var HorizontalEpisemaLineVisualizer = exports.HorizontalEpisemaLineVisualizer = function (_ChantLayoutElement3) {
	  _inherits(HorizontalEpisemaLineVisualizer, _ChantLayoutElement3);
	
	  function HorizontalEpisemaLineVisualizer(ctxt, boundsToMark, position) {
	    _classCallCheck(this, HorizontalEpisemaLineVisualizer);
	
	    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(HorizontalEpisemaLineVisualizer).call(this));
	
	    var y = 0;
	    var minDistanceAway = ctxt.staffInterval * 0.4; // min distance both from neume and staff lines
	
	    if (position == _Exsurge.MarkingPositionHint.Below) {
	      y = boundsToMark.y + boundsToMark.height + minDistanceAway; // the highest the line could be at
	
	      // now, just take a step or two up if we need to
	      if (Math.abs(y % ctxt.staffInterval) < minDistanceAway) y += minDistanceAway - Math.abs(y % ctxt.staffInterval);
	    } else {
	      y = boundsToMark.y - minDistanceAway; // the lowest the line could be at
	
	      // now, just take a step or two up if we need to
	      if (Math.abs(y % ctxt.staffInterval) < minDistanceAway) y -= minDistanceAway - Math.abs(y % ctxt.staffInterval);
	    }
	
	    _this3.bounds.x = boundsToMark.x;
	    _this3.bounds.y = y - ctxt.episemaLineWeight / 2;
	    _this3.bounds.width = boundsToMark.width;
	    _this3.bounds.height = ctxt.episemaLineWeight;
	
	    _this3.origin.x = 0;
	    _this3.origin.y = 0;
	    return _this3;
	  }
	
	  _createClass(HorizontalEpisemaLineVisualizer, [{
	    key: 'createDrawable',
	    value: function createDrawable(ctxt) {
	      // fixme: implement this
	      //this.drawable = QuickSvg.rect(this.bounds.width, this.bounds.height);
	      //QuickSvg.translate(this.drawable, this.bounds.x, this.bounds.y).classList.add('HorizontalEpisema');
	
	      return "";
	    }
	  }]);
	
	  return HorizontalEpisemaLineVisualizer;
	}(ChantLayoutElement);
	
	var GlyphVisualizer = exports.GlyphVisualizer = function (_ChantLayoutElement4) {
	  _inherits(GlyphVisualizer, _ChantLayoutElement4);
	
	  function GlyphVisualizer(ctxt, glyphCode) {
	    _classCallCheck(this, GlyphVisualizer);
	
	    var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(GlyphVisualizer).call(this));
	
	    _this4.glyph = null;
	
	    _this4.setGlyphShape(ctxt, glyphCode);
	    return _this4;
	  }
	
	  _createClass(GlyphVisualizer, [{
	    key: 'setGlyphShape',
	    value: function setGlyphShape(ctxt, glyphCode) {
	
	      if (this.glyphCode == glyphCode) return;
	
	      if (typeof glyphCode === 'undefined' || glyphCode == null || glyphCode == "") this.glyphCode = GlyphCode.None;else this.glyphCode = glyphCode;
	
	      this.glyph = _Exsurge2.Glyphs[this.glyphCode];
	
	      // if this glyph hasn't been used yet, then load it up in the defs section for sharing
	      if (!ctxt.defs.hasOwnProperty(this.glyphCode)) {
	        var glyphSrc = this.glyph.svgSrc;
	
	        // create the ref
	        ctxt.defs[this.glyphCode] = QuickSvg.createFragment('g', {
	          id: this.glyphCode,
	          'class': 'glyph',
	          transform: 'scale(' + ctxt.glyphScaling + ')'
	        }, glyphSrc);
	      }
	
	      this.origin.x = this.glyph.origin.x * ctxt.glyphScaling;
	      this.origin.y = this.glyph.origin.y * ctxt.glyphScaling;
	
	      this.bounds.x = -this.origin.x;
	      this.bounds.y = -this.origin.y;
	      this.bounds.width = this.glyph.bounds.width * ctxt.glyphScaling;
	      this.bounds.height = this.glyph.bounds.height * ctxt.glyphScaling;
	    }
	  }, {
	    key: 'setStaffPosition',
	    value: function setStaffPosition(ctxt, staffPosition) {
	      this.bounds.y += ctxt.calculateHeightFromStaffPosition(staffPosition);
	    }
	  }, {
	    key: 'createDrawable',
	    value: function createDrawable(ctxt) {
	
	      return QuickSvg.createFragment('use', {
	        'xlink:href': '#' + this.glyphCode,
	        x: this.bounds.x + this.origin.x,
	        y: this.bounds.y + this.origin.y
	      });
	    }
	  }]);
	
	  return GlyphVisualizer;
	}(ChantLayoutElement);
	
	var TextSpan = function TextSpan(text, properties) {
	  if (typeof properties === 'undefined' || properties === null) properties = "";
	
	  this.text = text;
	  this.properties = properties;
	};
	
	var boldMarkup = "*";
	var italicMarkup = "_";
	var redMarkup = "^";
	var smallCapsMarkup = "%";
	
	function MarkupStackFrame(symbol, startIndex, properties) {
	  this.symbol = symbol;
	  this.startIndex = startIndex;
	  this.properties = properties;
	}
	
	MarkupStackFrame.createStackFrame = function (symbol, startIndex) {
	
	  var properties = "";
	
	  switch (symbol) {
	    case boldMarkup:
	      properties = 'font-weight:bold;';
	      break;
	    case italicMarkup:
	      properties = 'font-style:italic;';
	      break;
	    case redMarkup:
	      properties = 'fill:#f00;'; // SVG text color is set by the fill property
	      break;
	    case smallCapsMarkup:
	      properties = "font-feature-settings:'smcp';-webkit-font-feature-settings:'smcp';";
	      break;
	  }
	
	  return new MarkupStackFrame(symbol, startIndex, properties);
	};
	
	var TextElement = exports.TextElement = function (_ChantLayoutElement5) {
	  _inherits(TextElement, _ChantLayoutElement5);
	
	  function TextElement(ctxt, text, fontFamily, fontSize, textAnchor) {
	    _classCallCheck(this, TextElement);
	
	    // set these to some sane values for now...
	
	    var _this5 = _possibleConstructorReturn(this, Object.getPrototypeOf(TextElement).call(this));
	
	    _this5.bounds.x = 0;
	    _this5.bounds.y = 0;
	    _this5.bounds.width = 0;
	    _this5.bounds.height = 0;
	    _this5.origin.x = 0;
	    _this5.origin.y = 0;
	
	    _this5.fontFamily = fontFamily;
	    _this5.fontSize = fontSize;
	    _this5.textAnchor = textAnchor;
	    _this5.dominantBaseline = 'baseline'; // default placement
	
	    _this5.generateSpansFromText(ctxt, text);
	
	    _this5.recalculateMetrics(ctxt);
	    return _this5;
	  }
	
	  _createClass(TextElement, [{
	    key: 'generateSpansFromText',
	    value: function generateSpansFromText(ctxt, text) {
	
	      this.unsanitizedText = text;
	      this.text = "";
	      this.spans = [];
	
	      // save ourselves a lot of grief for a very common text:
	      if (text === "*" || text === "†") {
	        this.spans.push(new TextSpan(text, ""));
	        return;
	      }
	
	      var markupStack = [];
	      var spanStartIndex = 0;
	
	      var that = this;
	      var closeSpan = function closeSpan(spanText, extraProperties) {
	        if (spanText == "") return;
	
	        that.text += spanText;
	
	        var properties = "";
	        for (var i = 0; i < markupStack.length; i++) {
	          properties += markupStack[i].properties;
	        }if (extraProperties) properties = properties + extraProperties;
	
	        that.spans.push(new TextSpan(spanText, properties));
	      };
	
	      var markupRegex = /(\*|_|\^|%|[ARVarv]\/\.)/g;
	
	      var match = null;
	      while (match = markupRegex.exec(text)) {
	
	        var markupSymbol = match[0];
	
	        // non-matching symbols first
	        if (markupSymbol == "A/." || markupSymbol == "R/." || markupSymbol == "V/." || markupSymbol == "a/." || markupSymbol == "r/." || markupSymbol == "v/.") {
	          closeSpan(text[match.index] + ".", "font-family:'Exsurge Characters';fill:#f00;");
	        } else if (markupStack.length == 0) {
	          // otherwise we're dealing with matching markup delimeters
	          // if this is our first markup frame, then just create an inline for preceding text and push the stack frame
	          closeSpan(text.substring(spanStartIndex, match.index));
	          markupStack.push(MarkupStackFrame.createStackFrame(markupSymbol, match.index));
	        } else {
	
	          if (markupStack[markupStack.length - 1].symbol == markupSymbol) {
	            // group close
	            closeSpan(text.substring(spanStartIndex, match.index));
	            markupStack.pop();
	          } else if (markupStack.filter(function (frame) {
	            return frame.Symbol == markupSymbol;
	          }).length > 0) {
	            // trying to open a recursive group (or forgot to close a previous group)
	            // in either case, we just unwind to the previous stack frame
	            spanStartIndex = markupStack[markupStack.length - 1].startIndex;
	            markupStack.pop();
	            continue;
	          } else {
	            // group open
	            closeSpan(text.substring(spanStartIndex, match.index));
	            markupStack.push(MarkupStackFrame.createStackFrame(markupSymbol, match.index));
	          }
	        }
	
	        // advance the start index past the current markup
	        spanStartIndex = match.index + markupSymbol.length;
	      }
	
	      // if we finished matches, and there is still some text left, create one final run
	      if (spanStartIndex < text.length) closeSpan(text.substring(spanStartIndex, text.length));
	
	      // if after all of that we still didn't create any runs, then just add the entire text
	      // string itself as a run
	      if (this.spans.length == 0) closeSpan(text);
	    }
	  }, {
	    key: 'recalculateMetrics',
	    value: function recalculateMetrics(ctxt) {
	
	      this.bounds.x = 0;
	      this.bounds.y = 0;
	
	      ctxt.svgTextMeasurer.innerHTML = this.createDrawable(ctxt);
	      var bbox = ctxt.svgTextMeasurer.firstChild.getBBox();
	
	      this.bounds.x = 0;
	      this.bounds.y = 0;
	      this.bounds.width = bbox.width;
	      this.bounds.height = bbox.height;
	      this.origin.x = 0;
	      this.origin.y = 0; // baseline?
	    }
	  }, {
	    key: 'getCssClasses',
	    value: function getCssClasses() {
	      return "";
	    }
	  }, {
	    key: 'getExtraStyleProperties',
	    value: function getExtraStyleProperties(ctxt) {
	      return "";
	    }
	  }, {
	    key: 'createDrawable',
	    value: function createDrawable(ctxt) {
	
	      var spans = "";
	
	      for (var i = 0; i < this.spans.length; i++) {
	        var options = {};
	
	        if (this.spans[i].properties) options['style'] = this.spans[i].properties;
	
	        spans += QuickSvg.createFragment('tspan', options, this.spans[i].text);
	      }
	
	      var styleProperties = "font-family:" + this.fontFamily + ";font-size:" + this.fontSize + ";font-kerning:normal;" + +this.getExtraStyleProperties(ctxt);
	
	      return QuickSvg.createFragment('text', {
	        'x': this.bounds.x,
	        'y': this.bounds.y,
	        'class': this.getCssClasses().trim(),
	        'text-anchor': this.textAnchor,
	        'dominant-baseline': this.dominantBaseline,
	        'style': styleProperties
	      }, spans);
	    }
	  }]);
	
	  return TextElement;
	}(ChantLayoutElement);
	
	var LyricType = exports.LyricType = {
	  SingleSyllable: 0,
	  BeginningSyllable: 1,
	  MiddleSyllable: 2,
	  EndingSyllable: 3,
	
	  Directive: 4 // for asterisks, "ij." elements, or other performance notes.
	};
	
	var Lyric = exports.Lyric = function (_TextElement) {
	  _inherits(Lyric, _TextElement);
	
	  function Lyric(ctxt, text, lyricType) {
	    _classCallCheck(this, Lyric);
	
	    var _this6 = _possibleConstructorReturn(this, Object.getPrototypeOf(Lyric).call(this, ctxt, text, ctxt.lyricTextFont, ctxt.lyricTextSize, 'start'));
	
	    _this6.cssClasses += " Lyric";
	
	    if (typeof lyricType === 'undefined' || lyricType == null || lyricType == "") _this6.lyricType = LyricType.SingleSyllable;else _this6.lyricType = lyricType;
	
	    _this6.needsConnector = false;
	    return _this6;
	  }
	
	  _createClass(Lyric, [{
	    key: 'allowsConnector',
	    value: function allowsConnector() {
	      return this.lyricType == LyricType.BeginningSyllable || this.lyricType == LyricType.MiddleSyllable;
	    }
	  }, {
	    key: 'setNeedsConnector',
	    value: function setNeedsConnector(needs) {
	      if (needs === true) {
	        this.needsConnector = true;
	        this.bounds.width = this.widthWithConnector;
	
	        if (this.spans.length > 0) this.spans[this.spans.length - 1].text = this.lastSpanTextWithConnector;
	      } else {
	        this.needsConnector = false;
	        this.bounds.width = this.widthWithoutConnector;
	
	        if (this.spans.length > 0) this.spans[this.spans.length - 1].text = this.lastSpanText;
	      }
	    }
	  }, {
	    key: 'generateSpansFromText',
	    value: function generateSpansFromText(ctxt, text) {
	      _get(Object.getPrototypeOf(Lyric.prototype), 'generateSpansFromText', this).call(this, ctxt, text);
	
	      if (this.spans.length > 0) {
	        this.lastSpanText = this.spans[this.spans.length - 1].text;
	        this.lastSpanTextWithConnector = this.lastSpanText + ctxt.syllableConnector;
	      } else {
	        this.lastSpanText = "";
	        this.lastSpanTextWithConnector = "";
	      }
	    }
	  }, {
	    key: 'recalculateMetrics',
	    value: function recalculateMetrics(ctxt) {
	      _get(Object.getPrototypeOf(Lyric.prototype), 'recalculateMetrics', this).call(this, ctxt);
	
	      this.widthWithoutConnector = this.bounds.width;
	      this.textWithConnector = this.text + ctxt.syllableConnector;
	
	      this.widthWithConnector = this.bounds.width + ctxt.hyphenWidth;
	
	      var activeLanguage = ctxt.defaultLanguage;
	
	      // calculate the point where the text lines up to the staff notation
	      // and offset the rect that much
	      var offset = 0;
	
	      if (this.lyricType != LyricType.Directive) {
	
	        // Non-directive elements are lined up to the chant notation based on vowel segments.
	        // First we determine the vowel segment of the text, then we calculate the center point
	        // of that vowel segment.
	        var result = activeLanguage.findVowelSegment(this.text, 0);
	        if (result.found === true) {
	
	          // svgTextMeasurer still has the current lyric in it...
	
	          var x1 = ctxt.svgTextMeasurer.firstChild.getSubStringLength(0, result.startIndex);
	          var x2 = ctxt.svgTextMeasurer.firstChild.getSubStringLength(0, result.startIndex + result.length);
	
	          offset = x1 + (x2 - x1) / 2;
	        } else {
	          // no vowels found according the text's language. for now we just center the text
	          offset = this.widthWithoutConnector / 2;
	        }
	      } else {
	        // directives are always centered on the chant notation
	        offset = this.widthWithoutConnector / 2;
	      }
	
	      this.bounds.x = -offset;
	      this.bounds.y = 0;
	
	      this.origin.x = offset;
	
	      this.bounds.width = this.widthWithoutConnector;
	      this.bounds.height = ctxt.lyricTextSize;
	    }
	  }, {
	    key: 'getCssClasses',
	    value: function getCssClasses() {
	
	      var classes = "lyric ";
	
	      if (this.lyricType == LyricType.Directive) classes += "directive ";
	
	      return classes + _get(Object.getPrototypeOf(Lyric.prototype), 'getCssClasses', this).call(this);
	    }
	  }, {
	    key: 'getExtraStyleProperties',
	    value: function getExtraStyleProperties(ctxt) {
	      var props = _get(Object.getPrototypeOf(Lyric.prototype), 'getExtraStyleProperties', this).call(this);
	
	      if (this.lyricType == LyricType.Directive && ctxt.autoColor === true) props += "fill:#f00;";
	
	      return props;
	    }
	  }, {
	    key: 'createDrawable',
	    value: function createDrawable(ctxt) {
	      if (this.spans.length > 0) {
	        if (this.needsConnector) this.spans[this.spans.length - 1].text = this.lastSpanTextWithConnector;else this.spans[this.spans.length - 1].text = this.lastSpanText;
	      }
	
	      return _get(Object.getPrototypeOf(Lyric.prototype), 'createDrawable', this).call(this, ctxt);
	    }
	  }]);
	
	  return Lyric;
	}(TextElement);
	
	var DropCap = exports.DropCap = function (_TextElement2) {
	  _inherits(DropCap, _TextElement2);
	
	  /**
	   * @param {String} text
	   */
	
	  function DropCap(ctxt, text) {
	    _classCallCheck(this, DropCap);
	
	    var _this7 = _possibleConstructorReturn(this, Object.getPrototypeOf(DropCap).call(this, ctxt, text, ctxt.dropCapTextFont, ctxt.dropCapTextSize, 'middle'));
	
	    _this7.padding = ctxt.staffInterval * 2;
	    return _this7;
	  }
	
	  _createClass(DropCap, [{
	    key: 'getCssClasses',
	    value: function getCssClasses() {
	      return "dropCap " + _get(Object.getPrototypeOf(DropCap.prototype), 'getCssClasses', this).call(this);
	    }
	  }]);
	
	  return DropCap;
	}(TextElement);
	
	var Annotation = exports.Annotation = function (_TextElement3) {
	  _inherits(Annotation, _TextElement3);
	
	  /**
	   * @param {String} text
	   */
	
	  function Annotation(ctxt, text) {
	    _classCallCheck(this, Annotation);
	
	    var _this8 = _possibleConstructorReturn(this, Object.getPrototypeOf(Annotation).call(this, ctxt, text, ctxt.annotationTextFont, ctxt.annotationTextSize, 'middle'));
	
	    _this8.padding = ctxt.staffInterval;
	    _this8.dominantBaseline = 'hanging'; // so that annotations can be aligned at the top.
	    return _this8;
	  }
	
	  _createClass(Annotation, [{
	    key: 'getCssClasses',
	    value: function getCssClasses() {
	      return "annotation " + _get(Object.getPrototypeOf(Annotation.prototype), 'getCssClasses', this).call(this);
	    }
	  }]);
	
	  return Annotation;
	}(TextElement);
	
	var ChantNotationElement = exports.ChantNotationElement = function (_ChantLayoutElement6) {
	  _inherits(ChantNotationElement, _ChantLayoutElement6);
	
	  function ChantNotationElement() {
	    _classCallCheck(this, ChantNotationElement);
	
	    //double
	
	    var _this9 = _possibleConstructorReturn(this, Object.getPrototypeOf(ChantNotationElement).call(this));
	
	    _this9.leadingSpace = 0.0;
	    _this9.trailingSpace = -1; // if less than zero, this is automatically calculated at layout time
	    _this9.keepWithNext = false;
	
	    _this9.lyric = null;
	
	    _this9.score = null; // the ChantScore
	    _this9.line = null; // the ChantLine
	
	    _this9.visualizers = [];
	    return _this9;
	  }
	
	  _createClass(ChantNotationElement, [{
	    key: 'hasLyric',
	    value: function hasLyric() {
	      if (this.lyric != null) return true;else return false;
	    }
	  }, {
	    key: 'getLyricLeft',
	    value: function getLyricLeft() {
	      return this.bounds.x + this.lyric.bounds.x;
	    }
	  }, {
	    key: 'getLyricRight',
	    value: function getLyricRight() {
	      return this.bounds.x + this.lyric.bounds.x + this.lyric.bounds.width;
	    }
	
	    // used by subclasses while building up the chant notations.
	
	  }, {
	    key: 'addVisualizer',
	    value: function addVisualizer(chantLayoutElement) {
	      if (this.bounds.isEmpty()) this.bounds = chantLayoutElement.bounds.clone();else this.bounds.union(chantLayoutElement.bounds);
	
	      this.visualizers.push(chantLayoutElement);
	    }
	
	    // chant notation elements are given an opportunity to perform their layout via this function.
	    // subclasses should call this function first in overrides of this function.
	    // on completion, exsurge presumes that the bounds, the origin, and the drawable objects are
	    // all valid and prepared for higher level layout.
	
	  }, {
	    key: 'performLayout',
	    value: function performLayout(ctxt) {
	
	      if (this.trailingSpace < 0) this.trailingSpace = ctxt.intraNeumeSpacing * 4;
	
	      // reset the bounds and the staff notations before doing a layout
	      this.visualizers = [];
	      this.bounds = new _Exsurge.Rect(Infinity, Infinity, -Infinity, -Infinity);
	
	      if (this.hasLyric()) this.lyric.recalculateMetrics(ctxt);
	    }
	
	    // a helper function for subclasses to call after they are done performing layout...
	
	  }, {
	    key: 'finishLayout',
	    value: function finishLayout(ctxt) {
	      this.origin.x -= -this.bounds.x;
	      this.bounds.x = 0;
	      //this.bounds.y = 0;
	
	      // add the lyric and line it up
	      if (this.hasLyric()) this.lyric.bounds.x = this.origin.x - this.lyric.origin.x;
	    }
	  }, {
	    key: 'createDrawable',
	    value: function createDrawable(ctxt) {
	      var inner = "";
	
	      for (var i = 0; i < this.visualizers.length; i++) {
	        inner += this.visualizers[i].createDrawable(ctxt);
	      }if (this.lyric) inner += this.lyric.createDrawable(ctxt);
	
	      return QuickSvg.createFragment('g', {
	        'class': 'ChantNotationElement ' + this.constructor.name,
	        'transform': 'translate(' + this.bounds.x + ',' + 0 + ')'
	      }, inner);
	    }
	  }]);
	
	  return ChantNotationElement;
	}(ChantLayoutElement);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ChantDocument = exports.ChantScore = exports.ChantLine = exports.ChantLineBreak = exports.FaClef = exports.DoClef = exports.Clef = exports.Note = exports.NoteShape = undefined;
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Exsurge = __webpack_require__(1);
	
	var Exsurge = _interopRequireWildcard(_Exsurge);
	
	var _Exsurge2 = __webpack_require__(4);
	
	var _Exsurge3 = __webpack_require__(3);
	
	var _ExsurgeChant = __webpack_require__(6);
	
	var _Exsurge4 = __webpack_require__(7);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //
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
	
	var NoteShape = exports.NoteShape = {
	  Default: 0,
	
	  Inclinatum: 1,
	  Virga: 2,
	  Quilisma: 3,
	  Cavum: 4,
	  OriscusAscending: 5,
	  OriscusDescending: 6,
	
	  Apostropha: 7,
	
	  AscLiquescent: 8,
	  DesLiquescent: 9
	};
	
	/**
	 * @class
	 */
	
	var Note = exports.Note = function (_ChantLayoutElement) {
	  _inherits(Note, _ChantLayoutElement);
	
	  /**
	   * @para {Pitch} pitch
	   */
	
	  function Note(pitch) {
	    _classCallCheck(this, Note);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Note).call(this));
	
	    if (typeof pitch !== 'undefined') _this.pitch = pitch;else _this.pitch = null;
	
	    _this.glyphVisualizer = null;
	    _this.staffPosition = 0;
	    _this.isLiquescent = false;
	    _this.shape = NoteShape.Default;
	    _this.markings = [];
	    return _this;
	  }
	
	  _createClass(Note, [{
	    key: 'setGlyphShape',
	    value: function setGlyphShape(ctxt, glyphCode) {
	      if (this.glyphVisualizer) this.glyphVisualizer.setGlyphShape(ctxt, glyphCode);else this.glyphVisualizer = new _Exsurge2.GlyphVisualizer(ctxt, glyphCode);
	    }
	  }, {
	    key: 'performLayout',
	    value: function performLayout(ctxt) {
	
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
	  }, {
	    key: 'draw',
	    value: function draw(ctxt) {
	
	      this.glyphVisualizer.bounds.x = this.bounds.x;
	      this.glyphVisualizer.bounds.y = this.bounds.y;
	
	      this.glyphVisualizer.draw(ctxt);
	    }
	  }, {
	    key: 'createDrawable',
	    value: function createDrawable(ctxt) {
	
	      this.glyphVisualizer.bounds.x = this.bounds.x;
	      this.glyphVisualizer.bounds.y = this.bounds.y;
	      return this.glyphVisualizer.createDrawable(ctxt);
	    }
	  }]);
	
	  return Note;
	}(_Exsurge2.ChantLayoutElement);
	
	var Clef = exports.Clef = function (_ChantNotationElement) {
	  _inherits(Clef, _ChantNotationElement);
	
	  function Clef(staffPosition, octave) {
	    _classCallCheck(this, Clef);
	
	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Clef).call(this));
	
	    _this2.isClef = true;
	    _this2.staffPosition = staffPosition;
	    _this2.octave = octave;
	    _this2.defaultAccidental = null;
	    _this2.activeAccidental = null;
	    return _this2;
	  }
	
	  _createClass(Clef, [{
	    key: 'resetAccidentals',
	    value: function resetAccidentals() {
	      this.activeAccidental = this.defaultAccidental;
	    }
	  }, {
	    key: 'updateChantLogic',
	    value: function updateChantLogic() {
	      _get(Object.getPrototypeOf(Clef.prototype), 'updateChantLogic', this).call(this);
	
	      _Exsurge2.ctxt.activeClef = this;
	    }
	  }, {
	    key: 'pitchToStaffPosition',
	    value: function pitchToStaffPosition(pitch) {}
	  }]);
	
	  return Clef;
	}(_Exsurge2.ChantNotationElement);
	
	var DoClef = exports.DoClef = function (_Clef) {
	  _inherits(DoClef, _Clef);
	
	  function DoClef(staffPosition, octave) {
	    _classCallCheck(this, DoClef);
	
	    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(DoClef).call(this, staffPosition, octave));
	
	    _this3.leadingSpace = 0.0;
	    return _this3;
	  }
	
	  _createClass(DoClef, [{
	    key: 'pitchToStaffPosition',
	    value: function pitchToStaffPosition(pitch) {
	      return (pitch.octave - this.octave) * 7 + this.staffPosition + _Exsurge.Pitch.stepToStaffOffset(pitch.step) - _Exsurge.Pitch.stepToStaffOffset(_Exsurge.Step.Do);
	    }
	  }, {
	    key: 'staffPositionToPitch',
	    value: function staffPositionToPitch(staffPosition) {
	      var offset = staffPosition - this.staffPosition;
	      var octaveOffset = Math.floor(offset / 7);
	
	      var step = _Exsurge.Pitch.staffOffsetToStep(offset);
	
	      if (this.defaultAccidental != null && step == this.defaultAccidental.step) step += this.defaultAccidental.accidentalType;
	
	      return new _Exsurge.Pitch(step, this.octave + octaveOffset);
	    }
	  }, {
	    key: 'performLayout',
	    value: function performLayout(ctxt) {
	      _get(Object.getPrototypeOf(DoClef.prototype), 'performLayout', this).call(this, ctxt);
	
	      var glyph = new _Exsurge2.GlyphVisualizer(ctxt, _Exsurge2.GlyphCode.DoClef);
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
	  }, {
	    key: 'clone',
	    value: function clone() {
	      return new DoClef(this.staffPosition, this.octave);
	    }
	  }]);
	
	  return DoClef;
	}(Clef);
	
	var FaClef = exports.FaClef = function (_Clef2) {
	  _inherits(FaClef, _Clef2);
	
	  function FaClef(staffPosition, octave) {
	    _classCallCheck(this, FaClef);
	
	    var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(FaClef).call(this, staffPosition, octave));
	
	    _this4.octave = octave;
	
	    _this4.leadingSpace = 0;
	    return _this4;
	  }
	
	  _createClass(FaClef, [{
	    key: 'pitchToStaffPosition',
	    value: function pitchToStaffPosition(pitch) {
	      return (pitch.octave - this.octave) * 7 + this.staffPosition + _Exsurge.Pitch.stepToStaffOffset(pitch.step) - _Exsurge.Pitch.stepToStaffOffset(_Exsurge.Step.Fa);
	    }
	  }, {
	    key: 'staffPositionToPitch',
	    value: function staffPositionToPitch(staffPosition) {
	      var offset = staffPosition - this.staffPosition + 3; // + 3 because it's a fa clef (3 == offset from Do)
	      var octaveOffset = Math.floor(offset / 7);
	
	      var step = _Exsurge.Pitch.staffOffsetToStep(offset);
	
	      if (step == _Exsurge.Step.Ti && this.defaultAccidental == AccidentalType.Flat) step = _Exsurge.Step.Te;
	
	      return new _Exsurge.Pitch(step, this.octave + octaveOffset);
	    }
	  }, {
	    key: 'performLayout',
	    value: function performLayout(ctxt) {
	      _get(Object.getPrototypeOf(FaClef.prototype), 'performLayout', this).call(this, ctxt);
	
	      var glyph = new _Exsurge2.GlyphVisualizer(ctxt, _Exsurge2.GlyphCode.FaClef);
	      glyph.setStaffPosition(ctxt, this.staffPosition);
	      this.addVisualizer(glyph);
	
	      this.finishLayout(ctxt);
	    }
	  }, {
	    key: 'clone',
	    value: function clone() {
	      return new FaClef(this.staffPosition, this.octave);
	    }
	  }]);
	
	  return FaClef;
	}(Clef);
	
	var ChantLineBreak = exports.ChantLineBreak = function (_ChantNotationElement2) {
	  _inherits(ChantLineBreak, _ChantNotationElement2);
	
	  function ChantLineBreak(justify) {
	    _classCallCheck(this, ChantLineBreak);
	
	    var _this5 = _possibleConstructorReturn(this, Object.getPrototypeOf(ChantLineBreak).call(this));
	
	    _this5.justify = justify;
	    return _this5;
	  }
	
	  _createClass(ChantLineBreak, [{
	    key: 'performLayout',
	    value: function performLayout(ctxt) {
	
	      // reset the bounds before doing a layout
	      this.bounds = new _Exsurge.Rect(0, 0, 0, 0);
	    }
	  }, {
	    key: 'clone',
	    value: function clone() {
	      var lb = new ChantLineBreak();
	      lb.justify = this.justify;
	
	      return lb;
	    }
	  }]);
	
	  return ChantLineBreak;
	}(_Exsurge2.ChantNotationElement);
	
	// a chant line represents one staff line on the page. ChantLines are created by the score
	// and laid out by the page
	
	
	var ChantLine = exports.ChantLine = function (_ChantLayoutElement2) {
	  _inherits(ChantLine, _ChantLayoutElement2);
	
	  function ChantLine(score) {
	    _classCallCheck(this, ChantLine);
	
	    var _this6 = _possibleConstructorReturn(this, Object.getPrototypeOf(ChantLine).call(this));
	
	    _this6.score = score;
	
	    _this6.scoreNotationStart = 0;
	    _this6.scoreNotationCount = 0;
	    _this6.notations = [];
	    _this6.notationBounds = null; // Rect
	
	    _this6.lyricBounds = null; // Rect
	
	    _this6.staffLeft = 0;
	    _this6.staffRight = 0;
	
	    _this6.custod = null;
	
	    _this6.justify = true;
	
	    _this6.startingClef = null; // necessary for the layout process
	
	    _this6.nextLine = null;
	    _this6.previousLine = null; // for layout assistance
	
	    // fixme: make these configurable values from the score
	    _this6.spaceAfterNotations = 30; // the space between the notation bounds and the first text track
	    _this6.spaceBetweenTextTracks = 20; // spacing between each text track
	    return _this6;
	  }
	
	  _createClass(ChantLine, [{
	    key: 'setStartingClef',
	    value: function setStartingClef(clef) {
	      this.startingClef = clef.clone();
	    }
	  }, {
	    key: 'performLayout',
	    value: function performLayout(ctxt) {
	
	      // start off with a rectangle that holds at least the four staff lines
	      // we fudge the 3 to 3.1 so that the svg doesn't crop off the upper/lower staff lines...
	      this.notationBounds = new _Exsurge.Rect(this.staffLeft, -3.1 * ctxt.staffInterval, this.staffRight - this.staffLeft, 6.2 * ctxt.staffInterval);
	
	      // run through all the elements of the line and calculate the bounds of the notations,
	      // as well as the bounds of each text track we will use
	      var i;
	      var notation = null;
	
	      for (i = 0; i < this.notations.length; i++) {
	        this.notationBounds.union(this.notations[i].bounds);
	      }this.lyricVerticalOffset = this.notationBounds.y + this.notationBounds.height + ctxt.lyricTextSize;
	
	      // finalize the lyrics placement
	      for (i = 0; i < this.notations.length; i++) {
	        notation = this.notations[i];
	
	        if (!notation.hasLyric()) continue;
	
	        notation.lyric.bounds.y = this.lyricVerticalOffset;
	      }
	
	      // dropCap and the annotations
	      if (this.scoreNotationStart === 0) {
	
	        if (this.score.dropCap !== null) {
	
	          // drop caps and annotations are drawn from their center, so aligning them
	          // horizontally is as easy as this.staffLeft / 2
	          this.score.dropCap.bounds.x = this.staffLeft / 2;
	          this.score.dropCap.bounds.y = this.lyricVerticalOffset;
	        }
	
	        if (this.score.annotation !== null) {
	          // annotations use dominant-baseline to align text to the top
	          this.score.annotation.bounds.x += this.staffLeft / 2;
	          this.score.annotation.bounds.y += -ctxt.staffInterval * 3;
	        }
	      }
	
	      this.notationBounds.height += ctxt.lyricTextSize;
	
	      this.bounds.x = 0;
	      this.bounds.y = this.notationBounds.y;
	      this.bounds.width = this.notationBounds.right();
	      this.bounds.height = this.notationBounds.height;
	
	      // the origin of the chant line's coordinate space is at the center line of the left extremity of the staff
	      this.origin = new _Exsurge.Point(this.staffLeft, -this.notationBounds.y);
	    }
	  }, {
	    key: 'createDrawable',
	    value: function createDrawable(ctxt) {
	      var inner = "";
	
	      // add the chant lines
	      var x1 = this.staffLeft,
	          x2 = this.staffRight;
	
	      // create the staff lines
	      for (var i = -3; i <= 3; i += 2) {
	
	        inner += _Exsurge2.QuickSvg.createFragment('line', {
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
	      if (this.scoreNotationStart === 0) {
	
	        if (this.score.dropCap !== null) inner += this.score.dropCap.createDrawable(ctxt);
	
	        if (this.score.annotation !== null) inner += this.score.annotation.createDrawable(ctxt);
	      }
	
	      // add all of the notations
	      for (var i = 0; i < this.notations.length; i++) {
	        inner += this.notations[i].createDrawable(ctxt);
	      }return _Exsurge2.QuickSvg.createFragment('g', {
	        'class': 'ChantLine',
	        'transform': 'translate(' + this.bounds.x + ',' + this.bounds.y + ')'
	      }, inner);
	    }
	  }, {
	    key: 'buildFromChantNotationIndex',
	    value: function buildFromChantNotationIndex(ctxt, newElementStart, width) {
	
	      // todo: reset / clear the children we have in case they have data
	      this.scoreNotationStart = newElementStart;
	      this.scoreNotationCount = 0;
	      this.notations = [];
	
	      this.staffLeft = 0;
	
	      if (width > 0) this.staffRight = this.staffLeft + width;else this.staffRight = 99999999; // no limit to staff size
	
	      // If this is the first chant line, then we have to make room for a
	      // drop cap and/or annotation, if present
	      if (this.scoreNotationStart == 0) {
	
	        var padding = 0;
	
	        if (this.score.dropCap !== null) padding = this.score.dropCap.bounds.width + this.score.dropCap.padding * 2;
	
	        if (this.score.annotation !== null) padding = Math.max(padding, this.score.annotation.bounds.width + this.score.annotation.padding * 4);
	
	        this.staffLeft += padding;
	      }
	
	      // set up the clef...
	      // Also, add the clef as a child (which will also set the clef in the context)
	      this.setStartingClef(ctxt.activeClef);
	      this.startingClef.performLayout(ctxt);
	      this.startingClef.bounds.x = this.staffLeft;
	      this.notations.push(this.startingClef);
	
	      var current = this.startingClef,
	          previous = null,
	          previousWithLyric = null;
	
	      // todo: estimate how much space we have available to us
	      var rightBoundary = this.staffRight - _Exsurge3.Glyphs.CustodLong.bounds.width - ctxt.intraNeumeSpacing * 4; // possible custod on the line
	
	      // todo: iterate through the notations, fittng what we can on this line
	      var scoreNotations = this.score.notations;
	
	      for (var i = newElementStart; i < scoreNotations.length; i++) {
	
	        if (current.hasLyric()) previousWithLyric = current;
	
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
	            } else break;
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
	
	        if (last.hasLyric() && last.getLyricRight() > last.bounds.right() + last.trailingSpace) extraSpace = this.staffRight - last.getLyricRight();else extraSpace = this.staffRight - (last.bounds.right() + last.trailingSpace);
	      }
	
	      // create the custod at the end of the line (if we need it!)
	      // if we find an element following this one that is a neume, we create a custod for it
	      for (var i = this.scoreNotationStart + this.scoreNotationCount; i < this.score.notations.length; i++) {
	        var notation = this.score.notations[i];
	
	        if ('notes' in notation && notation.notes.length > 0) {
	
	          var custod = new _ExsurgeChant.Custod();
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
	      if (this.justify === true && width > 0 && this.scoreNotationStart + this.scoreNotationCount < this.score.notations.length && extraSpace > 0) this.justifyElements(extraSpace);
	    }
	  }, {
	    key: 'justifyElements',
	    value: function justifyElements(extraSpace) {
	
	      var indices = [];
	
	      var prev = null,
	          curr = null,
	          prevWithLyrics = null;
	
	      // if we have a custod, place it at the end of the line
	      if (this.custod != null) this.custod.bounds.x = this.staffRight - this.custod.bounds.width - this.custod.leadingSpace;
	
	      // first pass: determine the neumes we can space apart
	      // start at 1 to skip the clef
	      for (var i = 1; i < this.notations.length - 1; i++) {
	
	        if (curr != null && curr.hasLyric()) prevWithLyrics = curr;
	
	        prev = curr;
	        curr = this.notations[i];
	
	        if (prev != null && prev.keepWithNext === true) continue;
	
	        if (prevWithLyrics != null && prevWithLyrics.lyric.allowsConnector() && !prevWithLyrics.lyric.needsConnector) continue;
	
	        if (curr.constructor.name == 'ChantLineBreak') continue;
	
	        // otherwise, we can add space before this element
	        indices.push(i);
	      }
	
	      if (indices.length == 0) return;
	
	      var offset = 0;
	      var increment = extraSpace / indices.length;
	      var lastIndex = this.notations[this.notations.length - 1].constructor.name == 'Custod' ? this.notations.length - 1 : this.notations.length;
	      for (var i = 1; i < lastIndex; i++) {
	
	        curr = this.notations[i];
	
	        if (indices.indexOf(i) >= 0) {
	          curr.bounds.x += offset + increment;
	          offset += increment;
	        } else curr.bounds.x += offset;
	      }
	
	      offset = offset;
	    }
	
	    // this is where the real core of positioning neumes takes place
	    // returns true if positioning was able to fit the neume before rightBoundary.
	    // returns false if cannot fit before given right margin.
	    // fixme: if this returns false, shouldn't we set the connectors on prev to be activated?!
	
	  }, {
	    key: 'positionNotationElement',
	    value: function positionNotationElement(ctxt, prevWithLyric, prev, curr, rightBoundary) {
	
	      // To begin we just place the current notation right after the previous,
	      // irrespective of lyrics.
	      curr.bounds.x = prev.bounds.right() + prev.trailingSpace;
	
	      if (prevWithLyric == null) {
	
	        var maxRight = curr.bounds.right() + curr.trailingSpace;
	
	        // if the lyric left is negative, then offset the neume appropriately
	        if (curr.hasLyric()) {
	          curr.lyric.setNeedsConnector(false); // we hope for the best!
	
	          if (curr.getLyricLeft() < 0) curr.bounds.x += -curr.getLyricLeft();
	
	          maxRight = Math.max(maxRight, curr.getLyricRight());
	        }
	
	        if (maxRight > rightBoundary) return false;else return true;
	      }
	
	      if (curr.hasLyric() === false) {
	
	        if (prevWithLyric.lyric.allowsConnector()) prevWithLyric.lyric.setNeedsConnector(true);
	
	        if (curr.bounds.right() + curr.trailingSpace < rightBoundary) return true;else {
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
	
	          if (prevLyricRight > currLyricLeft) curr.bounds.x += prevLyricRight - currLyricLeft;
	        }
	      }
	
	      if (curr.bounds.right() + curr.trailingSpace < rightBoundary) return true;
	
	      // if we made it this far, then the element won't fit on this line.
	      // set the position of the current element to the beginning of a chant line,
	      // and mark the previous lyric as connecting if needed.
	      // curr.bounds.x = this.startingClef.bounds.right();
	
	      if (prevWithLyric.lyric != null && prevWithLyric.lyric.allowsConnector()) prevWithLyric.lyric.setNeedsConnector(true);
	
	      return false;
	    }
	  }]);
	
	  return ChantLine;
	}(_Exsurge2.ChantLayoutElement);
	
	/*
	 * Score, document
	 */
	
	
	var ChantScore = exports.ChantScore = function () {
	  function ChantScore() {
	    _classCallCheck(this, ChantScore);
	
	    this.startingClef = null; // Clef
	
	    this.notations = [];
	    this.lines = [];
	    this.notes = [];
	
	    this.dropCap = null;
	    this.annotation = null;
	
	    this.compiled = false;
	
	    this.autoColoring = true;
	
	    // valid after chant lines are created...
	    this.bounds = new _Exsurge.Rect();
	  }
	
	  _createClass(ChantScore, [{
	    key: 'performLayout',
	    value: function performLayout(ctxt, finishedCallback) {
	      var _this7 = this;
	
	      // first order of business: let the clef perform layout
	      this.startingClef.performLayout(ctxt);
	
	      if (this.dropCap) this.dropCap.recalculateMetrics(ctxt);
	
	      if (this.annotation) this.annotation.recalculateMetrics(ctxt);
	
	      // boot the compilation process
	      setTimeout(function () {
	        _this7.compileElement(ctxt, 0, finishedCallback);
	      }, 0);
	    }
	  }, {
	    key: 'compileElement',
	    value: function compileElement(ctxt, index, finishedCallback) {
	      var _this8 = this;
	
	      if (index >= this.notations.length) {
	
	        if (!this.compiled) {
	          this.compiled = true;
	          setTimeout(function () {
	            if (finishedCallback) finishedCallback();
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
	      setTimeout(function () {
	        _this8.compileElement(ctxt, index, finishedCallback);
	      }, 0);
	    }
	  }, {
	    key: 'layoutChantLines',
	    value: function layoutChantLines(ctxt, width, finishedCallback) {
	
	      this.lines = [];
	
	      var y = 0;
	      var currIndex = 0;
	
	      if (ctxt.activeClef == null) ctxt.activeClef = this.startingClef;
	
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
	
	      if (finishedCallback) finishedCallback(this);
	    }
	  }, {
	    key: 'createDrawable',
	    value: function createDrawable(ctxt) {
	
	      var drawable = "";
	
	      // create defs section
	      for (var def in ctxt.defs) {
	        drawable += ctxt.defs[def];
	      }drawable = _Exsurge2.QuickSvg.createFragment('defs', {}, drawable);
	
	      for (var i = 0; i < this.lines.length; i++) {
	        drawable += this.lines[i].createDrawable(ctxt);
	      }drawable = _Exsurge2.QuickSvg.createFragment('g', {}, drawable);
	
	      drawable = _Exsurge2.QuickSvg.createFragment('svg', {
	        'xmlns': 'http://www.w3.org/2000/svg',
	        'version': '1.1',
	        'xmlns:xlink': 'http://www.w3.org/1999/xlink',
	        'class': 'ChantScore',
	        'width': this.bounds.width,
	        'height': this.bounds.height
	      }, drawable);
	
	      return drawable;
	    }
	  }, {
	    key: 'prepareNotesForAudio',
	    value: function prepareNotesForAudio() {
	
	      this.notes = [];
	
	      // run through all of the notations...
	      var prevNeume = null;
	      var currNotation = null;
	      for (var i = 0; i < this.notations.length; i++) {
	        var currNotation = this.notations[i];
	
	        if (typeof currNotation.notes !== 'undefined') {
	
	          // copy the notes to the score for playback
	          for (var j = 0; j < currNotation.notes.length; j++) {
	            this.notes.push(currNotation.notes[j]);
	          }prevNeume = currNotation;
	        } else {
	          // not a neume...if it's a full bar or a double bar, we can lengthen the notes here
	          if (prevNeume != null && currNotation.constructor.name == 'FullBar' || currNotation.constructor.name == 'DoubleBar') {}
	        }
	      }
	    }
	  }, {
	    key: 'unserializeFromJson',
	    value: function unserializeFromJson(data) {
	      this.autoColoring = data['auto-coloring'];
	
	      if (data.annotation != null && data.annotation != "") {
	        // create the annotation
	        this.annotation = new _Exsurge2.Annotation(_Exsurge2.ctxt, data.annotation);
	      } else this.annotation = null;
	
	      var createDropCap = data['drop-cap'] == 'auto' ? true : false;
	
	      _Exsurge4.Gabc.parseChantNotations(data.notations, this, createDropCap);
	    }
	  }, {
	    key: 'serializeToJson',
	    value: function serializeToJson() {
	      var data = {};
	
	      data['type'] = "score";
	      data['auto-coloring'] = true;
	
	      if (this.annotation != null) data.annotation = this.annotation.unsanitizedText;else data.annotation = "";
	
	      return data;
	    }
	  }]);
	
	  return ChantScore;
	}();
	
	var ChantDocument = exports.ChantDocument = function () {
	  function ChantDocument() {
	    _classCallCheck(this, ChantDocument);
	
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
	
	  _createClass(ChantDocument, [{
	    key: 'copyLayout',
	    value: function copyLayout(to, from) {
	
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
	  }, {
	    key: 'unserializeFromJson',
	    value: function unserializeFromJson(data) {
	
	      this.copyLayout(this, data);
	
	      this.scores = [];
	
	      // read in the scores
	      for (var i = 0; i < data.scores.length; i++) {
	        var score = new ChantScore();
	
	        score.unserializeFromJson(data.scores[i]);
	        this.scores.push(score);
	      }
	    }
	  }, {
	    key: 'serializeToJson',
	    value: function serializeToJson() {
	      var data = {};
	
	      this.copyLayout(data, this);
	
	      data.scores = [];
	
	      // save scores...
	      for (var i = 0; i < this.scores.length; i++) {
	        data.scores.push(this.scores[i].serializeToJson());
	      }return data;
	    }
	  }]);
	
	  return ChantDocument;
	}();

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Virgula = exports.Accidental = exports.AccidentalType = exports.DoubleBar = exports.FullBar = exports.HalfBar = exports.QuarterBar = exports.DividingLine = exports.Custod = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Exsurge = __webpack_require__(1);
	
	var Exsurge = _interopRequireWildcard(_Exsurge);
	
	var _Exsurge2 = __webpack_require__(4);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //
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
	
	/*
	 *
	 */
	
	var Custod = exports.Custod = function (_ChantNotationElement) {
	  _inherits(Custod, _ChantNotationElement);
	
	  function Custod() {
	    _classCallCheck(this, Custod);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Custod).call(this));
	
	    _this.referringNeume = null;
	    _this.note = null;
	    return _this;
	  }
	
	  _createClass(Custod, [{
	    key: 'performLayout',
	    value: function performLayout(ctxt) {
	      _get(Object.getPrototypeOf(Custod.prototype), 'performLayout', this).call(this, ctxt);
	
	      var staffPosition = 0; // a default value just to make sure we don't fail rebuilding
	      var glyphCode;
	
	      if (this.referringNeume != null) {
	        if (this.referringNeume.notes.length > 0) staffPosition = this.referringNeume.notes[0].staffPosition;
	      } else if (note != null) staffPosition = this.note.staffPosition;
	
	      glyphCode = Custod.getGlyphCode(staffPosition);
	
	      var glyph = new _Exsurge2.GlyphVisualizer(ctxt, glyphCode);
	      glyph.setStaffPosition(ctxt, staffPosition);
	      this.addVisualizer(glyph);
	
	      this.finishLayout(ctxt);
	    }
	  }], [{
	    key: 'getGlyphCode',
	    value: function getGlyphCode(staffPosition) {
	
	      if (staffPosition <= 2) {
	
	        // ascending custodes
	        if (Math.abs(staffPosition) % 2 == 1) return _Exsurge2.GlyphCode.CustodLong;else return _Exsurge2.GlyphCode.CustodShort;
	      } else {
	
	        // descending custodes
	        if (Math.abs(staffPosition) % 2 == 1) return _Exsurge2.GlyphCode.CustodDescLong;else return _Exsurge2.GlyphCode.CustodDescShort;
	      }
	    }
	  }]);
	
	  return Custod;
	}(_Exsurge2.ChantNotationElement);
	
	/*
	 * DividingLine
	 */
	
	
	var DividingLine = exports.DividingLine = function (_ChantNotationElement2) {
	  _inherits(DividingLine, _ChantNotationElement2);
	
	  function DividingLine() {
	    _classCallCheck(this, DividingLine);
	
	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(DividingLine).call(this));
	
	    _this2.resetsAccidentals = true;
	    return _this2;
	  }
	
	  return DividingLine;
	}(_Exsurge2.ChantNotationElement);
	
	/*
	 * QuarterBar
	 */
	
	
	var QuarterBar = exports.QuarterBar = function (_DividingLine) {
	  _inherits(QuarterBar, _DividingLine);
	
	  function QuarterBar() {
	    _classCallCheck(this, QuarterBar);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(QuarterBar).apply(this, arguments));
	  }
	
	  _createClass(QuarterBar, [{
	    key: 'performLayout',
	    value: function performLayout(ctxt) {
	      _get(Object.getPrototypeOf(QuarterBar.prototype), 'performLayout', this).call(this, ctxt);
	      this.addVisualizer(new _Exsurge2.DividerLineVisualizer(ctxt, 2, 4));
	
	      this.origin.x = this.bounds.width / 2;
	
	      this.finishLayout(ctxt);
	    }
	  }]);
	
	  return QuarterBar;
	}(DividingLine);
	
	/*
	 * HalfBar
	 */
	
	
	var HalfBar = exports.HalfBar = function (_DividingLine2) {
	  _inherits(HalfBar, _DividingLine2);
	
	  function HalfBar() {
	    _classCallCheck(this, HalfBar);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(HalfBar).apply(this, arguments));
	  }
	
	  _createClass(HalfBar, [{
	    key: 'performLayout',
	    value: function performLayout(ctxt) {
	      _get(Object.getPrototypeOf(HalfBar.prototype), 'performLayout', this).call(this, ctxt);
	
	      this.addVisualizer(new _Exsurge2.DividerLineVisualizer(ctxt, -2, 2));
	
	      this.origin.x = this.bounds.width / 2;
	
	      this.finishLayout(ctxt);
	    }
	  }]);
	
	  return HalfBar;
	}(DividingLine);
	
	/*
	 * FullBar
	 */
	
	
	var FullBar = exports.FullBar = function (_DividingLine3) {
	  _inherits(FullBar, _DividingLine3);
	
	  function FullBar() {
	    _classCallCheck(this, FullBar);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FullBar).apply(this, arguments));
	  }
	
	  _createClass(FullBar, [{
	    key: 'performLayout',
	    value: function performLayout(ctxt) {
	      _get(Object.getPrototypeOf(FullBar.prototype), 'performLayout', this).call(this, ctxt);
	
	      this.addVisualizer(new _Exsurge2.DividerLineVisualizer(ctxt, -3, 3));
	
	      this.origin.x = this.bounds.width / 2;
	
	      this.finishLayout(ctxt);
	    }
	  }]);
	
	  return FullBar;
	}(DividingLine);
	
	/*
	 * DoubleBar
	 */
	
	
	var DoubleBar = exports.DoubleBar = function (_DividingLine4) {
	  _inherits(DoubleBar, _DividingLine4);
	
	  function DoubleBar() {
	    _classCallCheck(this, DoubleBar);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(DoubleBar).apply(this, arguments));
	  }
	
	  _createClass(DoubleBar, [{
	    key: 'performLayout',
	    value: function performLayout(ctxt) {
	      _get(Object.getPrototypeOf(DoubleBar.prototype), 'performLayout', this).call(this, ctxt);
	
	      var line0 = new _Exsurge2.DividerLineVisualizer(ctxt, -3, 3);
	      line0.bounds.x = 0;
	      this.addVisualizer(line0);
	
	      var line1 = new _Exsurge2.DividerLineVisualizer(ctxt, -3, 3);
	      line1.bounds.x = ctxt.intraNeumeSpacing * 2;
	      this.addVisualizer(line1);
	
	      this.origin.x = this.bounds.width / 2;
	
	      this.finishLayout(ctxt);
	    }
	  }]);
	
	  return DoubleBar;
	}(DividingLine);
	
	var AccidentalType = exports.AccidentalType = {
	  Flat: -1,
	  Natural: 0,
	  Sharp: 1
	};
	
	/*
	 * Accidental
	 */
	
	var Accidental = exports.Accidental = function (_ChantNotationElement3) {
	  _inherits(Accidental, _ChantNotationElement3);
	
	  function Accidental(staffPosition, accidentalType) {
	    _classCallCheck(this, Accidental);
	
	    var _this7 = _possibleConstructorReturn(this, Object.getPrototypeOf(Accidental).call(this));
	
	    _this7.isAccidental = true;
	    _this7.keepWithNext = true; // accidentals should always stay connected...
	
	    _this7.staffPosition = staffPosition;
	    _this7.accidentalType = accidentalType;
	    return _this7;
	  }
	
	  _createClass(Accidental, [{
	    key: 'performLayout',
	    value: function performLayout(ctxt) {
	      _get(Object.getPrototypeOf(Accidental.prototype), 'performLayout', this).call(this, ctxt);
	
	      var glyphCode = _Exsurge2.GlyphCode.Flat;
	
	      switch (this.accidentalType) {
	        case AccidentalType.Natural:
	          glyphCode = _Exsurge2.GlyphCode.Natural;
	          break;
	        case AccidentalType.Sharp:
	          glyphCode = _Exsurge2.GlyphCode.Sharp;
	          break;
	        default:
	          glyphCode = _Exsurge2.GlyphCode.Flat;
	          break;
	      }
	
	      var glyph = new _Exsurge2.GlyphVisualizer(ctxt, glyphCode);
	      glyph.setStaffPosition(ctxt, this.staffPosition);
	
	      this.addVisualizer(glyph);
	
	      this.finishLayout(ctxt);
	    }
	  }, {
	    key: 'adjustStep',
	    value: function adjustStep(step) {
	      switch (this.accidentalType) {
	        case AccidentalType.Flat:
	          if (step == Step.Ti) return Step.Te;
	          if (step == Step.Mi) return Step.Me;
	          break;
	        case AccidentalType.Sharp:
	          if (step == Step.Do) return Step.Du;
	          if (step == Step.Fa) return Step.Fu;
	          break;
	        case AccidentalType.Natural:
	          if (step == Step.Te) return Step.Ti;
	          if (step == Step.Me) return Step.Mi;
	          if (step == Step.Du) return Step.Do;
	          if (step == Step.Fu) return Step.Fa;
	          break;
	      }
	
	      // no adjustment needed
	      return step;
	    }
	  }, {
	    key: 'applyToPitch',
	    value: function applyToPitch(pitch) {
	
	      // fixme: this is broken since we changed to staff positions
	
	      // no adjusment needed
	      if (this.octave != pitch.octave) return;
	
	      pitch.step = this.adjustStep(pitch.step);
	    }
	  }]);
	
	  return Accidental;
	}(_Exsurge2.ChantNotationElement);
	
	/*
	 * Virgula
	 */
	
	
	var Virgula = exports.Virgula = function (_ChantNotationElement4) {
	  _inherits(Virgula, _ChantNotationElement4);
	
	  function Virgula() {
	    _classCallCheck(this, Virgula);
	
	    // fixme: the staff position of the virgula is customizable, so that it
	    // can be placed on different lines (top or bottom) depending on the
	    // notation tradition of what is being notated (e.g., Benedictine has it
	    //  on top line, Norbertine at the bottom)
	
	    var _this8 = _possibleConstructorReturn(this, Object.getPrototypeOf(Virgula).call(this));
	
	    _this8.staffPosition = 3;
	    return _this8;
	  }
	
	  _createClass(Virgula, [{
	    key: 'performLayout',
	    value: function performLayout(ctxt) {
	      _get(Object.getPrototypeOf(Virgula.prototype), 'performLayout', this).call(this, ctxt);
	
	      var glyph = new _Exsurge2.GlyphVisualizer(ctxt, _Exsurge2.GlyphCode.Virgula);
	      glyph.setStaffPosition(ctxt, this.staffPosition);
	
	      this.addVisualizer(glyph);
	
	      this.origin.x = this.bounds.width / 2;
	
	      this.finishLayout(ctxt);
	    }
	  }]);
	
	  return Virgula;
	}(_Exsurge2.ChantNotationElement);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Gabc = undefined;
	
	var _Exsurge = __webpack_require__(1);
	
	var _Exsurge2 = __webpack_require__(4);
	
	var _Exsurge3 = __webpack_require__(5);
	
	var _ExsurgeChant = __webpack_require__(8);
	
	var Markings = _interopRequireWildcard(_ExsurgeChant);
	
	var _ExsurgeChant2 = __webpack_require__(6);
	
	var Signs = _interopRequireWildcard(_ExsurgeChant2);
	
	var _ExsurgeChant3 = __webpack_require__(9);
	
	var Neumes = _interopRequireWildcard(_ExsurgeChant3);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	// reusable reg exps
	var __syllablesRegex = /(?=.)((?:[^(])*)(?:\(?([^)]*)\)?)?/g; //
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
	
	var __notationsRegex = /z0|z|Z|::|:|;|,|`|c1|c2|c3|c4|f3|f4|cb3|cb4|\/\/|\/|\!|[a-mA-M][owWvVrRsxy#~\+><_\.'012345]*/g;
	
	var Gabc = exports.Gabc = {
	
	  loadChantScore: function loadChantScore(ctxt, gabcNotations, createDropCap) {
	
	    var score = new _Exsurge3.ChantScore();
	
	    // fixme: no dropcap until the text engine is working again
	    this.parseChantNotations(ctxt, gabcNotations, score, createDropCap);
	
	    score.prepareNotesForAudio();
	
	    return score;
	  },
	
	  parseChantNotations: function parseChantNotations(ctxt, gabcNotations, score, createDropCap) {
	
	    score.notations = [];
	
	    var passByRef = {
	      activeClef: null
	    };
	
	    // split the notations on whitespace boundaries
	    var words = gabcNotations.match(/\S+/g);
	
	    for (var i = 0; i < words.length; i++) {
	      var word = words[i];
	
	      var currSyllable = 0;
	
	      if (word == '') continue;
	
	      word = word.trim();
	
	      var matches = [];
	
	      while (match = __syllablesRegex.exec(word)) {
	        matches.push(match);
	      }for (var j = 0; j < matches.length; j++) {
	        var match = matches[j];
	
	        var lyricText = match[1].trim();
	        var notationData = match[2];
	
	        var items = this.createNotations(ctxt, score, notationData, passByRef);
	
	        if (items.length == 0) continue;
	
	        // if we are to create a dropCap and we haven't done so yet, do it now
	        if (createDropCap && score.dropCap == null && lyricText != "") {
	          score.dropCap = new _Exsurge2.DropCap(ctxt, lyricText.substring(0, 1));
	          lyricText = lyricText.substring(1);
	        }
	
	        // create lyric if we have it...
	        if (lyricText != "") {
	
	          var lyricType;
	          if (currSyllable == 0 && matches.length == 1) lyricType = _Exsurge2.LyricType.SingleSyllable;else if (currSyllable == 0 && matches.length > 1) lyricType = _Exsurge2.LyricType.BeginningSyllable;else if (currSyllable == matches.length - 1) lyricType = _Exsurge2.LyricType.EndingSyllable;else lyricType = _Exsurge2.LyricType.MiddleSyllable;
	
	          // add the lyrics to the first notation that makes sense...
	          var notationWithLyrics = null;
	          for (var k = 0; k < items.length; k++) {
	            var cne = items[k];
	            if (cne.constructor.name == "Accidental") continue;
	
	            notationWithLyrics = cne;
	            break;
	          }
	
	          // if it's not a neume then make the lyric a directive
	          if (notationWithLyrics.notes == null) lyricType = _Exsurge2.LyricType.Directive;
	
	          var lyric = this.makeLyric(ctxt, lyricText, lyricType);
	
	          // also, new words reset the accidentals, per the Solesmes style (see LU xviij)
	          if (lyric.lyricType == _Exsurge2.LyricType.BeginningSyllable || lyric.lyricType == _Exsurge2.LyricType.SingleSyllable) passByRef.activeClef.resetAccidentals();
	
	          // fixme: lyrics are broken! for now, just ignore them
	          notationWithLyrics.lyric = lyric;
	        }
	
	        score.notations = score.notations.concat(items);
	
	        currSyllable++;
	      }
	    }
	  },
	
	  makeLyric: function makeLyric(ctxt, text, lyricType) {
	
	    if (text.length > 1 && text[text.length - 1] == '-') {
	      if (lyricType == _Exsurge2.LyricType.EndingSyllable) lyricType = _Exsurge2.LyricType.MiddleSyllable;else if (lyricType == _Exsurge2.LyricType.SingleSyllable) lyricType = _Exsurge2.LyricType.BeginningSyllable;
	
	      text = text.substring(0, text.length - 1);
	    }
	
	    var elides = false;
	    if (text.length > 1 && text[text.length - 1] == '_') {
	      // must be an elision
	      elides = true;
	      text = text.substring(0, text.length - 1);
	    }
	
	    if (text === "*" || text === "†") lyricType = _Exsurge2.LyricType.Directive;
	
	    var s = new _Exsurge2.Lyric(ctxt, text, lyricType);
	    s.elidesToNext = elides;
	
	    // a hack to make the response/versicle characters work...
	    //if (text.search('℟') >= 0 || text.search('℣') >= 0)
	    //  s.NativeText.font = new Font("Arial Unicode MS");
	
	    return s;
	  },
	
	  createNotations: function createNotations(ctxt, score, data, passByRef) {
	
	    var notations = [];
	
	    // if there is no data, then this must be a text only object
	    if (data === undefined || data === null || data === "") {
	      notations.push(new Neumes.TextOnly());
	      return notations;
	    }
	
	    var notes = [];
	    var out = { trailingSpace: -1 };
	
	    var that = this;
	    var addNotation = function addNotation(notation) {
	
	      // first, if we have any notes left over, we create a neume out of them
	      if (notes.length > 0) {
	        // create neume(s)
	
	        var neumes = that.createNeumesFromNotes(ctxt, score, notes, out.trailingSpace);
	        for (var i = 0; i < neumes.length; i++) {
	          notations.push(neumes[i]);
	        } // reset the trailing space
	        out.trailingSpace = -1;
	
	        notes = [];
	      }
	
	      // then, if we're passed a notation, let's add it
	      // also, perform chant logic here
	      if (notation != null) {
	
	        if (notation.isClef) {
	          if (score.startingClef == null) {
	            score.startingClef = notation;
	            return;
	          }
	        } else if (notation.isAccidental) passByRef.activeClef.activeAccidental = notation;else if (notation.resetsAccidentals) passByRef.activeClef.resetAccidentals();
	
	        notations.push(notation);
	      }
	    };
	
	    var atoms = data.match(__notationsRegex);
	
	    for (var i = 0; i < atoms.length; i++) {
	
	      var atom = atoms[i],
	          lineBreak = null;
	
	      // handle the clefs and dividers here
	      switch (atom) {
	        case ",":
	          addNotation(new Signs.QuarterBar());
	          break;
	        case "`":
	          addNotation(new Signs.Virgula());
	          break;
	        case ";":
	          addNotation(new Signs.HalfBar());
	          break;
	        case ":":
	          addNotation(new Signs.FullBar());
	          break;
	        case "::":
	          addNotation(new Signs.DoubleBar());
	          break;
	        // other gregorio dividers are not supported
	
	        case "c1":
	          passByRef.activeClef = new _Exsurge3.DoClef(-3, 2);
	          addNotation(passByRef.activeClef);
	          break;
	
	        case "c2":
	          passByRef.activeClef = new _Exsurge3.DoClef(-1, 2);
	          addNotation(passByRef.activeClef);
	          break;
	
	        case "c3":
	          passByRef.activeClef = new _Exsurge3.DoClef(1, 2);
	          addNotation(passByRef.activeClef);
	          break;
	
	        case "c4":
	          passByRef.activeClef = new _Exsurge3.DoClef(3, 2);
	          addNotation(passByRef.activeClef);
	          break;
	
	        case "f3":
	          passByRef.activeClef = new _Exsurge3.FaClef(1, 2);
	          addNotation(passByRef.activeClef);
	          break;
	
	        case "f4":
	          passByRef.activeClef = new _Exsurge3.FaClef(3, 2);
	          addNotation(passByRef.activeClef);
	          break;
	
	        case "cb3":
	          passByRef.activeClef = new _Exsurge3.DoClef(1, 2);
	          passByRef.activeClef.defaultAccidental = new Accidental(_Exsurge.Step.Te, passByRef.activeClef.octave, Signs.AccidentalType.Flat);
	          addNotation(passByRef.activeClef);
	          break;
	
	        case "cb4":
	          passByRef.activeClef = new _Exsurge3.DoClef(3, 2);
	          passByRef.activeClef.defaultAccidental = new Accidental(_Exsurge.Step.Te, passByRef.activeClef.octave, Signs.AccidentalType.Flat);
	          addNotation(passByRef.activeClef);
	          break;
	
	        case "z":
	          lineBreak = new _Exsurge3.ChantLineBreak(true);
	          addNotation(lineBreak);
	          break;
	        case "Z":
	          lineBreak = new _Exsurge3.ChantLineBreak(false);
	          addNotation(lineBreak);
	          break;
	        case "z0":
	          // unsupported for now...
	          break;
	
	        // spacing indicators
	        case "!":
	          out.trailingSpace = 0;
	          addNotation(null);
	          break;
	        case "/":
	          out.trailingSpace = ctxt.intraNeumeSpacing;
	          addNotation(null);
	          break;
	        case "//":
	          out.trailingSpace = ctxt.intraNeumeSpacing * 2;
	          addNotation(null);
	          break;
	
	        default:
	          // might be a custod, might be an accidental, or might be a note
	          if (atom.length > 1 && atom[1] == '+') {
	            // custod
	            var custod = new Custod();
	
	            custod.note = new _Exsurge3.Note(this.convertGabcStaffPositionToScribamPitch(passByRef.activeClef, data[0]));
	
	            addNotation(custod);
	          } else if (atom.length > 1 && (atom[1] == 'x' || atom[1] == 'y' || atom[1] == '#')) {
	
	            var accidentalType;
	
	            switch (atom[1]) {
	              case 'y':
	                accidentalType = Signs.AccidentalType.Natural;
	                break;
	              case '#':
	                accidentalType = Signs.AccidentalType.Sharp;
	                break;
	              default:
	                accidentalType = Signs.AccidentalType.Flat;
	                break;
	            }
	
	            var note = this.createNoteFromData(passByRef.activeClef, atom);
	            var accidental = new Signs.Accidental(note.staffPosition, accidentalType);
	            accidental.trailingSpace = ctxt.intraNeumeSpacing * 2;
	
	            passByRef.activeClef.activeAccidental = accidental;
	
	            addNotation(accidental);
	          } else {
	
	            // to make our interpreter more robust, make sure we have a clef to work with
	            if (passByRef.activeClef == null) passByRef.activeClef = new _Exsurge3.DoClef(1, 2);
	
	            // looks like it's a note
	            notes.push(this.createNoteFromData(passByRef.activeClef, atom));
	          }
	          break;
	      }
	    }
	
	    // finish up any remaining notes we have left
	    addNotation(null);
	
	    return notations;
	  },
	
	  createNeumesFromNotes: function createNeumesFromNotes(ctxt, score, notes, finalTrailingSpace) {
	
	    var neumes = [];
	    var intraNeumeSpacing = ctxt.intraNeumeSpacing;
	
	    var prevNote = null,
	        currNote = null;
	    var firstNoteIndex = 0;
	    var currNoteIndex = 0;
	
	    // here we use a simple finite state machine to create the neumes from the notes
	    // createNeume is helper function which returns the next state after a neume is created
	    // (unknownState). Each state object has a neume() function and a handle() function.
	    // neume() allows us to create the neume of the state in the event that we run out
	    // of notes. handle() gives the state an opportunity to examine the currNote and
	    // determine what to do...either transition to a different neume/state, or
	    // continue building the neume of that state. handle() returns the next state
	
	    var createNeume = function createNeume(neume, includeCurrNote) {
	
	      // add the notes to the neume
	      var lastNoteIndex = includeCurrNote ? currNoteIndex : currNoteIndex - 1;
	      for (var i = firstNoteIndex; i <= lastNoteIndex; i++) {
	        neume.notes.push(notes[i]);
	      }neumes.push(neume);
	
	      if (includeCurrNote === false) {
	        firstNoteIndex = currNoteIndex;
	        currNoteIndex--;
	        neume.keepWithNext = true;
	        neume.trailingSpace = intraNeumeSpacing;
	      }
	
	      return unknownState;
	    };
	
	    var unknownState = {
	      neume: function neume() {
	        return new Punctum();
	      },
	      handle: function handle(currNote, prevNote) {
	
	        switch (currNote.shape) {
	          case _Exsurge3.NoteShape.Apostropha:
	            return apostrophaState;
	          case _Exsurge3.NoteShape.Cavum:
	            return createNeume(new Punctum(), true);
	          case _Exsurge3.NoteShape.OriscusAscending:
	            break;
	          case _Exsurge3.NoteShape.OriscusDescending:
	            break;
	          case _Exsurge3.NoteShape.Virga:
	            return virgaState;
	          default:
	            return punctumState;
	        }
	      }
	    };
	
	    var punctumState = {
	      neume: function neume() {
	        return new Neumes.Punctum();
	      },
	      handle: function handle(currNote, prevNote) {
	
	        if (currNote.staffPosition > prevNote.staffPosition) return podatusState;else if (currNote.staffPosition < prevNote.staffPosition) {
	          if (currNote.shape == _Exsurge3.NoteShape.Inclinatum) return climacusState;else return clivisState;
	        } else return distrophaState;
	      }
	    };
	
	    var oriscusState = {
	      neume: function neume() {
	        return new Neumes.Oriscus();
	      },
	      handle: function handle(currNote, prevNote) {
	
	        if (currNote.shape == _Exsurge3.NoteShape.Default && currNote.staffPosition > prevNote.staffPosition) return podatusState;else
	          // stand alone oriscus
	          return createNeume(new Neumes.Oriscus(), true);
	      }
	    };
	
	    var podatusState = {
	      neume: function neume() {
	        return new Neumes.Podatus();
	      },
	      handle: function handle(currNote, prevNote) {
	
	        if (currNote.staffPosition > prevNote.staffPosition) {
	          return scandicusState;
	        } else if (currNote.staffPosition < prevNote.staffPosition) {
	          if (currNote.shape == _Exsurge3.NoteShape.Inclinatum) return pesSubpunctisState;else return torculusState;
	        } else return createNeume(new Neumes.Podatus(), false);
	      }
	    };
	
	    var clivisState = {
	      neume: function neume() {
	        return new Neumes.Clivis();
	      },
	      handle: function handle(currNote, prevNote) {
	
	        if (currNote.shape == _Exsurge3.NoteShape.Default && currNote.staffPosition > prevNote.staffPosition) return porrectusState;else return createNeume(new Neumes.Clivis(), false);
	      }
	    };
	
	    var climacusState = {
	      neume: function neume() {
	        return new Neumes.Climacus();
	      },
	      handle: function handle(currNote, prevNote) {
	        if (currNote.shape != _Exsurge3.NoteShape.Inclinatum) return createNeume(this.neume(), false);else return state;
	      }
	    };
	
	    var porrectusState = {
	      neume: function neume() {
	        return new Neumes.Porrectus();
	      },
	      handle: function handle(currNote, prevNote) {
	
	        if (currNote.shape == _Exsurge3.NoteShape.Default && currNote.staffPosition < prevNote.staffPosition) return createNeume(new Neumes.PorrectusFlexus(), true);else return createNeume(new Neumes.Porrectus(), false);
	      }
	    };
	
	    var pesSubpunctisState = {
	      neume: function neume() {
	        return new Neumes.PesSubpunctis();
	      },
	      handle: function handle(currNote, prevNote) {
	
	        if (currNote.shape != _Exsurge3.NoteShape.Inclinatum) return createNeume(new Neumes.PesSubpunctis(), false);else return state;
	      }
	    };
	
	    var scandicusState = {
	      neume: function neume() {
	        return new Neumes.Scandicus();
	      },
	      handle: function handle(currNote, prevNote) {
	
	        if (currNote.shape == _Exsurge3.NoteShape.Default && currNote.staffPosition < prevNote.staffPosition) return scandicusFlexusState;else return createNeume(new Neumes.Scandicus(), false);
	      }
	    };
	
	    var scandicusFlexusState = {
	      neume: function neume() {
	        return new Neumes.ScandicusFlexus();
	      },
	      handle: function handle(currNote, prevNote) {
	        return createNeume(new Neumes.ScandicusFlexus(), false);
	      }
	    };
	
	    var virgaState = {
	      neume: function neume() {
	        return new Neumes.Virga();
	      },
	      handle: function handle(currNote, prevNote) {
	
	        if (currNote.shape == _Exsurge3.NoteShape.Inclinatum && currNote.staffPosition < prevNote.staffPosition) return climacusState;else if (currNote.shape == _Exsurge3.NoteShape.Virga && currNote.staffPosition == prevNote.staffPosition) return bivirgaState;else return createNeume(new Neumes.Virga(), false);
	      }
	    };
	
	    var bivirgaState = {
	      neume: function neume() {
	        return new Neumes.Bivirga();
	      },
	      handle: function handle(currNote, prevNote) {
	
	        if (currNote.shape == _Exsurge3.NoteShape.Virga && currNote.staffPosition == prevNote.staffPosition) return createNeume(new Neumes.Trivirga(), false);else return createNeume(new Neumes.Bivirga(), false);
	      }
	    };
	
	    var apostrophaState = {
	      neume: function neume() {
	        return new Neumes.Apostropha();
	      },
	      handle: function handle(currNote, prevNote) {
	        if (currNote.staffPosition == prevNote.staffPosition && currNote.shape == _Exsurge3.NoteShape.Apostropha) return distrophaState;else return createNeume(new Neumes.Apostropha(), false);
	      }
	    };
	
	    var distrophaState = {
	      neume: function neume() {
	        return new Neumes.Distropha();
	      },
	      handle: function handle(currNote, prevNote) {
	        if (currNote.staffPosition == prevNote.staffPosition && currNote.shape == _Exsurge3.NoteShape.Apostropha) return createNeume(new Neumes.Tristropha(), true);else return createNeume(new Neumes.Distropha(), false);
	      }
	    };
	
	    var torculusState = {
	      neume: function neume() {
	        return new Neumes.Torculus();
	      },
	      handle: function handle(currNote, prevNote) {
	        if (currNote.shape == _Exsurge3.NoteShape.Default && currNote.staffPosition > prevNote.staffPosition) return torculusResupinusState;else return createNeume(new Neumes.Torculus(), false);
	      }
	    };
	
	    var torculusResupinusState = {
	      neume: function neume() {
	        return new Neumes.TorculusResupinus();
	      },
	      handle: function handle(currNote, prevNote) {
	        if (currNote.shape == _Exsurge3.NoteShape.Default && currNote.staffPosition < prevNote.staffPosition) return createNeume(new Neumes.TorculusResupinusFlexus(), true);else return createNeume(new Neumes.TorculusResupinus(), false);
	      }
	    };
	
	    var state = unknownState;
	
	    while (currNoteIndex < notes.length) {
	
	      prevNote = currNote;
	      currNote = notes[currNoteIndex];
	
	      state = state.handle(currNote, prevNote);
	
	      // if we are on the last note, then try to create a neume if we need to.
	      if (currNoteIndex == notes.length - 1 && state != unknownState) createNeume(state.neume(), true);
	
	      currNoteIndex++;
	    }
	
	    if (neumes.length > 0) {
	      if (finalTrailingSpace >= 0) {
	        neumes[neumes.length - 1].keepWithNext = true;
	        neumes[neumes.length - 1].trailingSpace = finalTrailingSpace;
	      }
	    }
	
	    return neumes;
	  },
	
	  createNoteFromData: function createNoteFromData(clef, data) {
	
	    var note = new _Exsurge3.Note();
	
	    if (data.length < 1) throw 'Invalid note data: ' + data;
	
	    if (data[0] == '-') {
	      // liquescent
	      note.isLiquescent = true;
	      data = data.substring(1);
	    }
	
	    if (data.length < 1) throw 'Invalid note data: ' + data;
	
	    // the next char is always the pitch
	    var pitch = this.convertGabcStaffPositionToScribamPitch(clef, data[0]);
	
	    if (data[0] == data[0].toUpperCase()) note.shape = _Exsurge3.NoteShape.Inclinatum;
	
	    note.staffPosition = this.convertGabcStaffPositionToScribamStaffPosition(clef, data[0]);
	    note.pitch = pitch;
	
	    // process the modifiers
	    for (var i = 1; i < data.length; i++) {
	
	      var c = data[i];
	      var lookahead = '\0';
	
	      var haveLookahead = i + 1 < data.length;
	      if (haveLookahead) lookahead = data[i + 1];
	
	      switch (c) {
	
	        // rhythmic markings
	        case '.':
	          note.markings.push(new Markings.Mora(note));
	          break;
	
	        case '_':
	          var mark = new Markings.HorizontalEpisema(note);
	          if (haveLookahead && lookahead == '0') {
	            mark.positionHint = _Exsurge.MarkingPositionHint.Below;
	            i++;
	          }
	          note.markings.push(mark);
	          break;
	
	        case '\'':
	          note.markings.push(new Markings.Ictus(note));
	          break;
	
	        //note shapes
	        case 'r':
	          if (haveLookahead && lookahead == '1') {
	            note.markings.push(new Markings.AcuteAccent(note));
	            i++;
	          } else note.shape = _Exsurge3.NoteShape.Cavum;
	          break;
	
	        case 'v':
	          note.shape = _Exsurge3.NoteShape.Virga;
	          break;
	
	        case 'w':
	          note.shape = _Exsurge3.NoteShape.Quilisma;
	          break;
	
	        case 'o':
	          if (haveLookahead && lookahead == '<') {
	            note.shape = _Exsurge3.NoteShape.OriscusAscending;
	            i++;
	          } else if (haveLookahead && lookahead == '>') {
	            note.shape = _Exsurge3.NoteShape.OriscusDescending;
	            i++;
	          } else note.shape = _Exsurge3.NoteShape.OriscusAscending;
	          break;
	
	        // liquescents
	        case '~':
	          note.isLiquescent = true;
	          break;
	        case '<':
	          note.isLiquescent = true;
	          note.shape = _Exsurge3.NoteShape.AscLiquescent;
	          break;
	        case '>':
	          note.isLiquescent = true;
	          note.shape = _Exsurge3.NoteShape.DesLiquescent;
	          break;
	
	        // accidentals
	        case 'x':
	          if (note.pitch.step == _Exsurge.Step.Mi) note.pitch.step = _Exsurge.Step.Me;else if (note.pitch.step == _Exsurge.Step.Ti) note.pitch.step = _Exsurge.Step.Te;
	          break;
	        case 'y':
	          if (note.pitch.step == _Exsurge.Step.Te) note.pitch.step = _Exsurge.Step.Ti;else if (note.pitch.step == _Exsurge.Step.Me) note.pitch.step = _Exsurge.Step.Mi;else if (note.pitch.step == _Exsurge.Step.Du) note.pitch.step = _Exsurge.Step.Do;else if (note.pitch.step == _Exsurge.Step.Fu) note.pitch.step = _Exsurge.Step.Fa;
	          break;
	        case '#':
	          if (note.pitch.step == _Exsurge.Step.Do) note.pitch.step = _Exsurge.Step.Du;else if (note.pitch.step == _Exsurge.Step.Fa) note.pitch.step = _Exsurge.Step.Fu;
	          break;
	      }
	    }
	
	    return note;
	  },
	
	  // returns pitch
	  convertGabcStaffPositionToScribamStaffPosition: function convertGabcStaffPositionToScribamStaffPosition(clef, gabcStaffPos) {
	    return gabcStaffPos.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) - 6;
	  },
	
	  // returns pitch
	  convertGabcStaffPositionToScribamPitch: function convertGabcStaffPositionToScribamPitch(clef, gabcStaffPos) {
	    var scribamStaffPosition = this.convertGabcStaffPositionToScribamStaffPosition(clef, gabcStaffPos);
	
	    var pitch = clef.staffPositionToPitch(scribamStaffPosition);
	
	    if (clef.activeAccidental != null) clef.activeAccidental.applyToPitch(pitch);
	
	    return pitch;
	  }
	};
	
	//export default Gabc;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Mora = exports.Ictus = exports.HorizontalEpisema = exports.AcuteAccent = exports.Marking = undefined;
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Exsurge = __webpack_require__(1);
	
	var Exsurge = _interopRequireWildcard(_Exsurge);
	
	var _Exsurge2 = __webpack_require__(4);
	
	var _Exsurge3 = __webpack_require__(5);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //
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
	
	var Marking = exports.Marking = function (_ChantLayoutElement) {
	  _inherits(Marking, _ChantLayoutElement);
	
	  function Marking(note) {
	    _classCallCheck(this, Marking);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Marking).call(this));
	
	    _this.note = note;
	    _this.horizontalOffset = 0;
	    _this.verticalOffset = 0;
	    _this.positionHint = Exsurge.MarkingPositionHint.Default;
	    return _this;
	  }
	
	  _createClass(Marking, [{
	    key: 'performLayout',
	    value: function performLayout(ctxt) {}
	  }]);
	
	  return Marking;
	}(_Exsurge2.ChantLayoutElement);
	
	var AcuteAccent = exports.AcuteAccent = function (_Marking) {
	  _inherits(AcuteAccent, _Marking);
	
	  function AcuteAccent(note) {
	    _classCallCheck(this, AcuteAccent);
	
	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(AcuteAccent).call(this, note));
	
	    _this2.positionHint = Exsurge.MarkingPositionHint.Above;
	    _this2.glyph = null;
	    return _this2;
	  }
	
	  _createClass(AcuteAccent, [{
	    key: 'performLayout',
	    value: function performLayout(ctxt) {
	
	      this.glyph = new _Exsurge2.GlyphVisualizer(ctxt, _Exsurge2.GlyphCode.AcuteAccent);
	
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
	
	      _get(Object.getPrototypeOf(AcuteAccent.prototype), 'performLayout', this).call(this, ctxt);
	    }
	  }]);
	
	  return AcuteAccent;
	}(Marking);
	
	/*
	 * HorizontalEpisema
	 */
	
	
	var HorizontalEpisema = exports.HorizontalEpisema = function (_Marking2) {
	  _inherits(HorizontalEpisema, _Marking2);
	
	  function HorizontalEpisema(note) {
	    _classCallCheck(this, HorizontalEpisema);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(HorizontalEpisema).call(this, note));
	  }
	
	  _createClass(HorizontalEpisema, [{
	    key: 'performLayout',
	    value: function performLayout(ctxt) {
	      _get(Object.getPrototypeOf(HorizontalEpisema.prototype), 'performLayout', this).call(this, ctxt);
	
	      // the horizontal episema object is a little different from other markings in that it is a
	      // logical object and doesn't do layout on its own. the layout for the episema happens in
	      // Neume.finishLayout
	    }
	  }]);
	
	  return HorizontalEpisema;
	}(Marking);
	
	/*
	 * Ictus
	 */
	
	
	var Ictus = exports.Ictus = function (_Marking3) {
	  _inherits(Ictus, _Marking3);
	
	  function Ictus(note) {
	    _classCallCheck(this, Ictus);
	
	    var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(Ictus).call(this, note));
	
	    _this4.glyph = null;
	    return _this4;
	  }
	
	  _createClass(Ictus, [{
	    key: 'performLayout',
	    value: function performLayout(ctxt) {
	
	      var glyphCode;
	      var staffPosition;
	
	      // fixme: this positioning logic doesn't work for the ictus on a virga apparently...?
	
	      if (this.positionHint == Exsurge.MarkingPositionHint.Above) {
	        glyphCode = _Exsurge2.GlyphCode.VerticalEpisemaAbove;
	      } else {
	        glyphCode = _Exsurge2.GlyphCode.VerticalEpisemaBelow;
	      }
	
	      staffPosition = this.note.staffPosition;
	
	      this.horizontalOffset = this.note.bounds.width / 2;
	      this.verticalOffset = 0;
	
	      switch (glyphCode) {
	        case _Exsurge2.GlyphCode.VerticalEpisemaAbove:
	          if (staffPosition % 2 == 0) this.verticalOffset -= ctxt.staffInterval * 1.5;else this.verticalOffset -= ctxt.staffInterval * .8;
	          break;
	
	        case _Exsurge2.GlyphCode.VerticalEpisemaBelow:
	        default:
	          if (staffPosition % 2 == 0) this.verticalOffset += ctxt.staffInterval * 1.5;else this.verticalOffset += ctxt.staffInterval * .8;
	          break;
	      }
	
	      this.glyph = new _Exsurge2.GlyphVisualizer(ctxt, glyphCode);
	      this.glyph.setStaffPosition(ctxt, staffPosition);
	
	      this.bounds = this.glyph.bounds.clone();
	      this.bounds.x += this.note.bounds.x + this.horizontalOffset;
	      this.bounds.y += this.verticalOffset;
	
	      _get(Object.getPrototypeOf(Ictus.prototype), 'performLayout', this).call(this, ctxt);
	    }
	  }]);
	
	  return Ictus;
	}(Marking);
	
	/*
	 * Mora
	 */
	
	
	var Mora = exports.Mora = function (_Marking4) {
	  _inherits(Mora, _Marking4);
	
	  function Mora(note) {
	    _classCallCheck(this, Mora);
	
	    var _this5 = _possibleConstructorReturn(this, Object.getPrototypeOf(Mora).call(this, note));
	
	    _this5.glyph = null;
	    return _this5;
	  }
	
	  _createClass(Mora, [{
	    key: 'performLayout',
	    value: function performLayout(ctxt) {
	
	      var staffPosition = this.note.staffPosition;
	
	      this.glyph = new _Exsurge2.GlyphVisualizer(ctxt, _Exsurge2.GlyphCode.Mora);
	      this.glyph.setStaffPosition(ctxt, staffPosition);
	
	      this.verticalOffset = 0;
	      switch (this.positionHint) {
	        case Exsurge.MarkingPositionHint.Below:
	          if (staffPosition % 2 == 0) this.verticalOffset += ctxt.staffInterval / 3.0;else this.verticalOffset += ctxt.staffInterval * 2 / 3.0;
	          break;
	
	        case Exsurge.MarkingPositionHint.Default:
	        case Exsurge.MarkingPositionHint.Above:
	        default:
	          if (staffPosition % 2 == 0) this.verticalOffset -= ctxt.staffInterval / 3.0;else this.verticalOffset -= ctxt.staffInterval * 2 / 3.0;
	          break;
	      }
	
	      this.bounds = this.glyph.bounds.clone();
	      this.bounds.x += this.note.bounds.right() + this.horizontalOffset;
	      this.bounds.y += this.verticalOffset;
	
	      // this.drawable = this.glyph.drawable;
	      // this.drawable.classList.add('Mora');
	      // QuickSvg.translate(this.drawable, this.bounds.x, this.bounds.y);
	
	      _get(Object.getPrototypeOf(Mora.prototype), 'performLayout', this).call(this, ctxt);
	    }
	  }]);
	
	  return Mora;
	}(Marking);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Virga = exports.Tristropha = exports.TorculusResupinusFlexus = exports.TorculusResupinus = exports.Torculus = exports.TextOnly = exports.ScandicusFlexus = exports.Scandicus = exports.Punctum = exports.PorrectusFlexus = exports.Porrectus = exports.Podatus = exports.PesSubpunctis = exports.PesQuassus = exports.Oriscus = exports.Distropha = exports.Clivis = exports.Climacus = exports.Trivirga = exports.Bivirga = exports.Apostropha = exports.Neume = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Exsurge = __webpack_require__(1);
	
	var Exsurge = _interopRequireWildcard(_Exsurge);
	
	var _Exsurge2 = __webpack_require__(4);
	
	var _Exsurge3 = __webpack_require__(5);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //
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
	
	/*
	 * Neumes base class
	 */
	
	var Neume = exports.Neume = function (_ChantNotationElement) {
	    _inherits(Neume, _ChantNotationElement);
	
	    function Neume() {
	        _classCallCheck(this, Neume);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Neume).call(this));
	
	        _this.notes = [];
	        return _this;
	    }
	
	    _createClass(Neume, [{
	        key: 'performLayout',
	        value: function performLayout(ctxt) {
	            _get(Object.getPrototypeOf(Neume.prototype), 'performLayout', this).call(this, ctxt);
	        }
	    }, {
	        key: 'finishLayout',
	        value: function finishLayout(ctxt) {
	
	            /*
	                var startEpisema = null;
	                var boundsToMark;
	            
	                var neume = this;
	                var createEpisema = function() {
	                  var line = new HorizontalEpisemaLineVisualizer(ctxt, boundsToMark, startEpisema.positionHint);
	                  neume.drawable.appendChild(line.drawable);
	                };
	            
	                // layout the markings of the notes
	                for (var i = 0; i < this.notes.length; i++) {
	                  var note = this.notes[i];
	            
	                  for (var j = 0; j < note.markings.length; j++) {
	                    var marking = note.markings[j];
	            
	                    // episemas we treat specially because we try to combine them when possible
	                    if (marking.constructor.name == "HorizontalEpisema") {
	            
	                      if (startEpisema == null) {
	                        // first one we've seen
	                        startEpisema = marking;
	                        boundsToMark = note.bounds.clone();
	                      } else {
	                        // try to continue the previous one if possible
	                        if (marking.positionHint == startEpisema.positionHint) {
	                          boundsToMark.union(note.bounds);
	                        } else {
	                          // can't combine them, terminate the previous one and start a new one.
	                          createEpisema();
	            
	                          startEpisema = marking;
	                          boundsToMark = note.bounds.clone();
	                        }
	                      }
	                    } else {
	            
	                      if (marking.drawable != null) {
	                        this.drawable.appendChild(marking.drawable);
	            
	                        QuickSvg.translate(marking.drawable, note.bounds.x + note.origin.x + marking.bounds.x, marking.bounds.y);
	                      }
	                    }
	                  }
	            
	                  // end of the note processing...if we are the last one and we have an episema started, we need to terminate it here
	                  if (i == this.notes.length - 1 && startEpisema != null)
	                    createEpisema();
	                }
	            
	                if (this.hasLyric()) {
	                  // add ui support for note playback on click
	                  this.lyric.svgText.setAttribute('onclick', "alert('Clicked lyric: " + this.lyric.text + "');");
	                }
	            */
	            _get(Object.getPrototypeOf(Neume.prototype), 'finishLayout', this).call(this, ctxt);
	        }
	
	        // this will handle quilismae, mora, and horizontal episemae.
	        // subclasses can override for their own nuances to note rhythms
	
	    }, {
	        key: 'generatePlaybackData',
	        value: function generatePlaybackData() {
	
	            var playbackData = [];
	
	            var prevIsQuilisma = false;
	            for (var i = 0; i < this.notes; i++) {
	                var note = this.notes[i];
	
	                var duration = 1.0; // reset to standard length
	                var multiplier = 1.0;
	
	                if (prevIsQuilisma) multiplier *= 0.5;
	
	                if (note.shape == _Exsurge3.NoteShape.Quilisma) {
	                    multiplier *= 2;
	                    prevIsQuilisma = true;
	                } else prevIsQuilisma = false;
	
	                // check markings
	                for (var j = 0; j < note.markings.length; j++) {
	                    var marking = note.markings[j];
	
	                    if (marking.className == 'Mora') multiplier = Math.max(multiplier, 2);else if (marking.className == 'HorizontalEpisema' || _Exsurge2.ctxt.horizontalEpisemaActive) multiplier = Math.max(multiplier, 2);
	                }
	
	                duration *= multiplier;
	
	                playbackData.push({
	                    type: 'note',
	                    duration: duration,
	                    pitch: note.pitch
	                });
	            }
	
	            return playbackData;
	        }
	    }]);
	
	    return Neume;
	}(_Exsurge2.ChantNotationElement);
	
	/*
	 * Apostropha
	 */
	
	
	var Apostropha = exports.Apostropha = function (_Neume) {
	    _inherits(Apostropha, _Neume);
	
	    function Apostropha() {
	        _classCallCheck(this, Apostropha);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Apostropha).apply(this, arguments));
	    }
	
	    _createClass(Apostropha, [{
	        key: 'performLayout',
	        value: function performLayout(ctxt) {
	            _get(Object.getPrototypeOf(Apostropha.prototype), 'performLayout', this).call(this, ctxt);
	
	            // determine the glyph to use
	            var note = this.notes[0];
	
	            if (note.isLiquescent) note.setGlyphShape(ctxt, _Exsurge2.GlyphCode.ApostrophaLiquescent);else note.setGlyphShape(ctxt, _Exsurge2.GlyphCode.Apostropha);
	
	            note.performLayout(ctxt);
	            this.addVisualizer(note);
	
	            this.origin.x = note.origin.x;
	            this.origin.y = note.origin.y;
	
	            this.finishLayout(ctxt);
	        }
	    }]);
	
	    return Apostropha;
	}(Neume);
	
	/*
	 * Bivirga
	 *
	 * For simplicity in implementation, Bivirga's have two notes in the object
	 * structure. These technically must be the same pitch though.
	 */
	
	
	var Bivirga = exports.Bivirga = function (_Neume2) {
	    _inherits(Bivirga, _Neume2);
	
	    function Bivirga() {
	        _classCallCheck(this, Bivirga);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Bivirga).apply(this, arguments));
	    }
	
	    _createClass(Bivirga, [{
	        key: 'performLayout',
	        value: function performLayout(ctxt) {
	            _get(Object.getPrototypeOf(Bivirga.prototype), 'performLayout', this).call(this, ctxt);
	
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
	    }]);
	
	    return Bivirga;
	}(Neume);
	
	/*
	 * Trivirga
	 *
	 * For simplicity in implementation, Trivirga's have three notes in the object
	 * structure. These technically must be the same pitch though.
	 */
	
	
	var Trivirga = exports.Trivirga = function (_Neume3) {
	    _inherits(Trivirga, _Neume3);
	
	    function Trivirga() {
	        _classCallCheck(this, Trivirga);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Trivirga).apply(this, arguments));
	    }
	
	    _createClass(Trivirga, [{
	        key: 'performLayout',
	        value: function performLayout(ctxt) {
	            _get(Object.getPrototypeOf(Trivirga.prototype), 'performLayout', this).call(this, ctxt);
	
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
	    }]);
	
	    return Trivirga;
	}(Neume);
	
	/*
	 * Climacus
	 */
	
	
	var Climacus = exports.Climacus = function (_Neume4) {
	    _inherits(Climacus, _Neume4);
	
	    function Climacus() {
	        _classCallCheck(this, Climacus);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Climacus).apply(this, arguments));
	    }
	
	    _createClass(Climacus, [{
	        key: 'performLayout',
	        value: function performLayout(ctxt) {
	            _get(Object.getPrototypeOf(Climacus.prototype), 'performLayout', this).call(this, ctxt);
	
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
	
	                if (note.isLiquescent) note.setGlyphShape(ctxt, _Exsurge2.GlyphCode.punctumInclinatumLiquescent);else {
	                    // fixme: some climaci in the new chant books end with a punctum cuadratum
	                    // (see, for example, the antiphon "Sancta Maria" for October 7).
	                    note.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumInclinatum);
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
	
	            this.finishLayout(ctxt);
	        }
	    }]);
	
	    return Climacus;
	}(Neume);
	
	/*
	 * Clivis
	 */
	
	
	var Clivis = exports.Clivis = function (_Neume5) {
	    _inherits(Clivis, _Neume5);
	
	    function Clivis() {
	        _classCallCheck(this, Clivis);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Clivis).apply(this, arguments));
	    }
	
	    _createClass(Clivis, [{
	        key: 'performLayout',
	        value: function performLayout(ctxt) {
	            _get(Object.getPrototypeOf(Clivis.prototype), 'performLayout', this).call(this, ctxt);
	
	            var line;
	            var isLiquescent;
	
	            var upper = this.notes[0];
	            var lower = this.notes[1];
	
	            if (lower.isLiquescent || upper.isLiquescent) {
	                upper.setGlyphShape(ctxt, _Exsurge2.GlyphCode.BeginningDesLiquescent);
	                lower.setGlyphShape(ctxt, _Exsurge2.GlyphCode.TerminatingDesLiquescent);
	                isLiquescent = true;
	            } else {
	                upper.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumCuadratum);
	                lower.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumCuadratum);
	                isLiquescent = false;
	            }
	
	            var upperStaffPos = upper.staffPosition;
	            var lowerStaffPos = lower.staffPosition;
	
	            upper.performLayout(ctxt);
	            lower.performLayout(ctxt);
	
	            // add the ascending line
	            line = new _Exsurge2.NeumeLineVisualizer(ctxt, lower, upper, true);
	            line.bounds.x = upper.bounds.x;
	
	            this.addVisualizer(line);
	            line = null;
	
	            var x = upper.bounds.right();
	
	            // do we need to draw a descending line?
	            if (upperStaffPos - lowerStaffPos > 1) {
	                line = new _Exsurge2.NeumeLineVisualizer(ctxt, upper, lower, false);
	                x -= line.bounds.width;
	                line.bounds.x = x;
	                this.addVisualizer(line);
	            }
	
	            if (isLiquescent) {
	                if (line != null) x -= lower.bounds.width - line.bounds.width;else x -= lower.bounds.width;
	            }
	
	            lower.bounds.x = x;
	
	            this.addVisualizer(upper);
	            this.addVisualizer(lower);
	
	            this.origin.x = upper.origin.x;
	            this.origin.y = upper.origin.y;
	
	            this.finishLayout(ctxt);
	        }
	    }]);
	
	    return Clivis;
	}(Neume);
	
	/*
	 * Distropha
	 *
	 * For simplicity in implementation, Distropha's have two notes in the object
	 * structure. These technically must be the same pitch though (like Bivirga).
	 */
	
	
	var Distropha = exports.Distropha = function (_Neume6) {
	    _inherits(Distropha, _Neume6);
	
	    function Distropha() {
	        _classCallCheck(this, Distropha);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Distropha).apply(this, arguments));
	    }
	
	    _createClass(Distropha, [{
	        key: 'performLayout',
	        value: function performLayout(ctxt) {
	            _get(Object.getPrototypeOf(Distropha.prototype), 'performLayout', this).call(this, ctxt);
	
	            var note1 = this.notes[0];
	            var note2 = this.notes[1];
	
	            note1.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumCuadratum);
	            note1.performLayout(ctxt);
	
	            note2.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumCuadratum);
	            note2.performLayout(ctxt);
	            note2.bounds.x += note1.bounds.width + ctxt.intraNeumeSpacing;
	
	            this.addVisualizer(note1);
	            this.addVisualizer(note2);
	
	            this.origin.x = note1.origin.x;
	            this.origin.y = note1.origin.y;
	
	            this.finishLayout(ctxt);
	        }
	    }]);
	
	    return Distropha;
	}(Neume);
	
	/*
	 * Oriscus
	 */
	
	
	var Oriscus = exports.Oriscus = function (_Neume7) {
	    _inherits(Oriscus, _Neume7);
	
	    function Oriscus() {
	        _classCallCheck(this, Oriscus);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Oriscus).apply(this, arguments));
	    }
	
	    _createClass(Oriscus, [{
	        key: 'performLayout',
	        value: function performLayout(ctxt) {
	            _get(Object.getPrototypeOf(Oriscus.prototype), 'performLayout', this).call(this, ctxt);
	
	            // determine the glyph to use
	            var note = this.notes[0];
	
	            if (note.shape == _Exsurge3.NoteShape.OriscusAscending) note.setGlyphShape(ctxt, _Exsurge2.GlyphCode.OriscusAsc);else note.setGlyphShape(ctxt, _Exsurge2.GlyphCode.OriscusDes);
	
	            note.performLayout(ctxt);
	            this.addVisualizer(note);
	
	            this.origin.x = note.origin.x;
	            this.origin.y = note.origin.y;
	
	            this.finishLayout(ctxt);
	        }
	    }]);
	
	    return Oriscus;
	}(Neume);
	
	/*
	 * PesQuassus
	 */
	
	
	var PesQuassus = exports.PesQuassus = function (_Neume8) {
	    _inherits(PesQuassus, _Neume8);
	
	    function PesQuassus() {
	        _classCallCheck(this, PesQuassus);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(PesQuassus).apply(this, arguments));
	    }
	
	    _createClass(PesQuassus, [{
	        key: 'performLayout',
	        value: function performLayout(ctxt) {
	            _get(Object.getPrototypeOf(PesQuassus.prototype), 'performLayout', this).call(this, ctxt);
	
	            var x = 0;
	
	            var lower = this.notes[0];
	            var upper = this.notes[1];
	            var line;
	
	            var lowerStaffPos = lower.staffPosition;
	            var upperStaffPos = upper.staffPosition;
	
	            lower.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumCuadratum);
	
	            if (upper.isLiquescent) upper.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumCuadratumDesLiquescent);else upper.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumCuadratum);
	
	            lower.performLayout(ctxt);
	            lower.bounds.x = x;
	            this.addVisualizer(lower);
	
	            x += lower.bounds.right();
	
	            var needsLines = upperStaffPos - lowerStaffPos > 1;
	            if (needsLines) {
	                line = new _Exsurge2.NeumeLineVisualizer(ctxt, lower, upper, false);
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
	                line = new _Exsurge2.NeumeLineVisualizer(ctxt, upper, lower, true);
	                x -= line.bounds.width;
	                line.bounds.x = x;
	                this.addVisualizer(line);
	            }
	
	            this.origin.x = lower.origin.x;
	            this.origin.y = lower.origin.y;
	
	            this.finishLayout(ctxt);
	        }
	    }]);
	
	    return PesQuassus;
	}(Neume);
	
	/*
	 * PesSubpunctis
	 */
	
	
	var PesSubpunctis = exports.PesSubpunctis = function (_Neume9) {
	    _inherits(PesSubpunctis, _Neume9);
	
	    function PesSubpunctis() {
	        _classCallCheck(this, PesSubpunctis);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(PesSubpunctis).apply(this, arguments));
	    }
	
	    _createClass(PesSubpunctis, [{
	        key: 'performLayout',
	        value: function performLayout(ctxt) {
	            _get(Object.getPrototypeOf(PesSubpunctis.prototype), 'performLayout', this).call(this, ctxt);
	
	            var lower = this.notes[0];
	            var upper = this.notes[1];
	            var staffPosition, prevStaffPosition;
	            var x = 0;
	
	            if (lower.isLiquescent || upper.isLiquescent) {
	                lower.setGlyphShape(ctxt, _Exsurge2.GlyphCode.BeginningAscLiquescent);
	                upper.setGlyphShape(ctxt, _Exsurge2.GlyphCode.TerminatingAscLiquescent);
	            } else {
	                lower.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PodatusLower);
	                upper.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PodatusUpper);
	            }
	
	            if (lower.shape == _Exsurge3.NoteShape.Quilisma) lower.setGlyphShape(ctxt, _Exsurge2.GlyphCode.Quilisma);
	
	            lower.performLayout(ctxt);
	            upper.performLayout(ctxt);
	
	            var line = new _Exsurge2.NeumeLineVisualizer(ctxt, lower, upper, false);
	
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
	
	                if (note.isLiquescent) note.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumInclinatumLiquescent);else {
	                    // fixme: some climaci in the new chant books end with a punctum cuadratum
	                    // (see, for example, the antiphon "Sancta Maria" for October 7).
	                    note.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumInclinatum);
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
	    }]);
	
	    return PesSubpunctis;
	}(Neume);
	
	/*
	 * Podatus
	 */
	
	
	var Podatus = exports.Podatus = function (_Neume10) {
	    _inherits(Podatus, _Neume10);
	
	    function Podatus() {
	        _classCallCheck(this, Podatus);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Podatus).apply(this, arguments));
	    }
	
	    _createClass(Podatus, [{
	        key: 'performLayout',
	        value: function performLayout(ctxt) {
	            _get(Object.getPrototypeOf(Podatus.prototype), 'performLayout', this).call(this, ctxt);
	
	            var lower = this.notes[0];
	            var upper = this.notes[1];
	
	            if (lower.isLiquescent || upper.isLiquescent) {
	                lower.setGlyphShape(ctxt, _Exsurge2.GlyphCode.BeginningAscLiquescent);
	                upper.setGlyphShape(ctxt, _Exsurge2.GlyphCode.TerminatingAscLiquescent);
	            } else {
	                lower.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PodatusLower);
	                upper.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PodatusUpper);
	            }
	
	            if (lower.shape == _Exsurge3.NoteShape.Quilisma) lower.setGlyphShape(ctxt, _Exsurge2.GlyphCode.Quilisma);
	
	            upper.performLayout(ctxt);
	            lower.performLayout(ctxt);
	
	            var line = new _Exsurge2.NeumeLineVisualizer(ctxt, lower, upper, false);
	
	            line.bounds.x = lower.bounds.right() - line.bounds.width;
	            upper.bounds.x = lower.bounds.right() - upper.bounds.width;
	
	            // add the elements
	            this.addVisualizer(lower);
	            this.addVisualizer(line);
	            this.addVisualizer(upper);
	
	            this.origin.x = lower.origin.x;
	            this.origin.y = lower.origin.y;
	
	            this.finishLayout(ctxt);
	        }
	    }]);
	
	    return Podatus;
	}(Neume);
	
	/*
	 * Porrectus
	 */
	
	
	var Porrectus = exports.Porrectus = function (_Neume11) {
	    _inherits(Porrectus, _Neume11);
	
	    function Porrectus() {
	        _classCallCheck(this, Porrectus);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Porrectus).apply(this, arguments));
	    }
	
	    _createClass(Porrectus, [{
	        key: 'performLayout',
	        value: function performLayout(ctxt) {
	            _get(Object.getPrototypeOf(Porrectus.prototype), 'performLayout', this).call(this, ctxt);
	
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
	                    first.setGlyphShape(ctxt, _Exsurge2.GlyphCode.Porrectus1);
	                    break;
	                case 2:
	                    first.setGlyphShape(ctxt, _Exsurge2.GlyphCode.Porrectus2);
	                    break;
	                case 3:
	                    first.setGlyphShape(ctxt, _Exsurge2.GlyphCode.Porrectus3);
	                    break;
	                case 4:
	                    first.setGlyphShape(ctxt, _Exsurge2.GlyphCode.Porrectus4);
	                    break;
	                default:
	                    // fixme: should we generate an error here?
	                    first.setGlyphShape(ctxt, _Exsurge2.GlyphCode.None);
	                    break;
	            }
	
	            first.performLayout(ctxt);
	
	            // the second glyph does not draw anything, but it still has logical importance for the editing
	            // environment...it can respond to changes which will then change the swash glyph of the first.
	            second.setGlyphShape(ctxt, _Exsurge2.GlyphCode.None);
	            second.performLayout(ctxt);
	
	            // add the first line and the swash
	            line = new _Exsurge2.NeumeLineVisualizer(ctxt, first, second, true);
	
	            x = line.bounds.x = first.bounds.x;
	            x = first.bounds.right();
	            second.bounds.x = x - second.bounds.width;
	            x = second.bounds.right();
	
	            this.addVisualizer(line);
	            this.addVisualizer(first);
	            this.addVisualizer(second);
	
	            // add the connecting line
	            if (thirdStaffPosition - secondStaffPosition > 1) {
	                line = new _Exsurge2.NeumeLineVisualizer(ctxt, second, third, false);
	                line.bounds.x = x - line.bounds.width;
	                this.addVisualizer(line);
	            }
	
	            if (third.isLiquescent) third.setGlyphShape(ctxt, _Exsurge2.GlyphCode.TerminatingAscLiquescent);else third.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PodatusUpper);
	
	            third.performLayout(ctxt);
	            third.bounds.x += x;
	
	            this.addVisualizer(third);
	
	            this.origin.x = first.origin.x;
	            this.origin.y = first.origin.y;
	
	            this.finishLayout(ctxt);
	        }
	    }]);
	
	    return Porrectus;
	}(Neume);
	
	/*
	 * PorrectusFlexus
	 */
	
	
	var PorrectusFlexus = exports.PorrectusFlexus = function (_Neume12) {
	    _inherits(PorrectusFlexus, _Neume12);
	
	    function PorrectusFlexus() {
	        _classCallCheck(this, PorrectusFlexus);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(PorrectusFlexus).apply(this, arguments));
	    }
	
	    _createClass(PorrectusFlexus, [{
	        key: 'performLayout',
	        value: function performLayout(ctxt) {
	            _get(Object.getPrototypeOf(PorrectusFlexus.prototype), 'performLayout', this).call(this, ctxt);
	
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
	                    first.setGlyphShape(ctxt, _Exsurge2.GlyphCode.Porrectus1);
	                    break;
	                case 2:
	                    first.setGlyphShape(ctxt, _Exsurge2.GlyphCode.Porrectus2);
	                    break;
	                case 3:
	                    first.setGlyphShape(ctxt, _Exsurge2.GlyphCode.Porrectus3);
	                    break;
	                case 4:
	                    first.setGlyphShape(ctxt, _Exsurge2.GlyphCode.Porrectus4);
	                    break;
	                default:
	                    // fixme: should we generate an error here?
	                    first.setGlyphShape(ctxt, _Exsurge2.GlyphCode.None);
	                    break;
	            }
	
	            first.performLayout(ctxt);
	
	            // add the first line and the swash
	            line = new _Exsurge2.NeumeLineVisualizer(ctxt, first, second, true);
	
	            x = line.bounds.x = first.bounds.x;
	            x = first.bounds.right();
	            this.addVisualizer(line);
	            this.addVisualizer(first);
	
	            // the second glyph does not draw anything, but it still has logical importance for the editing
	            // environment...it can respond to changes which will then change the swash glyph of the first.
	            second.setGlyphShape(ctxt, _Exsurge2.GlyphCode.None);
	            second.performLayout(ctxt);
	            second.bounds.x = x;
	            x = second.bounds.right();
	            this.addVisualizer(second);
	
	            // add a connecting line
	            if (thirdStaffPosition - secondStaffPosition > 1) {
	                line = new _Exsurge2.NeumeLineVisualizer(ctxt, second, third, false);
	                x -= line.bounds.width;
	                line.bounds.x += x;
	                this.addVisualizer(line);
	            }
	
	            third.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumCuadratum);
	            third.performLayout(ctxt);
	            third.bounds.x = x;
	            x = third.bounds.right();
	            this.addVisualizer(third);
	
	            // add a connecting line
	            if (thirdStaffPosition - fourthStaffPosition > 1) {
	                line = new _Exsurge2.NeumeLineVisualizer(ctxt, third, fourth, false);
	                x -= line.bounds.width;
	                line.bounds.x += x;
	                this.addVisualizer(line);
	            }
	
	            fourth.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumCuadratum);
	            fourth.performLayout(ctxt);
	            fourth.bounds.x = x;
	            this.addVisualizer(fourth);
	
	            this.origin.x = first.origin.x;
	            this.origin.y = first.origin.y;
	
	            this.finishLayout(ctxt);
	        }
	    }]);
	
	    return PorrectusFlexus;
	}(Neume);
	
	/*
	 * Punctum
	 */
	
	
	var Punctum = exports.Punctum = function (_Neume13) {
	    _inherits(Punctum, _Neume13);
	
	    function Punctum() {
	        _classCallCheck(this, Punctum);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Punctum).apply(this, arguments));
	    }
	
	    _createClass(Punctum, [{
	        key: 'performLayout',
	        value: function performLayout(ctxt) {
	            _get(Object.getPrototypeOf(Punctum.prototype), 'performLayout', this).call(this, ctxt);
	
	            // determine the glyph to use
	
	            var note = this.notes[0];
	
	            if (note.isLiquescent) {
	                if (note.shape == _Exsurge3.NoteShape.Inclinatum) note.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumInclinatumLiquescent);else {
	                    // fixme: implement two types of punctum liquescents
	                    note.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumCuadratumAscLiquescent);
	                }
	            } else {
	                switch (note.shape) {
	                    case _Exsurge3.NoteShape.Cavum:
	                        note.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumCavum);
	                        break;
	
	                    case _Exsurge3.NoteShape.Inclinatum:
	                        note.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumInclinatum);
	                        break;
	
	                    case _Exsurge3.NoteShape.Quilisma:
	                        note.setGlyphShape(ctxt, _Exsurge2.GlyphCode.Quilisma);
	                        break;
	
	                    default:
	                        note.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumCuadratum);
	                        break;
	                }
	            }
	
	            note.performLayout(ctxt);
	            this.addVisualizer(note);
	
	            this.origin.x = note.origin.x;
	            this.origin.y = note.origin.y;
	
	            this.finishLayout(ctxt);
	        }
	    }]);
	
	    return Punctum;
	}(Neume);
	
	/*
	 * Scandicus
	 */
	
	
	var Scandicus = exports.Scandicus = function (_Neume14) {
	    _inherits(Scandicus, _Neume14);
	
	    function Scandicus() {
	        _classCallCheck(this, Scandicus);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Scandicus).apply(this, arguments));
	    }
	
	    _createClass(Scandicus, [{
	        key: 'performLayout',
	
	
	        // fixme: for now, we render the scandicus as a punctum followed by a podatus. however,
	        // it could also be a podatus followed by a virga...see LU, "Preface," xj.
	        //
	        // perhaps the best way to indicate the virga form is to check if the note shape of
	        // the third note is a virga!
	        value: function performLayout(ctxt) {
	            _get(Object.getPrototypeOf(Scandicus.prototype), 'performLayout', this).call(this, ctxt);
	
	            var first = this.notes[0];
	            var second = this.notes[1];
	            var third = this.notes[2];
	
	            first.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumCuadratum);
	
	            if (second.isLiquescent || third.isLiquescent) {
	                second.setGlyphShape(ctxt, _Exsurge2.GlyphCode.BeginningAscLiquescent);
	                third.setGlyphShape(ctxt, _Exsurge2.GlyphCode.TerminatingAscLiquescent);
	            } else {
	                second.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PodatusLower);
	                third.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PodatusUpper);
	            }
	
	            // fixme: can a scandicus have a quilisma like this?
	            if (second.shape == _Exsurge3.NoteShape.Quilisma) second.setGlyphShape(ctxt, _Exsurge2.GlyphCode.Quilisma);
	
	            first.performLayout(ctxt);
	            second.performLayout(ctxt);
	            third.performLayout(ctxt);
	
	            var line = new _Exsurge2.NeumeLineVisualizer(ctxt, second, third, false);
	
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
	    }]);
	
	    return Scandicus;
	}(Neume);
	
	/*
	 * Scandicus Flexus
	 */
	
	
	var ScandicusFlexus = exports.ScandicusFlexus = function (_Neume15) {
	    _inherits(ScandicusFlexus, _Neume15);
	
	    function ScandicusFlexus() {
	        _classCallCheck(this, ScandicusFlexus);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ScandicusFlexus).apply(this, arguments));
	    }
	
	    _createClass(ScandicusFlexus, [{
	        key: 'performLayout',
	
	
	        // see notes in Scandicus about determining the first three notes.
	        value: function performLayout(ctxt) {
	            _get(Object.getPrototypeOf(ScandicusFlexus.prototype), 'performLayout', this).call(this, ctxt);
	
	            var first = this.notes[0];
	            var second = this.notes[1];
	            var third = this.notes[2];
	            var fourth = this.notes[3];
	
	            first.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumCuadratum);
	
	            if (second.iisLiquescent || third.isLiquescent) {
	                second.setGlyphShape(ctxt, _Exsurge2.GlyphCode.BeginningAscLiquescent);
	                third.setGlyphShape(ctxt, _Exsurge2.GlyphCode.TerminatingAscLiquescent);
	            } else {
	                second.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PodatusLower);
	                third.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PodatusUpper);
	            }
	
	            // fixme: can a scandicus have a quilisma like this?
	            if (second.shape == _Exsurge3.NoteShape.Quilisma) second.setGlyphShape(ctxt, _Exsurge2.GlyphCode.Quilisma);
	
	            first.performLayout(ctxt);
	            second.performLayout(ctxt);
	            third.performLayout(ctxt);
	            fourth.performLayout(ctxt);
	
	            var line = new _Exsurge2.NeumeLineVisualizer(ctxt, second, third, false);
	
	            second.bounds.x = first.bounds.right();
	            line.bounds.x = second.bounds.right() - line.bounds.width;
	            third.bounds.x = second.bounds.right() - third.bounds.width;
	            fourth.bounds.x = third.bounds.right();
	
	            // do we need to draw a descending line?
	            var staffPos3 = third.staffPosition;
	            var staffPos4 = fourth.staffPosition;
	            if (staffPos3 - staffPos4 > 1) {
	                var extraLine = new _Exsurge2.NeumeLineVisualizer(ctxt, third, fourth, false);
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
	    }]);
	
	    return ScandicusFlexus;
	}(Neume);
	
	/*
	 * TextOnly
	 */
	
	
	var TextOnly = exports.TextOnly = function (_Neume16) {
	    _inherits(TextOnly, _Neume16);
	
	    function TextOnly() {
	        _classCallCheck(this, TextOnly);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TextOnly).apply(this, arguments));
	    }
	
	    _createClass(TextOnly, [{
	        key: 'performLayout',
	        value: function performLayout(ctxt) {
	            _get(Object.getPrototypeOf(TextOnly.prototype), 'performLayout', this).call(this, ctxt);
	
	            // add an empty glyph as a placeholder
	            this.addVisualizer(new _Exsurge2.GlyphVisualizer(ctxt, _Exsurge2.GlyphCode.None));
	
	            this.origin.x = 0;
	            this.origin.y = 0;
	
	            this.finishLayout(ctxt);
	        }
	    }]);
	
	    return TextOnly;
	}(Neume);
	
	/*
	 * Torculus
	 */
	
	
	var Torculus = exports.Torculus = function (_Neume17) {
	    _inherits(Torculus, _Neume17);
	
	    function Torculus() {
	        _classCallCheck(this, Torculus);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Torculus).apply(this, arguments));
	    }
	
	    _createClass(Torculus, [{
	        key: 'performLayout',
	        value: function performLayout(ctxt) {
	            _get(Object.getPrototypeOf(Torculus.prototype), 'performLayout', this).call(this, ctxt);
	
	            var note1 = this.notes[0];
	            var note2 = this.notes[1];
	            var note3 = this.notes[2];
	            var line;
	
	            // fixme: implement liquescents
	            note1.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumCuadratum);
	            note2.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumCuadratum);
	            note3.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumCuadratum);
	
	            var staffPos1 = note1.staffPosition;
	            var staffPos2 = note2.staffPosition;
	            var staffPos3 = note3.staffPosition;
	
	            note1.performLayout(ctxt);
	            note2.performLayout(ctxt);
	            note3.performLayout(ctxt);
	
	            var x = note1.bounds.right();
	
	            // do we need to draw the first (ascending) line?
	            if (staffPos2 - staffPos1 > 1) {
	                line = new _Exsurge2.NeumeLineVisualizer(ctxt, note1, note2, false);
	                x -= line.bounds.width;
	                line.bounds.x = x;
	                this.addVisualizer(line);
	            }
	
	            note2.bounds.x = x;
	            x += note2.bounds.width;
	
	            // do we need to draw a descending line?
	            if (staffPos2 - staffPos3 > 1) {
	                line = new _Exsurge2.NeumeLineVisualizer(ctxt, note2, note3, false);
	                x -= line.bounds.width;
	                line.bounds.x = x;
	                this.addVisualizer(line);
	            }
	
	            note3.bounds.x = x;
	
	            this.addVisualizer(note1);
	            this.addVisualizer(note2);
	            this.addVisualizer(note3);
	
	            this.origin.x = note1.origin.x;
	            this.origin.y = note1.origin.y;
	
	            this.finishLayout(ctxt);
	        }
	    }]);
	
	    return Torculus;
	}(Neume);
	
	/*
	 * TorculusResupinus
	 */
	
	
	var TorculusResupinus = exports.TorculusResupinus = function (_Neume18) {
	    _inherits(TorculusResupinus, _Neume18);
	
	    function TorculusResupinus() {
	        _classCallCheck(this, TorculusResupinus);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TorculusResupinus).apply(this, arguments));
	    }
	
	    _createClass(TorculusResupinus, [{
	        key: 'performLayout',
	        value: function performLayout(ctxt) {
	            _get(Object.getPrototypeOf(TorculusResupinus.prototype), 'performLayout', this).call(this, ctxt);
	
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
	                case _Exsurge3.NoteShape.Quilisma:
	                    first.setGlyphShape(ctxt, _Exsurge2.GlyphCode.Quilisma);
	                    break;
	
	                default:
	                    first.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumCuadratum);
	                    break;
	            }
	
	            first.performLayout(ctxt);
	            x = first.bounds.right();
	            this.addVisualizer(first);
	
	            // if we need a line between the first punctum and the porrectus swash, add it now
	            if (secondStaffPosition - firstStaffPosition > 1) {
	                line = new _Exsurge2.NeumeLineVisualizer(ctxt, first, second, false);
	                x -= line.bounds.width;
	                line.bounds.x = x;
	                this.addVisualizer(line);
	            }
	
	            switch (Math.abs(secondStaffPosition - thirdStaffPosition)) {
	                case 1:
	                    second.setGlyphShape(ctxt, _Exsurge2.GlyphCode.Porrectus1);
	                    break;
	                case 2:
	                    second.setGlyphShape(ctxt, _Exsurge2.GlyphCode.Porrectus2);
	                    break;
	                case 3:
	                    second.setGlyphShape(ctxt, _Exsurge2.GlyphCode.Porrectus3);
	                    break;
	                case 4:
	                    second.setGlyphShape(ctxt, _Exsurge2.GlyphCode.Porrectus4);
	                    break;
	                default:
	                    // fixme: this should be an error!
	                    second.setGlyphShape(ctxt, _Exsurge2.GlyphCode.Porrectus1);
	                    break;
	            }
	
	            second.performLayout(ctxt);
	            second.bounds.x = x;
	            x = second.bounds.right();
	            this.addVisualizer(second);
	
	            // the third glyph does not draw anything, but it still has logical importance for the editing
	            // environment...it can respond to changes which will then change the swash glyph of the first.
	            third.setGlyphShape(ctxt, _Exsurge2.GlyphCode.None);
	            third.performLayout(ctxt);
	
	            // do we need an ascending line after the porrectus swash?
	            if (fourthStaffPosition - thirdStaffPosition > 1) {
	                line = new _Exsurge2.NeumeLineVisualizer(ctxt, third, fourth, false);
	                line.bounds.x = x - line.bounds.width;
	                this.addVisualizer(line);
	            }
	
	            if (fourth.isLiquescent) fourth.setGlyphShape(ctxt, _Exsurge2.GlyphCode.TerminatingAscLiquescent);else fourth.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PodatusUpper);
	
	            fourth.performLayout(ctxt);
	            fourth.bounds.x += x;
	            this.addVisualizer(fourth);
	
	            this.origin.x = first.origin.x;
	            this.origin.y = first.origin.y;
	
	            this.finishLayout(ctxt);
	        }
	    }]);
	
	    return TorculusResupinus;
	}(Neume);
	
	/*
	 * TorculusResupinusFlexus
	 */
	
	
	var TorculusResupinusFlexus = exports.TorculusResupinusFlexus = function (_Neume19) {
	    _inherits(TorculusResupinusFlexus, _Neume19);
	
	    function TorculusResupinusFlexus() {
	        _classCallCheck(this, TorculusResupinusFlexus);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TorculusResupinusFlexus).apply(this, arguments));
	    }
	
	    _createClass(TorculusResupinusFlexus, [{
	        key: 'performLayout',
	        value: function performLayout(ctxt) {
	            _get(Object.getPrototypeOf(TorculusResupinusFlexus.prototype), 'performLayout', this).call(this, ctxt);
	
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
	                case _Exsurge3.NoteShape.Quilisma:
	                    first.setGlyphShape(ctxt, _Exsurge2.GlyphCode.Quilisma);
	                    break;
	
	                default:
	                    first.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumCuadratum);
	                    break;
	            }
	
	            first.performLayout(ctxt);
	            x = first.bounds.right();
	            this.addVisualizer(first);
	
	            // if we need a line between the first punctum and the porrectus swash, add it now
	            if (secondStaffPosition - firstStaffPosition > 1) {
	                line = new _Exsurge2.NeumeLineVisualizer(ctxt, first, second, false);
	                x -= line.bounds.width;
	                line.bounds.x = x;
	                this.addVisualizer(line);
	            }
	
	            switch (secondStaffPosition - thirdStaffPosition) {
	                case 1:
	                    second.setGlyphShape(ctxt, _Exsurge2.GlyphCode.Porrectus1);
	                    break;
	                case 2:
	                    second.setGlyphShape(ctxt, _Exsurge2.GlyphCode.Porrectus2);
	                    break;
	                case 3:
	                    second.setGlyphShape(ctxt, _Exsurge2.GlyphCode.Porrectus3);
	                    break;
	                case 4:
	                    second.setGlyphShape(ctxt, _Exsurge2.GlyphCode.Porrectus4);
	                    break;
	                default:
	                    // fixme: should we generate an error here?
	                    second.setGlyphShape(ctxt, _Exsurge2.GlyphCode.None);
	                    break;
	            }
	
	            second.performLayout(ctxt);
	            second.bounds.x = x;
	            x = second.bounds.right();
	            this.addVisualizer(second);
	
	            // the second glyph does not draw anything, but it still has logical importance for the editing
	            // environment...it can respond to changes which will then change the swash glyph of the first.
	            third.setGlyphShape(ctxt, _Exsurge2.GlyphCode.None);
	            third.performLayout(ctxt);
	            third.bounds.x = x;
	            x = third.bounds.right();
	            this.addVisualizer(third);
	
	            // add a connecting line
	            if (fourthStaffPosition - thirdStaffPosition > 1) {
	                line = new _Exsurge2.NeumeLineVisualizer(ctxt, third, fourth, false);
	                x -= line.bounds.width;
	                line.bounds.x += x;
	                this.addVisualizer(line);
	            }
	
	            fourth.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumCuadratum);
	            fourth.performLayout(ctxt);
	            fourth.bounds.x = x;
	            x = fourth.bounds.right();
	            this.addVisualizer(fourth);
	
	            // add a connecting line
	            if (fourthStaffPosition - fifthStaffPosition > 1) {
	                line = new _Exsurge2.NeumeLineVisualizer(ctxt, fourth, fifth, false);
	                x -= line.bounds.width * 1.5;
	                line.bounds.x += x;
	                this.addVisualizer(line);
	            }
	
	            fifth.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumCuadratum);
	            fifth.performLayout(ctxt);
	            fifth.bounds.x = x;
	            this.addVisualizer(fifth);
	
	            this.origin.x = first.origin.x;
	            this.origin.y = first.origin.y;
	
	            this.finishLayout(ctxt);
	        }
	    }]);
	
	    return TorculusResupinusFlexus;
	}(Neume);
	
	/*
	 * Tristropha
	 *
	 * For simplicity in implementation, Tristropha's have three notes in the object
	 * structure. These technically must be the same pitch though (like the
	 * Distropha and Bivirga).
	 */
	
	
	var Tristropha = exports.Tristropha = function (_Neume20) {
	    _inherits(Tristropha, _Neume20);
	
	    function Tristropha() {
	        _classCallCheck(this, Tristropha);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Tristropha).apply(this, arguments));
	    }
	
	    _createClass(Tristropha, [{
	        key: 'performLayout',
	        value: function performLayout(ctxt) {
	            _get(Object.getPrototypeOf(Tristropha.prototype), 'performLayout', this).call(this, ctxt);
	
	            var note1 = this.notes[0];
	            var note2 = this.notes[1];
	            var note3 = this.notes[2];
	
	            var staffPosition = note1.staffPosition;
	
	            note1.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumCuadratum);
	            note1.performLayout(ctxt);
	
	            note2.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumCuadratum);
	            note2.performLayout(ctxt);
	            note2.bounds.x += note1.bounds.width + ctxt.intraNeumeSpacing;
	
	            note3.setGlyphShape(ctxt, _Exsurge2.GlyphCode.PunctumCuadratum);
	            note3.performLayout(ctxt);
	            note3.bounds.x += note1.bounds.width + note2.bounds.width + ctxt.intraNeumeSpacing * 2;
	
	            this.addVisualizer(note1);
	            this.addVisualizer(note2);
	            this.addVisualizer(note3);
	
	            this.origin.x = note1.origin.x;
	            this.origin.y = note1.origin.y;
	
	            this.finishLayout(ctxt);
	        }
	    }]);
	
	    return Tristropha;
	}(Neume);
	
	/*
	 * Virga
	 */
	
	
	var Virga = exports.Virga = function (_Neume21) {
	    _inherits(Virga, _Neume21);
	
	    function Virga() {
	        _classCallCheck(this, Virga);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Virga).apply(this, arguments));
	    }
	
	    _createClass(Virga, [{
	        key: 'performLayout',
	        value: function performLayout(ctxt) {
	            _get(Object.getPrototypeOf(Virga.prototype), 'performLayout', this).call(this, ctxt);
	
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
	
	    }], [{
	        key: 'getGlyphCode',
	        value: function getGlyphCode(staffPosition) {
	            if (Math.abs(staffPosition) % 2 == 1) return _Exsurge2.GlyphCode.VirgaLong;else return _Exsurge2.GlyphCode.VirgaShort;
	
	            // fixme: add logic for virgas low on the staff that are probably short also...
	        }
	    }]);
	
	    return Virga;
	}(Neume);

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "data:font/opentype;base64,AAEAAAATAQAABAAwRFNJRwAAAAEAAENkAAAACEdERUYAbgADAABDbAAAABhHUE9TTxtiswAAQ4QAAAE8R1NVQjtgWB4AAETAAAAAlk9TLzJKLTibAAABuAAAAGBjbWFwCRIK1gAAA4gAAAEEY3Z0IAGGB0cAAAZ0AAAAGmZwZ20GWZw3AAAEjAAAAXNnYXNwABcACAAAQ1QAAAAQZ2x5ZhRQNO4AAAdQAAAEzGhlYWQKMl2QAAABPAAAADZoaGVhDC0CmQAAAXQAAAAkaG10eB67AO4AAAIYAAABbmtlcm4E1wS9AAAMHAAAAMZsb2NhLQ4u0gAABpAAAADAbWF4cAJtAJoAAAGYAAAAIG5hbWUmgJC3AAAM5AAANY5wb3N0CJUJxAAAQnQAAADgcHJlcNTHuIYAAAYAAAAAcgABAAAAAQAArr24P18PPPUAGwgAAAAAANLrfC8AAAAA0uuXUgAA/vAFLAYhAAAACQACAAAAAAAAAAEAAAb+/bwAAAUzAAD/UQUsAAEAAAAAAAAAAAAAAAAAAABYAAEAAABfAE4AAwAAAAAAAQAAAAAACgAAAgAASwAAAAAAAwNBAZAABQAAA1gDWAAABLADWANYAAAEsABkAfQAAAIABQMGAAACAAQAAAABAAAAAAAAAAAAAAAAICAgIABAACEAfgb+/bwAAAb+AkQAAAABAAAAAAOiBOwAAAAgAAIDMwAAAzMAAAMzAAADMwAAAzMAAAMzAAADMwAAAzMAAAMzAAADMwAAAzMAAAMzAAADMwAAAzMAAAHVAIMDMwAAAzMAAAMzAAADMwAAAzMAAAMzAAADMwAAAzMAAAMzAAADMwAAAzMAAAMzAAADMwAAAzMAAAMzAAADMwAAAzMAAAMzAAAEwwAAAzMAAAMzAAADMwAAAzMAAAMzAAADMwAAAzMAAAMzAAADMwAAAzMAAAMzAAADMwAAAzMAAAMzAAADMwAAAzMAAAR9ACkDMwAAAzMAAAMzAAAFMwAUAzMAAAMzAAADMwAAAzMAAAMzAAADMwAAAzMAAAMzAAADMwAAAzMAAAO6AAADMwAAAzMAAAMzAAADMwAAAzMAAAMzAAADMwAAAzMAAAMzAAADMwAAAzMAAAMzAAADMwAAAzMAAAMzAAADMwAAA4kAHwMzAAADMwAAAzMAAAQNAA8DMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAADAAAAHAABAAAAAAA8AAMAAQAAABwABAAgAAAABAAEAAEAAAB+//8AAAAg////4AABAAAAAAAGAMgAAAAgAF8AAAABAAIAAwAEAAUABgAHAAgACQAKAAsADAANAA4ADwAQABEAEgATABQAFQAWABcAGAAZABoAGwAcAB0AHgAfACAAIQAiACMAJAAlACYAJwAoACkAKgArACwALQAuAC8AMAAxADIAMwA0ADUANgA3ADgAOQA6ADsAPAA9AD4APwBAAEEAQgBDAEQARQBGAEcASABJAEoASwBMAE0ATgBPAFAAUQBSAFMAVABVAFYAVwBYAFkAWgBbAFwAXQBeuAAALEu4AAlQWLEBAY5ZuAH/hbgARB25AAkAA19eLbgAASwgIEVpRLABYC24AAIsuAABKiEtuAADLCBGsAMlRlJYI1kgiiCKSWSKIEYgaGFksAQlRiBoYWRSWCNlilkvILAAU1hpILAAVFghsEBZG2kgsABUWCGwQGVZWTotuAAELCBGsAQlRlJYI4pZIEYgamFksAQlRiBqYWRSWCOKWS/9LbgABSxLILADJlBYUViwgEQbsEBEWRshISBFsMBQWLDARBshWVktuAAGLCAgRWlEsAFgICBFfWkYRLABYC24AAcsuAAGKi24AAgsSyCwAyZTWLBAG7AAWYqKILADJlNYIyGwgIqKG4ojWSCwAyZTWCMhuADAioobiiNZILADJlNYIyG4AQCKihuKI1kgsAMmU1gjIbgBQIqKG4ojWSC4AAMmU1iwAyVFuAGAUFgjIbgBgCMhG7ADJUUjISMhWRshWUQtuAAJLEtTWEVEGyEhWS0AuAAAKwC6AAEAAgACKwG6AAMAAgACKwG/AAMATAA8AC8AIgAUAAAACCu/AAQARwA8AC8AIgAUAAAACCsAvwABAIAAZgBQADkAIgAAAAgrvwACAHgAZgBQADkAIgAAAAgrALoABQAEAAcruAAAIEV9aRhEAAAAKgArAFAAbgCCAAAAHv4gABQDogAeBOwAOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEIAQgBCAEIAQgBCAEIAQgBCAEIAQgBCAEIAQgBCAEIAQgBCAEIAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAQwBDAEMAQwBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAagBqAGoAagBqAGoAagBqAGoAagBqAGoAagBqAGoAagBqAIcAhwCHAIcAmYCZgJmAmYCZgJmAmYCZgJmAAEAg//YAXEA7AAPAEu7AAAABAAIAAQrQRMABgAAABYAAAAmAAAANgAAAEYAAABWAAAAZgAAAHYAAACGAAAACV1BBQCVAAAApQAAAAJdALoADQAFAAMrMDElFA4CIyImNTQ+AjMyFgFxFSUzHTYuFiYzHDIxeyM7LBk6NiI7LRo7AAAAAAMAAP72BK4GIQACAB4ALAAAAQsBBwMGFhcVITU+ATcBPgE3AR4DFxUhNT4BJwMCFjcGJjcBLgEHNhYDAQL2sKsebwpKUv5gRFAKAXQXRBoBpAUSHi4g/lpOPAtyoi1ecrRIAdcBRVR70VX+OQIXAgL9/lr+sh8cCSsrDBoeBGYZKQ77Sg4WEAwEKysFHiEBTv3MDQSKE+8FHkMMCsZJ/vn7AwAAAwAp/vAFLAYbADEAPwBNAAAzNT4BNREOAQcnPgMzMh4CFRQOAgcBHgM3Fw4BIyImJwEGKwEiJicRFBYXFQMiBxEeATMyNjU0LgISFjcGJjcBLgEHNhYDATJETSNJJQkvYGhzQnSscjgpS2g+AS8PIys1IgtCdycdNw7+0Q0NGxo0HEhJRCYnGygWnqonU4HtLV5ytEgB1wFFVHvRVf45Kw4hDgQ9BQsFPgwVEQouUm9ASHVaQBP+GhYaDQEDKxYdIBcCMQIFBv4FDCMOKwS2A/4ABQKLhTdcQiX6zQ0EihPvBR5DDArGSf75+wMAAAAAAgAU/vYFCgYhABoAKAAAAQ4BBwEOAwcBLgEnNSEVDgEXCQE2Jic1IQAWNwYmNwEuAQc2FgMBBQpETQr+gQgnLiwN/kgKRT8Bs1A7CwFhAVALR1IBoPxdLV5ytEgB1wFFVHvRVf45BMENGRz7vBYfFQwDBJ0aIAgrKwYdHfxKA7QdGwor+p0NBIoT7wUeQwwKxkn++fsDAAADAAD/LwOrBOUAAgAeACwAAAELAQ8BBhYXFSE1PgE3AT4BNwEeAxcVITU+AS8BAhY3BiY3ATQmBzYWBwECNGtpHlAFKEv+oEAxBgEXFTYtAUIDCxAeJ/6bRx8GU3oOZGuBOQFhIV1xlUL+qgG5AUf+uV76ERAJNzYMEREDcBciGfw+CQ4JCAU3OAUQFPr+WwUFhxPFA/0rBgy8RNX8HAAAAwAf/y8D6wTlADEAPwBNAAAzNT4BNREiBgcnPgMzMh4CFRQOAgcTHgM3Fw4BIyImJwM2KwEiJhcRFBYXFQMiBxEeATMyNjU0LgISFjcGJjcBNCYHNhYHASc+LgI3MQoxSk9ZM1uIXCwfO1Mi3goVGCIsDT9eIR0zDN4GDBQVKgMrQkcbCwQbEG11HDhYqw5ka4E5AWEhXXGVQv6qNg0VBQM/CQdHDRENCCZFWjM5Xkk1C/6ODxEHAQQ1FhgfFQGqAQQB/oYEFg02A60B/oQBAWNlKkQuG/wJBQWHE8UD/SsGDLxE1fwcAAIAD/8vA/AE5QAaACgAAAEOAQcBDgMHAS4BJzUhFQ4BFxsBNiYnNSEAFjcGJjcBNCYHNhYHAQPwQDAF/uEHIickH/6xBio7AW5IHgb16AYmSgFg/TIOZGuBOQFhIV1xlUL+qgO5DRAQ/KwTHRIKCAOoEBQINzgGDxH9UwKrEA8KN/vHBQWHE8UD/SsGDLxE1fwcAAAAAAEAAADCAAEAHgBgAAQAVAAhAA7/nAAhACEANgAhADIADQAhADb/8gAhAEEANgAhAFIAFwAhAFb/pQAyAA7/nAAyACEAWAAyADIAoQAyADYAvQAyAEEAWAAyAFIATwAyAFYAaQA2AA7+cAA2ACH+kwA2ADL/+QA2ADYADgA2AEH+kwA2AFL/YQA2AFb/fABBAA7/nABBAFIAFwBBAFb/1QBSAA7/nABSAFIANgBSAFYATABWAA7+cABWAFIACQBWAFYAGQAAAAAAFAD2AAEAAAAAAAAALgAAAAEAAAAAAAEAEgA1AAEAAAAAAAIABwAuAAEAAAAAAAMAHwA1AAEAAAAAAAQAEgA1AAEAAAAAAAUALwBUAAEAAAAAAAYAEQCDAAEAAAAAAA0Q9ACUAAEAAAAAAA4AGgEkAAEAAAAAABIAEgA1AAMAAQQJAAAAXBGIAAMAAQQJAAEAJBHyAAMAAQQJAAIADhHkAAMAAQQJAAMAPhHyAAMAAQQJAAQAJBHyAAMAAQQJAAUAXhIwAAMAAQQJAAYAIhKOAAMAAQQJAA0h6BKwAAMAAQQJAA4ANBPQAAMAAQQJABIAJBHyQ29weXJpZ2h0IChjKSAyMDE2IEZyLiBNYXR0aGV3IFNwZW5jZXIsIE8uUy5KLlJlZ3VsYXJFeHN1cmdlIENoYXJhY3RlcnM6VmVyc2lvbiAxLjAwVmVyc2lvbiAxLjAwIEZlYnJ1YXJ5IDE4LCAyMDE2LCBpbml0aWFsIHJlbGVhc2VFeHN1cmdlQ2hhcmFjdGVyc1RoaXMgRm9udCBTb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgU0lMIE9wZW4gRm9udCBMaWNlbnNlLCBWZXJzaW9uIDEuMS4gVGhpcyBsaWNlbnNlIGlzIGNvcGllZCBiZWxvdywgYW5kIGlzIGFsc28gYXZhaWxhYmxlIHdpdGggYSBGQVEgYXQ6IGh0dHA6Ly9zY3JpcHRzLnNpbC5vcmcvT0ZMDQoNCg0KLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0NClNJTCBPUEVOIEZPTlQgTElDRU5TRSBWZXJzaW9uIDEuMSAtIDI2IEZlYnJ1YXJ5IDIwMDcNCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tDQoNClBSRUFNQkxFDQpUaGUgZ29hbHMgb2YgdGhlIE9wZW4gRm9udCBMaWNlbnNlIChPRkwpIGFyZSB0byBzdGltdWxhdGUgd29ybGR3aWRlIGRldmVsb3BtZW50IG9mIGNvbGxhYm9yYXRpdmUgZm9udCBwcm9qZWN0cywgdG8gc3VwcG9ydCB0aGUgZm9udCBjcmVhdGlvbiBlZmZvcnRzIG9mIGFjYWRlbWljIGFuZCBsaW5ndWlzdGljIGNvbW11bml0aWVzLCBhbmQgdG8gcHJvdmlkZSBhIGZyZWUgYW5kIG9wZW4gZnJhbWV3b3JrIGluIHdoaWNoIGZvbnRzIG1heSBiZSBzaGFyZWQgYW5kIGltcHJvdmVkIGluIHBhcnRuZXJzaGlwIHdpdGggb3RoZXJzLg0KDQpUaGUgT0ZMIGFsbG93cyB0aGUgbGljZW5zZWQgZm9udHMgdG8gYmUgdXNlZCwgc3R1ZGllZCwgbW9kaWZpZWQgYW5kIHJlZGlzdHJpYnV0ZWQgZnJlZWx5IGFzIGxvbmcgYXMgdGhleSBhcmUgbm90IHNvbGQgYnkgdGhlbXNlbHZlcy4gVGhlIGZvbnRzLCBpbmNsdWRpbmcgYW55IGRlcml2YXRpdmUgd29ya3MsIGNhbiBiZSBidW5kbGVkLCBlbWJlZGRlZCwgcmVkaXN0cmlidXRlZCBhbmQvb3Igc29sZCB3aXRoIGFueSBzb2Z0d2FyZSBwcm92aWRlZCB0aGF0IGFueSByZXNlcnZlZCBuYW1lcyBhcmUgbm90IHVzZWQgYnkgZGVyaXZhdGl2ZSB3b3Jrcy4gVGhlIGZvbnRzIGFuZCBkZXJpdmF0aXZlcywgaG93ZXZlciwgY2Fubm90IGJlIHJlbGVhc2VkIHVuZGVyIGFueSBvdGhlciB0eXBlIG9mIGxpY2Vuc2UuIFRoZSByZXF1aXJlbWVudCBmb3IgZm9udHMgdG8gcmVtYWluIHVuZGVyIHRoaXMgbGljZW5zZSBkb2VzIG5vdCBhcHBseSB0byBhbnkgZG9jdW1lbnQgY3JlYXRlZCB1c2luZyB0aGUgZm9udHMgb3IgdGhlaXIgZGVyaXZhdGl2ZXMuDQoNCkRFRklOSVRJT05TDQoiRm9udCBTb2Z0d2FyZSIgcmVmZXJzIHRvIHRoZSBzZXQgb2YgZmlsZXMgcmVsZWFzZWQgYnkgdGhlIENvcHlyaWdodCBIb2xkZXIocykgdW5kZXIgdGhpcyBsaWNlbnNlIGFuZCBjbGVhcmx5IG1hcmtlZCBhcyBzdWNoLiBUaGlzIG1heSBpbmNsdWRlIHNvdXJjZSBmaWxlcywgYnVpbGQgc2NyaXB0cyBhbmQgZG9jdW1lbnRhdGlvbi4NCg0KIlJlc2VydmVkIEZvbnQgTmFtZSIgcmVmZXJzIHRvIGFueSBuYW1lcyBzcGVjaWZpZWQgYXMgc3VjaCBhZnRlciB0aGUgY29weXJpZ2h0IHN0YXRlbWVudChzKS4NCg0KIk9yaWdpbmFsIFZlcnNpb24iIHJlZmVycyB0byB0aGUgY29sbGVjdGlvbiBvZiBGb250IFNvZnR3YXJlIGNvbXBvbmVudHMgYXMgZGlzdHJpYnV0ZWQgYnkgdGhlIENvcHlyaWdodCBIb2xkZXIocykuDQoNCiJNb2RpZmllZCBWZXJzaW9uIiByZWZlcnMgdG8gYW55IGRlcml2YXRpdmUgbWFkZSBieSBhZGRpbmcgdG8sIGRlbGV0aW5nLCBvciBzdWJzdGl0dXRpbmcgLS0gaW4gcGFydCBvciBpbiB3aG9sZSAtLSBhbnkgb2YgdGhlIGNvbXBvbmVudHMgb2YgdGhlIE9yaWdpbmFsIFZlcnNpb24sIGJ5IGNoYW5naW5nIGZvcm1hdHMgb3IgYnkgcG9ydGluZyB0aGUgRm9udCBTb2Z0d2FyZSB0byBhIG5ldyBlbnZpcm9ubWVudC4NCg0KIkF1dGhvciIgcmVmZXJzIHRvIGFueSBkZXNpZ25lciwgZW5naW5lZXIsIHByb2dyYW1tZXIsIHRlY2huaWNhbCB3cml0ZXIgb3Igb3RoZXIgcGVyc29uIHdobyBjb250cmlidXRlZCB0byB0aGUgRm9udCBTb2Z0d2FyZS4NCg0KUEVSTUlTU0lPTiAmIENPTkRJVElPTlMNClBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhlIEZvbnQgU29mdHdhcmUsIHRvIHVzZSwgc3R1ZHksIGNvcHksIG1lcmdlLCBlbWJlZCwgbW9kaWZ5LCByZWRpc3RyaWJ1dGUsIGFuZCBzZWxsIG1vZGlmaWVkIGFuZCB1bm1vZGlmaWVkIGNvcGllcyBvZiB0aGUgRm9udCBTb2Z0d2FyZSwgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6DQoNCjEpIE5laXRoZXIgdGhlIEZvbnQgU29mdHdhcmUgbm9yIGFueSBvZiBpdHMgaW5kaXZpZHVhbCBjb21wb25lbnRzLCBpbiBPcmlnaW5hbCBvciBNb2RpZmllZCBWZXJzaW9ucywgbWF5IGJlIHNvbGQgYnkgaXRzZWxmLg0KDQoyKSBPcmlnaW5hbCBvciBNb2RpZmllZCBWZXJzaW9ucyBvZiB0aGUgRm9udCBTb2Z0d2FyZSBtYXkgYmUgYnVuZGxlZCwgcmVkaXN0cmlidXRlZCBhbmQvb3Igc29sZCB3aXRoIGFueSBzb2Z0d2FyZSwgcHJvdmlkZWQgdGhhdCBlYWNoIGNvcHkgY29udGFpbnMgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgbGljZW5zZS4gVGhlc2UgY2FuIGJlIGluY2x1ZGVkIGVpdGhlciBhcyBzdGFuZC1hbG9uZSB0ZXh0IGZpbGVzLCBodW1hbi1yZWFkYWJsZSBoZWFkZXJzIG9yIGluIHRoZSBhcHByb3ByaWF0ZSBtYWNoaW5lLXJlYWRhYmxlIG1ldGFkYXRhIGZpZWxkcyB3aXRoaW4gdGV4dCBvciBiaW5hcnkgZmlsZXMgYXMgbG9uZyBhcyB0aG9zZSBmaWVsZHMgY2FuIGJlIGVhc2lseSB2aWV3ZWQgYnkgdGhlIHVzZXIuDQoNCjMpIE5vIE1vZGlmaWVkIFZlcnNpb24gb2YgdGhlIEZvbnQgU29mdHdhcmUgbWF5IHVzZSB0aGUgUmVzZXJ2ZWQgRm9udCBOYW1lKHMpIHVubGVzcyBleHBsaWNpdCB3cml0dGVuIHBlcm1pc3Npb24gaXMgZ3JhbnRlZCBieSB0aGUgY29ycmVzcG9uZGluZyBDb3B5cmlnaHQgSG9sZGVyLiBUaGlzIHJlc3RyaWN0aW9uIG9ubHkgYXBwbGllcyB0byB0aGUgcHJpbWFyeSBmb250IG5hbWUgYXMgcHJlc2VudGVkIHRvIHRoZSB1c2Vycy4NCg0KNCkgVGhlIG5hbWUocykgb2YgdGhlIENvcHlyaWdodCBIb2xkZXIocykgb3IgdGhlIEF1dGhvcihzKSBvZiB0aGUgRm9udCBTb2Z0d2FyZSBzaGFsbCBub3QgYmUgdXNlZCB0byBwcm9tb3RlLCBlbmRvcnNlIG9yIGFkdmVydGlzZSBhbnkgTW9kaWZpZWQgVmVyc2lvbiwgZXhjZXB0IHRvIGFja25vd2xlZGdlIHRoZSBjb250cmlidXRpb24ocykgb2YgdGhlIENvcHlyaWdodCBIb2xkZXIocykgYW5kIHRoZSBBdXRob3Iocykgb3Igd2l0aCB0aGVpciBleHBsaWNpdCB3cml0dGVuIHBlcm1pc3Npb24uDQoNCjUpIFRoZSBGb250IFNvZnR3YXJlLCBtb2RpZmllZCBvciB1bm1vZGlmaWVkLCBpbiBwYXJ0IG9yIGluIHdob2xlLCBtdXN0IGJlIGRpc3RyaWJ1dGVkIGVudGlyZWx5IHVuZGVyIHRoaXMgbGljZW5zZSwgYW5kIG11c3Qgbm90IGJlIGRpc3RyaWJ1dGVkIHVuZGVyIGFueSBvdGhlciBsaWNlbnNlLiBUaGUgcmVxdWlyZW1lbnQgZm9yIGZvbnRzIHRvIHJlbWFpbiB1bmRlciB0aGlzIGxpY2Vuc2UgZG9lcyBub3QgYXBwbHkgdG8gYW55IGRvY3VtZW50IGNyZWF0ZWQgdXNpbmcgdGhlIEZvbnQgU29mdHdhcmUuDQoNClRFUk1JTkFUSU9ODQpUaGlzIGxpY2Vuc2UgYmVjb21lcyBudWxsIGFuZCB2b2lkIGlmIGFueSBvZiB0aGUgYWJvdmUgY29uZGl0aW9ucyBhcmUgbm90IG1ldC4NCg0KRElTQ0xBSU1FUg0KVEhFIEZPTlQgU09GVFdBUkUgSVMgUFJPVklERUQgIkFTIElTIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIEFOWSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVCBPRiBDT1BZUklHSFQsIFBBVEVOVCwgVFJBREVNQVJLLCBPUiBPVEhFUiBSSUdIVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBJTkNMVURJTkcgQU5ZIEdFTkVSQUwsIFNQRUNJQUwsIElORElSRUNULCBJTkNJREVOVEFMLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgVEhFIFVTRSBPUiBJTkFCSUxJVFkgVE8gVVNFIFRIRSBGT05UIFNPRlRXQVJFIE9SIEZST00gT1RIRVIgREVBTElOR1MgSU4gVEhFIEZPTlQgU09GVFdBUkUuAEMAbwBwAHkAcgBpAGcAaAB0ACAAKABjACkAIAAyADAAMQA2ACAARgByAC4AIABNAGEAdAB0AGgAZQB3ACAAUwBwAGUAbgBjAGUAcgAsACAATwAuAFMALgBKAC4AUgBlAGcAdQBsAGEAcgBFAHgAcwB1AHIAZwBlACAAQwBoAGEAcgBhAGMAdABlAHIAcwA6AFYAZQByAHMAaQBvAG4AIAAxAC4AMAAwAFYAZQByAHMAaQBvAG4AIAAxAC4AMAAwACAARgBlAGIAcgB1AGEAcgB5ACAAMQA4ACwAIAAyADAAMQA2ACwAIABpAG4AaQB0AGkAYQBsACAAcgBlAGwAZQBhAHMAZQBFAHgAcwB1AHIAZwBlAEMAaABhAHIAYQBjAHQAZQByAHMAVABoAGkAcwAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUAIABpAHMAIABsAGkAYwBlAG4AcwBlAGQAIAB1AG4AZABlAHIAIAB0AGgAZQAgAFMASQBMACAATwBwAGUAbgAgAEYAbwBuAHQAIABMAGkAYwBlAG4AcwBlACwAIABWAGUAcgBzAGkAbwBuACAAMQAuADEALgAgAFQAaABpAHMAIABsAGkAYwBlAG4AcwBlACAAaQBzACAAYwBvAHAAaQBlAGQAIABiAGUAbABvAHcALAAgAGEAbgBkACAAaQBzACAAYQBsAHMAbwAgAGEAdgBhAGkAbABhAGIAbABlACAAdwBpAHQAaAAgAGEAIABGAEEAUQAgAGEAdAA6ACAAaAB0AHQAcAA6AC8ALwBzAGMAcgBpAHAAdABzAC4AcwBpAGwALgBvAHIAZwAvAE8ARgBMAA0ACgANAAoADQAKAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQANAAoAUwBJAEwAIABPAFAARQBOACAARgBPAE4AVAAgAEwASQBDAEUATgBTAEUAIABWAGUAcgBzAGkAbwBuACAAMQAuADEAIAAtACAAMgA2ACAARgBlAGIAcgB1AGEAcgB5ACAAMgAwADAANwANAAoALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAA0ACgANAAoAUABSAEUAQQBNAEIATABFAA0ACgBUAGgAZQAgAGcAbwBhAGwAcwAgAG8AZgAgAHQAaABlACAATwBwAGUAbgAgAEYAbwBuAHQAIABMAGkAYwBlAG4AcwBlACAAKABPAEYATAApACAAYQByAGUAIAB0AG8AIABzAHQAaQBtAHUAbABhAHQAZQAgAHcAbwByAGwAZAB3AGkAZABlACAAZABlAHYAZQBsAG8AcABtAGUAbgB0ACAAbwBmACAAYwBvAGwAbABhAGIAbwByAGEAdABpAHYAZQAgAGYAbwBuAHQAIABwAHIAbwBqAGUAYwB0AHMALAAgAHQAbwAgAHMAdQBwAHAAbwByAHQAIAB0AGgAZQAgAGYAbwBuAHQAIABjAHIAZQBhAHQAaQBvAG4AIABlAGYAZgBvAHIAdABzACAAbwBmACAAYQBjAGEAZABlAG0AaQBjACAAYQBuAGQAIABsAGkAbgBnAHUAaQBzAHQAaQBjACAAYwBvAG0AbQB1AG4AaQB0AGkAZQBzACwAIABhAG4AZAAgAHQAbwAgAHAAcgBvAHYAaQBkAGUAIABhACAAZgByAGUAZQAgAGEAbgBkACAAbwBwAGUAbgAgAGYAcgBhAG0AZQB3AG8AcgBrACAAaQBuACAAdwBoAGkAYwBoACAAZgBvAG4AdABzACAAbQBhAHkAIABiAGUAIABzAGgAYQByAGUAZAAgAGEAbgBkACAAaQBtAHAAcgBvAHYAZQBkACAAaQBuACAAcABhAHIAdABuAGUAcgBzAGgAaQBwACAAdwBpAHQAaAAgAG8AdABoAGUAcgBzAC4ADQAKAA0ACgBUAGgAZQAgAE8ARgBMACAAYQBsAGwAbwB3AHMAIAB0AGgAZQAgAGwAaQBjAGUAbgBzAGUAZAAgAGYAbwBuAHQAcwAgAHQAbwAgAGIAZQAgAHUAcwBlAGQALAAgAHMAdAB1AGQAaQBlAGQALAAgAG0AbwBkAGkAZgBpAGUAZAAgAGEAbgBkACAAcgBlAGQAaQBzAHQAcgBpAGIAdQB0AGUAZAAgAGYAcgBlAGUAbAB5ACAAYQBzACAAbABvAG4AZwAgAGEAcwAgAHQAaABlAHkAIABhAHIAZQAgAG4AbwB0ACAAcwBvAGwAZAAgAGIAeQAgAHQAaABlAG0AcwBlAGwAdgBlAHMALgAgAFQAaABlACAAZgBvAG4AdABzACwAIABpAG4AYwBsAHUAZABpAG4AZwAgAGEAbgB5ACAAZABlAHIAaQB2AGEAdABpAHYAZQAgAHcAbwByAGsAcwAsACAAYwBhAG4AIABiAGUAIABiAHUAbgBkAGwAZQBkACwAIABlAG0AYgBlAGQAZABlAGQALAAgAHIAZQBkAGkAcwB0AHIAaQBiAHUAdABlAGQAIABhAG4AZAAvAG8AcgAgAHMAbwBsAGQAIAB3AGkAdABoACAAYQBuAHkAIABzAG8AZgB0AHcAYQByAGUAIABwAHIAbwB2AGkAZABlAGQAIAB0AGgAYQB0ACAAYQBuAHkAIAByAGUAcwBlAHIAdgBlAGQAIABuAGEAbQBlAHMAIABhAHIAZQAgAG4AbwB0ACAAdQBzAGUAZAAgAGIAeQAgAGQAZQByAGkAdgBhAHQAaQB2AGUAIAB3AG8AcgBrAHMALgAgAFQAaABlACAAZgBvAG4AdABzACAAYQBuAGQAIABkAGUAcgBpAHYAYQB0AGkAdgBlAHMALAAgAGgAbwB3AGUAdgBlAHIALAAgAGMAYQBuAG4AbwB0ACAAYgBlACAAcgBlAGwAZQBhAHMAZQBkACAAdQBuAGQAZQByACAAYQBuAHkAIABvAHQAaABlAHIAIAB0AHkAcABlACAAbwBmACAAbABpAGMAZQBuAHMAZQAuACAAVABoAGUAIAByAGUAcQB1AGkAcgBlAG0AZQBuAHQAIABmAG8AcgAgAGYAbwBuAHQAcwAgAHQAbwAgAHIAZQBtAGEAaQBuACAAdQBuAGQAZQByACAAdABoAGkAcwAgAGwAaQBjAGUAbgBzAGUAIABkAG8AZQBzACAAbgBvAHQAIABhAHAAcABsAHkAIAB0AG8AIABhAG4AeQAgAGQAbwBjAHUAbQBlAG4AdAAgAGMAcgBlAGEAdABlAGQAIAB1AHMAaQBuAGcAIAB0AGgAZQAgAGYAbwBuAHQAcwAgAG8AcgAgAHQAaABlAGkAcgAgAGQAZQByAGkAdgBhAHQAaQB2AGUAcwAuAA0ACgANAAoARABFAEYASQBOAEkAVABJAE8ATgBTAA0ACgAiAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUAIgAgAHIAZQBmAGUAcgBzACAAdABvACAAdABoAGUAIABzAGUAdAAgAG8AZgAgAGYAaQBsAGUAcwAgAHIAZQBsAGUAYQBzAGUAZAAgAGIAeQAgAHQAaABlACAAQwBvAHAAeQByAGkAZwBoAHQAIABIAG8AbABkAGUAcgAoAHMAKQAgAHUAbgBkAGUAcgAgAHQAaABpAHMAIABsAGkAYwBlAG4AcwBlACAAYQBuAGQAIABjAGwAZQBhAHIAbAB5ACAAbQBhAHIAawBlAGQAIABhAHMAIABzAHUAYwBoAC4AIABUAGgAaQBzACAAbQBhAHkAIABpAG4AYwBsAHUAZABlACAAcwBvAHUAcgBjAGUAIABmAGkAbABlAHMALAAgAGIAdQBpAGwAZAAgAHMAYwByAGkAcAB0AHMAIABhAG4AZAAgAGQAbwBjAHUAbQBlAG4AdABhAHQAaQBvAG4ALgANAAoADQAKACIAUgBlAHMAZQByAHYAZQBkACAARgBvAG4AdAAgAE4AYQBtAGUAIgAgAHIAZQBmAGUAcgBzACAAdABvACAAYQBuAHkAIABuAGEAbQBlAHMAIABzAHAAZQBjAGkAZgBpAGUAZAAgAGEAcwAgAHMAdQBjAGgAIABhAGYAdABlAHIAIAB0AGgAZQAgAGMAbwBwAHkAcgBpAGcAaAB0ACAAcwB0AGEAdABlAG0AZQBuAHQAKABzACkALgANAAoADQAKACIATwByAGkAZwBpAG4AYQBsACAAVgBlAHIAcwBpAG8AbgAiACAAcgBlAGYAZQByAHMAIAB0AG8AIAB0AGgAZQAgAGMAbwBsAGwAZQBjAHQAaQBvAG4AIABvAGYAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACAAYwBvAG0AcABvAG4AZQBuAHQAcwAgAGEAcwAgAGQAaQBzAHQAcgBpAGIAdQB0AGUAZAAgAGIAeQAgAHQAaABlACAAQwBvAHAAeQByAGkAZwBoAHQAIABIAG8AbABkAGUAcgAoAHMAKQAuAA0ACgANAAoAIgBNAG8AZABpAGYAaQBlAGQAIABWAGUAcgBzAGkAbwBuACIAIAByAGUAZgBlAHIAcwAgAHQAbwAgAGEAbgB5ACAAZABlAHIAaQB2AGEAdABpAHYAZQAgAG0AYQBkAGUAIABiAHkAIABhAGQAZABpAG4AZwAgAHQAbwAsACAAZABlAGwAZQB0AGkAbgBnACwAIABvAHIAIABzAHUAYgBzAHQAaQB0AHUAdABpAG4AZwAgAC0ALQAgAGkAbgAgAHAAYQByAHQAIABvAHIAIABpAG4AIAB3AGgAbwBsAGUAIAAtAC0AIABhAG4AeQAgAG8AZgAgAHQAaABlACAAYwBvAG0AcABvAG4AZQBuAHQAcwAgAG8AZgAgAHQAaABlACAATwByAGkAZwBpAG4AYQBsACAAVgBlAHIAcwBpAG8AbgAsACAAYgB5ACAAYwBoAGEAbgBnAGkAbgBnACAAZgBvAHIAbQBhAHQAcwAgAG8AcgAgAGIAeQAgAHAAbwByAHQAaQBuAGcAIAB0AGgAZQAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUAIAB0AG8AIABhACAAbgBlAHcAIABlAG4AdgBpAHIAbwBuAG0AZQBuAHQALgANAAoADQAKACIAQQB1AHQAaABvAHIAIgAgAHIAZQBmAGUAcgBzACAAdABvACAAYQBuAHkAIABkAGUAcwBpAGcAbgBlAHIALAAgAGUAbgBnAGkAbgBlAGUAcgAsACAAcAByAG8AZwByAGEAbQBtAGUAcgAsACAAdABlAGMAaABuAGkAYwBhAGwAIAB3AHIAaQB0AGUAcgAgAG8AcgAgAG8AdABoAGUAcgAgAHAAZQByAHMAbwBuACAAdwBoAG8AIABjAG8AbgB0AHIAaQBiAHUAdABlAGQAIAB0AG8AIAB0AGgAZQAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUALgANAAoADQAKAFAARQBSAE0ASQBTAFMASQBPAE4AIAAmACAAQwBPAE4ARABJAFQASQBPAE4AUwANAAoAUABlAHIAbQBpAHMAcwBpAG8AbgAgAGkAcwAgAGgAZQByAGUAYgB5ACAAZwByAGEAbgB0AGUAZAAsACAAZgByAGUAZQAgAG8AZgAgAGMAaABhAHIAZwBlACwAIAB0AG8AIABhAG4AeQAgAHAAZQByAHMAbwBuACAAbwBiAHQAYQBpAG4AaQBuAGcAIABhACAAYwBvAHAAeQAgAG8AZgAgAHQAaABlACAARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAsACAAdABvACAAdQBzAGUALAAgAHMAdAB1AGQAeQAsACAAYwBvAHAAeQAsACAAbQBlAHIAZwBlACwAIABlAG0AYgBlAGQALAAgAG0AbwBkAGkAZgB5ACwAIAByAGUAZABpAHMAdAByAGkAYgB1AHQAZQAsACAAYQBuAGQAIABzAGUAbABsACAAbQBvAGQAaQBmAGkAZQBkACAAYQBuAGQAIAB1AG4AbQBvAGQAaQBmAGkAZQBkACAAYwBvAHAAaQBlAHMAIABvAGYAIAB0AGgAZQAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUALAAgAHMAdQBiAGoAZQBjAHQAIAB0AG8AIAB0AGgAZQAgAGYAbwBsAGwAbwB3AGkAbgBnACAAYwBvAG4AZABpAHQAaQBvAG4AcwA6AA0ACgANAAoAMQApACAATgBlAGkAdABoAGUAcgAgAHQAaABlACAARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAgAG4AbwByACAAYQBuAHkAIABvAGYAIABpAHQAcwAgAGkAbgBkAGkAdgBpAGQAdQBhAGwAIABjAG8AbQBwAG8AbgBlAG4AdABzACwAIABpAG4AIABPAHIAaQBnAGkAbgBhAGwAIABvAHIAIABNAG8AZABpAGYAaQBlAGQAIABWAGUAcgBzAGkAbwBuAHMALAAgAG0AYQB5ACAAYgBlACAAcwBvAGwAZAAgAGIAeQAgAGkAdABzAGUAbABmAC4ADQAKAA0ACgAyACkAIABPAHIAaQBnAGkAbgBhAGwAIABvAHIAIABNAG8AZABpAGYAaQBlAGQAIABWAGUAcgBzAGkAbwBuAHMAIABvAGYAIAB0AGgAZQAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUAIABtAGEAeQAgAGIAZQAgAGIAdQBuAGQAbABlAGQALAAgAHIAZQBkAGkAcwB0AHIAaQBiAHUAdABlAGQAIABhAG4AZAAvAG8AcgAgAHMAbwBsAGQAIAB3AGkAdABoACAAYQBuAHkAIABzAG8AZgB0AHcAYQByAGUALAAgAHAAcgBvAHYAaQBkAGUAZAAgAHQAaABhAHQAIABlAGEAYwBoACAAYwBvAHAAeQAgAGMAbwBuAHQAYQBpAG4AcwAgAHQAaABlACAAYQBiAG8AdgBlACAAYwBvAHAAeQByAGkAZwBoAHQAIABuAG8AdABpAGMAZQAgAGEAbgBkACAAdABoAGkAcwAgAGwAaQBjAGUAbgBzAGUALgAgAFQAaABlAHMAZQAgAGMAYQBuACAAYgBlACAAaQBuAGMAbAB1AGQAZQBkACAAZQBpAHQAaABlAHIAIABhAHMAIABzAHQAYQBuAGQALQBhAGwAbwBuAGUAIAB0AGUAeAB0ACAAZgBpAGwAZQBzACwAIABoAHUAbQBhAG4ALQByAGUAYQBkAGEAYgBsAGUAIABoAGUAYQBkAGUAcgBzACAAbwByACAAaQBuACAAdABoAGUAIABhAHAAcAByAG8AcAByAGkAYQB0AGUAIABtAGEAYwBoAGkAbgBlAC0AcgBlAGEAZABhAGIAbABlACAAbQBlAHQAYQBkAGEAdABhACAAZgBpAGUAbABkAHMAIAB3AGkAdABoAGkAbgAgAHQAZQB4AHQAIABvAHIAIABiAGkAbgBhAHIAeQAgAGYAaQBsAGUAcwAgAGEAcwAgAGwAbwBuAGcAIABhAHMAIAB0AGgAbwBzAGUAIABmAGkAZQBsAGQAcwAgAGMAYQBuACAAYgBlACAAZQBhAHMAaQBsAHkAIAB2AGkAZQB3AGUAZAAgAGIAeQAgAHQAaABlACAAdQBzAGUAcgAuAA0ACgANAAoAMwApACAATgBvACAATQBvAGQAaQBmAGkAZQBkACAAVgBlAHIAcwBpAG8AbgAgAG8AZgAgAHQAaABlACAARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAgAG0AYQB5ACAAdQBzAGUAIAB0AGgAZQAgAFIAZQBzAGUAcgB2AGUAZAAgAEYAbwBuAHQAIABOAGEAbQBlACgAcwApACAAdQBuAGwAZQBzAHMAIABlAHgAcABsAGkAYwBpAHQAIAB3AHIAaQB0AHQAZQBuACAAcABlAHIAbQBpAHMAcwBpAG8AbgAgAGkAcwAgAGcAcgBhAG4AdABlAGQAIABiAHkAIAB0AGgAZQAgAGMAbwByAHIAZQBzAHAAbwBuAGQAaQBuAGcAIABDAG8AcAB5AHIAaQBnAGgAdAAgAEgAbwBsAGQAZQByAC4AIABUAGgAaQBzACAAcgBlAHMAdAByAGkAYwB0AGkAbwBuACAAbwBuAGwAeQAgAGEAcABwAGwAaQBlAHMAIAB0AG8AIAB0AGgAZQAgAHAAcgBpAG0AYQByAHkAIABmAG8AbgB0ACAAbgBhAG0AZQAgAGEAcwAgAHAAcgBlAHMAZQBuAHQAZQBkACAAdABvACAAdABoAGUAIAB1AHMAZQByAHMALgANAAoADQAKADQAKQAgAFQAaABlACAAbgBhAG0AZQAoAHMAKQAgAG8AZgAgAHQAaABlACAAQwBvAHAAeQByAGkAZwBoAHQAIABIAG8AbABkAGUAcgAoAHMAKQAgAG8AcgAgAHQAaABlACAAQQB1AHQAaABvAHIAKABzACkAIABvAGYAIAB0AGgAZQAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUAIABzAGgAYQBsAGwAIABuAG8AdAAgAGIAZQAgAHUAcwBlAGQAIAB0AG8AIABwAHIAbwBtAG8AdABlACwAIABlAG4AZABvAHIAcwBlACAAbwByACAAYQBkAHYAZQByAHQAaQBzAGUAIABhAG4AeQAgAE0AbwBkAGkAZgBpAGUAZAAgAFYAZQByAHMAaQBvAG4ALAAgAGUAeABjAGUAcAB0ACAAdABvACAAYQBjAGsAbgBvAHcAbABlAGQAZwBlACAAdABoAGUAIABjAG8AbgB0AHIAaQBiAHUAdABpAG8AbgAoAHMAKQAgAG8AZgAgAHQAaABlACAAQwBvAHAAeQByAGkAZwBoAHQAIABIAG8AbABkAGUAcgAoAHMAKQAgAGEAbgBkACAAdABoAGUAIABBAHUAdABoAG8AcgAoAHMAKQAgAG8AcgAgAHcAaQB0AGgAIAB0AGgAZQBpAHIAIABlAHgAcABsAGkAYwBpAHQAIAB3AHIAaQB0AHQAZQBuACAAcABlAHIAbQBpAHMAcwBpAG8AbgAuAA0ACgANAAoANQApACAAVABoAGUAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACwAIABtAG8AZABpAGYAaQBlAGQAIABvAHIAIAB1AG4AbQBvAGQAaQBmAGkAZQBkACwAIABpAG4AIABwAGEAcgB0ACAAbwByACAAaQBuACAAdwBoAG8AbABlACwAIABtAHUAcwB0ACAAYgBlACAAZABpAHMAdAByAGkAYgB1AHQAZQBkACAAZQBuAHQAaQByAGUAbAB5ACAAdQBuAGQAZQByACAAdABoAGkAcwAgAGwAaQBjAGUAbgBzAGUALAAgAGEAbgBkACAAbQB1AHMAdAAgAG4AbwB0ACAAYgBlACAAZABpAHMAdAByAGkAYgB1AHQAZQBkACAAdQBuAGQAZQByACAAYQBuAHkAIABvAHQAaABlAHIAIABsAGkAYwBlAG4AcwBlAC4AIABUAGgAZQAgAHIAZQBxAHUAaQByAGUAbQBlAG4AdAAgAGYAbwByACAAZgBvAG4AdABzACAAdABvACAAcgBlAG0AYQBpAG4AIAB1AG4AZABlAHIAIAB0AGgAaQBzACAAbABpAGMAZQBuAHMAZQAgAGQAbwBlAHMAIABuAG8AdAAgAGEAcABwAGwAeQAgAHQAbwAgAGEAbgB5ACAAZABvAGMAdQBtAGUAbgB0ACAAYwByAGUAYQB0AGUAZAAgAHUAcwBpAG4AZwAgAHQAaABlACAARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAuAA0ACgANAAoAVABFAFIATQBJAE4AQQBUAEkATwBOAA0ACgBUAGgAaQBzACAAbABpAGMAZQBuAHMAZQAgAGIAZQBjAG8AbQBlAHMAIABuAHUAbABsACAAYQBuAGQAIAB2AG8AaQBkACAAaQBmACAAYQBuAHkAIABvAGYAIAB0AGgAZQAgAGEAYgBvAHYAZQAgAGMAbwBuAGQAaQB0AGkAbwBuAHMAIABhAHIAZQAgAG4AbwB0ACAAbQBlAHQALgANAAoADQAKAEQASQBTAEMATABBAEkATQBFAFIADQAKAFQASABFACAARgBPAE4AVAAgAFMATwBGAFQAVwBBAFIARQAgAEkAUwAgAFAAUgBPAFYASQBEAEUARAAgACIAQQBTACAASQBTACIALAAgAFcASQBUAEgATwBVAFQAIABXAEEAUgBSAEEATgBUAFkAIABPAEYAIABBAE4AWQAgAEsASQBOAEQALAAgAEUAWABQAFIARQBTAFMAIABPAFIAIABJAE0AUABMAEkARQBEACwAIABJAE4AQwBMAFUARABJAE4ARwAgAEIAVQBUACAATgBPAFQAIABMAEkATQBJAFQARQBEACAAVABPACAAQQBOAFkAIABXAEEAUgBSAEEATgBUAEkARQBTACAATwBGACAATQBFAFIAQwBIAEEATgBUAEEAQgBJAEwASQBUAFkALAAgAEYASQBUAE4ARQBTAFMAIABGAE8AUgAgAEEAIABQAEEAUgBUAEkAQwBVAEwAQQBSACAAUABVAFIAUABPAFMARQAgAEEATgBEACAATgBPAE4ASQBOAEYAUgBJAE4ARwBFAE0ARQBOAFQAIABPAEYAIABDAE8AUABZAFIASQBHAEgAVAAsACAAUABBAFQARQBOAFQALAAgAFQAUgBBAEQARQBNAEEAUgBLACwAIABPAFIAIABPAFQASABFAFIAIABSAEkARwBIAFQALgAgAEkATgAgAE4ATwAgAEUAVgBFAE4AVAAgAFMASABBAEwATAAgAFQASABFACAAQwBPAFAAWQBSAEkARwBIAFQAIABIAE8ATABEAEUAUgAgAEIARQAgAEwASQBBAEIATABFACAARgBPAFIAIABBAE4AWQAgAEMATABBAEkATQAsACAARABBAE0AQQBHAEUAUwAgAE8AUgAgAE8AVABIAEUAUgAgAEwASQBBAEIASQBMAEkAVABZACwAIABJAE4AQwBMAFUARABJAE4ARwAgAEEATgBZACAARwBFAE4ARQBSAEEATAAsACAAUwBQAEUAQwBJAEEATAAsACAASQBOAEQASQBSAEUAQwBUACwAIABJAE4AQwBJAEQARQBOAFQAQQBMACwAIABPAFIAIABDAE8ATgBTAEUAUQBVAEUATgBUAEkAQQBMACAARABBAE0AQQBHAEUAUwAsACAAVwBIAEUAVABIAEUAUgAgAEkATgAgAEEATgAgAEEAQwBUAEkATwBOACAATwBGACAAQwBPAE4AVABSAEEAQwBUACwAIABUAE8AUgBUACAATwBSACAATwBUAEgARQBSAFcASQBTAEUALAAgAEEAUgBJAFMASQBOAEcAIABGAFIATwBNACwAIABPAFUAVAAgAE8ARgAgAFQASABFACAAVQBTAEUAIABPAFIAIABJAE4AQQBCAEkATABJAFQAWQAgAFQATwAgAFUAUwBFACAAVABIAEUAIABGAE8ATgBUACAAUwBPAEYAVABXAEEAUgBFACAATwBSACAARgBSAE8ATQAgAE8AVABIAEUAUgAgAEQARQBBAEwASQBOAEcAUwAgAEkATgAgAFQASABFACAARgBPAE4AVAAgAFMATwBGAFQAVwBBAFIARQAuAAAAAgAAAAAAAP8GAGQAAAAAAAAAAAAAAAAAAAAAAAAAAABfAAMABAAFAAYABwAIAAkACgALAAwADQAOAA8AEAARABIAEwAUABUAFgAXABgAGQAaABsAHAAdAB4AHwAgACEAIgAjACQAJQAmACcAKAApACoAKwAsAC0ALgAvADAAMQAyADMANAA1ADYANwA4ADkAOgA7ADwAPQA+AD8AQABBAEIAQwBEAEUARgBHAEgASQBKAEsATABNAE4ATwBQAFEAUgBTAFQAVQBWAFcAWABZAFoAWwBcAF0AXgBfAGAAYQAAAAMACAACABAAAf//AAIAAAABAAAAAAABAAAADgAAAAAAAAAAAAIAAQAAAF4AAQABAAAACgBKAGQAAmN5cmwADmxhdG4AGAAEAAAAAP//AAAAEAACSVBBIAAaVklUIAAiAAD//wACAAEAAAAA//8AAQABAAD//wAAAAJrZXJuAA5tYXJrABQAAAABAAEAAAABAAAAAgAGAA4ABAAEAAEAEAACAAAAAQAsAAEADAAQAAAAIAAiAAIAAAABAAYAIQAyADYAQQBSAFYAAAAGAAEAjgAEAAAABgAWADAASgBkAHIAgAAGAA7/nAAhADYAQQA2ADIADQA2//IAUgAXAAYADv+cACEAWABBAFgAMgChADYAvQBSAE8ABgAO/nAAIf6TAEH+kwAy//kANgAOAFL/YQADAA7/nABSABcAVv/VAAMADv+cAFIANgBWAEwAAwAO/nAAUgAJAFYAGQABAAYAIQAyADYAQQBSAFYAAQAAAAoATgBoAAJjeXJsAA5sYXRuABoABAAAAAD//wABAAAAEAACSVBBIAAaVklUIAAiAAD//wACAAAAAQAA//8AAQAAAAD//wABAAAAAmFhbHQADnNtY3AAFAAAAAEAAAAAAAEAAAABAAQAAwAAAAEACAABABgAAwAMABAAFAABAEEAAQBSAAEAVgABAAMAIQAyADYAAA=="

/***/ }
/******/ ])
});
;
//# sourceMappingURL=exsurge.js.map