# divshot-dumper

Divshot error log dumping for the command-line

## Install

```
npm install divshot-dumper --save
```

## Usage

Divshot dumper listens for 3 events:

* `response` - This is what actually gets logged to the file.
* `response:success` - Status codes less than 400
* `response:error` - This even will trigger writing to the debug file

All dumps are written to the file `divshot-debug.log`.

```js
var EventEmitter = require('events').EventEmitter;
var dumper = require('divshot-dumper');

var emitter = new EventEmitter();

dumper(emitter);

emitter.emit('response', {});
emitter.emit('response:success', {});
emitter.emit('response:error', {});
```

## Run Tests

(WIP)

```
npm install
npm test
```


