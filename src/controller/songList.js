import { createSign } from '../utils/sign.js';
import axios from '../utils/request.js'

export async function getList(params) {
  params.pageNo = params.pageNo || 1;
  params.pageSize = params.pageSize || 50;
  if (!params.subCateId) delete params.subCateId;
  params = createSign(params);
  const { data } = await axios.get('/tracklist/list', {
    params
  });
  if (data.data && data.state) return data.data
  else return null
};

export async function getCategory() {
  const params = createSign();
  const { data } = await axios.get('/tracklist/category', { params });
  return data?.data || null
}

export async function detail(params) {
  params.pageSize = params.pageSize || 50;
  params = createSign(params);
  const { data } = await axios.get('/tracklist/info', {
    params
  });
  return data?.data || data
}