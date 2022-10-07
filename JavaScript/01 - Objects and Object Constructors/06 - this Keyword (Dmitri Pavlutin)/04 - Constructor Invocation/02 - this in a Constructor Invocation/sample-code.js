function Foo () {
  // this is fooInstance
  this.property = 'Default Value';
}

// Constructor invocation
const fooInstance = new Foo();
fooInstance.property; // => 'Default Value'