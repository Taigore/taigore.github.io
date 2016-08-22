var soundID = "guida";

$(function() {
	var state = [];
	for(var i = 0; i < 9; ++i)
		state.push(false);	
		
	$('button.pixel').click(function(event) {
		event.preventDefault();		
		
		var $target = $(event.target);
		var position = $target.data('position');
		
		var current = state[position];
		state[position] = current ? false : true;
		
		if(!current)
			$target.addClass('active');
		else
			$target.removeClass('active');
	});
	var audio = undefined;
	$('button#send').click(function(event) {
		event.preventDefault();
		
		var id = state.map(function(elem) { return elem ? '1' : '0'; }).join('');

		if(audio)
			audio.pause();
		
		audio = new Audio('/audio/'.concat(id));
		audio.play();
	});
});

 function loadHandler(event) {
     // This is fired for each sound that is registered.
     var instance = createjs.Sound.play(soundID);  // play using id.  Could also use full source path or event.src.
     instance.on("complete", this.handleComplete, this);
     instance.volume = 0.5;
 }
