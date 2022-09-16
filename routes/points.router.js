const express = require('express');
const response = require('../lib/response-message');
const log = require('../lib/log-messages');

const pointController = require('../controllers/points.controller');

const router = express.Router();


router.post('', (req, res) => {
    const { body } = req;
    pointController.postPoint(body)
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
    pointController.getPoints(size)
      .then( Points => {
        response(res, {code: 200, key: "Points", payload: Points})
      })
      .catch(error => {
        log.logError(error.log);
        response(res, {code: error.code, key: "message", payload: error.message})
      });
  });

  router.get('/:id', (req, res) =>{
    const { id } = req.params;
    pointController.getPoint(id)
      .then( Point => {
        response(res, {code: 200, key: "Point", payload: Point})
      })
      .catch(error => {
        log.logError(error);
        response(res, {code: error.code, key: "message", payload: error.message})
      });
  });

  router.put('/:pointID', (req, res) => {
    const { pointID } = req.params;
    const { body } = req;
    pointController.putPoint(pointID, body)
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
    pointController.deletePoint(id)
      .then(result => {
        response(res, {code: result.code, key: "message", payload: result.message})
      })
      .catch(error => {
        log.logError(error);
        response(res, {code: error.code, key: "message", payload: error.message})
      })
  });

  module.exports = router;