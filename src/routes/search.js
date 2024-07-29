import Router from "koa-router";
import { sug, search as _search } from "../controller/search.js";
import Joi from "joi";
import { useValidate } from "../middleware/index.js";
import { pagination } from '../validate/index.js';

const search = new Router();

const searchParams = Joi.object({
  type: Joi.number().valid(1, 2, 3).required(),
});
const hotword = Joi.object({
  word: Joi.string().required(),
});
/**
 * type 1单曲2歌手3专辑
 */
search.all("/", useValidate(searchParams.concat(pagination)), _search);
search.all("/sug", useValidate(hotword), sug);

export default search;
