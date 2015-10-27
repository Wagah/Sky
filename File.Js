//check if document has loaded
$(document).ready(function(){
	$("p").hide();//hides elements
//works if mouse is hovered in h1
	$("h1").mouseenter(function(){
			$(this).fadeOut(2000);
			$("body").css("background-color","green");
	});//end
//button click

	$("#btn1").click(function(){
		$("#Content").append("This is a My Div..It has more Content");
		$("#Content").animate({
				height:'400px',
				width:'340px'
		});
	});

	//add a css class to elements
	$("#left").addClass("leftcontent");
	$("#right").addClass("rightcontent");
	$("#bottom").addClass("bottomcontent");
	
});

