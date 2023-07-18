const assert = require('assert');
const regex = require('../index.js');


assert.strictEqual(regex.alphabet("cat"), true, 'one');

assert.strictEqual(regex.alphabet("what"), true, 'two');

assert.strictEqual(regex.alphabet("hello"), false, 'three');

assert.strictEqual(regex.alphabet("THAT"), false, 'four');

assert.strictEqual(regex.numbers("19%"), true, 'five');

assert.strictEqual(regex.numbers("300%"), true, 'six');

assert.strictEqual(regex.numbers("%"), false, 'seven');

assert.strictEqual(regex.numbers("0%"), false, 'eight');
