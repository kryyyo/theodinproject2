const myDog = Object.create({
  sayName() {
    console.log(this === myDog); // => true
    return this.name;
  }
});
myDog.name = 'Milo';

// method invocation. this is myDog
myDog.sayName(); // => 'Milo'