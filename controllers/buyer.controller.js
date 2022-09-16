const buyerServices = require('../services/buyer.service');

const postBuyer = (body) => new Promise((resolve, reject) => {
    try {
      resolve( buyerServices.createBuyer(body) );
    } catch (error) {
      reject(error);
    }
  });

  const getBuyers = (size) => new Promise((resolve, reject) => {
    try {
      let buyers = [];
      buyers = buyerServices.readBuyers()
      if(size){
        resolve(buyers.slice(0, size));
      }else{
        resolve( buyers );
      }
    } catch (error) {
      reject({code: 500, message: "Error unexpected", log: error });
    }
  });

  const getBuyer = (id) => new Promise((resolve, reject) => {
    try {
      resolve( buyerServices.readBuyer(id) );
    } catch (error) {
      reject( error );
    }
  });

  const putBuyer = (buyerID, body) => new Promise((resolve, reject) => {
    try {
      resolve( buyerServices.updateBuyer(buyerID, body) );
    } catch (error) {
      reject(error);
    }
  });
  
  const deleteBuyer = (id) => new Promise((resolve, reject) => {
    try {
      resolve( buyerServices.deleteBuyer(id) );
    } catch (error) {
      reject(error);
    }
  });
  


  module.exports = {
    
    postBuyer,
    getBuyers,
    getBuyer,
    putBuyer,
    deleteBuyer 
    
    
  }