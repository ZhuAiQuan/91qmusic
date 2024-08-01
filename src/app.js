#!/usr/bin/env node

import 'dotenv/config'; // 自动加载环境变量
import Koa from 'koa';
import cors from 'koa-cors';
import router from '../src/routes/index.js';
import static_koa from 'koa-static';
import path from 'path';
import { useRequest, useEnd, useParseData } from '../src/middleware/index.js';
console.log(process.env);
const app = new Koa();
const assets = '../static';
const __dirname = path.resolve();

app.use(useEnd).use(useRequest).use(static_koa(path.join(__dirname, assets))).use(cors()).use(useParseData);
app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.PORT, () => {
  console.log(`server running at http://localhost:${process.env.PORT}`)
})
