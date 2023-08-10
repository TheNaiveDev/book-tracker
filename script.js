let inputTitle = document.querySelector('.title-input');
let inputAuthor = document.querySelector('.author-input');
let submit = document.querySelector('.submit');
let storage = document.querySelector('.storage');

let myLibrary = [];

class Book {
    constructor(title, author) {
        this.title = title,
        this.author = author
    }
}

function addBookToLibrary() {
    //create the .card container
    let newDiv = document.createElement('div');
    newDiv.classList.add('card');

    //create the title section in the card div
    let titleSlot = document.createElement('div');
    titleSlot.classList.add('title-slot');

    //create title heading
    let bookTitle = document.createElement('h3');
    bookTitle.textContent = 'Title:';
    titleSlot.appendChild(bookTitle);
    newDiv.appendChild(titleSlot);

    //create book title name 
    let titleInput = document.createElement('p');
    titleInput.textContent = 'testing ongoing';
    titleSlot.appendChild(titleInput);
    storage.appendChild(newDiv);

    //create the author section
    let authorSlot = document.createElement('div');
    authorSlot.classList.add('author-slot');

    //create author heading
    let bookAuthor = document.createElement('h3');
    bookAuthor.textContent = 'Author:'
    authorSlot.appendChild(bookAuthor);
    newDiv.appendChild(authorSlot);

    //create author name
    let authorInput = document.createElement('p');
    authorInput.textContent = 'Roman Reigns';
    authorSlot.appendChild(authorInput);

    //creating the button area
    let buttonArea = document.createElement('div');
    buttonArea.classList.add('buttons');

    //creating the button
    let createButton = document.createElement('button');
    createButton.classList.add('edit');
    createButton.textContent = 'Read';
    buttonArea.appendChild(createButton);
    newDiv.appendChild(buttonArea);
    
    //creating the delete button
    let createDelButton = document.createElement('button');
    createDelButton.classList.add('delete');
    createDelButton.textContent = 'Delete';
    buttonArea.appendChild(createDelButton);
    newDiv.appendChild(buttonArea);
}

