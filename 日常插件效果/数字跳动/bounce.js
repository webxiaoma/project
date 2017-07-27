
// 数字跳动 
// author: webxioama

(function(w,O,obj){
   var mBounce = obj.mBounce;
   O.prototype[mBounce] = function(time){
       var that = this;
   	   var time = time || 50;
       var arrayMun =   this.innerText.split(".");
       var intea = arrayMun[0]; // 整数部分
       var folt = arrayMun[1]; // 小数部分(可能不存在)
       var newArray = [];  
       var initArray = [];
       var len=Math.ceil(intea.length/2);
       var fen = intea.length%2; // 能否两两等分
       var c = 0, a = 0;
       for(var i=0;i<len;i++){
          var start = 2*i;
          newArray.push(intea.substr(start,2));
          initArray.push(0);
       }
       var objFun = {

          floatNum:function(){ 
              if(fen == 0){ // 第一个为两位数
                  for(var i=0,le=newArray.length; i<le; i++){
                      if(c<10){
                        i==0?
                        (initArray[i] = "1" + c):(initArray[i] = "0"+ c);
                        c++; 
                      }else if(c<99 && c>=10){
                        initArray[i] = c;
                        c++;
                      }else{
                        c = 0;
                      }  
                  }

               }else{ // 第一个为一位数
                  for(var i=1,le=newArray.length; i<le; i++){
                      if(c<10){
                        initArray[i] = "0" + c;
                        c++; 
                      }else if(c<99 && c>=10){
                        initArray[i] = c;
                        c++;
                      }else{
                        c = 0;
                      }   

                        initArray[0] = a<9?a++:a=1; // 第一个数字
                  }

               }
              arrayMun[1] = c<10?"0"+c:c; // 小数变化
              that.innerText = typeof folt == "undefined"?
                   initArray.join("") : initArray.join("")+"."+ arrayMun[1];
          }
      }


      var numSet = setInterval(function(){
          objFun.floatNum();// 有小数点和无小数点变动
       },time);

       var  close = setTimeout(function(){
          clearInterval(numSet);
          for(var i=0,le=newArray.length; i<le; i++){
             initArray[i] = newArray[i];
             that.innerText = typeof folt == "undefined"?
             initArray.join("") : initArray.join("")+"."+ folt;
          }
          clearTimeout(close); // 停止变动
        },1000)
        
   }

})(window,Object,{
	mBounce:"mBounce", // 数字跳动
}) 