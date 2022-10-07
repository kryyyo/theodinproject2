function multiply(number) {
  'use strict';
  return this * number;
}

// create a bound function with context
const double = multiply.bind(2);
// invoke the bound function
double(3); // => 6
double(10); // => 20


