import axios from 'axios';
import config from '../config/index.js';

const { baseURL, timeout } = config;
const request = axios.create({
  baseURL,
  timeout,
  headers: {
    'Device-Id': 'c2e8770a57bb05f02fa99fc10237a511',
    From: 'web',
    Requestid: '1689060278_ezK5QjH',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36'
  }
});

export default request