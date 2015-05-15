var assert = require('assert')
var app = require('../../../app')
var request = require('supertest')(app)

describe('test/api/v1/event.js', function() {
    describe('POST /create', function() {
        it('should create succsss', function(done) {
            request.post('/api/v1/event/create')
                .send({
                    category: 'SelectPage',
                    action: 'buy',
                    opt_label: 'good_1234',
                    opt_value: 102
                })
                .end(function(err, res){
                    if(err) return done(err)
                    assert.equal(res.status, 200)
                    assert.equal(res.body.code, 0 )
                    done()
                })
        })
    })
})