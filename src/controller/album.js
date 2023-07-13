import { createSign } from '../utils/sign.js';
import axios from '../utils/request.js';

export async function list(params) {
  params.pageNo = params.pageNo || 1;
  params.pageSize = params.pageSize || 50;
  params = createSign(params);
  const { data: { data } } = await axios.get('/album/list', { params });
  return data
}

export async function info(albumAssetCode) {
  const params = createSign({ albumAssetCode });
  const { data: { data } } = await axios.get('/album/info', { params });
  return data
}

export async function xdpublish(params) {
  params.pageNo = params.pageNo || 1;
  params.pageSize = params.pageSize || 50;
  params = createSign(Object.assign(params, { type: 'showstart', moreApi: encodeURIComponent('v1/album/xdpublish'), module_name: encodeURIComponent('秀动发行') }));
  const { data: { data } } = await axios.get('/album/xdpublish', { params });
  return data
}