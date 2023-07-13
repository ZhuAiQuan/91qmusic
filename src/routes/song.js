import Router from "koa-router";
import { getSong, detail } from "../controller/song.js";
import validate from "../middleware/checkPostData.js";

const song = new Router();

// 歌曲信息 不包含播放链接
song.get(
  "/",
  async (ctx, next) => validate(ctx, next, ["id"]),
  async (ctx) => {
    const { id } = ctx.query;
    const data = await getSong(id);
    ctx.body = {
      data,
      code: 200,
      message: "success",
    };
  }
);
song.post(
  "/",
  async (ctx, next) => validate(ctx, next, ["id"]),
  async (ctx) => {
    const { id } = ctx.request.body;
    const data = await getSong(id);
    ctx.body = {
      data,
      code: 200,
      message: "success",
    };
  }
);
// 包含播放链接
/**
 * rate 来自于allRate字段
 */
song.get(
  "/detail",
  async (ctx, next) => validate(ctx, next, ["id"]),
  async (ctx) => {
    const { id, rate } = ctx.query;
    const data = await detail(id, rate || 320);
    ctx.body = {
      data,
      code: 200,
      message: "success",
    };
  }
);
song.post(
  "/detail",
  async (ctx, next) => validate(ctx, next, ["id"]),
  async (ctx) => {
    const { id, rate } = ctx.request.body;
    const data = await detail(id, rate || 320);
    ctx.body = {
      data,
      code: 200,
      message: "success",
    };
  }
);

export default song;
