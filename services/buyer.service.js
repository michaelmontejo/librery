 const buyerSchema = require('../models/buyer.model');

const createBuyer = (buyer) => new Promise((resolve, reject) => {
    const buyerDB = buyerSchema(buyer);
    buyerDB.save()
      .then(() => resolve({code: 201, message: "buyer is created, now you can to buy"}) )
      .catch((error) => reject({code: 500, message: error}) );
  });

  const readBuyers = () => new Promise((resolve, reject) => {
    buyerSchema.find()
      .then((buyers) => resolve( buyers ))
      .catch((error) => reject({code: 500, message: error}))
  });

  const readBuyer = (id) => new Promise((resolve , reject) => {
    buyerSchema.findById(id)
      .then((buyer) => resolve(buyer))
      .catch((error) => reject({code: 500, message: error}) );
  });

  const updateBuyer = (id, buyer) => new Promise((resolve , reject) => {
    buyerSchema.findByIdAndUpdate(id, buyer)
      .then(() => resolve({code: 201, message: "Buyer updated successfully, You can buyer again"}) )
      .catch((error) => reject({code: 500, message: error}) );
  });

  const deleteBuyer = (id) => new Promise((resolve , reject) => {
    buyerSchema.findByIdAndDelete(id)
      .then(() => resolve({code: 200, message: "User deleted successfully, you should register again for other purchase"}) )
      .catch((error) => reject({code: 500, message: error}) );
  });
  


  module.exports = {
    createBuyer,
    readBuyers,
    readBuyer,
    updateBuyer,
    deleteBuyer
    
  }

 
  