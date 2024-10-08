
// BOOK AND LIBRARY DATA
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

function addBookToLibrary(book) {
        myLibrary.push(book);
}

function displayBook(item) {
        //list item
        node = document.createElement("li");
        textNode = document.createTextNode(item.info());
        node.appendChild(textNode);
        //delete button
        deleteButton = document.createElement("button");
        textDeleteButton = document.createTextNode("Delete");
        deleteButton.appendChild(textDeleteButton);
        node.appendChild(deleteButton);
        //add event listener for delete button
        deleteButton.addEventListener("click", () => {
                alert(item.title);
        });
        //append node
        document.querySelector(".myLibrary").appendChild(node);
        updateIndexes();
        console.log(node);
}

function updateIndexes() {
        const nodeList = document.querySelectorAll("li");
        for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].setAttribute("library-index", i);
        }
        const nodeButtonList = document.querySelectorAll("li button");
        for (let i = 0; i < nodeButtonList.length; i++) {
                nodeButtonList[i].setAttribute("library-index", i);
                nodeButtonList[i].setAttribute("class", "deleteButton");
        }
}

// PRE-ADD THREE BOOKS TO LIBRARY
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

myLibrary.forEach(displayBook)

// EVENT LISTENER LOGIC FOR FORM BUTTONS TO ADD MORE BOOKS
const dialog = document.querySelector("dialog");
const cancelButton = document.querySelector("#cancel");
const submitButton = document.querySelector("#submit");
const addButton = document.querySelector("#add");

addButton.addEventListener("click", () => {
        dialog.showModal();
});

cancelButton.addEventListener("click", () => {
        dialog.close();
});

submitButton.addEventListener("click", () => {
        event.preventDefault();
        title = document.getElementById('title').value;
        author = document.getElementById('author').value;
        pages = document.getElementById('pages').value;
        if(document.getElementById('read').checked) {
                readStatus = "read";
        }else if(document.getElementById('notRead').checked) {
                readStatus = "not read yet";
        }
        newBook = new Book(title, author, pages, readStatus);
        myLibrary.push(newBook);
        array = [];
        array[0] = newBook;
        array.forEach(displayBook);
        updateIndexes();
        dialog.close();
        document.querySelector("form").reset();
});


// 5 button on each list item to remove the book again
// You will need to associate your DOM elements with the actual book objects in some way. 
// One easy solution is giving them a data-attribute that corresponds to the index of the library array.
// document.getElementById("myH1").setAttribute("class", "democlass"); 

// 6 toggle read status with button