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
	
	
	
	
	$(".background").on("event", function(){
	
		if(x==="1w"){
			left("1s");
			center("2w");
			right("1n");
		}
		
		if(x==="1s"){
			left("1e");
			center("1s");
			right("1w");
		}
		
		if(x==="1n"){
			left("1w");
			center("1n");
			right("1e");
		}
		
		if(x==="1e"){
			left("1n");
			center("10e");
			right("1s");
		}
		
		if(x==="2n"){
			left("2w");
			center("2n");
			right("2e");
		}
		
		if(x==="2w"){
			left("2s");
			center("3w");
			right("2n");
		}
		
		if(x==="2s"){
			left("2e");
			center("2s");
			right("2w");
		}
		
		if(x==="2e"){
			left("2n");
			center("1e");
			right("1s");
		}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	});
	
	$(".background").trigger("event");
	
	
});