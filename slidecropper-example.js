(function($) {
	$(document).ready( function() {
		$(document.body).append("<img src='http://static.jquery.com/files/rocker/images/logo_jquery_215x53.gif'/>");
		
		$("img").slideCropper({
			"height":100,
			"width":100
		});

		setInterval( function() {
			var test = $("img").data("crop");
			console.log(test);
		}, 5000)
	});
})(jQuery)
