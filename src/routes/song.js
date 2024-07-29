import Router from "koa-router";
import { getSong, detail } from "../controller/song.js";
import { useValidate } from "../middleware/index.js";
import Joi from "joi";
import { id } from "../validate/index.js";

const song = new Router();

const songParams = id.concat(
  Joi.object({
    // rate: Joi.alternatives().try(Joi.number().valid(128, 256, 320), Joi.string().valid('flac')).default(320),
    rate: Joi.number().valid(64, 128, 320, 3000),
  })
);
// TSID 歌曲信息 不包含播放链接
song.all("/", useValidate(id), getSong);
// 包含播放链接
/**
 * rate 来自于allRate字段
 */
song.all("/detail", useValidate(songParams), detail);

export default song;
