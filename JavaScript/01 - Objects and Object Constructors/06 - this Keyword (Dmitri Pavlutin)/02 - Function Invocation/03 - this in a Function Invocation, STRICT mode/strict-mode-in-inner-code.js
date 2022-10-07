function execute() {
  'use strict';
  function concat(str1, str2) {
    // the strict mode is enabled too
    console.log(this === undefined); // => true
    return str1 + str2;
  }
  // concat() is invoked as a function in strict mode
  // this in concat() is undefined
  concat('Hello', ' World!'); // => "Hello World!"
}
execute();