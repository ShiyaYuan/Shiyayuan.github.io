$( document ).ready(function() {
// start here  

$('.video1').click(function(){
    $(this).toggleClass('unfold');
  });

$('.video2').click(function(){
    $(this).toggleClass('unfold');
  });

$('.video3').click(function(){
    $(this).toggleClass('unfold');
  });

$('.video4').click(function(){
    $(this).toggleClass('unfold');
  });

$('.video5').click(function(){
    $(this).toggleClass('unfold');
  });


// bg change trigger

$('.bg1-trig').click(function() {
  $('.bg1').addClass('show');
});

$('.bg1-trig').click(function() {
  $('.bg2').removeClass('show');
});

$('.bg1-trig').click(function() {
  $('.bg3').removeClass('show');
});



$('.bg2-trig').click(function() {
  $('.bg2').addClass('show');
});

$('.bg2-trig').click(function() {
  $('.bg1').removeClass('show');
});

$('.bg2-trig').click(function() {
  $('.bg3').removeClass('show');
});


$('.bg3-trig').click(function() {
  $('.bg3').addClass('show');
});

$('.bg3-trig').click(function() {
  $('.bg1').removeClass('show');
});

$('.bg3-trig').click(function() {
  $('.bg2').removeClass('show');
});

// about-text trigger

$('.about').click(function() {
  $('.about-text').toggleClass('a-show');
});

$('.about').click(function() {
  $('.bg').toggleClass('blur');
});

$('.about').click(function() {
  $('.table').toggleClass('blur');
});

$('.about').click(function() {
  $('.bling').toggleClass('blur');
});

$('.about').click(function() {
  $('.book-icon').toggleClass('blur');
});

$('.about').click(function() {
  $('.bg-nav').toggleClass('hide');
});



// Gallery trigger
$('.view-img-btn').click(function() {
  $('.img-page').toggleClass('a-show');
});

$('.view-img-btn').click(function() {
  $('.bg').toggleClass('blur');
});

$('.view-img-btn').click(function() {
  $('.table').toggleClass('blur');
});

$('.view-img-btn').click(function() {
  $('.bling').toggleClass('blur');
});

$('.view-img-btn').click(function() {
  $('.book-icon').toggleClass('blur');
});

$('.view-img-btn').click(function() {
  $('.bg-nav').toggleClass('hide');
});





$('.img-container').click(function() {
  $(this).toggleClass('large');
});
















// end here
});

