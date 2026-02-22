const myLibrary = [];

// const name = alert("book name");
// const author = alert("Hungus Chungus");
// const pages = "67";
// const status = "It Exists";
// const id = crypto.randomUUID();

function Book(name, author, pages, status, id) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.id = id;
};

function addBookToLibrary(name, author, pages, status, id) {
    const book = new Book(name, author, pages, status, id);
    console.log(book);

    myLibrary.push(book);
    console.log(myLibrary)
};


const grid = document.querySelector(".grid");
document.getElementById('button').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const status = document.getElementById('status').value;
    function generateId() {
        return crypto.randomUUID();
    };
    let id = generateId();
    addBookToLibrary(name, author, pages, status, id);
    grid.innerHTML = "";
    render();
});

function render() {
    for (let i = 0; i <= myLibrary.length - 1; i++) {
        for(const property in myLibrary[i]) {
            const cell = document.createElement("div");
            grid.appendChild(cell);
            cell.textContent = `${myLibrary[i][property]}`;
        };
    };
};