let inputTitle = document.querySelector('.title-input');
let inputAuthor = document.querySelector('.author-input');
let submit = document.querySelector('.submit');
let storage = document.querySelector('.storage');
let statusSelect = document.querySelector('.status-select');
let selectedStatus = statusSelect.value;
let readButtons = document.querySelectorAll('.status');

// Add event listeners to each button
readButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'Read') {
            button.textContent = 'Unread';
        } else if (button.textContent === 'Unread') {
            button.textContent = 'Read';
        }
    });
});

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
    titleInput.textContent = inputTitle.value;
    titleSlot.appendChild(titleInput);

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
    authorInput.textContent = inputAuthor.value;
    authorSlot.appendChild(authorInput);

    //creating the button area
    let buttonArea = document.createElement('div');
    buttonArea.classList.add('buttons');

    //creating the button
    let createStatusButton = document.createElement('button');
    createStatusButton.classList.add('status', 'stat'); // Add both classes
    createStatusButton.textContent = selectedStatus === 'read' ? 'Read' : 'Unread';
    
    buttonArea.appendChild(createStatusButton);
    newDiv.appendChild(buttonArea);
    storage.appendChild(newDiv);

    let newBook = new Book(inputTitle.value, inputAuthor.value);
    myLibrary.push(newBook);
    console.log(myLibrary);

    // Attach event listener to the newly created read button
    createStatusButton.addEventListener('click', () => {
        if (createStatusButton.textContent == 'Read') {
            createStatusButton.textContent = 'Unread';
        } else if (createStatusButton.textContent == 'Unread') {
            createStatusButton.textContent = 'Read';
        }
    });

    // Creating the delete button (similar to status button)
    let createDelButton = document.createElement('button');
    createDelButton.classList.add('delete');
    createDelButton.textContent = 'Delete';
    buttonArea.appendChild(createDelButton);
    newDiv.appendChild(buttonArea);
    storage.appendChild(newDiv);

    //removing a card or book from the DOM
    createDelButton.addEventListener('click', () => {
        storage.removeChild(newDiv); // Remove the book card when delete button is clicked
    });
}

submit.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    addBookToLibrary();
});