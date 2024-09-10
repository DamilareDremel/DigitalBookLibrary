// Library.js
const Book = require('./Book');

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        if (book instanceof Book) {
            this.books.push(book);
            console.log(`${book.title} has been added to the library.`);
        } else {
            console.log("Only instances of Book can be added to the library.");
        }
    }

    removeBook(isbn) {
        const index = this.books.findIndex(book => book.getIsbn() === isbn);
        if (index !== -1) {
            const removedBook = this.books.splice(index, 1)[0];
            console.log(`${removedBook.title} has been removed from the library.`);
        } else {
            console.log(`Book with ISBN ${isbn} not found.`);
        }
    }

    findBookByTitle(title) {
        const book = this.books.find(book => book.title === title);
        if (book) {
            return book;
        } else {
            console.log(`Book with title "${title}" not found.`);
            return null;
        }
    }
}

module.exports = Library;
