function positionActivityFragmentViewViewModel(container){
	containerElementId = container.attr("id");
	targetElement = $( ".activityFragmentBox" );
	targetElement.css({ "position":"absolute", "background-color":"#0000FF" });
	/*targetElement.position({
		my: "left top",
		at: "left top",
		of: "#" + containerElementId
	});*/
	
	$("#step5Inner").css({ "position":"absolute", "width":"100px", "height":"100px", "background-color":"#00FF00", "padding":"10px"});
	$( "#step5Inner" ).position({
		my: "left top",
		at: "left top",
		of: "#step5"
	});
}