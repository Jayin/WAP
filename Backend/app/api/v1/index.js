var express = require('express')
var router = express.Router()
var fs = require('fs')

router.use('/',require('./website'))
router.use('/website', require('./event'))
router.use('/', require('./record'))

module.exports = router;

