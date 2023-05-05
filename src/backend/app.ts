import koa from "koa";
const app = new koa();

const logger = message: string => async (ctx, next) => {
    console.log(message);
};

app.listen(3000);