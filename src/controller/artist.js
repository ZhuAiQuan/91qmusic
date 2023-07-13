import { createSign } from '../utils/sign.js';
import axios from '../utils/request.js';

export async function index(params) {
  params.pageNo = params.pageNo || 1;
  params.pageSize = params.pageSize || 48;
  if (!params.artistFristLetter) delete params.artistFristLetter;
  if (!params.artistRegion) delete params.artistRegion;
  if (!params.artistGender) delete params.artistGender;
  params = createSign(params);
  const { data: { data } } = await axios.get('/artist/list', { params });
  return data
}

export async function singer(artistCode) {
  const params = createSign({ artistCode });
  const { data: { data } } = await axios.get('/artist/info', { params });
  return data
}

export async function songs(params) {
  params.pageNo = params.pageNo || 1;
  params.pageSize = params.pageSize || 50;
  params = createSign(params);
  const { data: { data } } = await axios.get('/artist/song', { params });
  return data
}

export async function album(params) {
  params.pageNo = params.pageNo || 1;
  params.pageSize = params.pageSize || 15;
  params = createSign(params);
  const { data: { data } } = await axios.get('/artist/album', { params });
  return data
}
