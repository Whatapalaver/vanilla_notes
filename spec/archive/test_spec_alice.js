
// (function(exports) {
//   function testCircleRadiusDefaultsTo10() {
//     var circle = new Circle();
//     assert.isTrue(circle.radius === 1)
//   }

//   testCircleRadiusDefaultsTo10();
// })(this);

var testArray = [

  function DoesOneAndOneEqualTwo(){
    var test1 = 1 + 1;
    assert(test1 === 2);
  },

  function DoesTwoAndOneEqualTwo(){
    var test2 = 2 + 1;
    assert(test2 === 2);
  }

];

runAndDisplayTests(testArray);