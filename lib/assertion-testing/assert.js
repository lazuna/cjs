/*
 Assert 
	Class: assert.AssertionError
		new assert.AssertionError(options)
	Strict mode
	Legacy mode
	assert(value[, message])
	assert.deepEqual(actual, expected[, message])
		Comparison details
	assert.deepStrictEqual(actual, expected[, message])
		Comparison details
	assert.doesNotMatch(string, regexp[, message])
	assert.doesNotReject(asyncFn[, error][, message])
	assert.doesNotThrow(fn[, error][, message])
	assert.equal(actual, expected[, message])
	assert.fail([message])
	assert.fail(actual, expected[, message[, operator[, stackStartFn]]]) - deprecated
	assert.ifError(value)
	assert.match(string, regexp[, message])
	assert.notDeepEqual(actual, expected[, message])
	assert.notDeepStrictEqual(actual, expected[, message])
	assert.notEqual(actual, expected[, message])
	assert.notStrictEqual(actual, expected[, message])
	assert.ok(value[, message])
	assert.rejects(asyncFn[, error][, message])
	assert.strictEqual(actual, expected[, message])
	assert.throws(fn[, error][, message])

Assert: The assert module provides a set of assertion functions for verifying invariants. The module provides a recommended strict mode and a more lenient legacy mode.

Example:

*/

const assert = require('assert');

// Generate an AssertionError to compare the error message later:
const { message } = new assert.AssertionError({
  actual: 1,
  expected: 2,
  operator: 'strictEqual'
});

// Verify error output:
try {
  assert.strictEqual(1, 2);
} catch (err) {
  assert(err instanceof assert.AssertionError);
  assert.strictEqual(err.message, message);
  assert.strictEqual(err.name, 'AssertionError');
  assert.strictEqual(err.actual, 1);
  assert.strictEqual(err.expected, 2);
  assert.strictEqual(err.code, 'ERR_ASSERTION');
  assert.strictEqual(err.operator, 'strictEqual');
  assert.strictEqual(err.generatedMessage, true);
}
