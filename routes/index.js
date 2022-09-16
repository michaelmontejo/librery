const express = require('express');

const usersRouters = require('./users.router');
// const booksRouters = require('x');
const buyerRouters = require('./buyer.router');
const bookRouters = require('./books.router');
const pointsRouters = require('./points.router');

function routerApi(app){
  const router = express.Router();
  app.use("", router);
  router.use('/users', usersRouters);
  router.use('/buyers', buyerRouters);
  router.use('/books', bookRouters);
  router.use('/points', pointsRouters);
  // router.use('/books', booksRouters);
};




module.exports = routerApi;
