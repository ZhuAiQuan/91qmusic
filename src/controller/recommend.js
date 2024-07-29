export function banner(ctx) {
  ctx.state.query = {
    url: "/banner/list",
    method: "get",
  };
}

export function index(ctx) {
  ctx.state.query = {
    url: "/index",
    method: "get",
  };
}

export function video(ctx) {
  const params = {
    pageSize: 8,
  };
  if (ctx.method === "GET") {
    params.pageSize = ctx.query.pageSize;
  } else {
    params.pageSize = ctx.request.body.pageSize;
  }

  ctx.state.query = {
    url: "/video/recommend",
    method: "get",
    params,
  };
}
