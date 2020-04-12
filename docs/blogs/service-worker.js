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
    "url": "assets/js/11.a859546b.js",
    "revision": "e81a15c85b2723a06574b9a79e960fbe"
  },
  {
    "url": "assets/js/12.32b7e9d9.js",
    "revision": "d55dc67ec78962c36edfeebdd4e0cd65"
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
    "url": "assets/js/19.effe0188.js",
    "revision": "c8939f704cd46eb693ec0507069f6cfb"
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
    "url": "assets/js/5.af1aca14.js",
    "revision": "5160c086c30033eaa1bef87c2856631d"
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
    "url": "assets/js/app.524fa14d.js",
    "revision": "014bd04bd81dc1d7401bffabc50716e7"
  },
  {
    "url": "base/array.html",
    "revision": "c2a13f7dc88f34c1a9f70b0b2016c315"
  },
  {
    "url": "base/base_data.html",
    "revision": "5f512429f8f8bfd694268d03feeade6d"
  },
  {
    "url": "base/date.html",
    "revision": "ecdbafa04ca6a5c218025810ab1bab5e"
  },
  {
    "url": "base/environment_win10.html",
    "revision": "6c62c1e0c3906481f6e34965818879ae"
  },
  {
    "url": "base/index.html",
    "revision": "c4b99631acceaa53201dee53fb9e2954"
  },
  {
    "url": "base/modifier.html",
    "revision": "5e0a7fd9157b2d1420357efb51416832"
  },
  {
    "url": "base/number.html",
    "revision": "cab578920aaad172f3e9ee98b7a24dc9"
  },
  {
    "url": "base/object.html",
    "revision": "7b64729820ff136366676218bc202556"
  },
  {
    "url": "base/reflect.html",
    "revision": "d21c4dcc777ae9784f821edd93c80afa"
  },
  {
    "url": "base/string.html",
    "revision": "b6f12a2ddfc615555c09b1fbce6df781"
  },
  {
    "url": "index.html",
    "revision": "417d6e42ba275439ef06a50e8eed7cea"
  },
  {
    "url": "tools/idea.html",
    "revision": "82342a254386de8ea7ae0fe8d6f2d94a"
  },
  {
    "url": "tools/index.html",
    "revision": "55e431a2a1662b236b566d3969a2f503"
  },
  {
    "url": "tools/maven.html",
    "revision": "5681e8ef3192c7cdaf03502492e5635b"
  },
  {
    "url": "tools/tomcat.html",
    "revision": "9913f9180c96cdf32adc3ada75086ab9"
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
