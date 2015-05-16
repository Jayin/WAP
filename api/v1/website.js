var express = require('express')
var router = express.Router()
var Website = require('../../models/website')
var crypto = require('crypto')

router.post('/create', function(req, res){
    var w = new Website({
        domain: req.body.domain,
        app_key: crypto.randomBytes(16).toString('hex')
    })
    w.save(function(err, data){
        if (err) return res.send({
            code: 1,
            msg: err.message
        })
        res.send({
            code: 0,
            website_id: data._id
        })
    })
})

router.get('/view/:id', function(req, res){
    Website.findById(req.params.id, {_id: false, __v: false}, function(err, data){
        if (err)
            return res.send({
                code:1,
                msg: err.message
            })

        res.send({
            code: 0,
            website: data
        })
    })
})

router.get('/websites', function(req, res){

})

module.exports = router
