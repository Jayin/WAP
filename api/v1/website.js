var express = require('express')
var router = express.Router()
var Website = require('../../models/website')
var crypto = require('crypto')

//list website
router.get('/websites', function(req, res){
    var page = req.query.page || 1
    var pageSize = req.query.pageSize || 10

    Website.find({}, {_id: false, __v: false})
            .limit(pageSize)
            .skip((page - 1) * 10)
            .exec(function(err, result){
                if (err)
                    return res.send({
                        code: 1,
                        msg: err.message
                    })

                res.send({
                    code: 0,
                    data: result
                })
    })
})

//create 
router.post('/websites', function(req, res){
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

//view
router.get('/websites/:website_id', function(req, res){
    Website.findById(req.params.website_id, {_id: false, __v: false}, function(err, data){
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



module.exports = router
