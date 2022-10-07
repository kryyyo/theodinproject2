function Book(title, author, pages, hasRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.hasRead = hasRead
}

Book.prototype.info = function() {
  return `${this.title} by ${this.author}, ${pages} pages, ${hasRead ? 'done reading' : 'not read yet'}`
}

let myLibrary = [];

function addBookToLibrary() {
}

// Instantiating New Object
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
// console.log(theHobbit.info());