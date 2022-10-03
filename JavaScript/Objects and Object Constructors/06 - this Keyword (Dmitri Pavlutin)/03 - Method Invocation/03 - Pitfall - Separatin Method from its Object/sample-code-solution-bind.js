function Pet(type, legs) {
  this.type = type;
  this.legs = legs;
  this.logInfo = function() {
    console.log(this === myCat); // => true
    console.log(`The ${this.type} has ${this.legs} legs`);
  };
}
const myCat = new Pet('Cat', 4);
// Create a bound function
const boundLogInfo = myCat.logInfo.bind(myCat);
// logs "The Cat has 4 legs"
setTimeout(boundLogInfo, 1000);