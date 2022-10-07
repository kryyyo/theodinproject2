// Also we can totally avoid the problem by making sure that each hamster has their own stomach:

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster,
  stomach: []
};

let lazy = {
  __proto__: hamster,
  stomach: []
};

// Speedy one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// Lazy one's stomach is empty
alert( lazy.stomach ); // <nothing>



/**
 * As a common solution,
 * all properties that describe the state of a particular object,
 * like stomach above, should be written into that object itself.
 */