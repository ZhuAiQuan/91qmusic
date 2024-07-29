import Router from "koa-router";
import { getList, getCategory, detail } from "../controller/songList.js";
import { useValidate } from "../middleware/index.js";
import { idNumber, pagination } from '../validate/index.js';
import Joi from 'joi';

const songList = new Router();

// const search = Joi.object({
//   id: Joi.number().integer(),
//   pageNo: Joi.number().integer().min(1).default(1),
//   pageSize: Joi.number().integer().min(1).default(30),
// });
// // 覆盖掉search 的id可选
// const songlist = search.keys({
//   id: Joi.number().integer().required(),
// });
const categoryId = idNumber.keys({
  id: Joi.number().integer(),
})
// 歌单列表
/**
 * subCateId 来源于/category接口返回的id
 */
songList.all("/", useValidate(pagination.concat(categoryId)), getList);
// 歌单分类标签
songList.all("/category", getCategory);
// 歌单详情
songList.all("/detail", useValidate(pagination.concat(idNumber)), detail);

export default songList;
