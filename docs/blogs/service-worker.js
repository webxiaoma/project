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
    "revision": "57c6600e617f50e152b4695ef47e9855"
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
    "url": "assets/js/10.019ceb85.js",
    "revision": "32a6f37a93d76408fe2c5c2943694a96"
  },
  {
    "url": "assets/js/11.591aed05.js",
    "revision": "c0465d14e5156540f172924eaf4e09cf"
  },
  {
    "url": "assets/js/12.79aac26c.js",
    "revision": "40acff6f7a75f9216c8afc6b277ff680"
  },
  {
    "url": "assets/js/13.ffcf641d.js",
    "revision": "ae9486d51a96f59fe9b7c6ec5b11d6e5"
  },
  {
    "url": "assets/js/14.d929913c.js",
    "revision": "80ad600832ab4ffff8067a38b15d43eb"
  },
  {
    "url": "assets/js/15.c2ef3a22.js",
    "revision": "003432de1ef421d4abe3e55e6c8b0151"
  },
  {
    "url": "assets/js/16.fb3cb8a3.js",
    "revision": "85e5df115bec46a2080b2c5a5eec369d"
  },
  {
    "url": "assets/js/17.0ac5aef7.js",
    "revision": "c61eee71a9c2e55a3ab3d3383b7f6283"
  },
  {
    "url": "assets/js/18.a3b2deb3.js",
    "revision": "52a7c22568fbd6d1cfee20dc8cbe7be4"
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
    "url": "assets/js/20.9aefb30e.js",
    "revision": "94b733d4af329a7d8b144af72681f2cb"
  },
  {
    "url": "assets/js/21.4a79b99e.js",
    "revision": "3321528781639b1c20d0ec3743055bb4"
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
    "url": "assets/js/4.9274aaf5.js",
    "revision": "b409576651f7f3bf28ccf848a4917aff"
  },
  {
    "url": "assets/js/5.dc83e84d.js",
    "revision": "7a4d0df589d37f7d85669ff59763767d"
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
    "url": "assets/js/app.9a3b72ce.js",
    "revision": "b512e726b6ef9860dca8fb3e82860e07"
  },
  {
    "url": "base/array.html",
    "revision": "e8832f5c7774bc21be2a53253ba7282e"
  },
  {
    "url": "base/base_data.html",
    "revision": "91075a066c5183409c83713232823166"
  },
  {
    "url": "base/date.html",
    "revision": "125788cc149ceaabcce5b6c0f560c717"
  },
  {
    "url": "base/environment_win10.html",
    "revision": "80347220e3e31d8e453096e37eaa1dfc"
  },
  {
    "url": "base/index.html",
    "revision": "380247912fd6e5fa830c104a7119a490"
  },
  {
    "url": "base/modifier.html",
    "revision": "d7c75334c24c9eb0ff6e1ff1d085e3eb"
  },
  {
    "url": "base/number.html",
    "revision": "b25ba1e052cef0c1485ee9a44f0f752a"
  },
  {
    "url": "base/object.html",
    "revision": "54b83f60e33c15c517b01e000fba28b8"
  },
  {
    "url": "base/reflect.html",
    "revision": "659d96bf4cbdc37755a2ef43deb6ed87"
  },
  {
    "url": "base/string.html",
    "revision": "589425a0595264ee74118149d2b3e9ca"
  },
  {
    "url": "index.html",
    "revision": "f648295e9192ed94622a58fe39d93894"
  },
  {
    "url": "tools/idea.html",
    "revision": "c770e769f42c2c2fc89d1a5b12547a30"
  },
  {
    "url": "tools/index.html",
    "revision": "4ee654d43bb131122277a16b85b6c3df"
  },
  {
    "url": "tools/maven.html",
    "revision": "4994c06b55ddbd5d06398f1dba6d2989"
  },
  {
    "url": "tools/tomcat.html",
    "revision": "dd4e9cd664865adaff18f8ec49ab170d"
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
