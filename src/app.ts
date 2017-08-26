import router = require('koa-route');
import Koa = require('koa');
import tools = require('./tools');
const app = new Koa();
import fs = require('fs');

import jimp = require('jimp');
import loader = require('./page-loader');
import screen_router = require('./screen-router');

app.use(router.get('/', (ctx: any) => {
	ctx.body = 'LOLA';
}));

app.use(router.get('/test', async (ctx: any) => {
	ctx.body = 'TEST';
	// let buffer = await loader.screenshot('http://yelp.com');
	// buffer = await tools.cropPicture(buffer, 1);
	//
	// fs.writeFileSync('screenshot2.png', buffer);
	screen_router();
}));


app.listen(3000);
