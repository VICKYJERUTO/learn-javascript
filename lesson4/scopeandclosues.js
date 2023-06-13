function outerFunction() {
    var outerVariable = 'I am from the outer function';
    function innerFunction()
     {
      var innerVariable = 'I am from the inner function';
      console.log(outerVariable);
      console.log(innerVariable);
    }
    return innerFunction;
  }
  var closure = outerFunction();
  closure();