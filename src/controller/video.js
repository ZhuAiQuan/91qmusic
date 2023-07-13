import { createSign } from '../utils/sign.js';
import axios from '../utils/request.js';

export async function list(params) {
  params.pageNo = params.pageNo || 1;
  params.pageSize = params.pageSize || 20;
  params = createSign(params);
  const { data: { data } } = await axios.get('/video/list', { params });
  return data
}

export async function info(assetCode) {
  const params = createSign({assetCode});
  const { data: { data } } = await axios.get('/video/info', { params });
  return data
}