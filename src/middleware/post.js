// 格式化post 参数;formdata参数并不理想，最好别用formdata格式

export default async function (ctx, next) {
  // if (ctx.request.header["content-type"] === "application/json") {
  //   ctx.request.body = await parsePostData(ctx);
  //   await next();
  // } else {
  //   ctx.body = {
  //     code: 500,
  //     message: "request content-type error",
  //   };
  // }
  if(ctx.request.method === 'POST') {
    ctx.request.body = await parsePostData(ctx)
  }
  
  await next();
}

// 解析上下文里node原生请求的POST参数
function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postdata = "";
      ctx.req.addListener("data", (data) => {
        postdata += data;
      });
      ctx.req.addListener("end", function () {
        if (ctx.request.header['content-type'] === 'application/json') {
          resolve(JSON.parse(postdata))
        } else {
          let parseData = parseQueryStr(postdata);
          resolve(parseData);
        }
      });
    } catch (err) {
      reject(err);
    }
  });
}

// 将POST请求参数字符串解析成JSON
function parseQueryStr(queryStr) {
  if (typeof queryStr === "string") {
    let queryData = {};
    let queryStrList = queryStr.split("&");
    for (let [index, queryStr] of queryStrList.entries()) {
      let itemList = queryStr.split("=");
      queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    }
    return queryData;
  } else return queryStr
}
