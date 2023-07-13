import { createSign } from '../utils/sign.js';
import axios from '../utils/request.js';

export async function getTop(ctx) {
  const params = createSign();
  const { data } = await axios.get('/bd/category', { params });
  if (data.data) {
    ctx.body = {
      data: data.data,
      code: 200
    }
  } else {
    ctx.body = data
  }
}

export async function getTopList(ctx) {
  let bdid;
  if (ctx.request.method.toLocaleLowerCase() === 'get') {
    bdid = ctx.query.id;
  } else {
    bdid = ctx.request.body.id
  };
  const params = createSign({ bdid });
  const { data } = await axios.get('/bd/list', { params });
  if (data.data) {
    ctx.body = {
      data: data.data,
      code: 200
    }
  } else {
    ctx.body = data
  }
}