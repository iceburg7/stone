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
		
		if(x==="3n"){
			left("3w");
			center("3n");
			right("3e");
		}
		
		if(x==="3w"){
			left("3s");
			center("3w");
			right("3n");
		}
		
		if(x==="3s"){
			left("3e");
			center("4s");
			right("3w");
		}
		
		if(x==="3e"){
			left("3n");
			center("2e");
			right("3s");
		}
		
		if(x==="4n"){
			left("4w");
			center("3n");
			right("4e");
		}
		
		if(x==="4w"){
			left("4s");
			center("4w");
			right("4n");
		}
		
		if(x==="4s"){
			left("4e");
			center("4s");
			right("4w");
		}
		
		if(x==="4e"){
			left("4n");
			center("5e");
			right("4s");
		}
		
		if(x==="5n"){
			left("5w");
			center("5n");
			right("5e");
		}
		
		if(x==="5w"){
			left("5s");
			center("4w");
			right("5n");
		}
		
		if(x==="5s"){
			left("5e");
			center("5s");
			right("5w");
		}
		
		if(x==="5e"){
			left("5n");
			center("6e");
			right("5s");
		}
		
		if(x==="6n"){
			left("6w");
			center("6n");
			right("6e");
		}
		
		if(x==="6w"){
			left("6s");
			center("5w");
			right("6n");
		}
		
		if(x==="6s"){
			left("6e");
			center("6s");
			right("6w");
		}
		
		if(x==="6e"){
			left("6n");
			center("7e");
			right("6s");
		}
		
		if(x==="7n"){
			left("7w");
			center("8n");
			right("7e");
		}
		
		if(x==="7w"){
			left("7s");
			center("6w");
			right("7n");
		}
		
		if(x==="7s"){
			left("7e");
			center("7s");
			right("7w");
		}
		
		if(x==="7e"){
			left("7n");
			center("7e");
			right("7s");
		}
		
		if(x==="8n"){
			left("8w");
			center("8n");
			right("8e");
		}
		
		if(x==="8w"){
			left("8s");
			center("9w");
			right("8n");
		}
		
		if(x==="8s"){
			left("8e");
			center("7s");
			right("8w");
		}
		
		if(x==="8e"){
			left("8n");
			center("8e");
			right("8s");
		}
		
		if(x==="9n"){
			left("9w");
			center("9n");
			right("9e");
		}
		
		if(x==="9w"){
			left("9s");
			center("10w");
			right("9n");
		}
		
		if(x==="9s"){
			left("9e");
			center("9s");
			right("9w");
		}
		
		if(x==="9e"){
			left("9n");
			center("8e");
			right("9s");
		}
		
		if(x==="10w"){
			left("1w");
			center("1w");
			right("1w");
		}
		
		if(x==="10e"){
			left("9e");
			center("9e");
			right("9e");
		}

	
	
	
	
	
	});
	
	$(".background").trigger("event");
	
	
});