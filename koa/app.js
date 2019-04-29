const Koa = require('koa');
const app = new Koa();

// logger
app.use(async (ctx, next) => {
	await next();
	const rt = ctx.response.get('X-Response-Time');
	console.log(`${ctx.method}--${ctx.url}--${rt}`);
	// ctx.body = 'hello world';
})

// X-Response-Time
app.use(async (ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	ctx.set('X-Response-Time', `${ms}ms`);
})

app.use(async ctx => {
	ctx.body = 'this is Hello world';
})


console.log('listen localhost:3000');
app.listen(3000);