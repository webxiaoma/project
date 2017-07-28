
// 数字跳动 
// athour: webxioama

(function(w,O,obj){
   var mBounce = obj.mBounce;
   O.prototype[mBounce] = function(time){
   	   var time = time || 500;
       var mun = this.innerHTML;
       var arrayMun = mun.split(".");
       var inte = Number(arrayMun[0]);
       var folt = Number(arrayMun[1]);
       

       console.log(inte,folt);
   }

})(window,Object,{
	mBounce:"mBounce", // 数字跳动
}) 