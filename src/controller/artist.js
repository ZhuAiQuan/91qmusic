export function index(ctx) {
  const params = {
    pageNo: 1,
    pageSize: 48,
    artistFristLetter: "",
    artistRegion: "",
    artistGender: "",
  };
  if (ctx.method === "GET") {
    Object.assign(params, ctx.query);
  } else {
    Object.assign(params, ctx.request.body);
  }
  if (!params.artistFristLetter) delete params.artistFristLetter;
  if (!params.artistRegion) delete params.artistRegion;
  if (!params.artistGender) delete params.artistGender;
  ctx.state.query = {
    url: "/artist/list",
    params,
  };
}

export function singer(ctx) {
  const params = {};
  if (ctx.method === "GET") {
    params.artistCode = ctx.query.id;
  } else {
    params.artistCode = ctx.request.body.id;
  }
  ctx.state.query = {
    url: "/artist/info",
    params,
  };
}

export function songs(ctx) {
  const params = {};
  if (ctx.method === "GET") {
    Object.assign(params, ctx.query, { artistCode: ctx.query.id });
  } else {
    Object.assign(params, ctx.request.body, { artistCode: ctx.request.body.id });
  }
  if (params.id) delete params.id;
  ctx.state.query = {
    url: "/artist/song",
    params,
  };
}

export function album(ctx) {
  const params = {};
  if (ctx.method === "GET") {
    Object.assign(params, ctx.query, { artistCode: ctx.query.id });
  } else {
    Object.assign(params, ctx.request.body, { artistCode: ctx.request.body.id });
  }
  params.id && delete params.id;
  ctx.state.query = {
    url: "/artist/album",
    params,
  };
}
