import Router from 'koa-router';
import { getHome } from '../controller/index.js'

const home = new Router();
home.get('/', async ctx => {
  const { data, error } = await getHome();
  if (!error) {
    ctx.body = {
      data,
      code: 200,
    }
  } else {
    ctx.body = {
      code: 404,
      message: 'fail'
    }
  }
});

export default home