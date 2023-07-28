





// Performing functions


function Book(name, author, pages, read){
     this.id = Date.now()
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
   
}


class Library{
  constructor(){
    this.addBookButton = document.getElementById('addBookButton');
    this.bookForm = document.getElementById('bookForm');
    this.bookListContainer = document.getElementById('bookListContainer');
    this.overlay = document.getElementById('overlay');
    this.bookFormContainer = document.getElementById('bookFormContainer')
    this.errorModal = document.getElementById('errorMessage')
    this.myLibary = []
    this.bookForm.addEventListener('submit', (event)=> {
      event.preventDefault(); // Prevent form submission
      this.addToLibrary()
      this.displayTable()
      this.closeAddBook()
    });
    this.addBookButton.addEventListener('click', ()=> {
      bookForm.style.display = 'block'; // Show the book form
      this.openAddBook()
    });
  }



  addToLibrary(){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    
    const existingBook = this.myLibary.find(book => book.name === title && book.author === author);
    if (existingBook) {
     this.errorModal.innerHTML = 'book already exist in your library'
    return
    }
    const book = new Book(title, author, pages, read);
    this.myLibary.push(book)
    }



    displayTable() {
      this.bookListContainer.innerHTML = '';
      this.myLibary.forEach((book)=> {
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
          removeBtn.addEventListener('click', ()=> {
            this.removeBookFromLibrary(book.id);
            this.displayTable();
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
      };


      removeBookFromLibrary(bookId) {
        const bookIndex = this.myLibary.findIndex(book => book.id === bookId);

        if (bookIndex !== -1) {
          this.myLibary.splice(bookIndex, 1);
        }
      };
      
      
      
      openAddBook = () => {
        this.bookForm.reset()
        this.bookFormContainer.classList.add('active')
        this.overlay.classList.add('active')
      };
      
      closeAddBook = () => {
        this.bookFormContainer.classList.remove('active')
        this.overlay.classList.remove('active')
      };



}



const library = new Library







 





























