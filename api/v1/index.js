var express = require('express');
var router = express.Router();

var e = require('./event');


router.use('/event',e);

module.exports = router;

