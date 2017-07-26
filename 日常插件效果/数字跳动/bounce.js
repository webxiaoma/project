
// 数字跳动 
// author: webxioama

(function(w,O,obj){
   var mBounce = obj.mBounce;
  

     O.prototype[mBounce] = function(e){
       var that = this;

       function fun(time,that){
         var that = that;
         var time = time || 80;
         var arrayMun = that.innerText.split(".");
         var intea = arrayMun[0]; // 整数部分
         var folt = arrayMun[1]; // 小数部分
         var newArray = [];  
         var initArray = [];
         var len=Math.ceil(intea.length/2);
         var fen = intea.length%2; // 能否两两等分
         var c = 0;
         for(var i=0;i<len;i++){
            var start = 2*i;
            newArray.push(intea.substr(start,2));
            initArray.push(0);
         }
         // setInterval(objFun.initOne,time)
         numSet = setInterval(function(){
           if(fen == 0){ // 第一个为两位数
              for(var i=0,le=newArray.length; i<le; i++){
                  if(c<10){
                    initArray[i] = "0" + c;
                    c++; 
                  }else if(c<99 && c>=10){
                    initArray[i] = c;
                    c++;
                  }else{
                    c = 0;
                  }  
                 arrayMun[1] = c;
              }

           }else{ // 第一个为一位数
              for(var i=1,le=newArray.length; i<le; i++){
                  if(c<10){
                    initArray[i] = "0" + c;
                    initArray[0] = c;
                    c++; 
                  }else if(c<99 && c>=10){
                    initArray[i] = c;
                    c++;
                  }else{
                    c = 0;
                  }    
              }

              arrayMun[1] = c;
           }

           
        
          that.innerText = initArray.join("")+"."+ arrayMun[1];
          close = setTimeout(function(){
            clearInterval(numSet);
            for(var i=0,le=newArray.length; i<le; i++){
               initArray[i] = newArray[i];
               that.innerText = initArray.join("")+"."+ folt;
            }
            clearTimeout(close)
          },1000)
          
         },time)
          
       }

       return new fun(that);
     }

})(window,Object,{
	mBounce:"mBounce", // 数字跳动
}) 