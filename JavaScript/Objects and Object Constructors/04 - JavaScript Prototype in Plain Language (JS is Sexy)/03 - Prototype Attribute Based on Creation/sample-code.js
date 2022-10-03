// Instantiating with Object() constructor 
const userAccount = new Object();

// Instantiating using Object Literal
const userAccount1 = { name: "Mike"};

// check if they are of the same prototype
const userAccountPrototype = userAccount.constructor.prototype;
const userAccount1Prototype = userAccount1.constructor.prototype;

console.log(userAccountPrototype === userAccount1Prototype)

// // Instantiating with a defined constructor
// function Account() {}

// const userAcct = new Account();

// // accessing prototype: 
// console.log(Account().prototype);
// // or:
// console.log(userAcct.constructor.prototype);