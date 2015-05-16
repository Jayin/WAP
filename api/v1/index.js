var express = require('express')
var router = express.Router()
var fs = require('fs')

router.use('/websites',require('./website'))
router.use('/websites/:website_id/events', require('./event'))

module.exports = router;

