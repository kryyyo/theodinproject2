const numbers = [1, 2];

(function() { 
  const get = () => {
    console.log(this === numbers); // => true
    return this;
  };
  
  console.log(this === numbers); // => true
  get(); // => [1, 2]
  
  // Try to change arrow function context manually
  get.call([0]);  // => [1, 2]
  get.apply([0]); // => [1, 2]
  
  get.bind([0])(); // => [1, 2]
}).call(numbers);



