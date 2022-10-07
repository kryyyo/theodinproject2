let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();

// rabbit receives the full property

/**
 * Property lookup and execution are two different things.
 * 
 * The method rabbit.eat is first found in the prototype,
 * then executed with this=rabbit.
 */