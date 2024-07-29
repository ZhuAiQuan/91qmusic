export function list(ctx) {
  ctx.state.query = {
    url: "/video/list",
    params: ctx.method === "GET" ? ctx.request.query : ctx.request.body,
  };
}

export async function info(ctx) {
  ctx.state.query = {
    url: "/video/info",
    params: { assetCode: ctx.method === "GET" ? ctx.request.query.id : ctx.request.body.id },
  };
}
