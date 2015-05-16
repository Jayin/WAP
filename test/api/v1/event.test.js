var assert = require('assert')
var app = require('../../../app')
var request = require('supertest')(app)

describe('test/api/v1/event.js', function() {

    var website_id;

    before(function(done) {
        request.post('/api/v1/websites/')
            .send({
                domain: 'jayinton.com'
            })
            .end(function(err, res) {
                if (err) return done(err)
                assert.equal(res.status, 200)
                assert.equal(res.body.code, 0)
                website_id = res.body.website_id
                done()
            })
    })

    describe('创建event', function() {
        it('should succsssfully create succsss', function(done) {

            request.post('/api/v1/websites/:website_id/events/'.replace(':website_id', website_id))
                .send({
                    category: 'SelectPage',
                    action: 'buy',
                    opt_label: 'good_1234',
                    opt_value: 102
                })
                .end(function(err, res) {
                    if (err) return done(err)
                    assert.equal(res.status, 200)
                    assert.equal(res.body.code, 0)
                    done()
                })
        })
    })
})