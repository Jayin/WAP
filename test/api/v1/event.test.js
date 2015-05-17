var assert = require('assert')
var app = require('../../../app')
var request = require('supertest')(app)
var Website = require('../../../models/website')
var Event = require('../../../models/event')

describe('test/api/v1/event.js', function() {

    var website_id;

    before(function(done) {
        Website.create({domain: 'testapi.com'}, function(err, result) {
            if (err) return done(err)
            website_id = result._id
            done()
        })
    })

    describe('创建event', function() {
        it('创建成功', function(done) {

            request.post('/api/v1/website/:website_id/events'.replace(':website_id', website_id))
                .send({
                    category: 'SelectPage',
                    action: 'buy',
                    opt_label: 'good_1234',
                    opt_value: 102
                })
                .end(function(err, res) {
                    if (err) return done(err)
                    assert.equal(res.status, 201)
                    assert(res.body)
                    done()
                })
        })
    })

    describe('获取website的event列表', function(){
        it('获取成功', function(done){
            request.get('/api/v1/website/:website_id/events'.replace(':website_id', website_id))
                .end(function(err, res) {
                    if (err) return done(err)
                    assert.equal(res.status, 200)
                    assert(res.body)
                    done()
                })
        })
    })

    describe('获取某个event', function(){
        it('获取成功', function(done){
            Event.create({
                website_id: website_id,
                category: 'Exchange',
                action: 'click',
            },function(err, result){
                if (err) return done(err)
                request.get('/api/v1/website/:website_id/events/:event_id'.replace(':website_id', website_id).replace(':event_id', result._id))
                    .end(function(err, res) {
                        if (err) return done(err)
                        assert.equal(res.status, 200)
                        assert(res.body)
                        done()
                    })
            })
        })
    }) 

})