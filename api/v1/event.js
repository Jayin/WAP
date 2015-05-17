var express = require('express')
var router = express.Router()
var Event = require('../../models/event')
var Website = require('../../models/website')

// 需要验证当前websiteid是否存在
router.use('/:website_id/events', function (req, res, next){
    Website.findById(req.params.website_id, function(err, result){
        if (err){
            res.status(400).send({
                msg: err.message
            })
            return
        }
        if (result === null){
            res.status(404).send({
                msg: 'Not found website'
            })
            return
        }
        next()
    })
})

//创建一个event
router.post('/:website_id/events', function(req, res){
    Event.create({
        category: req.body.category,
        action: req.body.action,
        opt_label: req.body.opt_label,
        opt_value: req.body.opt_value,
        website_id: req.params.website_id
    }, function(err, result){
        if(err) {
            return res.status(400).send({
                msg: err.message
            })
        }
        res.status(201).send(result)
    })
})

//获得event列表
//page: 页码  pageSize: 每页数目
router.get('/:website_id/events', function(req, res){

    var page = req.query.page || 1
    var pageSize = req.query.pageSize || 10

    Event.find({website_id: req.params.website_id}, {_id: false, __v: false}).limit(pageSize).skip((page - 1) * 10).exec(function(err, result){
        if (err)
            return res.status(400).send({
                msg: err.message
            })

        res.send(result)
    })
})

//获取某个event
router.get('/:website_id/events/:event_id', function(req, res){
    Event.findOne({_id: req.params.event_id, website_id: req.params.website_id}, {__v: false}, function(err, event){
        if (err)
            return res.status(400).send({
                msg: err.message
            })

        res.send(event)
    })
})



module.exports = router