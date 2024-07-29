export { createSign } from "./sign.js";
import RequestFetch from "./fetch.js";
console.log(process.env.APPID)
export const fetcher = new RequestFetch(process.env.BASE_URL);

// 生成指定长度的随机字符
const str = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
export function generateMixed(n = 32) {
  let res = "";
  for (let i = 0; i < n; i++) {
    const id = Math.ceil(Math.random() * 35);
    res += str[id];
  }
  return res.toLocaleLowerCase();
}

/**
 * 伪造user agent
 * 来源于netmusic [root]/util/request
 */
export const agent = [
  // macOS 10.15.6  Firefox / Chrome / Safari
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:80.0) Gecko/20100101 Firefox/80.0",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.30 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.2 Safari/605.1.15",
  // Windows 10 Firefox / Chrome / Edge
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:80.0) Gecko/20100101 Firefox/80.0",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.30 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/13.10586",
  // Linux 就算了
];
