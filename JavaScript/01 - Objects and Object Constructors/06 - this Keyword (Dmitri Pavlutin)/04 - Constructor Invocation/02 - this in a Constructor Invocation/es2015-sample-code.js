class Bar {
  constructor() {
    // this is barInstance
    this.property = 'Default Value';
  }
}

// Constructor invocation
const barInstance = new Bar();
barInstance.property; // => 'Default Value'