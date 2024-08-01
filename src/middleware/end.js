/**
 * 所有请求结束后执行的回调 先进后出
 * @param {*} ctx
 * @param {*} next
 */
export default async function (ctx, next) {
  await next();
  if (ctx.body?.data?.state) {
    ctx.body = {
      code: 200,
      data: ctx.body.data.data,
    };
  } else if (ctx.body?.data?.errmsg) {
    ctx.body = {
      code: 500,
      message: ctx.body.data.errmsg,
      errors: [process.env.SECRET],
      info: process.env
    };
  }
}
