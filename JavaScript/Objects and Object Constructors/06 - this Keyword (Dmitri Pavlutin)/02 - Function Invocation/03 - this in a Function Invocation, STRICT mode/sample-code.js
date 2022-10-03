function multiply(a, b) {
  'use strict'; // enable the strict mode
  console.log(this === undefined); // => true
  return a * b;
}

// multiply() function invocation with strict mode enabled
// this in multiply() is undefined
multiply(2, 5); // => 10