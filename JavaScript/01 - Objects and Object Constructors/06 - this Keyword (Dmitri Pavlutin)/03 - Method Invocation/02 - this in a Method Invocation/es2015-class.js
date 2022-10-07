class Planet {
  constructor(name) {
    this.name = name;
  }
  
  getName() {
    console.log(this === earth); // => true
    return this.name;
  }
}

const earth = new Planet('Earth');
// method invocation. the context is earth
earth.getName(); // => 'Earth'