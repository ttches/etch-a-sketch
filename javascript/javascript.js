$(document).ready(function() {
	var $row = $("<div />", {
    	class: 'row'
	});

	var $pixel = $("<div />", {
		class: 'pixel'
	});

	var $color = "black";

	function createGrid(c, r) {
		console.log("test");
		for (i = 0; i < c; i++) {
			$row.append($pixel.clone());
		}
		for (j = 0; j < r; j++) {
			$("#wrapper").append($row.clone());
			
		}
	}
	$('div').on('click', '.color', function() {
		$color = $(this).css('background-color');
		$('#picked').css('background-color', $color);
	});
	$('div').on('mouseenter', '.pixel', function() {
		if (!event.shiftKey) {
			$(this).css({"background-color": $color});
			console.log($(this).css('background-color'));
		}
	});
createGrid(50,50);
});
