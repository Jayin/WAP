var express = require('express')
var router = express.Router()
var fs = require('fs')

router.use('/',require('./website'))
router.use('/website', require('./event'))

module.exports = router;

