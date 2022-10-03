function PrintStuff(myDocuments) {
  this.documents = myDocuments;
}

// Adding print() method to the PrintStuff prototype property
PrintStuff.prototype.print = function() {
  console.log(this.documents);
}

// Instantiation of PrintStuff
const newObject = new PrintStuff("I am a new Object and I can print.");

// Try accessing print function
newObject.print(); 