import Router from "koa-router";
import { sug, search as _search } from "../controller/search.js";
import validate from "../middleware/checkPostData.js";

const search = new Router();

/**
 * type 1单曲2歌手3专辑
 */
search.get(
  "/",
  async (ctx, next) => validate(ctx, next, ["word"]),
  async (ctx) => {
    const { word, pageSize, pageNo, type } = ctx.query;
    const data = await _search({ word, pageSize, pageNo, type });
    ctx.body = {
      data,
      code: 200,
    };
  }
);
search.post(
  "/",
  async (ctx, next) => validate(ctx, next, ["word"]),
  async (ctx) => {
    const { word, pageSize, pageNo, type } = ctx.request.body;
    const data = await _search({ word, pageSize, pageNo, type });
    ctx.body = {
      data,
      code: 200,
    };
  }
);
search.get(
  "/sug",
  async (ctx, next) => validate(ctx, next, ["word"]),
  async (ctx) => {
    const { word } = ctx.query;
    const data = await sug(word);
    ctx.body = {
      data,
      code: 200,
    };
  }
);
search.post(
  "/sug",
  async (ctx, next) => validate(ctx, next, ["word"]),
  async (ctx) => {
    const { word } = ctx.request.body;
    const data = await sug(word);
    ctx.body = {
      data,
      code: 200,
    };
  }
);

export default search;
