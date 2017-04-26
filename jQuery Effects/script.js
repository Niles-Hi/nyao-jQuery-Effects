$(document).ready(function() {
	$("#bars").click(function() {
		$("#popup").fadeToggle();
	});
	
	$("#abouts").click(function() {
		$("#AboutPopup").fadeToggle();
	});
	
	$("#hover-me").click(function() {
		function(){
			$("#hover-me").text("Hover Out");
		}
		function(){
			$("#hover-me").text("Hover In");
		}
	});
	
	$("#about").click(function() {
		$("#AboutPop").fadeToggle();
	});
});