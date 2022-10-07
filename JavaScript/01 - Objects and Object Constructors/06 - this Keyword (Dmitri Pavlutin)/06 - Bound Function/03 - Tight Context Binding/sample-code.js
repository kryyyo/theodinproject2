function getThis() {
  'use strict';
  return this;
}

const one = getThis.bind(1);

one();         // => 1

one.call(2);   // => 1
one.apply(2);  // => 1
one.bind(2)(); // => 1

new one();     // => Object



