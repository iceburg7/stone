$(document).ready(function(){

	console.log("it works.");
	
	
	var x = "1w";
	console.log(x);
	
	
	
	var i = function(y){
	
		var z = ("url(images/" + y + ".jpg)");
		console.log(z);
		$(".background").css("backgroundImage", z);
		
	};
	
	
	i(x);
	
	
	
	
	var left = function(y){
		$(".left").click(function(){
			console.log("left");
			x = y;
			i(y);
			console.log(x);
			$(".background").trigger("event");
		});
	};
	
	
	var center = function(y){
		$(".center").click(function(){
			console.log("center");
			x = y;
			i(y);
			console.log(x);
			$(".background").trigger("event");
		});
	};
	
	
	var right = function(y){
		$(".right").click(function(){
			console.log("right");
			x = y;
			i(y);
			console.log(x);
			$(".background").trigger("event");
		});
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});