class Book {
    #isbn;

    constructor(title, author, isbn, available = true) {
        this.title = title;
        this.author = author;
        this.#isbn = isbn;
        this.available = available;
    }

    getIsbn() {
        return this.#isbn;
    }

    setIsbn(newIsbn) {
        this.#isbn = newIsbn;
    }

    borrowBook() {
        if (this.available) {
            this.available = false;
            console.log(`${this.title} has been borrowed.`);
        } else {
            console.log(`${this.title} is not available.`);
        }
    }

    returnBook() {
        this.available = true;
        console.log(`${this.title} has been returned.`);
    }
}

module.exports = Book;
