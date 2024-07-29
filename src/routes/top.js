import Router from 'koa-router';
import { getTop, getTopList } from '../controller/top.js';
import { useValidate } from '../middleware/index.js';
import { idNumber } from '../validate/index.js';

const top = new Router();

top.all('/', getTop);
top.all('/list', useValidate(idNumber), getTopList);

export default top;