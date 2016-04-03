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

export var Units = {
  // enums
  DeviceIndepenedent: 0, // device independent units: 96/inch
  Centimeters: 1,
  Millimeters: 2,
  Inches: 3,

  // constants for device independent units (diu)
  DIU_PER_INCH: 96,
  DIU_PER_CENTIMETER: 96 / 2.54,

  ToDeviceIndependent: function (n, inputUnits) {
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

  FromDeviceIndependent: function (n, outputUnits) {
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


  StringToUnitsType: function(s) {
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

  UnitsTypeToString: function(units) {
    switch (units) {
      case Inches: return "in";
      case Centimeters: return "cm";
      case Millimeters: return "mm";
      case DeviceIndepenedent: return "device-independent";
      default: return "device-independent";
    }
  }
}

export function DeviceIndependent(n) {
  return n;
}

export function Centimeters(n) {
  return Units.ToDeviceIndependent(n, Units.Centimeters);
}

export function Millimeters(n) {
  return Units.ToDeviceIndependent(n, Units.Millimeters);
}

export function Inches(n) {
  return Units.ToDeviceIndependent(n, Units.Inches);
}

export function ToCentimeters(n) {
  return Units.FromDeviceIndependent(n, Units.Centimeters);
}

export function ToMillimeters(n) {
  return Units.FromDeviceIndependent(n, Units.Millimeters);
}

export function ToInches(n) {
  return Units.FromDeviceIndependent(n, Units.Inches);
}


/*
 * Point
 */
export class Point {
  constructor(x, y) {
    this.x = (typeof x !== 'undefined') ? x : 0;
    this.y = (typeof y !== 'undefined') ? y : 0;
  }

  clone() {
    return new Point(this.x, this.y);
  }

  equals(point) {
    return this.x === point.x && this.y === point.y;
  }
}

/*
 * Rect
 */
export class Rect {
  constructor(x, y, width, height) {
    this.x = (typeof x !== 'undefined') ? x : Infinity;
    this.y = (typeof y !== 'undefined') ? y : Infinity;
    this.width = (typeof width !== 'undefined') ? width : -Infinity;
    this.height = (typeof height !== 'undefined') ? height : -Infinity;
  }

  clone() {
    return new Rect(this.x, this.y, this.width, this.height);
  }

  isEmpty() {
    return (this.x === Infinity &&
            this.y === Infinity &&
            this.width === -Infinity &&
            this.height === -Infinity);
  }

  // convenience method
  right() {
    return this.x + this.width;
  }

  bottom() {
    return this.y + this.height;
  }

  equals(rect) {
    return this.x === rect.x && this.y === rect.y &&
           this.width === rect.width && this.height === rect.height;
  }

  // other can be a Point or a Rect
  contains(other) {
    if (other instanceof Point) {
      return other.x >= this.x &&
              other.x <= this.x + this.width &&
              other.y >= this.y &&
              other.y <= this.y + this.height;
    } else { // better be instance of Rect
      return this.x <= other.x &&
              this.x + this.width >= other.x + other.width &&
              this.y <= other.y &&
              this.y + this.height >= other.y + other.height;
    }
  }

  union(rect) {

    var right = Math.max(this.x + this.width, rect.x + rect.width);
    var bottom = Math.max(this.y + this.height, rect.y + rect.height);

    this.x = Math.min(this.x, rect.x);
    this.y = Math.min(this.y, rect.y);

    this.width = right - this.x;
    this.height = bottom - this.y;
  }
}

/**
 * Margins
 *
 * @class
 */
export class Margins {
  constructor(left, top, right, bottom) {
    this.left = (typeof left !== 'undefined') ? left : 0;
    this.top = (typeof top !== 'undefined') ? top : 0;
    this.right = (typeof right !== 'undefined') ? right : 0;
    this.bottom = (typeof bottom !== 'undefined') ? bottom : 0;
  }

  clone() {
    return new Margins(this.left, this.top, this.right, this.bottom);
  }

  equals(margins) {
    return this.left === margins.left &&
        this.top === margins.top &&
        this.right === margins.right &&
        this.bottom === margins.bottom;
  }
}

/**
 * Size
 *
 * @class
 */
export class Size {
  constructor(width, height) {
    this.width = (typeof width !== 'undefined') ? width : 0;
    this.height = (typeof height !== 'undefined') ? height : 0;
  }

  clone() {
    return new Size(this.width, this.height);
  }

  equals(size) {
    return this.width === size.width && this.height === size.height;
  }
}


/*
 * Pitches, notes
 */
export var Step = {
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


export class Pitch {
  constructor(step, octave) {
    this.step = step;
    this.octave = octave;
  }
  
  toInt() {
    return this.octave * 12 + this.step;
  }

  isHigherThan(pitch) {
    return this.toInt() > pitch.toInt();
  }

  isLowerThan(pitch) {
    return this.toInt() < pitch.toInt();
  }

  equals(pitch) {
    return this.toInt() === pitch.toInt();
  }

  static stepToStaffOffset(step) {
    return __StepToStaffPosition[step];
  }

  static staffOffsetToStep(offset) {
    while (offset < 0)
      offset = __StaffOffsetToStep.length + offset;

    return __StaffOffsetToStep[offset % __StaffOffsetToStep.length];
  }
}

export function generateRandomGuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4();
}