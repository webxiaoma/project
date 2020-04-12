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
    "url": "assets/js/10.107f0cda.js",
    "revision": "8db68519150f6e6aee704b52c94f31f1"
  },
  {
    "url": "assets/js/11.6231873f.js",
    "revision": "65ed44cf0d3e58a2452bcab013ca24d1"
  },
  {
    "url": "assets/js/12.caebf95c.js",
    "revision": "1369ffb2d1059501e7d827453851667f"
  },
  {
    "url": "assets/js/13.bab345e2.js",
    "revision": "1d487854336146049c132543f9e514ac"
  },
  {
    "url": "assets/js/14.3d11e869.js",
    "revision": "b3f95d6a799386f60828819587b3a9bb"
  },
  {
    "url": "assets/js/15.ab875a51.js",
    "revision": "d8020db0ffbd6090f98cf78728d1d444"
  },
  {
    "url": "assets/js/16.b5d349f8.js",
    "revision": "28ca973a93cd2ad82b624c9abb06a3ec"
  },
  {
    "url": "assets/js/17.8502d79e.js",
    "revision": "60ca1632ac0470671bc0b83f13958f62"
  },
  {
    "url": "assets/js/18.0294d098.js",
    "revision": "08fb0210bbb6874f9e4e680f14594d5c"
  },
  {
    "url": "assets/js/19.1415bbcc.js",
    "revision": "1662a42c58baeebe176ff4a8b30fef25"
  },
  {
    "url": "assets/js/2.5eb29a4c.js",
    "revision": "18c239cabf79d5941c9b32517558f755"
  },
  {
    "url": "assets/js/20.16aebb9f.js",
    "revision": "580012fe1b780ed713ac14e97f6a5340"
  },
  {
    "url": "assets/js/21.b1678ca2.js",
    "revision": "354bdee6742a413ebd1f3bd814d02952"
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
    "url": "assets/js/4.8ffcf2f1.js",
    "revision": "73858af9fe6ea9008aabd9c5a56745cd"
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
    "url": "assets/js/9.cb2823bf.js",
    "revision": "95b1da2954dc17c25f135c7da387b047"
  },
  {
    "url": "assets/js/app.d477af14.js",
    "revision": "d3a3589378487ae74f14f4fe9244825b"
  },
  {
    "url": "base/array.html",
    "revision": "7a9d18f6e9d16e1da39e1159a69a9907"
  },
  {
    "url": "base/base_data.html",
    "revision": "600ab0d949c3f30ac8cbed7e585b2221"
  },
  {
    "url": "base/date.html",
    "revision": "b5ce8b2dec3c45c929e40a096b5f7a08"
  },
  {
    "url": "base/environment_win10.html",
    "revision": "a44355d5a77fece5f05791f372c82ad6"
  },
  {
    "url": "base/index.html",
    "revision": "bb03068f90673cd7cfb49e14e0d776ab"
  },
  {
    "url": "base/modifier.html",
    "revision": "fcd0bcbb3f8405ebbe5c0bd53a0a7639"
  },
  {
    "url": "base/number.html",
    "revision": "4e4016de61df152434ad7b94aef121e5"
  },
  {
    "url": "base/object.html",
    "revision": "fceb61817829625d82f861edfffa5c3f"
  },
  {
    "url": "base/reflect.html",
    "revision": "bcb37e8158af0c791b995c5d5c8010ac"
  },
  {
    "url": "base/string.html",
    "revision": "092d3bbaaa45acce1984d8720e85eb90"
  },
  {
    "url": "index.html",
    "revision": "f082f73efc1ddc85ff7ee4de208dabcd"
  },
  {
    "url": "tools/idea.html",
    "revision": "f916902548bdac8d3beec5f645bdb292"
  },
  {
    "url": "tools/index.html",
    "revision": "69434982173b789a805941ac129a4a08"
  },
  {
    "url": "tools/maven.html",
    "revision": "9676e1cb7b4612e2f8896edeef8fe4c6"
  },
  {
    "url": "tools/tomcat.html",
    "revision": "a97a0fbf1827c75463000f05668c2de2"
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
