
$( document ).ready(function() {
// start here  

// title fade out

// $('.title').click(function() {
//   $('.title').addClass('fade');
// });

// $('.title').click(function() {
//   $('.title').addClass('hide');
// });


// title click away
$('.title').click(function() {
  $('.title').addClass('hide');
});

// about popup

$('.about-icon').click(function() {
  $('.about').toggleClass('hide');
});


// cursor


// bg-change on refresh

(function($){

	$(document).ready(function() {
		var classes = [ 'page-love', 'page-flower' ];
		$('body').each(function(i) { 
			$(this).addClass(classes[ Math.floor( Math.random()*classes.length ) ] );
		});
	});

})(jQuery);




// end here
});