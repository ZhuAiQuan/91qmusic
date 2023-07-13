export default async function(ctx, next) {
  await next();
  if ((!ctx.body.data || !Object.keys(ctx.body.data).length) && ctx.body.code === 200 && ctx.request.url !== '/') {// 最终返回结果判断
    ctx.body = {
      code: 500,
      message: 'system error'
    }
  }
}