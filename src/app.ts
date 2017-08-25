const router = require('koa-route');
const Koa = require('koa');
const app = new Koa();

require('./start-db');

app.use(router.get('/', (ctx: any) => {
	ctx.body = 'LOLA';
}));

app.use(router.get('/test', (ctx: any) => {
	ctx.body = 'TEST';
}));

app.listen(3000);