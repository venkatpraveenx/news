$('.Icon').click(function(){
	
	if( $(this).attr("value") === "SunNews"){
		$('#Feed').attr("src","http://sunnewslive.in/");
	}
	
	if( $(this).attr("value") === "News7"){
		$('#Feed').attr("src","http://ns7.tv/video-streaming.html");
	}
	
	if( $(this).attr("value") === "Kalaignar"){
		$('#Feed').attr("src","https://www.youtube.com/watch?v=juf8YqrqMHs");
	}
	
	if( $(this).attr("value") === "News18"){
		$('#Feed').attr("src","https://www.youtube.com/watch?v=V5zwCGw43jg");
	}
	
	if( $(this).attr("value") === "Thanthi"){
		$('#Feed').attr("src","http://www.thanthitv.com");
	}
});