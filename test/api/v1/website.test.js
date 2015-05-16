var assert = require('assert')
var app = require('../../../app')
var request = require('supertest')(app)

describe('test/api/v1/website.js', function() {
    describe('创建website', function() {
        it('should succsssfully create', function(done) {
            request.post('/api/v1/websites/')
                .send({
                    domain: 'jayinton.com'
                })
                .end(function(err, res){
                    if(err) return done(err)
                    assert.equal(res.status, 200)
                    assert.equal(res.body.code, 0 )
                    done()
                })
        })
    })

    describe('查看一个已创建的website', function() {
        it('should succsssfully create and view ', function(done) {

            var view = function(website_id){
                request.get('/api/v1/websites/' + website_id)
                    .end(function(err, res){
                        if(err) return done(err)
                        assert.equal(res.status, 200)
                        assert.equal(res.body.code, 0 )

                        assert(res.body.website)
                        done()
                    })
            }

            request.post('/api/v1/websites/')
                .send({
                    domain: 'jayinton.com'
                })
                .end(function(err, res){
                    if(err) return done(err)
                    assert.equal(res.status, 200)
                    assert.equal(res.body.code, 0 )
                    view(res.body.website_id)
                })
        })
    })
})