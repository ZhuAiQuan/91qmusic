export function getSong(ctx) {
  const params = ctx.method === "GET" ? { TSID: ctx.request.query.id } : { TSID: ctx.request.body.id };
  ctx.state.query = {
    url: "/song/info",
    params,
  };
}

export function detail(ctx) {
  const params = {};
  if (ctx.method === "GET") {
    Object.assign(params, ctx.request.query);
  } else {
    Object.assign(params, ctx.request.body);
  }
  params.TSID = params.id;
  delete params.id;
  ctx.state.query = {
    url: "/song/tracklink",
    params,
  };
}
