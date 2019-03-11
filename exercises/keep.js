'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

 const keepFirst = (str) => str.substr(0, 2);
 const keepLast = (str) => str.substr(str.length -2, str.length);
 const keepFirstLast = (str) => str.substr(3, 2);

//* Begin of tests
const assert = require('assert')

assert.strictEqual(keepFirst("helloworld"), "he")
assert.strictEqual(keepLast("helloworld"), "ld")
assert.strictEqual(keepFirstLast("helloworld"), "lo")
// End of tests */
