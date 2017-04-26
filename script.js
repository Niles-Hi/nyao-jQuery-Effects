function loadComponents() {
	$("#header").load("header.html");
	$("#footer").load("footer.html");
}

$(document).ready(function() {
	loadComponents();
	$("#hover-me").click(function() {
	  $("#hover-me").fadeToggle();
	});
});