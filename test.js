const assert = require('assert');
const sum = require('./index');
// 1. require rooster javascript file and set to variable
const rooster = require('./rooster');

describe('sum', function() {
  it('should return 3 when passed 1 and 2', function() {
    result = sum(1, 2);

    assert.equal(result, 3);
  });

  it('should return 0 when passed 0 and 0', function() {
    assert.equal(sum(0, 0), 0);
  });

  it('should return -1 when passed 0 and -1', function() {
    result = sum(0, -1);
    assert.ok(result === -1);
  });
});

// 2. define a describe function with a callback - Check javascript_test_explanation.md on how to do this
describe('rooster', function(){
// 3. define a test using it('shows the hour') to test timeAtDawn function
  it('shows the hour', function(){
      // 4. define rooster.timeAtDawn(12) and set equal to variable
      let timeAtDawn = rooster.timeAtDawn(12);
      // 5. use assert.equal to determine if the variable from Step 4 is equal to '12'
      assert.equal(timeAtDawn, '12');
  // 6. run the test using npm test -- --grep 'shows the hour'
  });

  // 7. define a test using it('throws an error when incorrect hour given')
  it('throws an error when incorrect hour given', function(){
    // 8. copy this code: assert.throws(() => rooster.timeAtDawn(27), RangeError); 
    assert.throws(() => rooster.timeAtDawn(27), RangeError);
  // 9. run this test using npm test -- --grep 'throws an error when incorrect hour given'

  });
// 10. define a test using it('.announceDawn') that will return a morning rooster call

  it('.announceDawn', function(){
    // 11. call the annouceDawn function
    let announce = rooster.announceDawn();  
    // 12. assert 'moo!' is returned
    assert.equal(announce, 'moo!');
    // 13. run the test: npm test -- --grep '.announceDawn'
  });

});