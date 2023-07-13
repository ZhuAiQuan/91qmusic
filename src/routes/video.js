import Router from "koa-router";
import { list, info } from "../controller/video.js";
import validate from "../middleware/checkPostData.js";

const video = new Router();

video.get("/list", async (ctx) => {
  const { pageNo, pageSize } = ctx.query;
  const data = await list({ pageNo, pageSize });
  ctx.body = {
    data,
    code: 200,
  };
});
video.get(
  "/list",
  async (ctx, next) => validate(ctx, next, ["pageNo", "pageSize"]),
  async (ctx) => {
    const { pageNo, pageSize } = ctx.request.body;
    const data = await list({ pageNo, pageSize });
    ctx.body = {
      data,
      code: 200,
    };
  }
);
video.get(
  "/info",
  async (ctx, next) => validate(ctx, next, ["id"]),
  async (ctx) => {
    const { id } = ctx.query;
    const data = await info(id);
    ctx.body = {
      data,
      code: 200,
    };
  }
);
video.post(
  "/info",
  async (ctx, next) => validate(ctx, next, ["id"]),
  async (ctx) => {
    const { id } = ctx.request.body;
    const data = await info(id);
    ctx.body = {
      data,
      code: 200,
    };
  }
);

export default video;
