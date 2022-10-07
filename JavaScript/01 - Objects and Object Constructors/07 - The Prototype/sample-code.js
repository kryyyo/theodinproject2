function Student() {}

Student.prototype.sayName = function() {
  console.log(this.name);
}

function EightGrader(name) {
  this.name = name
  this.grade = 8
}

EightGrader.prototype = Object.create(Student.prototype);

const carl = new EightGrader("carl")
carl.sayName()
carl.grade



EightGrader.prototype = Student.prototype;