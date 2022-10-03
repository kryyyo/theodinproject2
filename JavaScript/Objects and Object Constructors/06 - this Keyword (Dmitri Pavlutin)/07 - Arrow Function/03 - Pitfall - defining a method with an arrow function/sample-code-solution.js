function Period (hours, minutes) {
  this.hours = hours;
  this.minutes = minutes;
}

Period.prototype.format = function() {
  console.log(this === walkPeriod); // => true
  return this.hours + ' hours and ' + this.minutes + ' minutes';
};

const walkPeriod = new Period(2, 30);
walkPeriod.format(); // => '2 hours and 30 minutes'

