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

router.get('/:id', function(req,res){
    Event.findById(req.params.id, '-_id -__v',function(err, event){
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

router.get('/', function(req,res){
    res.send('event index page');
});


module.exports = router;