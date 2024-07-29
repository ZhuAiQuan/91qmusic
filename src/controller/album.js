export function list(ctx) {
  const params = {
    pageNo: 1,
    pageSize: 50,
  };
  if (ctx.method === "GET") {
    Object.assign(params, ctx.query);
  } else {
    Object.assign(params, ctx.request.body);
  }
  ctx.state.query = {
    url: "/album/list",
    params,
  };
}

export function info(ctx) {
  const params = {};
  if (ctx.method === "GET") {
    params.albumAssetCode = ctx.query.id;
  } else {
    params.albumAssetCode = ctx.request.body.id;
  }
  ctx.state.query = {
    url: "/album/info",
    params,
  };
}

export function xdpublish(ctx) {
  const params = {
    pageNo: 1,
    pageSize: 50,
    type: "showstart",
    moreApi: encodeURIComponent("v1/album/xdpublish"),
    module_name: encodeURIComponent("秀动发行"),
  };

  if (ctx.method === "GET") {
    Object.assign(params, ctx.query);
  } else {
    Object.assign(params, ctx.request.body);
  }
  ctx.state.query = {
    url: "/album/xdpublish",
    params,
  };
}
