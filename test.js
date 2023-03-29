const assert = require('assert');
// const sum will remain uncommented out
const sum = require('./index');

// give them this but add their own name in between the strings?
describe('sum', function() {
  it('should return 3 when passed 1 and 2', function() {
    assert.equal(sum(1, 2), 3);
  });

  it('should return 0 when passed 0 and 0', function() {
    assert.equal(sum(0, 0), 0);
  });

  it('should return -1 when passed 0 and -1', function() {
    assert.equal(sum(0, -1), -1);
  });
});
