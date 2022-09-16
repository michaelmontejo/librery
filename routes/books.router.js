const express = require('express');
const response = require('../lib/response-message');
const log = require('../lib/log-messages');

const bookController = require('../controllers/books.controller');

const router = express.Router();

router.post('', (req, res) => {
    const { body } = req;
    bookController.postBook(body)
      .then( result => {
        response(res, { code: result.code, key: "message", payload: result.message});
      })
      .catch(error => {
        log.logError(error);
        response(res, {code: error.code, key: "message", payload: error.message})
      });
  });

  router.get('', (req, res) => {
    const { size } = req.query;
    bookController.getBooks(size)
      .then( books => {
        response(res, {code: 200, key: "books", payload: books})
      })
      .catch(error => {
        log.logError(error.log);
        response(res, {code: error.code, key: "message", payload: error.message})
      });
  });

  router.get('/:id', (req, res) =>{
    const { id } = req.params;
    bookController.getBook(id)
      .then( book => {
        response(res, {code: 200, key: "book", payload: book})
      })
      .catch(error => {
        log.logError(error);
        response(res, {code: error.code, key: "message", payload: error.message})
      });
  });

  router.put('/:bookID', (req, res) => {
    const { bookID } = req.params;
    const { body } = req;
    bookController.putBook(bookID, body)
      .then(result => {
        response(res, {code: result.code, key: "message", payload: result.message})
      })
      .catch(error => {
        log.logError(error);
        response(res, {code: error.code, key: "message", payload: error.message})
      });
  });

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    bookController.deleteBook(id)
      .then(result => {
        response(res, {code: result.code, key: "message", payload: result.message})
      })
      .catch(error => {
        log.logError(error);
        response(res, {code: error.code, key: "message", payload: error.message})
      })
  });
  module.exports = router;