

// Constructor to make it easily add new book objects
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function () {
        // return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}.`);
        return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}.`);
    };
    this.toggleReadStatus = function () {
        if (this.isRead === "read") {
            this.isRead = "not read yet";
        } else if (this.isRead === "not read yet") {
            this.isRead = "read";
        }
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function drawInitialList(myLibrary) {
    for (let i = 0; i < myLibrary.length; i++) {
        liNode = drawListElements(myLibrary[i], i);
        readStatusButton = drawToggleReadStatus(liNode);
        addReadStatusLogic(myLibrary, i, readStatusButton);
        buttonNode = drawDeleteButtons(liNode);
        addButtonLogic(myLibrary, i, buttonNode);
    }
}

function drawListElements(item, i) {
    node = document.createElement("li");
    textNode = document.createTextNode(item.info());
    node.appendChild(textNode);
    node.setAttribute("id", i);
    document.querySelector(".myLibrary").appendChild(node);
    return node;
}

function drawDeleteButtons(item) {
    deleteButton = document.createElement("button");
    textDeleteButton = document.createTextNode("Delete");
    deleteButton.appendChild(textDeleteButton);
    deleteButton.setAttribute("class", "deleteButton");
    item.appendChild(deleteButton);
    return deleteButton;
}

function addButtonLogic(myLibrary, i, node) {
    node.addEventListener("click", () => {
        myLibrary.splice(i, 1);
        node.parentNode.remove();
        nodeList = document.querySelectorAll("li");
        for (let j = 0; j < nodeList.length; j++) {
            nodeList[j].setAttribute("id", j);
        }
    })
}

function drawToggleReadStatus(item) {
    readStatusButton = document.createElement("button");
    textReadStatusButton = document.createTextNode("Toggle read status");
    readStatusButton.appendChild(textReadStatusButton);
    readStatusButton.setAttribute("class", "readStatusButton");
    item.appendChild(readStatusButton);
    return readStatusButton;
}

function addReadStatusLogic(myLibrary, i, node) {
    node.addEventListener("click", () => {
        x = node.parentNode.getAttribute("id");
        myLibrary[x].toggleReadStatus();
        console.log(node);
        console.log(node.parentNode.firstChild);
        newTextNode = document.createTextNode(myLibrary[x].info());
        node.parentNode.replaceChild(newTextNode, node.parentNode.firstChild);
        }
    )
}

function addBookToList(newBook) {
    listNode = drawListElements(newBook, myLibrary.length - 1);
    readStatusButton = drawToggleReadStatus(listNode);
    addReadStatusLogic(myLibrary, myLibrary.length - 1, readStatusButton);
    buttonNode = drawDeleteButtons(listNode);
    addButtonLogic(myLibrary, myLibrary.length - 1, buttonNode);
}


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
    if (document.getElementById('read').checked) {
        readStatus = "read";
    } else if(document.getElementById('notRead').checked) {
        readStatus = "not read yet";
    }
    newBook = new Book(title, author, pages, readStatus);
    addBookToLibrary(newBook);
    addBookToList(newBook);
    dialog.close();
    document.querySelector("form").reset();
});

// Array, which will contain all book objects
myLibrary = [];

// Specification asked for a couple of example books already pre-defined on page startup
const book1 = new Book("Vom Junkie zum Millionär", "Montana Black", 420, "not read yet");
const book2 = new Book("Flinker Hase", "Carsten", 240, "read");
const book3 = new Book("Sieglinde vom Chor", "Sieglinde", 130, "not read yet");

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

drawInitialList(myLibrary);