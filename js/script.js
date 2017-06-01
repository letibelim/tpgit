var iconNb = 1

$('#bouton').click(function(event) {
	console.log("iconNb: " + iconNb);
	console.log("iconNb%10: " + iconNb%10);

	/* Act on the event */
	var icon = iconNb%10;

	if (!icon){
		$('.icone').hide(200);

	} else {
		$('#icone' + icon).each(function(index, el) {
			$(el).show(200);
		});
	}


	iconNb++  ;

});