

const myLibrary = [];

function Book(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
        this.info = function () {
                // return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}.`);
                return (`${this.title} by ${this.author}, ${this.pages} pages`);
        };
}

const book1 = new Book("Vom Junkie zum Millionär", "Montana Black", 420, "not read yet");
const book2 = new Book("Flinker Hase", "Carsten", 240, "read");
const book3 = new Book("Sieglinde vom Chor", "Sieglinde", 130, "not read yet");

// console.log(book1.info);

// const logArrayElements = (lol, ski /*, array */) => {
//         console.log(`a[${ski}] = ${lol}`);
// };

//       // Notice that index 2 is skipped, since there is no item at
//       // that position in the array.
// [2, 5, , 9].forEach(logArrayElements);
//       // Logs:
//       // a[0] = 2
//       // a[1] = 5
//       // a[3] = 9

function addBookToLibrary(book) {
        myLibrary.push(book);
}

function displayBook(item) {
        node = document.createElement("li");
        textNode = document.createTextNode(item.info());
        node.appendChild(textNode);
        console.log(document.querySelector(".myLibrary"));
        document.querySelector(".myLibrary").appendChild(node);
}

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

myLibrary.forEach(displayBook)

const dialog = document.querySelector("dialog");
const cancelButton = document.querySelector("#cancel");
const submitButton = document.querySelector("#submit");
const addButton = document.querySelector("#add");

// "Show the dialog" button opens the dialog modally
addButton.addEventListener("click", () => {
        dialog.showModal();
});

      // "Close" button closes the dialog
cancelButton.addEventListener("click", () => {
        dialog.close();
});

console.log(myLibrary);

// 4 NEW BOOK button that brings up a form to add a book to library

// 5 button on each list item to remove the book again

// 6 toggle read status with button