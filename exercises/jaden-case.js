'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
const jadenCase = (s) => s.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );


//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase("How are you ?"), "How Are You ?")

// End of tests */
