function hello(name) {
  return 'Hello ' + name + '!';
}

// Function invocation
// const message = hello('World');

// IIFE
const message = (function (name) {
  return 'Hello ' + name + '!';
})('World');