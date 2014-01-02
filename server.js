var render = require('./lib/render');
var logger = require('koa-logger');
var route = require('koa-route');
var views = require('co-views');
var parse = require('co-body');
var koa = require('koa');
var app = koa();

// middleware
app.use(logger());

// route middleware
app.use(route.get('/', index));

// route definitions
function *index() {
  this.body = yield render('index');
}

app.listen(3000);
console.log('listening on port 3000');

// nvm use 0.11.9
// node --harmony server.js