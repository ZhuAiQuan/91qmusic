import Router from "koa-router";
import { list, info, xdpublish } from "../controller/album.js";
import validateId from "../middleware/checkParamsId.js";
import validatePage from "../middleware/checkParamsPage.js";

const album = new Router();
album.get("/list", validatePage, async (ctx) => {
  const { pageNo, pageSize } = ctx.query;
  const data = await list({ pageNo, pageSize });
  ctx.body = {
    data,
    code: 200,
  };
});
album.post("/list", validatePage, async (ctx) => {
  const { pageNo, pageSize } = ctx.request.body;
  const data = await list({ pageNo, pageSize });
  ctx.body = {
    data,
    code: 200,
  };
});
album.get("/info", validateId, async (ctx) => {
  const { id } = ctx.query;
  const data = await info(id);
  ctx.body = {
    data,
    code: 200,
  };
});
album.post("/info", validateId, async (ctx) => {
  const { id } = ctx.request.body;
  const data = await info(id);
  ctx.body = {
    data,
    code: 200,
  };
});
album.get("/showstart", validatePage, async (ctx) => {
  const { pageNo, pageSize } = ctx.query;
  const data = await xdpublish({ pageNo, pageSize });
  ctx.body = {
    data,
    code: 200,
  };
});
album.post("/showstart", validatePage, async (ctx) => {
  const { pageNo, pageSize } = ctx.request.body;
  const data = await xdpublish({ pageNo, pageSize });
  ctx.body = {
    data,
    code: 200,
  };
});

export default album;
