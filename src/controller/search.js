export function sug(ctx) {
  const params = {};
  if (ctx.method === "GET") Object.assign(params, ctx.request.query);
  else Object.assign(params, ctx.request.body);
  ctx.state.query = {
    url: "/search/sug",
    params,
  };
}

export function search(ctx) {
  const params = {};
  if (ctx.method === 'GET') Object.assign(params, ctx.request.query);
  else Object.assign(params, ctx.request.body)
  ctx.state.query = {
    url: "/search",
    params,
  }
}
