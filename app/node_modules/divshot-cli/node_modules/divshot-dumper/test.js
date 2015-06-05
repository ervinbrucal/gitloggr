var dumper = require('./index');
var test = require('tape');
var Emitter = require('tiny-emitter');

test('requires event emitter', function (t) {
  
  t.throws(function () {
    
    dumper();
  }, 'requires event emitter');
  
  t.end();
});

// test('writes requests to file', function (t) {
  
//   var emitter = new Emitter();
  
//   dumper(emitter);
  
//   emitter.emit('request', 'data');
//   emitter.emit('request:error', 'error');
  
//   t.end();
// });