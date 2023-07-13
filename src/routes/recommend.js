import Router from "koa-router";
import { banner, index, video } from "../controller/recommend.js";
import validate from "../middleware/checkPostData.js";

const recommend = new Router();

recommend.get("/", async (ctx) => {
  const data = await index();
  ctx.body = {
    data,
    code: 200,
  };
});
recommend.post("/", async (ctx) => {
  const data = await index();
  ctx.body = {
    data,
    code: 200,
  };
});

recommend.get("/banner", async (ctx) => {
  const data = await banner();
  ctx.body = {
    data,
    code: 200,
  };
});
recommend.post("/banner", async (ctx) => {
  const data = await banner();
  ctx.body = {
    data,
    code: 200,
  };
});

recommend.get(
  "/video",
  (ctx, next) => {
    if (!ctx.query.pageSize) {
      return (ctx.body = {
        code: 404,
        message: "need pageSize",
      });
    }
    next();
  },
  async (ctx) => {
    const { pageSize } = ctx.query;
    const data = await video({ pageSize });
    ctx.body = {
      data,
      code: 200,
    };
  }
);
recommend.post(
  "/video",
  async (ctx, next) => validate(ctx, next, ["pageSize"]),
  async (ctx) => {
    const { pageSize } = ctx.request.body;
    const data = await video({ pageSize });
    ctx.body = {
      data,
      code: 200,
    };
  }
);

export default recommend;
