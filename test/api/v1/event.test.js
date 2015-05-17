var assert = require('assert')
var app = require('../../../app')
var request = require('supertest')(app)
var Website = require('../../../models/website')

describe('test/api/v1/event.js', function() {

    var website_id;

    before(function(done) {
        var website = new Website({
                domain: 'testapi.com',
                app_key: require('crypto').randomBytes(16).toString('hex')
        })
        website.save(function(err, result){
            if (err) return done(err)
            website_id = result._id
            done()
        })
    })

    describe('创建event', function() {
        it('should succsssfully create ', function(done) {

            request.post('/api/v1/website/:website_id/events'.replace(':website_id', website_id))
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