const pointServices = require('../services/points.service');



const postPoint = (body) => new Promise((resolve, reject) => {
    try {
      resolve( pointServices.createPoint(body) );
    } catch (error) {
      reject(error);
    }
  });

  const getPoints = (size) => new Promise((resolve, reject) => {
    try {
      let points = [];
      points = pointServices.readPoints()
      if(size){
        resolve(points.slice(0, size));
      }else{
        resolve( points );
      }
    } catch (error) {
      reject({code: 500, message: "Error unexpected", log: error });
    }
  });

  const getPoint = (id) => new Promise((resolve, reject) => {
    try {
      resolve( pointServices.readPoint(id) );
    } catch (error) {
      reject( error );
    }
  });

  const putPoint = (pointID, body) => new Promise((resolve, reject) => {
    try {
      resolve( pointServices.updatePoint(pointID, body) );
    } catch (error) {
      reject(error);
    }
  });
  
  const deletePoint = (id) => new Promise((resolve, reject) => {
    try {
      resolve( pointServices.deletePoint(id) );
    } catch (error) {
      reject(error);
    }
  });
  

  module.exports = {
    
    postPoint,
    getPoints,
    getPoint,
    putPoint,
    deletePoint

    
    
  }



  

