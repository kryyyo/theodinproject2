const myObject = {
  // helloMethod is a method
  helloMethod: function() {
    return 'Hello World!';
  }
};

const message = myObject.helloMethod();

const words = ['Hello', 'World'];
words.join(', ');   // method invocation
const obj = {
  myMethod() {
    return new Date().toString();
  }
};
obj.myMethod();     // method invocation
const func = obj.myMethod;
func();             // function invocation
parseFloat('16.6'); // function invocation
isNaN(0);           // function invocation