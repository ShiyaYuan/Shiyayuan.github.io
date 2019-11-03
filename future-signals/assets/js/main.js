$(document).ready(function(){
	console.log("The page is ready!");

	// title click away
	$('.research').click(function(){
		$('.title-bg').addClass('hide');
	});

	$('.research').click(function(){
		$('.nav').removeClass('hide');
	});




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

	$('.btn-face').click(function(){
		hideAll();
		$('.face').removeClass('hide');
	});

	$('.btn-infrared').click(function(){
		hideAll();
		$('.infrared').removeClass('hide');
	});

	$('.btn-mood').click(function(){
		hideAll();
		$('.mood-analysis').removeClass('hide');

	});

	$('.btn-activities').click(function(){
		hideAll();
		$('.daily-activity').removeClass('hide');

	});

	// button all

	$(".btn-all").click(function(){
		$('.research-item').removeClass('hide')
	});

	// cctv footage hover

	$('.sim1-link').mouseenter(function() {
    	$('.sim1-popup').addClass('n-show');
    	console.log("sim1 link active");

  	});

	$('.sim1-link').mouseleave(function() {
    	$('.sim1-popup').removeClass('n-show');
 	 });

	$('.sim2-link').mouseenter(function() {
    	$('.sim2-popup').addClass('n-show');

  	});

	$('.sim2-link').mouseleave(function() {
    	$('.sim2-popup').removeClass('n-show');
 	 });

	$('.sim3-link').mouseenter(function() {
    	$('.sim3-popup').addClass('n-show');

  	});

	$('.sim3-link').mouseleave(function() {
    	$('.sim3-popup').removeClass('n-show');
 	 });

	$('.sim4-link').mouseenter(function() {
    	$('.sim4-popup').addClass('n-show');
  	});

	$('.sim4-link').mouseleave(function() {
    	$('.sim4-popup').removeClass('n-show');
 	 });

	$('.sim5-link').mouseenter(function() {
    	$('.sim5-popup').addClass('n-show');
  	});

	$('.sim5-link').mouseleave(function() {
    	$('.sim5-popup').removeClass('n-show');
 	 });

	$('.sim6-link').mouseenter(function() {
    	$('.sim6-popup').addClass('n-show');
  	});

	$('.sim6-link').mouseleave(function() {
    	$('.sim6-popup').removeClass('n-show');
 	 });











});