import Router from "koa-router";
import { list, info, xdpublish } from "../controller/album.js";
import { useValidate } from "../middleware/index.js";
import { pagination, id } from "../validate/index.js";

const album = new Router();

album.all("/list", useValidate(pagination), list);

album.all("/info", useValidate(id), info);

album.all("/showstart", useValidate(pagination), xdpublish);

export default album;
