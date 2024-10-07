// // alert("hello");

// function Book(title, author, pages, isRead) {
//         this.title = title;
//         this.author = author;
//         this.pages = pages;
//         this.isRead = isRead;
//         this.info = function () {
//                 return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}.`);
//         };
// }

// const book1 = new Book("Vom Junkie zum Millionär", "Montana Black", 420, "not read yet");
// const book2 = new Book("Flinker Hase", "Carsten", 240, "read");

// console.log(book1.info());
// console.log(book2.info());


function Player(name, marker) {
        this.name = name;
        this.marker = marker;
        this.sayName = function() {
                console.log(this.name)
        };
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');
      player1.sayName(); // logs 'steve'
      player2.sayName(); // logs 'also steve'