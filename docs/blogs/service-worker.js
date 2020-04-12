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
    "url": "assets/js/10.de736811.js",
    "revision": "915ba54a7b8c2860b3f947ff89a3da01"
  },
  {
    "url": "assets/js/11.89c3d5a7.js",
    "revision": "ce6932c109637d56db5abff868461372"
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
    "url": "assets/js/14.08a9f71a.js",
    "revision": "3a3526eb9aaf97b0ff005797966142ff"
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
    "url": "assets/js/17.f6e34e67.js",
    "revision": "3f61c14a811840f60be33c5d02f4dc66"
  },
  {
    "url": "assets/js/18.1038deae.js",
    "revision": "d68b6d586a68ec942e2ba70e2715fa1e"
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
    "url": "assets/js/20.fcd6ba8e.js",
    "revision": "56f0aef946e180a94d156a17cda2baa8"
  },
  {
    "url": "assets/js/21.807779ba.js",
    "revision": "4cb8ef77bf532021a4ad2c43a3691b14"
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
    "url": "assets/js/4.0d162a4e.js",
    "revision": "5b5ad8dfac1eeb8b8dc7a929e56321bc"
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
    "url": "assets/js/app.ffc30b23.js",
    "revision": "ab80aca928640814329fb732ef1c8a91"
  },
  {
    "url": "base/array.html",
    "revision": "18281d3500123c764bdd8d9991c0b425"
  },
  {
    "url": "base/base_data.html",
    "revision": "5fc30c896eda5718dbd1270fc4bc9ee9"
  },
  {
    "url": "base/date.html",
    "revision": "ef4c15693a47b068febf688b1a62cae5"
  },
  {
    "url": "base/environment_win10.html",
    "revision": "e4fc7ad9108bbe991cd5ecb0b8e3f5e5"
  },
  {
    "url": "base/index.html",
    "revision": "70902e1e26d312e2785afb8c069efe53"
  },
  {
    "url": "base/modifier.html",
    "revision": "03fb888007bdbfc4b9ead55bf0a6e108"
  },
  {
    "url": "base/number.html",
    "revision": "e710c736fa795a4e133a0ad6bc938238"
  },
  {
    "url": "base/object.html",
    "revision": "ce1b99a3a27f9f89438e8a23785a9e69"
  },
  {
    "url": "base/reflect.html",
    "revision": "08c9a5fb0bd194f5fb1629ceb5d910a3"
  },
  {
    "url": "base/string.html",
    "revision": "c4f41936834e25166e9f378ca65cf3c9"
  },
  {
    "url": "index.html",
    "revision": "92878aa43284c5dd30836ea439acb662"
  },
  {
    "url": "tools/idea.html",
    "revision": "64909acb940a7a81a59a6157e9392550"
  },
  {
    "url": "tools/index.html",
    "revision": "1aa8bdcf31254450b9c2c84122d9dd49"
  },
  {
    "url": "tools/maven.html",
    "revision": "f1cd4f5568429fb3363f7b84b09e6b07"
  },
  {
    "url": "tools/tomcat.html",
    "revision": "94afb18226e43a9bcbe9997769aacf10"
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
