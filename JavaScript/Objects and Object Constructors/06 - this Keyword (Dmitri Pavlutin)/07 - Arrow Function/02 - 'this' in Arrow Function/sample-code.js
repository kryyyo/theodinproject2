class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  log() {
    console.log(this === myPoint); // => true
    setTimeout(() => {
      console.log(this === myPoint);      // => true
      console.log(this.x + ':' + this.y); // => '95:165'
    }, 1000);
  }
}

const myPoint = new Point(95, 165);
myPoint.log();

