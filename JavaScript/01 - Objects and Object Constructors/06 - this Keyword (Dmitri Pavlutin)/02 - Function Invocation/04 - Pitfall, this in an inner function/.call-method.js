const numbers = {
  numberA: 5,
  numberB: 10,
  sum: function() {
    console.log(this === numbers); // => true

    function calculate() {
      console.log(this === numbers); // => true
      return this.numberA + this.numberB;
    }

    // use .call() method to modify the context
    return calculate.call(this);
  }
};

numbers.sum(); // => 15