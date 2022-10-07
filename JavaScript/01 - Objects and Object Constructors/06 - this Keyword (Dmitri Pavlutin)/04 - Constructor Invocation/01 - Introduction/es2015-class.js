class City {
  constructor(name, traveled) {
    this.name = name;
    this.traveled = false;
  }

  travel() {
    this.traveled = true;
  }
}

// Constructor invocation
const paris = new City('Paris', false);
paris.travel();

