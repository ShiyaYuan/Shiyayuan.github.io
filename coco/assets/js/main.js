
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
  $('.project-1').mouseenter(function(){
    hideAll();
    $('.project-1-thumbnail').removeClass('hide');
  });
	

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

	$('.project-6').mouseenter(function(){
		hideAll();
		$('.project-6-thumbnail').removeClass('hide');
	});
  $('.project-7').mouseenter(function(){
    hideAll();
    $('.project-7-thumbnail').removeClass('hide');
  });

  $('.project-8').mouseenter(function(){
    hideAll();
    $('.project-8-thumbnail').removeClass('hide');
  });

  $('.project-9').mouseenter(function(){
    hideAll();
    $('.project-9-thumbnail').removeClass('hide');
  });

  $('.project-10').mouseenter(function(){
    hideAll();
    $('.project-10-thumbnail').removeClass('hide');
  });


// click link and pause animation

$('.list-item').click(function() {
  $('.cube').toggleClass('pause');
});


// changing pages
$('.project-1').click(function() {
  $('#page1').removeClass('hide');
});

$('.project-1').click(function() {
  $('#page2').addClass('hide');
});

$('.project-1').click(function() {
  $('#page3').addClass('hide');
});

$('.project-1').click(function() {
  $('#page4').addClass('hide');
});

$('.project-1').click(function() {
  $('#page5').addClass('hide');
});

$('.project-1').click(function() {
  $('#page6').addClass('hide');
});

$('.project-1').click(function() {
  $('#page7').addClass('hide');
});

$('.project-1').click(function() {
  $('#page8').addClass('hide');
});

$('.project-1').click(function() {
  $('#page9').addClass('hide');
});

$('.project-1').click(function() {
  $('#page10').addClass('hide');
});




$('.project-2').click(function() {
  $('#page2').removeClass('hide');
});

$('.project-2').click(function() {
  $('#page1').addClass('hide');
});

$('.project-2').click(function() {
  $('#page3').addClass('hide');
});

$('.project-2').click(function() {
  $('#page4').addClass('hide');
});

$('.project-2').click(function() {
  $('#page5').addClass('hide');
});

$('.project-2').click(function() {
  $('#page6').addClass('hide');
});

$('.project-2').click(function() {
  $('#page7').addClass('hide');
});

$('.project-2').click(function() {
  $('#page8').addClass('hide');
});

$('.project-2').click(function() {
  $('#page9').addClass('hide');
});

$('.project-2').click(function() {
  $('#page10').addClass('hide');
});





$('.project-3').click(function() {
  $('#page3').removeClass('hide');
});

$('.project-3').click(function() {
  $('#page1').addClass('hide');
});

$('.project-3').click(function() {
  $('#page21').addClass('hide');
});

$('.project-3').click(function() {
  $('#page4').addClass('hide');
});

$('.project-3').click(function() {
  $('#page5').addClass('hide');
});

$('.project-3').click(function() {
  $('#page6').addClass('hide');
});

$('.project-3').click(function() {
  $('#page7').addClass('hide');
});

$('.project-3').click(function() {
  $('#page8').addClass('hide');
});

$('.project-3').click(function() {
  $('#page9').addClass('hide');
});

$('.project-3').click(function() {
  $('#page10').addClass('hide');
});





$('.project-4').click(function() {
  $('#page4').removeClass('hide');
});

$('.project-4').click(function() {
  $('#page1').addClass('hide');
});

$('.project-4').click(function() {
  $('#page2').addClass('hide');
});

$('.project-4').click(function() {
  $('#page3').addClass('hide');
});

$('.project-4').click(function() {
  $('#page5').addClass('hide');
});

$('.project-4').click(function() {
  $('#page6').addClass('hide');
});

$('.project-4').click(function() {
  $('#page7').addClass('hide');
});

$('.project-4').click(function() {
  $('#page8').addClass('hide');
});

$('.project-4').click(function() {
  $('#page9').addClass('hide');
});

$('.project-4').click(function() {
  $('#page10').addClass('hide');
});





$('.project-5').click(function() {
  $('#page5').removeClass('hide');
});

$('.project-5').click(function() {
  $('#page1').addClass('hide');
});

$('.project-5').click(function() {
  $('#page2').addClass('hide');
});

$('.project-5').click(function() {
  $('#page3').addClass('hide');
});

$('.project-5').click(function() {
  $('#page4').addClass('hide');
});

