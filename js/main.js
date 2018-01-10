require.config({
	paths:{
		"jquery" : "jquery-1-11.3"
	}
})
require(["jquery"],function($){
	$(function(){
		alert("hello");
	})
})
