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
    "url": "404.html",
    "revision": "b0a5b319521e77b716255e781a34e206"
  },
  {
    "url": "assets/css/0.styles.afd911ae.css",
    "revision": "264222c1560aede7dca78bfbcd694e90"
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
    "url": "assets/js/10.2ece5de3.js",
    "revision": "7f8c720ce9d0f6a0696b210392a99ada"
  },
  {
    "url": "assets/js/11.87e99979.js",
    "revision": "76f91e24cd145b7ec69971bf6ddefd72"
  },
  {
    "url": "assets/js/12.9883cc60.js",
    "revision": "1ea5da6422135ffd51c52dc6b328ac69"
  },
  {
    "url": "assets/js/13.92f32d92.js",
    "revision": "3c90172aaac60bbbb85956d9c0a9c7a0"
  },
  {
    "url": "assets/js/14.dbd4ee6e.js",
    "revision": "592ec92725ec5b9b42a5f069c8dd5c18"
  },
  {
    "url": "assets/js/15.e3897270.js",
    "revision": "c47d7dab06f91d2491dea67e7485e66c"
  },
  {
    "url": "assets/js/16.a203e82c.js",
    "revision": "ba1fcfb43a3568f819e56c70fa771466"
  },
  {
    "url": "assets/js/17.c6ec04df.js",
    "revision": "735058937167fc4f49e0ce4468fe51c8"
  },
  {
    "url": "assets/js/18.3714dc0c.js",
    "revision": "627fff321b04a5c59766d4a874cc148c"
  },
  {
    "url": "assets/js/19.4bcc3f68.js",
    "revision": "34bdf4d821bdfb1039a5d1b83dedcb42"
  },
  {
    "url": "assets/js/2.86e37639.js",
    "revision": "a60c17ffd1623192634c1e2939bd0a27"
  },
  {
    "url": "assets/js/20.9aefb30e.js",
    "revision": "94b733d4af329a7d8b144af72681f2cb"
  },
  {
    "url": "assets/js/21.776c7730.js",
    "revision": "7adb3498efbc342963b5ed72d9e958c6"
  },
  {
    "url": "assets/js/22.2d6ac7be.js",
    "revision": "995eb9eb3408c3434ac1fdd1a6d14be8"
  },
  {
    "url": "assets/js/23.5b5cb45d.js",
    "revision": "fc73ae12d975e705febacc7ce6e4481c"
  },
  {
    "url": "assets/js/3.604e4a35.js",
    "revision": "a967af28dd616444ffeb3e7ef3b52e32"
  },
  {
    "url": "assets/js/4.939f4d23.js",
    "revision": "6f279983f40e844dd65e546f6c1b2148"
  },
  {
    "url": "assets/js/5.06f30d8e.js",
    "revision": "38c0f085735d81f91da35090be7eb55a"
  },
  {
    "url": "assets/js/6.28f24bc4.js",
    "revision": "09701cf9377399795d6747b8462d30ea"
  },
  {
    "url": "assets/js/7.2c791cde.js",
    "revision": "1258611a71e973100212aafa9270a263"
  },
  {
    "url": "assets/js/8.6fcdfdf1.js",
    "revision": "c9b847c6cef2dae9639f591633c3e7f3"
  },
  {
    "url": "assets/js/9.c12b6509.js",
    "revision": "8d806a909a934cda9fe455c0e1dc260a"
  },
  {
    "url": "assets/js/app.f026e7f1.js",
    "revision": "20741f285378f42a1d80d9d7c38556d3"
  },
  {
    "url": "base/array.html",
    "revision": "f7adf90948fede8e5c3b60ff56e0f92b"
  },
  {
    "url": "base/base_data.html",
    "revision": "0f0534a0bd0a5d758c7e405989077595"
  },
  {
    "url": "base/date.html",
    "revision": "f6bd22e668ba4d34781efe7f1faa6f3c"
  },
  {
    "url": "base/environment_win10.html",
    "revision": "3ed75f0d13f4a92a709c473f982cf9fe"
  },
  {
    "url": "base/index.html",
    "revision": "c4b6f29a98fa0aec1a77722a106396be"
  },
  {
    "url": "base/modifier.html",
    "revision": "507dec5f5c6853024e0429a45be9e96c"
  },
  {
    "url": "base/number.html",
    "revision": "175f291cbc13d41073d8edfe3e76c752"
  },
  {
    "url": "base/object.html",
    "revision": "e59cf85570ef7bd3bd922fbe094b717f"
  },
  {
    "url": "base/reflect.html",
    "revision": "9b9258073aa0c362b5807969d987457f"
  },
  {
    "url": "base/string.html",
    "revision": "377269eb9537e44cf2ce52846af89425"
  },
  {
    "url": "index.html",
    "revision": "40111cc612393178b0d93c44e73f8ac2"
  },
  {
    "url": "tools/idea.html",
    "revision": "fa229b8000411f754a54fb5e6b75990f"
  },
  {
    "url": "tools/index.html",
    "revision": "85c2aff3f81612a5e159e1fa56a65250"
  },
  {
    "url": "tools/maven.html",
    "revision": "44c89e1e8155b87548fa3984ef9a398d"
  },
  {
    "url": "tools/tomcat.html",
    "revision": "a0e5113d70855f15ea14ab30df14d872"
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
