import Router from "koa-router";
import { list, info } from "../controller/video.js";
import { useValidate } from "../middleware/index.js";
import { pagination, id } from "../validate/index.js";

const video = new Router();

video.all("/list", useValidate(pagination), list);

video.all("/info", useValidate(id), info);

export default video;
