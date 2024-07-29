import Router from "koa-router";
import { index, singer, songs, album } from "../controller/artist.js";
import { useValidate } from "../middleware/index.js";
import Joi from "joi";
import { pagination, id } from "../validate/index.js";

const artist = new Router();

const requestArtistParams = pagination.concat(
  Joi.object({
    artistFristLetter: Joi.string().default(""),
    artistRegion: Joi.string().default(""),
    artistGender: Joi.string().default(""),
  })
);
artist.all("/", useValidate(requestArtistParams), index);

artist.all("/info", useValidate(id), singer);

artist.all("/songs", useValidate(pagination.concat(id)), songs);

artist.all("/album", useValidate(pagination.concat(id)), album);

export default artist;
