const numbers = {
  array: [3, 5, 10],

  getNumbers() {
    return this.array;
  }
};

// Create a bound function
const boundGetNumbers = numbers.getNumbers.bind(numbers);
boundGetNumbers(); // => [3, 5, 10]

// Extract method from object
const simpleGetNumbers = numbers.getNumbers;
simpleGetNumbers(); // => undefined or throws an error in strict mode


