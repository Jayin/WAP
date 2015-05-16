var express = require('express')
var router = express.Router()
var Event = require('../../models/event')

router.post('/create',function(req,res){
    var e = new Event({
        category: req.body.category,
        action: req.body.action,
        opt_label: req.body.opt_label,
        opt_value: req.body.opt_value
    })
    e.save(function(err, obj){
        if(err) {
            return res.send({
                code: 1,
                msg: err.message
            })
        }
        res.send({
            code: 0,
            event_id: obj._id
        })
    })
    
});

router.get('/view/:id', function(req,res){
    Event.findById(req.params.id, {_id: false,__v: false}, function(err, event){
        if (err)
            return res.send({
                code:1,
                msg: err.message
            })

        res.send({
            code: 0,
            event: event
        })
    })
});

router.get('/events', function(req,res){

    var page = req.query.page || 1
    var pageSize = req.query.pageSize || 10

    Event.find({}, {_id: false,__v: false}).limit(pageSize).skip((page - 1) * 10).exec(function(err, events){
        if (err)
            return res.send({
                code:1,
                msg: err.message
            })

        res.send({
            code: 0,
            data: events
        })
    })
});


module.exports = router;