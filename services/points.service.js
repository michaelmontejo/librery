const pointSchema=require('../models/points.models');


const createPoint = (point) => new Promise((resolve, reject) => {
    const pointDB = pointSchema(point);
    pointDB.save()
    
      .then(() => resolve({code: 201, message: "Point of sales created successfully"}) )
      .catch((error) => reject({code: 500, message: error}) );
  });

  const readPoints = () => new Promise((resolve, reject) => {
    pointSchema.find()
      .then((points) => resolve( points ))
      .catch((error) => reject({code: 500, message: error}))
  });

  const readPoint = (id) => new Promise((resolve , reject) => {
    pointSchema.findById(id)
      .then((point) => resolve(point))
      .catch((error) => reject({code: 500, message: error}) );
  });

  const updatePoint = (id, points) => new Promise((resolve , reject) => {
    pointSchema.findByIdAndUpdate(id, points)
      .then(() => resolve({code: 201, message: "point is update, is avalible in the inventary"}) )
      .catch((error) => reject({code: 500, message: error}) );
  });

  
  const deletePoint = (id) => new Promise((resolve , reject) => {
    pointSchema.findByIdAndDelete(id)
      .then(() => resolve({code: 200, message: "point deleted successfully, you should register again for add users"}) )
      .catch((error) => reject({code: 500, message: error}) );
  });
  

  module.exports = {
    
    createPoint,
    deletePoint,
    updatePoint,
    readPoint,
    readPoints
    
  }


  