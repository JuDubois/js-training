'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

const cutFirst = (str) => str.substr(2);
const cutLast = (str) => str.substr(0, str.length -2);
const cutFirstLast = (str) => str.substr(2, str.length -4);


//* Begin of tests
const assert = require('assert')

assert.strictEqual(cutFirst("hello"), "llo")
assert.strictEqual(cutLast("hello"), "hel")
assert.strictEqual(cutFirstLast("hello"), "l")
// End of tests */
