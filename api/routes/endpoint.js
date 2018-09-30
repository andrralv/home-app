var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({'message': 'Hello there!'});
});

router.post('/', function(req, res, next) {
  res.json(req.body);
});

module.exports = router;
