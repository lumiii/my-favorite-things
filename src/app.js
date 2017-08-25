var router = require('koa-route');
var Koa = require('koa');
var app = new Koa();
require('./start-db');
app.use(router.get('/', function (ctx) {
    ctx.body = 'LOLA';
}));
app.use(router.get('/test', function (ctx) {
    ctx.body = 'TEST';
}));
app.listen(3000);
//# sourceMappingURL=app.js.map