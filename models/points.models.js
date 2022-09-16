const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
  manager: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  namePoint: {
    type: String,
    required: true,
  },
 
})

module.exports = mongoose.model("points", pointSchema);
