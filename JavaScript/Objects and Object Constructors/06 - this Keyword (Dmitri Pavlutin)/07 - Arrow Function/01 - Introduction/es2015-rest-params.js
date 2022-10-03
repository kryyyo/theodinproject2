const sumArguments = (...args) => {
  console.log(typeof arguments); // => 'undefined'
  return args.reduce((result, item) => result + item);
};

sumArguments.name      // => ''
sumArguments(5, 5, 6); // => 16


