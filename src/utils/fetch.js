/**
 * 该网站皆为get请求 所以不需要把参数放到body上
 */

import { generateMixed, createSign, agent } from "../utils/index.js";
import NodeCache from "node-cache";

/**
 * 缓存3个小时 每5分钟检查一次
 */
const cache = new NodeCache({ stdTTL: 60 * 60 * 3, checkperiod: 60 * 5 });

export default class HttpFetch {
  constructor(baseUrl = "") {
    this.baseUrl = baseUrl;
    this.ctx = null;
    this.headers = new Headers();
    this.headers.append("Referer", "https://music.91q.com/");
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Accept", "application/json, text/plain, */*");
    this.headers.append("From", "web");
  }
  /**
   * 获取当前请求的上下文
   * @param {*} ctx
   */
  getCurrentContext(ctx) {
    this.ctx = ctx;
    this.headers.append("Requestid", `${~~(Date.now() / 1000)}_${generateMixed(7)}`);
    this.headers.append("user-agent", ctx.get("user-agent") || agent[~~(Math.random() * agent.length)]);

    // 每次发起请求先从http里读取到device id再添加到头部
    const deviceId = ctx.cookies.get("device-id");
    if (deviceId) {
      this.headers.append("device-id", deviceId);
    } else {
      ctx.cookies.set("device-id", generateMixed(), {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 30, // 设备id有效期为30天
      });
    }
  }
  /**
   * 请求主体
   * @param {*} options 请求的参数 包括url params
   */
  async request(options) {
    options.params = options?.params || {};
    // 检查是否有缓存数据
    const cacheKey = `${options.url}_${JSON.stringify(options)}`;
    const cacheData = cache.get(cacheKey);
    if (cacheData) {
      this.ctx.body = {
        data: cacheData,
      };
    }

    const path = new URLSearchParams(createSign(options.params)).toString();
    const request = new Request(`${this.baseUrl}${options.url}?${path}`, {
      method: "get",
      headers: this.headers,
    });
    try {
      const data = await fetch(request).then((res) => res.json());
      cache.set(cacheKey, data);
      this.ctx.body = {
        data,
      };
    } catch (e) {
      console.log(`request error：`);
      console.log(e);
      this.ctx.status = 500;
      this.ctx.body = {
        message: 'unknow errors, Please check logs',
        code: 500,
      }
    }
  }
}
