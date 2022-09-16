const bookSchema = require('../models/books.model');

const createBooks = (book) => new Promise((resolve, reject) => {
    const bookDB = bookSchema(book);
    bookDB.save()
      .then(() => resolve({code: 201, message: "book is created, this is available in the store"}) )
      .catch((error) => reject({code: 500, message: error}) );
  });

  const readBooks = () => new Promise((resolve, reject) => {
    bookSchema.find()
      .then((books) => resolve( books ))
      .catch((error) => reject({code: 500, message: error}))
  });

  const readBook = (id) => new Promise((resolve , reject) => {
    bookSchema.findById(id)
      .then((book) => resolve(book))
      .catch((error) => reject({code: 500, message: error}) );
  });

  const updateBook = (id, book) => new Promise((resolve , reject) => {
    bookSchema.findByIdAndUpdate(id, book)
      .then(() => resolve({code: 201, message: "Book is update, is avalible in the inventary"}) )
      .catch((error) => reject({code: 500, message: error}) );
  });

  const deleteBook = (id) => new Promise((resolve , reject) => {
    bookSchema.findByIdAndDelete(id)
      .then(() => resolve({code: 200, message: "Book deleted successfully, you should register again for add in the inventary books"}) )
      .catch((error) => reject({code: 500, message: error}) );
  });
  

  
  module.exports = {
    createBooks,
    readBooks,
    readBook,
    updateBook,
    deleteBook
    
    
  }