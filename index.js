
$(function(){



// 调用表单验证

   $(".inp").mInput({
        event:"blur",
        mtype:["phone"],
        inptest:{mtype:"",mval:null},
        success:function(){},
        error:function(data){ console.log(data)}
   })
   $("form").mSubmit(function(data){
      console.log(data.parents("form"))
   })



     // 调用跳转
  	// $(".nav ul").mScrollTarget({
  	// 	el:".topa",    // 要滚动到的元素 必填
  	// 	time:300,      // 滚动时间 默认 300毫秒
   //   sumTop:120      // 滚动到里页面定不的距离  默认为0;
  	// })
})