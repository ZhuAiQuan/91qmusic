import { createSign } from '../utils/sign.js';
import axios from '../utils/request.js';

export async function sug(word) {
  const params = createSign({ word });
  const { data: { data } } = await axios.get('/search/sug', { params });
  return data
}

export async function search(params) {
  params.pageNo = params.pageNo || 1;
  params.pageSize = params.pageSize || 20;
  params.type = params.type || 1;
  params = createSign(params);
  const { data: { data } } = await axios.get('/search', { params });
  return data
}