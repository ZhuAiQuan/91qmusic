import Koa from 'koa';
import cors from 'koa-cors';
import router from './src/routes/index.js';
import static_koa from 'koa-static';
import path from 'path';
import parseData from './src/middleware/post.js';
import end from './src/middleware/end.js'

const app = new Koa();
const assets = './static';
const __dirname = path.resolve();

app.use(end).use(static_koa(path.join(__dirname, assets))).use(cors()).use(parseData)
// .use(bodyparser());
app.use(router.routes());

app.listen(1000, () => {
  console.log(`server running at http://localhost:1000`)
})