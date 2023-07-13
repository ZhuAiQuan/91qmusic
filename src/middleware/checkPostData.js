export default async function (ctx, next, vali) {
  let data = {}
  if (ctx.request.method.toLocaleLowerCase() === 'get') {
    data = ctx.query;
  } else {
    data = ctx.request.body;
  }
  if (Array.isArray(vali)) {
    for(let i = 0; i < vali.length; i++) {
      if (!data[vali[i]]) {
        return ctx.body = {
          code: 404,
          message: `${vali[i]} is not define`
        }
      }
    }
  } else {
    if (!data[vali]) {
      return ctx.body = {
        code: 404,
        message: `${vali} is not define`
      }
    }
  }
  await next();
}