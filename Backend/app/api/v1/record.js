var express = require('express')
var router = express.Router()
var Record = require('../../models/record')

router.get('/wap.png', function(req, res){
    console.log(req.query)
    console.log(req.headers)


    var new_record = new Record({
        user_agent: req.headers['user-agent'],
        referer: req.headers['referer'],
        //website_id
        website_id: req.query.wid,
        ip: req.ip
    })

    new_record.save(function(err, record){
        if(err){
            res.send(err.msg)
            return
        }
        res.status(201).send('')
    })
})


module.exports = router
