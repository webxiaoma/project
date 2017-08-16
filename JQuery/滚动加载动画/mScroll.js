(function(rootObj){

	// ********************  滚动页面加载动画 start**********************
    
    var mScroll=rootObj.mScroll; 
     $.fn[mScroll]=function(topPX,funOne,funTwo){
             var __def__={
              topPX:0,
              funOne:function(){}, // 到达时的回调函数
              funTwo:function(){}, // 离开时的回调函数
             }
             var __pro__={
              topPX:topPX,
              funOne:funOne,
              funTwo:funTwo,
             }
           
          $.extend(this,__def__,__pro__);

             var that=this;
                
               $(window).scroll(function(){
              
                   var scro= $("body,heml").scrollTop()
                   var top = that.position().top-scro; // 到达动画开始位置
                   var height=that.height()+that.position().top; //离开动画结束位置
                   
                   if(top<that.topPX && scro<height){
                      that.funOne.call(that);
                   }else {
                      that.funTwo.call(that);
                   }
               })
     }

// ********************  滚动页面加载动画 end**********************

})({
   mScroll:"mScroll",           // 滚动页面加载动画
})