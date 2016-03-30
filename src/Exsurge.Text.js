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

/**
 * @class
 */
export class Language {
  constructor(name) {
    this.name = (typeof name !== 'undefined') ? name : "<unknown>";
  }

  /**
   * @param {String} text The string to parsed into words.
   * @return {Word[]} the resulting parsed words from syllabification
   */
  syllabify(text) {

    var parsedWords = [];

    if (typeof text === 'undefined' || text === "")
      return parsedWords;

    // Divide the text into words separated by whitespace
    var words = text.split(/[\s]+/);

    for (var i = 0, end = words.length; i < end; i++)
      parsedWords.push(this.syllabifyWord(words[i]));

    return parsedWords;
  }
}

/**
 * @class
 */
export class Latin extends Language {

  /**
   * @constructs
   */
  constructor() {
    super("Latin");

    // fixme: ui is only diphthong in the exceptional cases below (according to Wheelock's Latin)
    this.diphthongs = ["ae", "au", "oe", "aé", "áu", "oé"];
    // for centering over the vowel, we will need to know any combinations that might be diphthongs:
    this.possibleDiphthongs = this.diphthongs.concat(["ei", "eu", "ui", "éi", "éu", "úi"]);

    // some words that are simply exceptions to standard syllabification rules!
    var wordExceptions = new Object();

    // ui combos pronounced as diphthongs
    wordExceptions["huius"] = ["hui", "us"];
    wordExceptions["cuius"] = ["cui", "us"];
    wordExceptions["huic"] = ["huic"];
    wordExceptions["cui"] = ["cui"];
    wordExceptions["hui"] = ["hui"];
    
    // eu combos pronounced as diphthongs
    wordExceptions["euge"] = ["eu", "ge"];
    wordExceptions["seu"] = ["seu"];

    this.vowels = ['a', 'e', 'i', 'o', 'u',
                   'á', 'é', 'í', 'ó', 'ú',
                   'æ', 'œ',
                   'ǽ',  // no accented œ in unicode?
                   'y']; // y is treated as a vowel; not native to Latin but useful for words borrowed from Greek

    this.vowelsThatMightBeConsonants = ['i','u'];

    this.muteConsonantsAndF = ['b', 'c', 'd', 'g', 'p', 't', 'f'];

    this.liquidConsonants = ['l', 'r'];
  }

  // c must be lowercase!
  isVowel(c) {
    for (var i = 0, end = this.vowels.length; i < end; i++)
      if (this.vowels[i] === c)
        return true;

    return false;
  }

  isVowelThatMightBeConsonant(c) {
    for (var i = 0, end = this.vowelsThatMightBeConsonants.length; i < end; i++)
      if (this.vowelsThatMightBeConsonants[i] === c)
        return true;

    return false;
  }
  
  // substring should be a vowel and the character following
  isVowelActingAsConsonant(substring) {
    return this.isVowelThatMightBeConsonant(substring[0]) && this.isVowel(substring[1]);
  }

  /**
   * f is not a mute consonant, but we lump it together for syllabification
   * since it is syntactically treated the same way
   *
   * @param {String} c The character to test; must be lowercase
   * @return {boolean} true if c is an f or a mute consonant
   */
  isMuteConsonantOrF(c) {
    for (var i = 0, end = this.muteConsonantsAndF.length; i < end; i++)
      if (this.muteConsonantsAndF[i] === c)
        return true;

    return false;
  }

  /**
   *
   * @param {String} c The character to test; must be lowercase
   * @return {boolean} true if c is a liquid consonant
   */
  isLiquidConsonant(c) {
    for (var i = 0, end = this.liquidConsonants.length; i < end; i++)
      if (this.liquidConsonants[i] === c)
        return true;

    return false;
  }

  /**
   *
   * @param {String} s The string to test; must be lowercase
   * @return {boolean} true if s is a diphthong
   */
  isDiphthong(s) {
    for (var i = 0, end = this.diphthongs.length; i < end; i++)
      if (this.diphthongs[i] === s)
        return true;

    return false;
  }

