import axios from 'axios';
import config from '../config/index.js';

const { baseURL, timeout } = config;
/**
 * Requestid 前面的是时间戳/1000 后面的乱码未知
 * Device-Id 为随机32位数字英文字符 在用户第一次请求时创建
 */
const request = axios.create({
  baseURL,
  timeout,
  headers: {
    'Device-Id': 'c2e8770a57bb05f02fa99fc10237a511',
    From: 'web',
    Requestid: '1721465224_ckxdbRm',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36'
  }
});

export default request