const addBookButton = document.getElementById('addBookButton');
const bookForm = document.getElementById('bookForm');
const bookListContainer = document.getElementById('bookListContainer');
const overlay = document.getElementById('overlay');
const bookFormContainer = document.getElementById('bookFormContainer')
const errorModal = document.getElementById('errorMessage')





// Performing functions


function Book(name, author, pages, read){
     this.id = Date.now()
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
   
}


let myLibary = []

function addToLibrary(){
const title = document.getElementById('title').value;
const author = document.getElementById('author').value;
const pages = document.getElementById('pages').value;
const read = document.getElementById('read').checked;

const existingBook = myLibary.find(book => book.name === title && book.author === author);
if (existingBook) {
 alert('Error: this book already exist in your library')
return
}

const book = new Book(title, author, pages, read);
myLibary.push(book)
}









function displayTable() {
  bookListContainer.innerHTML = '';
  myLibary.forEach(function(book) {
      const bookCard = document.createElement('div');
      const title = document.createElement('p');
      const author = document.createElement('p');
      const pages = document.createElement('p');
      const buttonGroup = document.createElement('div');
      const readBtn = document.createElement('button');
      const removeBtn = document.createElement('button');
  
      

      bookCard.classList.add('book-card');
      buttonGroup.classList.add('button-group');

      readBtn.classList.add('btn-read');
      readBtn.addEventListener('click', function() {
        book.read = !book.read;
        readBtn.textContent = book.read? 'Read': 'Not Read'
        readBtn.style.backgroundColor = book.read? 'silver': 'red'
      
      });

      if (book.read) {
        readBtn.textContent = 'Read'
        readBtn.classList.add('btn-light-green')
      } else {
        readBtn.textContent = 'Not read'
       readBtn.classList.add('btn-light-red')
      }
      
      
      

      removeBtn.classList.add('btn-remove');
      removeBtn.addEventListener('click', function() {
        removeBookFromLibrary(book.id);
        displayTable();
      });
      

      title.textContent = `${book.name}`;
      author.textContent = book.author;
      pages.textContent = `${book.pages} pages`;
      removeBtn.textContent = `Remove Book`;
      


      bookCard.appendChild(title);
      bookCard.appendChild(author);
      bookCard.appendChild(pages);
      buttonGroup.appendChild(readBtn);
      buttonGroup.appendChild(removeBtn);
      bookCard.appendChild(buttonGroup);
      bookListContainer.appendChild(bookCard);
    })


  }



const submitbtn = document.getElementById('submit');


bookForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

 

  addToLibrary()
 displayTable()
  closeAddBook()
});


// Event listener for the "Add Book" button
addBookButton.addEventListener('click', function() {
  bookForm.style.display = 'block'; // Show the book form
  openAddBook()
});



function removeBookFromLibrary(bookId) {
  // Find the index of the book in the library array
  const bookIndex = myLibary.findIndex(book => book.id === bookId);

  // If the book is found, remove it from the library array
  if (bookIndex !== -1) {
    myLibary.splice(bookIndex, 1);
  }
}



const openAddBook = () => {
  bookForm.reset()
  bookFormContainer.classList.add('active')
  overlay.classList.add('active')
}

const closeAddBook = () => {
  bookFormContainer.classList.remove('active')
  overlay.classList.remove('active')
 
  
}


