  /**
   *
   * @param {String} s The string to test; must be lowercase
   * @return {boolean} true if s is a diphthong
   */
  isPossibleDiphthong(s) {
    for (var i = 0, end = this.possibleDiphthongs.length; i < end; i++)
      if (this.possibleDiphthongs[i] === s)
        return true;

    return false;
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
  syllabifyWord(word) {
    var syllables = [];
    var haveCompleteSyllable = false;
    var previousWasVowel = false;
    var workingString = word.toLowerCase();
    var startSyllable = 0;

    var c, lookahead, haveLookahead;

    // a helper function to create syllables
    var makeSyllable = function (length) {
      if (haveCompleteSyllable) {
        syllables.push(word.substr(startSyllable, length));
        startSyllable += length;
      }

      haveCompleteSyllable = false;
    }

    for (var i = 0, wordLength = workingString.length; i < wordLength; i++) {

      c = workingString[i];

      // get our lookahead in case we need them...
      lookahead = '*';
      haveLookahead = (i + 1) < wordLength;

      if (haveLookahead)
        lookahead = workingString[i + 1];

      var cIsVowel = this.isVowel(c);

      // i is a special case for a vowel. when i is at the beginning
      // of the word (Iesu) or i is between vowels (alleluia),
      // then the i is treated as a consonant (y)
      if (c === 'i') {
        if (i === 0 && haveLookahead && this.isVowel(lookahead))
          cIsVowel = false;
        else if (previousWasVowel && haveLookahead && this.isVowel(lookahead)) {
          cIsVowel = false;
        }
      }

      if (c === '-') {

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

        if ((c === 'q' && lookahead === 'u') ||
            (lookahead === 'h' && (c === 'c' || c === 'p' || c === 't'))) {
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
    if (haveCompleteSyllable)
      syllables.push(word.substr(startSyllable));
    else if (startSyllable > 0)
      syllables[syllables.length - 1] += word.substr(startSyllable);

    return syllables;
  }

  /**
   * @param {String} s the string to search
   * @param {Number} startIndex The index at which to start searching for a vowel in the string
   * @retuns a custom class with three properties: {found: (true/false) startIndex: (start index in s of vowel segment) length ()}
   */
  findVowelSegment(s, startIndex) {

    var i, end, index;
    var workingString = s.toLowerCase();

    // do we have a diphthong?
    for (i = 0, end = this.possibleDiphthongs.length; i < end; i++) {
      var d = this.possibleDiphthongs[i];
      index = workingString.indexOf(d, startIndex);

      if (index >= 0)
        return { found: true, startIndex: index, length: d.length };
    }

    // no diphthongs. Let's look for single vowels then...
    for (i = 0, end = this.vowels.length; i < end; i++) {
      index = workingString.indexOf(this.vowels[i], startIndex);

      if (index >= 0) {
        // if the first vowel found might also be a consonant (U or I), and it is immediately followed by another vowel, (e.g., sanguis, quis), the first u counts as a consonant:
        // (in practice, this only affects words such as equus that contain a uu, since the alphabetically earlier vowel would be found before the U)
        if(this.isVowelActingAsConsonant(workingString.substr(index, 2))) {
          ++index;
        }
        return { found: true, startIndex: index, length: 1 };
      }
    }

    // no vowels sets found after startIndex!
    return { found: false, startIndex: -1, length: -1 };
  }
}


/**
 * @class
 */
export class Spanish extends Language {

  constructor() {
    super("Spanish");

    this.vowels = ['a', 'e', 'i', 'o', 'u', 'y',
                    'á', 'é', 'í', 'ó', 'ú', 'ü'];

    this.weakVowels = ['i', 'u', 'ü', 'y'];

    this.strongVowels = ['a', 'e', 'o', 'á', 'é', 'í', 'ó', 'ú'];


    this.diphthongs = ["ai", "ei", "oi", "ui", "ia", "ie", "io", "iu", "au", "eu", "ou", "ua", "ue", "uo",
                       "ái", "éi", "ói", "úi", "iá", "ié", "ió", "iú", "áu", "éu", "óu", "uá", "ué", "uó",
                       "üe", "üi"];

    this.uDiphthongExceptions = ["gue", "gui", "qua", "que", "qui", "quo"];
  }

  // c must be lowercase!
  isVowel(c) {
    for (var i = 0, end = this.vowels.length; i < end; i++)
      if (this.vowels[i] === c)
        return true;

    return false;
  }

  /**
   * @param {String} c The character to test; must be lowercase
   * @return {boolean} true if c is an f or a mute consonant
   */
  isWeakVowel(c) {
    for (var i = 0, end = this.weakVowels.length; i < end; i++)
      if (this.weakVowels[i] === c)
        return true;

    return false;
  }

  /**
   * @param {String} c The character to test; must be lowercase
   * @return {boolean} true if c is an f or a mute consonant
   */
  isStrongVowel(c) {
    for (var i = 0, end = this.strongVowels.length; i < end; i++)
      if (this.strongVowels[i] === c)
        return true;

    return false;
  }

  /**
   *
   * @param {String} s The string to test; must be lowercase
   * @return {boolean} true if s is a diphthong
   */
  isDiphthong(s) {
    for (var i = 0, end = this.diphthongs.length; i < end; i++)
      if (this.diphthongs[i] === s)
        return true;

    return false;
  }

  createSyllable(text) {

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
  syllabifyWord(word) {

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
          if (word[i] === '-') {
            // start new syllable
            syllables.push(this.createSyllable(word.substr(startSyllable, i - startSyllable)));
            startSyllable = ++i;
          } else {

            var numberOfConsonants = 1, consonant2;

            // count how many more consonants there are
            for (j = i + 1; j < word.length; j++) {
              if (this.isVowel(word[j]))
                break;
              numberOfConsonants++;
            }

            if (numberOfConsonants === 1) {
              // start new syllable
              syllables.push(this.createSyllable(word.substr(startSyllable, i - startSyllable)));
              startSyllable = i;

            } else if (numberOfConsonants === 2) {
              consonant2 = word[i + 1].toLowerCase();
              if (consonant2 === 'l' || consonant2 === 'r' || (c === 'c' && consonant2 === 'h')) {
                // split before the consonant pair
                syllables.push(this.createSyllable(word.substr(startSyllable, i - startSyllable)));
                startSyllable = i++;
              } else {
                //split the consonants
                syllables.push(this.createSyllable(word.substr(startSyllable, ++i - startSyllable)));
                startSyllable = i;
              }

            } else if (numberOfConsonants === 3) {
              consonant2 = word[i + 1].toLowerCase();

              // if second consonant is s, divide cc-c, otherwise divide c-cc
              if (consonant2 === 's') {
                i += 2;
                syllables.push(this.createSyllable(word.substr(startSyllable, i - startSyllable)));
              } else
                syllables.push(this.createSyllable(word.substr(startSyllable, ++i - startSyllable)));

              startSyllable = i;

            } else if (numberOfConsonants === 4) {
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
    if (haveCompleteSyllable)
      syllables.push(word.substr(startSyllable));
    else if (startSyllable > 0)
      syllables[syllables.length - 1] += word.substr(startSyllable);
    else if (syllables.length === 0)
      syllables.push(this.createSyllable(word))

    return syllables;
  }

  /**
   * @param {String} s the string to search
   * @param {Number} startIndex The index at which to start searching for a vowel in the string
   * @retuns a custom class with three properties: {found: (true/false) startIndex: (start index in s of vowel segment) length ()}
   */
  findVowelSegment(s, startIndex) {

    var i, end, index;
    var workingString = s.toLowerCase();

    // do we have a diphthongs?
    for (i = 0, end = this.diphthongs.length; i < end; i++) {
      var d = this.diphthongs[i];
      index = workingString.indexOf(d, startIndex);

      if (index >= 0) {

        // check the exceptions...
        if (d[0] === 'u' && index > 0) {
          var tripthong = s.substr(index - 1, 3).toLowerCase();

          for (j = 0, endj = this.uDiphthongExceptions.length; i < endj; j++) {
            if (tripthong === this.uDiphthongExceptions[j]) {
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

      if (index >= 0)
        return { found: true, startIndex: index, length: 1 };
    }

    // no vowels sets found after startIndex!
    return { found: false, startIndex: -1, length: -1 };
  }
}