$('.project-5').click(function() {
  $('#page6').addClass('hide');
});

$('.project-5').click(function() {
  $('#page7').addClass('hide');
});

$('.project-5').click(function() {
  $('#page8').addClass('hide');
});

$('.project-5').click(function() {
  $('#page9').addClass('hide');
});

$('.project-5').click(function() {
  $('#page10').addClass('hide');
});





$('.project-6').click(function() {
  $('#page6').removeClass('hide');
});

$('.project-6').click(function() {
  $('#page1').addClass('hide');
});

$('.project-6').click(function() {
  $('#page2').addClass('hide');
});

$('.project-6').click(function() {
  $('#page3').addClass('hide');
});

$('.project-6').click(function() {
  $('#page4').addClass('hide');
});

$('.project-6').click(function() {
  $('#page5').addClass('hide');
});

$('.project-6').click(function() {
  $('#page7').addClass('hide');
});

$('.project-6').click(function() {
  $('#page8').addClass('hide');
});

$('.project-6').click(function() {
  $('#page9').addClass('hide');
});

$('.project-6').click(function() {
  $('#page10').addClass('hide');
});





$('.project-7').click(function() {
  $('#page7').removeClass('hide');
});

$('.project-7').click(function() {
  $('#page1').addClass('hide');
});

$('.project-7').click(function() {
  $('#page2').addClass('hide');
});

$('.project-7').click(function() {
  $('#page3').addClass('hide');
});

$('.project-7').click(function() {
  $('#page4').addClass('hide');
});

$('.project-7').click(function() {
  $('#page5').addClass('hide');
});

$('.project-7').click(function() {
  $('#page6').addClass('hide');
});

$('.project-7').click(function() {
  $('#page8').addClass('hide');
});

$('.project-7').click(function() {
  $('#page9').addClass('hide');
});

$('.project-7').click(function() {
  $('#page10').addClass('hide');
});





$('.project-8').click(function() {
  $('#page8').removeClass('hide');
});

$('.project-8').click(function() {
  $('#page1').addClass('hide');
});

$('.project-8').click(function() {
  $('#page2').addClass('hide');
});

$('.project-8').click(function() {
  $('#page3').addClass('hide');
});

$('.project-8').click(function() {
  $('#page4').addClass('hide');
});

$('.project-8').click(function() {
  $('#page5').addClass('hide');
});

$('.project-8').click(function() {
  $('#page6').addClass('hide');
});

$('.project-8').click(function() {
  $('#page7').addClass('hide');
});

$('.project-8').click(function() {
  $('#page9').addClass('hide');
});

$('.project-8').click(function() {
  $('#page10').addClass('hide');
});





$('.project-9').click(function() {
  $('#page9').removeClass('hide');
});

$('.project-9').click(function() {
  $('#page1').addClass('hide');
});

$('.project-9').click(function() {
  $('#page2').addClass('hide');
});

$('.project-9').click(function() {
  $('#page3').addClass('hide');
});

$('.project-9').click(function() {
  $('#page4').addClass('hide');
});

$('.project-9').click(function() {
  $('#page5').addClass('hide');
});

$('.project-9').click(function() {
  $('#page6').addClass('hide');
});

$('.project-9').click(function() {
  $('#page7').addClass('hide');
});

$('.project-9').click(function() {
  $('#page8').addClass('hide');
});

$('.project-9').click(function() {
  $('#page10').addClass('hide');
});






$('.project-10').click(function() {
  $('#page10').removeClass('hide');
});

$('.project-10').click(function() {
  $('#page1').addClass('hide');
});

$('.project-10').click(function() {
  $('#page2').addClass('hide');
});

$('.project-10').click(function() {
  $('#page3').addClass('hide');
});

$('.project-10').click(function() {
  $('#page4').addClass('hide');
});

$('.project-10').click(function() {
  $('#page5').addClass('hide');
});

$('.project-10').click(function() {
  $('#page6').addClass('hide');
});

$('.project-10').click(function() {
  $('#page7').addClass('hide');
});

$('.project-10').click(function() {
  $('#page8').addClass('hide');
});

$('.project-10').click(function() {
  $('#page9').addClass('hide');
});



// individual page's NAV

$('.page-list-item').mouseenter(function() {
  $('.nav').toggleClass('hide');
});

$('.nav-item').click(function() {
  $('.nav').toggleClass('hide');
});















// end here
});