/**
 * 自定义校验器
 * @param {*} schema
 */
export default function (schema) {
  return async (ctx, next) => {
    const { error } = schema.validate(ctx.method === "GET" ? ctx.query : ctx.request.body);
    if (error) {
      ctx.status = 400;
      ctx.body = {
        message: error.details?.at(0).message || "缺少查询参数!",
        code: 400,
      };
    } else {
      await next();
    }
  };
}
