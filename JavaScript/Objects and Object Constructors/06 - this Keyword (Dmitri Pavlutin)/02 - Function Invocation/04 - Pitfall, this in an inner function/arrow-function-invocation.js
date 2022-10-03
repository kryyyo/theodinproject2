const numbers = {
  numberA: 5,
  numberB: 10,
  sum: function() {
    console.log(this === numbers); // => true

    const calculate = () => {
      console.log(this === numbers); // => true
      return this.numberA + this.numberB;
    }

    return calculate();
  }
};

numbers.sum(); // => 15