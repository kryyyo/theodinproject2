
// invoked as constructors
const reg1 = new RegExp('\\w+');

// invoked as functions
const reg2 = RegExp('\\w+');

reg1 instanceof RegExp; // => true
reg2 instanceof RegExp; // => true
reg1.source === reg2.source; // => true

