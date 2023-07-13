import Index from 'koa-router';
import home from './home.js';
import songList from './songlist.js';
import song from './song.js';
import recommend from './recommend.js';
import artist from './artist.js';
import album from './album.js';
import video from './video.js';
import search from './search.js'

const router = new Index();

router.get('/', ctx => {
  ctx.body = {
    code: 200,
    message: 'request success!'
  }
});
router.use('/home', home.routes(), home.allowedMethods());
router.use('/songList', songList.routes(), songList.allowedMethods());
router.use('/song', song.routes(), song.allowedMethods());
router.use('/recommend', recommend.routes(), recommend.allowedMethods());
router.use('/artist', artist.routes(), artist.allowedMethods());
router.use('/album', album.routes(), album.allowedMethods());
router.use('/video', video.routes(), video.allowedMethods());
router.use('/search', search.routes(), search.allowedMethods());

export default router;