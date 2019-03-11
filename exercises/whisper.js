'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

const whisper = (str) => str.toLowerCase();

//* Begin of tests
const assert = require('assert')

assert.strictEqual(whisper("How"), "how")
assert.strictEqual(whisper("HOW"), "how")

// End of tests */
