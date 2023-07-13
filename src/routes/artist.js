import Router from "koa-router";
import { index, singer, songs, album } from "../controller/artist.js";
import validate from "../middleware/checkPostData.js";

const artist = new Router();

artist.get("/", async (ctx) => {
  const data = await index(ctx.query);
  ctx.body = {
    data,
    code: 200,
  };
});
artist.post("/", async (ctx) => {
  const data = await index(ctx.request.body);
  ctx.body = {
    data,
    code: 200,
  };
});
artist.get("/info", async (ctx) => {
  const { id } = ctx.query;
  if (!id) {
    ctx.body = {
      code: 404,
      message: "需要歌手id",
    };
  } else {
    const data = await singer(id);
    ctx.body = {
      code: 200,
      data,
    };
  }
});
artist.post(
  "/info",
  async (ctx, next) => validate(ctx, next, ["id"]),
  async (ctx) => {
    const { id } = ctx.request.body;
    const data = await singer(id);
    ctx.body = {
      code: 200,
      data,
    };
  }
);
artist.get("/songs", async(ctx, next) => validate(ctx, next, ["id", "pageSize", "pageNo"]), async (ctx) => {
  const { id: artistCode, pageSize, pageNo } = ctx.query;
  const data = await songs({ artistCode, pageSize, pageNo });
  ctx.body = {
    data,
    code: 200,
  };
});
artist.post("/songs", async(ctx, next) => validate(ctx, next, ["id", "pageSize", "pageNo"]) , async (ctx) => {
  const { id: artistCode, pageSize, pageNo } = ctx.request.body;
  const data = await songs({ artistCode, pageSize, pageNo });
  ctx.body = {
    data,
    code: 200,
  };
});
artist.get("/album", async(ctx, next) => validate(ctx, next, ["id", "pageSize", "pageNo"]), async (ctx) => {
  const { id: artistCode, pageSize, pageNo } = ctx.query;
  const data = await album({ artistCode, pageSize, pageNo });
  ctx.body = {
    data,
    code: 200,
  };
});
artist.post("/album", async(ctx, next) => validate(ctx, next, ["id", "pageSize", "pageNo"]), async (ctx) => {
  const { id: artistCode, pageSize, pageNo } = ctx.request.body;
  const data = await album({ artistCode, pageSize, pageNo });
  ctx.body = {
    data,
    code: 200,
  };
});

export default artist;
