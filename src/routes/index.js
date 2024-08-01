import Index from "koa-router";
import songList from "./songlist.js";
import song from "./song.js";
import recommend from "./recommend.js";
import artist from "./artist.js";
import album from "./album.js";
import video from "./video.js";
import search from "./search.js";
import top from "./top.js";

const router = new Index();

router.get("/", (ctx) => {
  // ctx.body = {
  //   code: 200,
  //   body: 'docs: https://github.com/ZhuAiQuan/91qmusic/tree/master/static/docs',
  //   message: 'request success!'
  // // }
  // ctx.redirect('/docs')
  ctx.body = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>91q music server</title>
    </head>
    <body>
      <h1>91q music: <a href="https://zhuaiquan.github.io/91qmusic/#/">docs</a></h1>
    </body>
    </html>
  `;
});
// router.use('/home', home.routes(), home.allowedMethods());
router.use("/songList", songList.routes(), songList.allowedMethods());
router.use("/song", song.routes(), song.allowedMethods());
router.use("/recommend", recommend.routes(), recommend.allowedMethods());
router.use("/artist", artist.routes(), artist.allowedMethods());
router.use("/album", album.routes(), album.allowedMethods());
router.use("/video", video.routes(), video.allowedMethods());
router.use("/search", search.routes(), search.allowedMethods());
router.use("/top", top.routes(), top.allowedMethods());

export default router;
