import Router from 'koa-router';
import { getTop, getTopList } from '../controller/top.js';
import validate from '../middleware/checkPostData.js'

const top = new Router();

top.get('/', getTop);
top.post('/', getTop);

top.get('/list', async(ctx, next) => validate(ctx, next, ["id"]), getTopList);
top.post('/list', async(ctx, next) => validate(ctx, next, ["id"]), getTopList)


export default top;