import Router from "koa-router";
import { getList, getCategory, detail } from "../controller/songList.js";
import validate from "../middleware/checkParamsId.js";
import validateParams from "../middleware/checkPostData.js";

const songList = new Router();

// 歌单列表
/**
 * subCateId 来源于/category接口返回的id
 */
songList.get("/", async (ctx) => {
  const { pageSize, pageNo, id } = ctx.query;
  const data = await getList({ pageSize, pageNo, subCateId: id });
  ctx.body = {
    data,
    code: 200,
  };
});
songList.post(
  "/",
  async (ctx, next) => await validateParams(ctx, next, ["pageNo", "pageSize"]),
  async (ctx) => {
    const { pageSize, pageNo, id } = ctx.request.body;
    const data = await getList({ pageSize, pageNo, subCateId: id });
    ctx.body = {
      data,
      code: 200,
    };
  }
);
// 歌单分类标签
songList.get("/category", async (ctx) => {
  const data = await getCategory();
  ctx.body = {
    data,
    code: 200,
  };
});
songList.post("/category", async (ctx) => {
  const data = await getCategory();
  ctx.body = {
    data,
    code: 200,
  };
});
// 歌单详情
songList.get("/detail", validate, async (ctx) => {
  const { id, pageSize } = ctx.query;
  const data = await detail({ id, pageSize });
  ctx.body = {
    code: 200,
    data,
    message: "success",
  };
});
songList.post(
  "/detail",
  async (ctx, next) => validateParams(ctx, next, ["id", "pageSize"]),
  async (ctx) => {
    const { id, pageSize } = ctx.request.body;
    const data = await detail({ id, pageSize });
    ctx.body = {
      code: 200,
      data,
    };
  }
);

export default songList;
