$(function(){
	//弹出函数封装
	function Popup(objStart,objEnd,cssObjS,cssObjE){
		var $start = $(objStart);
		var $end = $(objEnd);
		cssObjS = cssObjS || {};
		cssObjE = cssObjE || {};
		$start.mouseenter(function(){
			$(this).css(cssObjS);
			$end.show();
		}).mouseleave(function(){
			$(this).css(cssObjE);
			$end.hide();
		})
	}
	
	//top-1 弹出框
	Popup(".top_1_con .a2",".myliang",{"color":"#3399ff","background":"#ffffff url(img/top/qian.png) 88% 6px no-repeat"},{"color":"#5e645a","background":"#f8f8f8 url(img/top/qian.png) 88% 33px no-repeat"})
	
	//top-1 弹出框
	Popup(".top_1_con .a5",".erwei",{"background":"#ffffff"},{"background":"#f8f8f8"});
	
	//top-3 弹出框
	Popup(".top_3_right .gwcicon",".gwc");
	$(".gwc").html("加载中");
	//点击事件封装
	function Oclick(obj,htmls){
		var $obj = $(obj);
		$obj.click(function(){
			window.location = htmls;
		})
	}
	//logo跳首页
	Oclick(".top_3_left","index.html");
	
//	banner图轮播
	function Sport(){
		var index = 0;
//		var zIndex = 1;
		var $bigs = $(".main_center .banner ul li");
		var $littles = $(".main_center .banner .little div");
		function Auto(){
			timer = setInterval(function(){
//				zIndex++;
//				$bigs.eq(index).css({"z-index":zIndex});
//			    $littles.css({background:"black"});
				$bigs.hide().eq(index).show();
				$littles.css({background:"black"}).eq(index).css({"background":"#e22511"});
				index++;	
				if(index>2){
					index = 0;
				}
			},1500);
		}
		Auto();
//		for(var i = 0 ; i<$littles.length;i++){
//			$littles.eq(i).attr({"nowIndex":i});
//			$littles.eq(i).mouseenter(function(){
//				$littles.css({background:"black"}).eq(index).css({background:"black"})
//				$littles.eq(i).siblings().css({background:"black"});
//				clearInterval(timer);
//				zIndex++;
//				$(this).css({"background":"#e22511"});
//				index = $(this).attr("nowIndex");
//				$bigs.eq(index).css({"z-index":zIndex});
//				}).mouseleave(function(){
//				Auto();
//				
////				console.log($(this));
////				$(this).css({"background":"black"});
//			})
//		}
			$littles.mouseenter(function(){
				index=$(this).index();
				$littles.css({background:"black"}).eq(index).css({background:"#e22511"});
				clearInterval(timer);
				$bigs.hide().eq(index).show();
				}).mouseleave(function(){
					Auto();
				})
	}
	Sport();
	
	
})



