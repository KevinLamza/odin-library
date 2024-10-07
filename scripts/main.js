

const myLibrary = [];

function Book(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
        this.info = function () {
                return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}.`);
        };
}

const book1 = new Book("Vom Junkie zum Millionär", "Montana Black", 420, "not read yet");
const book2 = new Book("Flinker Hase", "Carsten", 240, "read");
const book3 = new Book("Sieglinde vom Chor", "Sieglinde", 130, "not read yet");

function addBookToLibrary(book) {
        myLibrary.push(book);
}


console.log(book1.info());
console.log(book2.info());
console.log(book3.info());