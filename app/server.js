var path = require('path');
    logger = require('koa-logger'),
    route = require('koa-route'),
    views = require('co-views'),
    koa = require('koa'),
    serve = require('koa-static'),
    app = koa();

// middleware
app.use(logger());

// route middleware
app.use(route.get('/', index));
app.use(serve(path.join(__dirname, 'public')));

// setup koa views, mapping html to the swig template engine
var render =  views(__dirname + '/views', {
  map: { html: 'swig' }
});

// route definitions
function *index() {
  this.body = yield render('index');
}

app.listen(3000);
console.log('listening on port 3000');

// nvm use 0.11.9
// node --harmony server.js