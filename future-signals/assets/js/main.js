$(document).ready(function(){
	console.log("The page is ready!");


	// toggle large calss on research item	

	$('.research-item').click(function(){
		$(this).toggleClass('large');
	});

	// toggle active class on nav item

	$('.nav-item').click(function(){
		$('.nav-item').removeClass('active');
		$(this).addClass('active')
	});

	var hideAll = function(){
		$('.research-item').addClass('hide');
	}

	// Button filters

	$('.btn-car').click(function(){
		hideAll();
		$('.car').removeClass('hide');
	});

	$('.btn-kinect').click(function(){
		hideAll();
		$('.kinect').removeClass('hide');

	});

	$('.btn-tracking').click(function(){
		hideAll();
		$('.tracking').removeClass('hide');

	});

	// button all

	$(".btn-all").click(function(){
		$('.research-item').removeClass('hide')
	});



});