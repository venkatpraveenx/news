$('.Icon').click(function(){
	
	if( $(this).attr("value") === "SunNews"){
		$('#Feed').attr("src","http://sunnewslive.in/");
	}
	
	if( $(this).attr("value") === "News7"){
		$('#Feed').attr("src","http://ns7.tv/video-streaming.html");
	}
	
	if( $(this).attr("value") === "Kalaigner"){
		$('#Feed').attr("src","https://www.youtube.com/embed/juf8YqrqMHs?autoplay=1");
	}
	
	if( $(this).attr("value") === "News18"){
		$('#Feed').attr("src","https://www.youtube.com/embed/V5zwCGw43jg?autoplay=1");
	}
	
	if( $(this).attr("value") === "Thanthi"){
		$('#Feed').attr("src","http://www.thanthitv.com");
	}
});


