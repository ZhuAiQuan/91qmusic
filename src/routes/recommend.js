import Router from "koa-router";
import { banner, index, video } from "../controller/recommend.js";
import { useValidate } from "../middleware/index.js";
import { pagination } from '../validate/index.js';

const recommend = new Router();

recommend.all("/", index);

recommend.all("/banner", banner);

recommend.all("/video", useValidate(pagination), video);

export default recommend;
