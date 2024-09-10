const Book = require('./Book');
const Library = require('./Library');
const DigitalLibrary = require('./DigitalLibrary');

// Create some books
const book1 = new Book("JavaScript Basics", "Dami Theo", "1234567890");
const book2 = new Book("Advanced JavaScript", "Ola Ade", "0987654321");

// Create a Library and add books
const myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);

// Verify the contents of the Library
console.log("Library contents:", myLibrary.books);

// Create a DigitalLibrary and add books
const myDigitalLibrary = new DigitalLibrary();
myDigitalLibrary.addBook(book1);
myDigitalLibrary.addBook(book2);

// Verify the contents of the DigitalLibrary
console.log("DigitalLibrary contents:", myDigitalLibrary.books);

// Borrow, return, and download books
book1.borrowBook(); // "JavaScript Basics has been borrowed."
book1.returnBook(); // "JavaScript Basics has been returned."

myDigitalLibrary.downloadBook("1234567890"); // "Downloading JavaScript Basics..."
myDigitalLibrary.downloadBook("0987654321"); // "Downloading Advanced JavaScript..."
myDigitalLibrary.removeBook("1234567890"); // "JavaScript Basics has been removed from the library."

// Verify the contents of the DigitalLibrary after removal
console.log("DigitalLibrary contents after removal:", myDigitalLibrary.books);
