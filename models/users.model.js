const mongoose = require("mongoose");
const {Schema} = require('mongoose');

const userSchema = new mongoose.Schema({
   
  pointOfSales: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }],

  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  hiredDate: {
    type: Date,
    require: true,
  }
  


})

module.exports = mongoose.model("User", userSchema);
