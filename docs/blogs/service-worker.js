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
    "url": "assets/js/11.b6dea5f7.js",
    "revision": "c5088edd25909b45083f6f8854bba3e0"
  },
  {
    "url": "assets/js/12.56841fdb.js",
    "revision": "fa9beed54bbcb559fe732fcfa97b13c5"
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
    "url": "assets/js/4.81ed2e6b.js",
    "revision": "71b0332a129ce37a7158dfcaf43d2c86"
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
    "url": "assets/js/app.0538ab2d.js",
    "revision": "257446b9cb9c7f66e91db3258743de3b"
  },
  {
    "url": "base/array.html",
    "revision": "bab651a68e0ceffa0132c0b53f07c02f"
  },
  {
    "url": "base/base_data.html",
    "revision": "3d18f747641982fa1e36503e49450005"
  },
  {
    "url": "base/date.html",
    "revision": "651ca19203dd62577f5a4fc9ddff05c0"
  },
  {
    "url": "base/environment_win10.html",
    "revision": "dfa9740929e6ae8c7abc59f71cc3a80c"
  },
  {
    "url": "base/index.html",
    "revision": "60b9a0f269b70630abb749996a53a588"
  },
  {
    "url": "base/modifier.html",
    "revision": "a7246ef27b27fcb4b85e2859400e68db"
  },
  {
    "url": "base/number.html",
    "revision": "9fff49b83822428ed662de6962a5a737"
  },
  {
    "url": "base/object.html",
    "revision": "d0869c33939fed50fa6cad98ae9a5ce4"
  },
  {
    "url": "base/reflect.html",
    "revision": "3824ab5dc21352ee6485a3d5343708a9"
  },
  {
    "url": "base/string.html",
    "revision": "7f12be84247560d2d1ddb487cb3943b1"
  },
  {
    "url": "index.html",
    "revision": "a139d0fb9594a1598f9c002ce9141deb"
  },
  {
    "url": "tools/idea.html",
    "revision": "c3dcd07d3f0a7932b45182560cb2867a"
  },
  {
    "url": "tools/index.html",
    "revision": "841739a9db73e1f43bfe2e385d282ed8"
  },
  {
    "url": "tools/maven.html",
    "revision": "37c5d0b371693ce13c041041c18ff3b8"
  },
  {
    "url": "tools/tomcat.html",
    "revision": "1ebb79ac6f3ad50e3728953ea3bb2a68"
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
