const express = require('express');
const response = require('../lib/response-message');
const log = require('../lib/log-messages');

const buyerController = require('../controllers/buyer.controller');

const router = express.Router();

router.post('', (req, res) => {
    const { body } = req;
    buyerController.postBuyer(body)
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
    buyerController.getBuyers(size)
      .then( buyers => {
        response(res, {code: 200, key: "buyers", payload: buyers})
      })
      .catch(error => {
        log.logError(error.log);
        response(res, {code: error.code, key: "message", payload: error.message})
      });
  });

  router.get('/:id', (req, res) =>{
    const { id } = req.params;
    buyerController.getBuyer(id)
      .then( buyer => {
        response(res, {code: 200, key: "buyer", payload: buyer})
      })
      .catch(error => {
        log.logError(error);
        response(res, {code: error.code, key: "message", payload: error.message})
      });
  });

  router.put('/:buyerID', (req, res) => {
    const { buyerID } = req.params;
    const { body } = req;
    buyerController.putBuyer(buyerID, body)
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
    buyerController.deleteBuyer(id)
      .then(result => {
        response(res, {code: result.code, key: "message", payload: result.message})
      })
      .catch(error => {
        log.logError(error);
        response(res, {code: error.code, key: "message", payload: error.message})
      })
  });

  module.exports = router;
