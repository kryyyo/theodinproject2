function sum(number1, number2) {
  return number1 + number2;
}

sum.call(undefined, 10, 2);    // => 12
sum.apply(undefined, [10, 2]); // => 12


