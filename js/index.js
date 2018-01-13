define(function(){
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
		 
		//特殊弹出封装
		function specialPop(little,big,else1){
			var $l = $(little);
			var $b = $(big);
			$l.mouseenter(function(){
				$b.show();
				$(else1).hide();
			}).mouseleave(function(){
				$b.hide();
				$(else1).show();				
			})
		}
		
		//点击事件封装
		function Oclick(obj,htmls){
			var $obj = $(obj);
			$obj.click(function(){
				window.location = htmls;
			})
		}
		
		//左右摇摆对象
		function Rock(id){
			var $n = $(id);
			$n.mouseenter(function(){
				$(this).css({"position":"relative"});
				$(this).animate({"top":"-10px"},100).animate({"top":"0"},100);
			})
		}
		
	return {
		Popup:Popup,
		Oclick:Oclick,
		specialPop:specialPop,
		Rock:Rock
	}
	
})




