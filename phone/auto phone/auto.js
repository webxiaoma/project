

// author: 马新想 (webxiaoma)
// 设置全局像素比，使页面自适应手机屏幕


// 不建议使用第一个，在x5 内核的浏览器中有问题

(function(){
  function autoPhone() {
    var width = window.screen.width; // 获取屏幕宽度
    var targetW  = 320; // 定义y我们想要设置的宽度
    var scale = width/targetW; // 计算我们要缩放的比例

    //创建动态 <meta>标签
    var meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = "user-scalable=no,initial-scale="
      + scale
      + ",minimum-scale="
      + scale
      + ",maximum-scale="
      + scale ;

    document.head.insertBefore(meta,document.head.firstChild);
  }
  // autoPhone();

})()

// 建议使用 rem
(function(){
  function autoRem(sum){
    var width = window.screen.width; //获取移动端屏幕宽度
    document.documentElement.style.fontSize = width/sum + "px";
  }
  autoRem(50);
})()