export function getList(ctx) {
  const params = {};
  Object.assign(params, ctx.method === "GET" ? ctx.query : ctx.request.body);
  if (params.id) {
    params.subCateId = params.id;
    delete params.id;
  }
  ctx.state.query = {
    url: "/tracklist/list",
    params,
  };
}

export function getCategory(ctx) {
  ctx.state.query = {
    url: "/tracklist/category",
  };
}

export async function detail(ctx) {
  const params = ctx.method === "GET" ? ctx.request.query : ctx.request.body;
  ctx.state.query = {
    url: "/tracklist/info",
    params,
  };
}
