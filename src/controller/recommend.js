import { createSign } from '../utils/sign.js';
import axios from '../utils/request.js';

export async function banner() {
  const params = createSign();
  const { data } = await axios.get('/banner/list', { params });
  return data?.data || null
}

export async function index() {
  const params = createSign();
  const { data } = await axios.get('/index', { params });
  return data?.data || null
}

export async function video(params) {
  params.pageSize = params.pageSize || 8;
  params = createSign(params);
  const { data } = await axios.get('/video/recommend', { params });
  return data?.data || null
}