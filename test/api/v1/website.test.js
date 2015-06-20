var assert = require('assert')
var app = require('../../../app')
var request = require('supertest')(app)
var Website = require('../../../app/models/website')

describe('test/api/v1/website.js', function() {
    describe('创建website', function() {
        it('创建成功', function(done) {
            request.post('/api/v1/websites')
                .send({
                    domain: 'jayinton.com'
                })
                .end(function(err, res) {
                    if (err) return done(err)
                    assert.equal(res.status, 201)
                    assert(res.body)
                    done()
                })
        })
    })

    describe('查看已创建的website', function() {
        it('查看成功', function(done) {
            Website.create({domain: 'testapi.com'}, function(err, result) {
                if (err) return done(err)
                request.get('/api/v1/websites/' + result._id)
                    .end(function(err, res) {
                        if (err) return done(err)
                        assert.equal(res.status, 200)

                        assert(res.body)
                        done()
                    })
            })
        })
    })

    describe('查看website列表', function(){
        it('查看成功', function(done){
            request.get('/api/v1/websites')
                    .end(function(err, res) {
                        if (err) return done(err)
                        assert.equal(res.status, 200)

                        assert(res.body)
                        done()
                    })
        })
    })
})