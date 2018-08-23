(function(exports) {

  function testCircleRadiusDefaultsTo10() {
    var circle = new Circle();
    assert.isTrue("Circle Radius Defaults To 10", circle.radius === 10);
  }
  
  function DoesOneAndOneEqualTwo() {
    var test1 = 1 + 1;
    assert.isTrue('Does One And One Equal Two', test1 === 2);
  }

  function isTwoLessThanOne() {
    var two = 2
    var one = 1
    assert.isTrue('is Two Less Than One', two < one);
  }

  testCircleRadiusDefaultsTo10();
  DoesOneAndOneEqualTwo();
  isTwoLessThanOne();


})(this);