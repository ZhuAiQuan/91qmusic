export default async function (ctx, next) {
  if (
    (ctx.request.method.toLocaleLowerCase() === "post" &&
      ctx.request.body.pageNo &&
      ctx.request.body.pageSize) ||
    (ctx.request.method.toLocaleLowerCase() === "get" &&
      ctx.query.pageNo &&
      ctx.query.pageSize)
  ) {
    await next();
  } else {
    ctx.body = {
      code: 404,
      message: "need page info",
    };
  }
}
