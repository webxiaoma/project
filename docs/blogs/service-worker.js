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
    "revision": "10502173409beff406fcf902b132113c"
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
    "url": "assets/js/10.dadfb21b.js",
    "revision": "bf8681c1df21add20aebe982bfce983d"
  },
  {
    "url": "assets/js/11.95700646.js",
    "revision": "7f2bd8cdd0cfc6974790dfaa394b9f10"
  },
  {
    "url": "assets/js/12.3d89e14b.js",
    "revision": "bd8865dadbd957eb644bf109d7874bf9"
  },
  {
    "url": "assets/js/13.3c6c739b.js",
    "revision": "946910e36aeb64b11e75ac2fcb164a06"
  },
  {
    "url": "assets/js/14.69ddf6e5.js",
    "revision": "8572e3fbc6e7cec426c93071a180c56a"
  },
  {
    "url": "assets/js/15.0453495c.js",
    "revision": "05508224950ef01a0bf06c335341c850"
  },
  {
    "url": "assets/js/16.6e748437.js",
    "revision": "71908bf0efbad4e2c60d656cdfc7cec6"
  },
  {
    "url": "assets/js/17.fa081539.js",
    "revision": "c601714864a4fc1037069d177fe6b38c"
  },
  {
    "url": "assets/js/18.4b746d90.js",
    "revision": "7fa210f7ac96fe273ad9a4031cd47e59"
  },
  {
    "url": "assets/js/19.a3e32787.js",
    "revision": "78b8cb577c0fea2ffb50177172e5ef0a"
  },
  {
    "url": "assets/js/2.86e37639.js",
    "revision": "a60c17ffd1623192634c1e2939bd0a27"
  },
  {
    "url": "assets/js/20.fa80f7a6.js",
    "revision": "b852d6c0a9960db10134ca5526db66fa"
  },
  {
    "url": "assets/js/21.0b2977f8.js",
    "revision": "7d80519d85ccd925f6073583a492b97c"
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
    "url": "assets/js/4.7f8383b3.js",
    "revision": "de9210284fef539d86ab4c200b8fa1f2"
  },
  {
    "url": "assets/js/5.32e9f2e6.js",
    "revision": "78ff882bfe09e1bb2d76c1d860fab276"
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
    "url": "assets/js/app.e082d2af.js",
    "revision": "2582412ce36d0c6444e16c1f80691258"
  },
  {
    "url": "base/array.html",
    "revision": "83468f7ee4aaeae141854d3f641317fc"
  },
  {
    "url": "base/base_data.html",
    "revision": "c44cdb65464fccb9658945ca88d37629"
  },
  {
    "url": "base/date.html",
    "revision": "2567b0dd1f863a6912d71403dba4e13a"
  },
  {
    "url": "base/environment_win10.html",
    "revision": "b9145f7032790fc4b845e8f37746a7dd"
  },
  {
    "url": "base/index.html",
    "revision": "119c4dac66df6c466fefc6e5134d1068"
  },
  {
    "url": "base/modifier.html",
    "revision": "751d7059565c3184dd6eac2d8cc425c9"
  },
  {
    "url": "base/number.html",
    "revision": "3ae5ddc9ea0930f8468a5489fa604267"
  },
  {
    "url": "base/object.html",
    "revision": "6415c0078b7453d7003a994da0afd56a"
  },
  {
    "url": "base/reflect.html",
    "revision": "77e1816da7fd13eb54534370eaed9d1a"
  },
  {
    "url": "base/string.html",
    "revision": "184e43188c05913dd1ff1d5ffad3c48d"
  },
  {
    "url": "index.html",
    "revision": "df0c7953a968b894a59a342073d842f1"
  },
  {
    "url": "tools/idea.html",
    "revision": "23cf07baccae6b34a59bcbc3a04bb279"
  },
  {
    "url": "tools/index.html",
    "revision": "e423cf0136e27cf7febbc6ba5cc17b9b"
  },
  {
    "url": "tools/maven.html",
    "revision": "4e732f0987c83258775ca7c0d103e2ee"
  },
  {
    "url": "tools/tomcat.html",
    "revision": "f503105ad04f45081408cf6ef05e7c61"
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
