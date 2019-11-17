$( document ).ready(function() {
// start here 

$('.nav-close').click(function() {
  $('.nav-popup').toggleClass('hide');
});

$('.pnav-link').click(function() {
  $('.pnav-popup').toggleClass('show');
});

$('.a').click(function() {
  $('.colophon-popup').toggleClass('show');
});

$('.journal').click(function() {
  $('.colophon-popup').toggleClass('show');
});

$('.video-close').click(function() {
  $('.video').addClass('hide');
});

 $('.a').mouseenter(function() {
    $('.title-hover').addClass('t-show');
  });

$('.a').mouseleave(function() {
    $('.title-hover').removeClass('t-show');
  });

$('.yellow').mouseenter(function() {
    $('.title-hover').addClass('t-show');
  });

$('.yellow').mouseleave(function() {
    $('.title-hover').removeClass('t-show');
  });

$('.journal').mouseenter(function() {
    $('.title-hover').addClass('t-show');
  });

$('.journal').mouseleave(function() {
    $('.title-hover').removeClass('t-show');
  });


// start sq-hovers
 $('.sq1').mouseenter(function() {
    $('.sq1-hover').addClass('active');
  });

$('.sq1').mouseleave(function() {
    $('.sq1-hover').removeClass('active');
  });

 $('.sq2').mouseenter(function() {
    $('.sq2-hover').addClass('active');
  });

$('.sq2').mouseleave(function() {
    $('.sq2-hover').removeClass('active');
  });

$('.sq3').mouseenter(function() {
    $('.sq3-hover').addClass('active');
  });

$('.sq3').mouseleave(function() {
    $('.sq3-hover').removeClass('active');
  });

$('.sq4').mouseenter(function() {
    $('.sq4-hover').addClass('active');
  });

$('.sq4').mouseleave(function() {
    $('.sq4-hover').removeClass('active');
  });

$('.sq5').mouseenter(function() {
    $('.sq5-hover').addClass('active');
  });

$('.sq5').mouseleave(function() {
    $('.sq5-hover').removeClass('active');
  });

$('.sq6').mouseenter(function() {
    $('.sq6-hover').addClass('active');
  });

$('.sq6').mouseleave(function() {
    $('.sq6-hover').removeClass('active');
  });

$('.sq7').mouseenter(function() {
    $('.sq7-hover').addClass('active');
  });

$('.sq7').mouseleave(function() {
    $('.sq7-hover').removeClass('active');
  });

// 1-pop up
$('.hover-1').mouseenter(function() {
    $('.pop-1').addClass('p-show');
  });

$('.hover-1').mouseleave(function() {
    $('.pop-1').removeClass('p-show');
  });

// 2-pop up
$('.hover-21').mouseenter(function() {
    $('.pop-21').addClass('p-show');
  });

$('.hover-22').mouseenter(function() {
    $('.pop-22').addClass('p-show');
  });

$('.hover-23').mouseenter(function() {
    $('.pop-23').addClass('p-show');
  });

$('.hover-24').mouseenter(function() {
    $('.pop-24').addClass('p-show');
  });

$('.hover-25').mouseenter(function() {
    $('.pop-25').addClass('p-show');
  });

$('.hover-26').mouseenter(function() {
    $('.pop-26').addClass('p-show');
  });

$('.hover-27').mouseenter(function() {
    $('.pop-27').addClass('p-show');
  });

$('.hover-28').mouseenter(function() {
    $('.pop-28').addClass('p-show');
  });

$('.hover-29').mouseenter(function() {
    $('.pop-29').addClass('p-show');
  });

$('.hover-210').mouseenter(function() {
    $('.pop-210').addClass('p-show');
  });

$('.hover-211').mouseenter(function() {
    $('.pop-211').addClass('p-show');
  });


// 3-pop up
$('.hover-3').mouseenter(function() {
    $('.pop-3').addClass('p-show');
  });

$('.hover-3').mouseleave(function() {
    $('.pop-3').removeClass('p-show');
  });

// 4-pop up
$('.hover-41').mouseenter(function() {
    $('.pop-41').addClass('p-show');
  });

$('.hover-41').mouseleave(function() {
    $('.pop-41').removeClass('p-show');
  });

$('.hover-42').mouseenter(function() {
    $('.pop-42').addClass('p-show');
  });

$('.hover-42').mouseleave(function() {
    $('.pop-42').removeClass('p-show');
  });

// 5-pop up
$('.hover-51').mouseenter(function() {
    $('.pop-51').addClass('p-show');
  });

$('.hover-51').mouseleave(function() {
    $('.pop-51').removeClass('p-show');
  });

$('.hover-52').mouseenter(function() {
    $('.pop-52').addClass('p-show');
  });

$('.hover-52').mouseleave(function() {
    $('.pop-52').removeClass('p-show');
  });

$('.hover-53').mouseenter(function() {
    $('.pop-53').addClass('p-show');
  });

$('.hover-53').mouseleave(function() {
    $('.pop-53').removeClass('p-show');
  });

$('.hover-54').mouseenter(function() {
    $('.pop-54').addClass('p-show');
  });

$('.hover-54').mouseleave(function() {
    $('.pop-54').removeClass('p-show');
  });

$('.hover-55').mouseenter(function() {
    $('.pop-55').addClass('p-show');
  });

$('.hover-55').mouseleave(function() {
    $('.pop-55').removeClass('p-show');
  });

// 6-pop up
$('.hover-61').mouseenter(function() {
    $('.pop-61').addClass('p-show');
  });

$('.hover-62').mouseenter(function() {
    $('.pop-62').addClass('p-show');
  });

$('.hover-63').mouseenter(function() {
    $('.pop-63').addClass('p-show');
  });

$('.hover-64').mouseenter(function() {
    $('.pop-64').addClass('p-show');
  });

$('.hover-65').mouseenter(function() {
    $('.pop-65').addClass('p-show');
  });


// 7-pop up

$('.hover-71').mouseenter(function() {
    $('.pop-71').addClass('p-show');
  });

$('.hover-72').mouseenter(function() {
    $('.pop-72').addClass('p-show');
  });

$('.hover-73').mouseenter(function() {
    $('.pop-73').addClass('p-show');
  });

$('.hover-74').mouseenter(function() {
    $('.pop-74').addClass('p-show');
  });

$('.hover-75').mouseenter(function() {
    $('.pop-75').addClass('p-show');
  });

$('.hover-76').mouseenter(function() {
    $('.pop-76').addClass('p-show');
  });


// video audio

 $('.audio').click(function() {
    $('video').prop('muted', false);
  });

 $('.audio-close').click(function() {
  $('.audio').addClass('hide');
});




// end here
});

$( document ).ready(function() {
   $('#video').play();
 });
