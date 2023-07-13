import { createSign } from '../utils/sign.js';
import axios from '../utils/request.js';

export async function getSong(TSID) {
  const params = createSign({ TSID });
  const { data } = await axios.get('/song/info', { params });
  return data?.data || null
}

export async function detail(TSID, rate) {
  const params = createSign({ TSID, rate });
  const { data } = await axios.get('/song/tracklink', { params });
  return data?.data || null
}