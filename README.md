# elekiter
express like electron ipc wrapper library

## Install

`$ npm install elekiter`

## Usage

In __browser process__ (Main Process)

```js
var Elekiter = require('elekiter');
var elekiter = new Elekiter();

// regist middleware
elekiter.use(function (req, res, next) {
    req.param = req.params[0];
    next();
});
// routing
elekiter.get('/', function (req, res) {
    var message = 'Hi! ' + req.param; // req.param was set by middleware
    var life = req.params[1];

    if (life === 'human') return res.ok(message);
    if (life === 'alien') return res.ng('can not communicate');
    res.ng('unknown life');
});
```

In __renderer process__

```js
var Elekiter = require('elekiter');
var elekiter = new Elekiter();

elekiter.request('/', 'John', 'human').then(function (message) {
    console.log('@message:', message);
}).catch(function (error) {
    console.log('@error:', error);
});
```
