export function getTop(ctx) {
  ctx.state.query = {
    url: "/bd/category",
  }
}

export function getTopList(ctx) {
  ctx.state.query = {
    url: "/bd/list",
    params: ctx.method === 'GET' ? { bdid: ctx.query.id } : { bdid: ctx.request.body.id }
  }
}