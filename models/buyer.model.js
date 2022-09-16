const mongoose = require("mongoose");

const buyerSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true,
  },
  identificationCard: {
    type: Number,
    required: true,
  },
  cellPhone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model("Buyer", buyerSchema);
