export default function (ctx, next) {
  if (ctx.request.header['content-type'] === 'application/json') {
    next()
  } else {
    return ctx.body = {
      code: 500,
      message: 'request content-type error!'
    }
  }
  // let postData = "";
  // let type = ctx.request.header['content-type'];
  // if (type.includes('multipart/form-data;')) {
  //   type = type.substring(0, type.indexOf(';'));
  // }
  
  // ctx.req.on("data", (data) => {
  //   postData += data;
  //   switch(type) {
  //     case 'application/x-www-form-urlencoded':
  //       ctx.request.body = formatFrom(postData);
  //       break;
  //   }
  // });
  // ctx.req.on("end", () => {
  //   try {
  //     const { data } = JSON.parse(postData);
  //     console.log(postData)
  //     ctx.request.body = data;
  //   } catch {
  //     // ctx.res.end();
  //     return ctx.body = {
  //       code: 404,
  //       message: 'system error'
  //     }
  //   }
  //   next();
  // });
}

// function formatFrom(str) {
//   return Object.fromEntries(str.split('&').map(item => item.split('=')))
// }