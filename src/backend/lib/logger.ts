import koa from "koa";

export const logger = function(app: koa) {
    app.use(async (ctx, next) => {
        await next();
        const resTime = ctx.response.get("X-Response-Time");
        console.log(`${ctx.method} ${ctx.url} - ${resTime}ms`);
    })

    app.use(async (ctx, next) => {
        const init = Date.now();
        await next();
        const ms = Date.now() - init;
        ctx.set("X-Response-Time", `${ms}`);
    })
}