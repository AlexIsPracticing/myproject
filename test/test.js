var request = require('supertest');
var server = require('../server.js');

describe('GET /', function() {
  it('respond with hello all', function(done) {
    request(server).get('/').expect('Hello All!', done);
  });
});
