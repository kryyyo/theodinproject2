function Pet(type, legs) {
  this.type = type;
  this.legs = legs;

  this.logInfo = () => {
    console.log(this === myCat); // => true
    console.log(`The ${this.type} has ${this.legs} legs`);
  };
}

const myCat = new Pet('Cat', 4);
// logs "The Cat has 4 legs"
setTimeout(myCat.logInfo, 1000);