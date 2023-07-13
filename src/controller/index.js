import * as cheerio from 'cheerio';
import axios from 'axios';

export async function getHome() {
  const { data: html } = await axios.get('https://music.91q.com/');
  const $ = cheerio.load(html);
  let script = $('body>script').text();
  script = script.substring(script.indexOf('window.__NUXT__=') + 'window.__NUXT__='.length, script.indexOf(';var _hmt=_hmt'));
  const getData = new Function(`return ${script}`);
  return getData()
}

