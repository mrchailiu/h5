
$(function(){
	$("#myCarousel > a").css("line-height",$("#carouselImg img").height()+"px");
	$(window).resize(function(){
		var h = $("#carouselImg img").eq(0).height() ||
				$("#carouselImg img").eq(1).height() ||
				$("#carouselImg img").eq(2).height();
		$("#myCarousel > a").css("line-height",h+"px");
		
		$(".txt").eq(0).css({"margin-top":($(".tab-img").eq(0).height()-$(".txt").eq(0).height())/2+"px"});  
		$(".txt").eq(1).css({"margin-top":($(".tab-img").eq(1).height()-$(".txt").eq(1).height())/2+"px"});
	});
	//让轮播图自动播放js代码
//	$("#myCarousel").carousel({
//		interval:2000
//	});
	
	
	
})













