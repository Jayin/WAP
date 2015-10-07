var express = require('express')
var router = express.Router()
var Website = require('../../models/website')

//获得 website列表
router.get('/websites', function(req, res){
    var page = req.query.page || 1
    var pageSize = req.query.pageSize || 10

    Website.find({}, {__v: false})
            .limit(pageSize)
            .skip((page - 1) * 10)
            .exec(function(err, result){
                if (err)
                    return res.status(400).send({
                        msg: err.message
                    })

                res.send(result)
    })
})

//创建website
router.post('/websites', function(req, res){
    Website.create({domain: req.body.domain}, function(err, result){
        if (err) return res.status(400).send({
            msg: err.message
        })
        res.status(201).send(result)        
    })
})

//根据website_id获得website
router.get('/websites/:website_id', function(req, res){
    Website.findById(req.params.website_id, {_id: false, __v: false}, function(err, result){
        if (err)
            return res.status(400).send({
                msg: err.message
            })

        res.send(result)
    })
})

module.exports = router
