
$( document ).ready(function() {
// start here  



// toggle active class on nav item

	$('.list-item').mouseenter(function(){
		$('.list-item').removeClass('active');
		$(this).addClass('active')
	});

	var hideAll = function(){
		$('.project-thumbnail').addClass('hide');
	}

// Project thumbnail filters

	

	$('.project-2').mouseenter(function(){
		hideAll();
		$('.project-2-thumbnail').removeClass('hide');
	});

	$('.project-3').mouseenter(function(){
		hideAll();
		$('.project-3-thumbnail').removeClass('hide');
	});

	$('.project-4').mouseenter(function(){
		hideAll();
		$('.project-4-thumbnail').removeClass('hide');
	});

	$('.project-5').mouseenter(function(){
		hideAll();
		$('.project-5-thumbnail').removeClass('hide');
	});


// click link and pause animation

$('.list-item').click(function() {
  $('.cube').toggleClass('pause');
});




// end here
});