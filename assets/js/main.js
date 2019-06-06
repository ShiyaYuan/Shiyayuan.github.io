$( document ).ready(function() {
// start here  

$('.nav-close').click(function() {
  $('.nav-popup').toggleClass('hide');
});

$('.pnav-link').click(function() {
  $('.pnav-popup').toggleClass('show');
});

// $('.trigger').click(function() {
//   $('.response').removeClass('hide');
// });

// $('.page1').click(function() {
//   $('.content1').addClass('show');
// });

// $('.page2').click(function() {
//   $('.content2').addClass('show');
// });

// $('.page-close').click(function() {
//   $('.content').addClass('hide');
// });

$('.colophon-link').click(function() {
  $('.colophon-popup').toggleClass('show');
});

$('.video-close').click(function() {
  $('.video').addClass('hide');
});

 $('.title').mouseenter(function() {
    $('.title-hover').addClass('t-show');
  });

$('.title').mouseleave(function() {
    $('.title-hover').removeClass('t-show');
  });


// start sq-hovers
 $('.sq1').mouseenter(function() {
    $('.sq1-hover').addClass('sq-show');
  });

$('.sq1').mouseleave(function() {
    $('.sq1-hover').removeClass('sq-show');
  });

// 1-pop up
$('.hover-1').mouseenter(function() {
    $('.pop-1').addClass('p-show');
  });

$('.hover-1').mouseleave(function() {
    $('.pop-1').removeClass('p-show');
  });

// 2-pop up



// end here
});