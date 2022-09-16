const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
   title: {
    type: String,
    required: true,
  },
   price: {
    type: Number,
    required: true,
  },
   isbn: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  }
})

module.exports = mongoose.model("books", booksSchema);
