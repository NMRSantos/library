const myLibrary = [];

const name = "The Big Book";
const author = "Hungus Chungus";
const pages = "67";
const status = "It Exists";
const id = crypto.randomUUID();

function Book(name, author, pages, status, id) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.id = id;
};

function addBookToLibrary() {
    const book = new Book(name, author, pages, status, id);
    console.log(book)

    myLibrary.push = book
    console.log(myLibrary)
};