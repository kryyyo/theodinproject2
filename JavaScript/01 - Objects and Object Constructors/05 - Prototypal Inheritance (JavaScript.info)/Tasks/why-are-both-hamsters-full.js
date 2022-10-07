let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // apple

/**
 * my answer
 
 using push method of the stomach array points the reference to hamster
 prototype again rather than the object itself
 
 */


//
/**
* more elaborate answer

The method speedy.eat is found in the prototype (=hamster),
then executed with this=speedy (the object before the dot).

Then this.stomach.push() needs to find stomach property and call push on it.
It looks for stomach in this (=speedy), but nothing found.

Then it follows the prototype chain and finds stomach in hamster.

Then it calls push on it, adding the food into the stomach of the prototype.

So all hamsters share a single stomach!

 */