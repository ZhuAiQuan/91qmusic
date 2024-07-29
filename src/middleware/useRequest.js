import { fetcher } from "../utils/index.js";

export default async function (ctx, next) {
  // 将上下文传递给请求里
  fetcher.getCurrentContext(ctx);
  // ctx.state.fetch = fetcher.request;
  await next();
  if ((ctx.status === 404 || !ctx.body?.message) && ctx.state.query) {
    const query = ctx.state.query;
    await fetcher.request(query);
  }
}
