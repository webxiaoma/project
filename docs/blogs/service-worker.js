/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/0.styles.a15b9153.css",
    "revision": "99e81078dccb60f789c338a76cd884bb"
  },
  {
    "url": "assets/img/idea2.c6b009b1.jpg",
    "revision": "c6b009b1ab0867d85084362938dba76c"
  },
  {
    "url": "assets/img/idea3.216bb9bc.png",
    "revision": "216bb9bcef1804036fd7062d089fe6c9"
  },
  {
    "url": "assets/img/idea6.699065e5.png",
    "revision": "699065e5d1b025037576fc5f4d65eb83"
  },
  {
    "url": "assets/img/idea9.040c2bfc.png",
    "revision": "040c2bfcee6aa2b437379041c6290238"
  },
  {
    "url": "assets/img/j1.fc236e0a.jpg",
    "revision": "fc236e0aa5089835075e3304c0e3280b"
  },
  {
    "url": "assets/img/j2.8288f6da.png",
    "revision": "8288f6da7716e1515e4c08b61cdbb775"
  },
  {
    "url": "assets/img/j4.4127a9ba.png",
    "revision": "4127a9ba5b38130c12eb681923e69a48"
  },
  {
    "url": "assets/img/j7.c9880da6.png",
    "revision": "c9880da67a9536b27879cdd16dc6b150"
  },
  {
    "url": "assets/img/j8.d5574609.jpg",
    "revision": "d5574609d4ab3c52c687d601ded57444"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.27559d94.js",
    "revision": "ec25e290c2eda72a9eaed92008ce4e88"
  },
  {
    "url": "assets/js/11.5c9f165a.js",
    "revision": "301f476d0d3b3cb7d3e3243e57d02377"
  },
  {
    "url": "assets/js/12.56841fdb.js",
    "revision": "fa9beed54bbcb559fe732fcfa97b13c5"
  },
  {
    "url": "assets/js/13.bab345e2.js",
    "revision": "1d487854336146049c132543f9e514ac"
  },
  {
    "url": "assets/js/14.f381fab5.js",
    "revision": "adb153a5a3555ed265141ca05cacb851"
  },
  {
    "url": "assets/js/15.ab875a51.js",
    "revision": "d8020db0ffbd6090f98cf78728d1d444"
  },
  {
    "url": "assets/js/16.4aab920b.js",
    "revision": "f6d9cb7edff330c46064080637feb5f9"
  },
  {
    "url": "assets/js/17.40f1e0c6.js",
    "revision": "671278b8224c19bfd84cf886d4fa3f8c"
  },
  {
    "url": "assets/js/18.5eec7228.js",
    "revision": "d23ca2b26e91b3679f48712765c73e6b"
  },
  {
    "url": "assets/js/19.c62594b6.js",
    "revision": "ec3121068646a5168873fa865b821fc4"
  },
  {
    "url": "assets/js/2.5eb29a4c.js",
    "revision": "18c239cabf79d5941c9b32517558f755"
  },
  {
    "url": "assets/js/20.c93c9638.js",
    "revision": "b629f56a9de735f5cac8fc958c91cc46"
  },
  {
    "url": "assets/js/21.bf05e761.js",
    "revision": "c4e8af5b5616b892dce342dc166d29e1"
  },
  {
    "url": "assets/js/22.dd616c8c.js",
    "revision": "1b6069710ea9c2f70ff2456f2bf86d57"
  },
  {
    "url": "assets/js/23.25c22595.js",
    "revision": "97146e5b6dfb818e75f853e90d08844d"
  },
  {
    "url": "assets/js/3.adc37e4e.js",
    "revision": "34349499596f06663e50ef8a410fb402"
  },
  {
    "url": "assets/js/4.95d65b4b.js",
    "revision": "15cad310385372bf947307f0b9a485de"
  },
  {
    "url": "assets/js/5.59a6d3b4.js",
    "revision": "74ad8b59a0411ee7d28f98507abb4b04"
  },
  {
    "url": "assets/js/6.2553c4d5.js",
    "revision": "907578b7b281fff7c36874db125d4298"
  },
  {
    "url": "assets/js/7.a4462721.js",
    "revision": "d353f5765792d01fae7c221a2236ae06"
  },
  {
    "url": "assets/js/8.91be4a8f.js",
    "revision": "3d3057357a52bed4f91e4926cc5b9085"
  },
  {
    "url": "assets/js/9.4145aa72.js",
    "revision": "187481747621317e7311a0d3a2c1c8b1"
  },
  {
    "url": "assets/js/app.fb4b1fd6.js",
    "revision": "a4577f3f2c0375cb272bf46924b628b3"
  },
  {
    "url": "base/array.html",
    "revision": "158843edae52c3469aff71b5ce9553aa"
  },
  {
    "url": "base/base_data.html",
    "revision": "130a2f76bd41a9e79a317e8791762649"
  },
  {
    "url": "base/date.html",
    "revision": "cc659aaebbcdabdfdea3d92d159646a0"
  },
  {
    "url": "base/environment_win10.html",
    "revision": "271a2fc9aa726fe12f794cde33ea8538"
  },
  {
    "url": "base/index.html",
    "revision": "b53f6733d5df1154f7dc590d8a9468b3"
  },
  {
    "url": "base/modifier.html",
    "revision": "4f57d6526c192cdf74246d32fa295568"
  },
  {
    "url": "base/number.html",
    "revision": "a484f797dc98055d32ed695d0d9f0805"
  },
  {
    "url": "base/object.html",
    "revision": "80c7decd0a2c15a6feb5a0076dbe564b"
  },
  {
    "url": "base/reflect.html",
    "revision": "9a16bf9f9b25f1631b4b9e5f6c2f1136"
  },
  {
    "url": "base/string.html",
    "revision": "769e0fe09efb930496bbb51d649e8558"
  },
  {
    "url": "index.html",
    "revision": "fd6b72cd399363e114e0330ebe9fdf23"
  },
  {
    "url": "tools/idea.html",
    "revision": "4e6de5ee4334e6cc7fa84d370a537ce2"
  },
  {
    "url": "tools/index.html",
    "revision": "8c8f41bc15a5c9642ee43ce72245b0f4"
  },
  {
    "url": "tools/maven.html",
    "revision": "8514495ad16c40d787c01d27936299ad"
  },
  {
    "url": "tools/tomcat.html",
    "revision": "521cee147f63fb40680f35ea54faf4f9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
