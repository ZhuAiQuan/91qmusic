import * as cheerio from 'cheerio';

export async function getHome() {
  const html = await fetch('https://music.91q.com/', { method: 'get' }).then((res) => res.text());
  const $ = cheerio.load(html);
  let script = $('body>script').text();
  script = script.substring(script.indexOf('window.__NUXT__=') + 'window.__NUXT__='.length, script.indexOf(';var _hmt=_hmt'));
  const getData = new Function(`return ${script}`);
  console.log(getData);
  return getData()
}

