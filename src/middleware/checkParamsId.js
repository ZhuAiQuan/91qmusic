export default async function(ctx, next) {
  if ((ctx.request.method.toLocaleLowerCase() === 'post' && ctx.request.body.id) || (ctx.request.method.toLocaleLowerCase() === 'get' && ctx.query.id)) {
    await next()
  } else {
    ctx.body = {
      code: 404,
      message: 'need id'
    }
  }
}