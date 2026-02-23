const myLibrary = [];

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
        const bookRow = document.createElement("div");
        bookRow.className = "bookRow";
        for(const property in myLibrary[i]) {
            const cell = document.createElement("div");
            cell.className = "cell"
            cell.textContent = `${myLibrary[i][property]}`;
            bookRow.appendChild(cell);
        };

        const remove = document.createElement("button");
        remove.textContent = "Delete";
        remove.addEventListener('click', function() {
            myLibrary.splice(i,1);
            grid.innerHTML = "";
            render();
        });

        const changeStatus = document.createElement("button");
        changeStatus.textContent = "Change Status";
        changeStatus.addEventListener('click', function() {
            if(myLibrary[i].status === "Read") {
                myLibrary[i].status = "Not Read"
                grid.innerHTML = "";
                render();
            } else {
                myLibrary[i].status = "Read"
                grid.innerHTML = "";
                render();
            };
        })

        grid.appendChild(bookRow);
        bookRow.appendChild(remove);
        bookRow.appendChild(changeStatus);
    };
};
