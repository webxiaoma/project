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
    "url": "assets/js/11.6514c165.js",
    "revision": "c9f0f1cb479259abe8dba049ec08f72a"
  },
  {
    "url": "assets/js/12.5e0f12f0.js",
    "revision": "807fe4d5b0557ca65b2eb6ecefc7026b"
  },
  {
    "url": "assets/js/13.14769261.js",
    "revision": "9d47b89020b2e70d23e9f628b02c2f8f"
  },
  {
    "url": "assets/js/14.7ca3419d.js",
    "revision": "ebe3a8017dcdc948f8dc42d380e46a5b"
  },
  {
    "url": "assets/js/15.5e3e7d37.js",
    "revision": "4d7b894397bc5211e6d2d7e19be1f8df"
  },
  {
    "url": "assets/js/16.fd0c04c9.js",
    "revision": "4aeb92a2955377967a2803fbf2255c47"
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
    "url": "assets/js/19.513bdef5.js",
    "revision": "a54f5bb46d3e94e92fe5f9338bd26c44"
  },
  {
    "url": "assets/js/2.5eb29a4c.js",
    "revision": "18c239cabf79d5941c9b32517558f755"
  },
  {
    "url": "assets/js/20.4ec89dd8.js",
    "revision": "63c2213f896a1e7f9212ef1ce3921ffa"
  },
  {
    "url": "assets/js/21.4db86d1b.js",
    "revision": "bda3d83c91f47f59466acdfca77a7725"
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
    "url": "assets/js/5.42c8ae52.js",
    "revision": "049ef632a08948535cbd441acd248a3a"
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
    "url": "assets/js/app.f59f0768.js",
    "revision": "273b6db354f7e42b2687f6ac026162c6"
  },
  {
    "url": "base/array.html",
    "revision": "8109cf22c575594b9dda600637a88066"
  },
  {
    "url": "base/base_data.html",
    "revision": "6770156634be2cef4345c89219f3c702"
  },
  {
    "url": "base/date.html",
    "revision": "256dbf556986c93ce81acf94b94af921"
  },
  {
    "url": "base/environment_win10.html",
    "revision": "8f3c4299e30080453a71d7cb41171e4e"
  },
  {
    "url": "base/index.html",
    "revision": "a7103ae9c2a979f48a06c7fbf2137ef6"
  },
  {
    "url": "base/modifier.html",
    "revision": "8e291ebe23a35bd2a723200ef7672f55"
  },
  {
    "url": "base/number.html",
    "revision": "d058ef8c959be5b449631dd47e8bc4ac"
  },
  {
    "url": "base/object.html",
    "revision": "0e5710d54e0ffe31da9a6370bcdfe887"
  },
  {
    "url": "base/reflect.html",
    "revision": "8847cd6b9468e85c637d318e551481ee"
  },
  {
    "url": "base/string.html",
    "revision": "dbbe6e968f1ad86995ffe1d65db6d740"
  },
  {
    "url": "index.html",
    "revision": "847e885e3ffb5bc0de8c587b0d4acf60"
  },
  {
    "url": "tools/idea.html",
    "revision": "74337b7a9746f6d853e548e558e7f1f2"
  },
  {
    "url": "tools/index.html",
    "revision": "6e7c999a290651fa7529997f0a8a6ef1"
  },
  {
    "url": "tools/maven.html",
    "revision": "7ef4f243efc817e19fa62a7fabebf30b"
  },
  {
    "url": "tools/tomcat.html",
    "revision": "4e82668f3a996ee354e31e5175adc6a0"
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
