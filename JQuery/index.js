
$(function(){

   // 滚动页面加载动画*************************************************
 
   $("div").mAnimate(100,function(){},function(){})

// 解释：第一个参数为滚动到距离 该div 100px 执行第一个回调函数
//       第二个参数function为滚动到该div时 的回调函数，用来处理给动画元素添加css动画类，
//       第三个参数function为离开该div时的回调函数，用来移除动画元素类。（可选）
      




  // 调用表单验证*************************************************

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



     // 调用滚动跳转*************************************************
  	$(".nav ul").mScrollTarget({
  		el:".topa",    // 要滚动到的元素 必填
  		time:300,      // 滚动时间 默认 300毫秒
      sumTop:120      // 滚动到里页面定不的距离  默认为0;
  	})
})