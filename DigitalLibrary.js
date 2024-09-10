// DigitalLibrary.js
const Library = require('./Library');
const Book = require('./Book');

class DigitalLibrary extends Library {
    downloadBook(isbn) {
        const book = this.books.find(book => book.getIsbn() === isbn);
        if (book) {
            if (book.available) {
                console.log(`Downloading ${book.title}...`);
            } else {
                console.log(`${book.title} is not available for download.`);
            }
        } else {
            console.log(`Book with ISBN ${isbn} not found.`);
        }
    }
}

module.exports = DigitalLibrary;
