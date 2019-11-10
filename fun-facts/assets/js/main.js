
$( document ).ready(function() {
// start here  


$('.shrimp').mouseenter(function(){
    $(this).addClass('expand');
  });

$('.shrimp').mouseenter(function(){
    $('.s-bg').removeClass('hide');
  });

$('.shrimp').mouseenter(function(){
    $('.bg').addClass('hide');
  });

$('.shrimp').mouseenter(function(){
    $('.o-bg').addClass('hide');
  });

$('.shrimp').mouseenter(function(){
    $('.f-bg').addClass('hide');
  });

$('.shrimp').mouseleave(function(){
    $('.s-bg').addClass('hide');
  });

$('.shrimp').mouseleave(function(){
    $('.bg').removeClass('hide');
  });



$('.shrimp').mouseenter(function() {
  $('.octopus').addClass('narrow');
});

$('.shrimp').mouseenter(function() {
  $('.fish').addClass('narrow');
});


$('.shrimp').mouseleave(function(){
    $(this).removeClass('expand');
  });

$('.shrimp').mouseleave(function() {
  $('.octopus').removeClass('narrow');
});

$('.shrimp').mouseleave(function() {
  $('.fish').removeClass('narrow');
});





$('.octopus').mouseenter(function(){
    $(this).addClass('expand');
  });

$('.octopus').mouseenter(function(){
    $('.o-bg').removeClass('hide');
  });

$('.octopus').mouseenter(function(){
    $('.bg').addClass('hide');
  });

$('.octopus').mouseenter(function(){
    $('.s-bg').addClass('hide');
  });

$('.octopus').mouseenter(function(){
    $('.f-bg').addClass('hide');
  });

$('.octopus').mouseleave(function(){
    $('.o-bg').addClass('hide');
  });

$('.octopus').mouseleave(function(){
    $('.bg').removeClass('hide');
  });


$('.octopus').mouseenter(function() {
  $('.shrimp').addClass('narrow');
});

$('.octopus').mouseenter(function() {
  $('.fish').addClass('narrow');
});


$('.octopus').mouseleave(function(){
    $(this).removeClass('expand');
  });

$('.octopus').mouseleave(function() {
  $('.shrimp').removeClass('narrow');
});

$('.octopus').mouseleave(function() {
  $('.fish').removeClass('narrow');
});



$('.fish').mouseenter(function(){
    $(this).addClass('expand');
  });

$('.fish').mouseenter(function(){
    $('.f-bg').removeClass('hide');
  });

$('.fish').mouseenter(function(){
    $('.bg').addClass('hide');
  });

$('.fish').mouseenter(function(){
    $('.s-bg').addClass('hide');
  });

$('.fish').mouseenter(function(){
    $('.o-bg').addClass('hide');
  });

$('.fish').mouseleave(function(){
    $('.f-bg').addClass('hide');
  });

$('.fish').mouseleave(function(){
    $('.bg').removeClass('hide');
  });



$('.fish').mouseenter(function() {
  $('.shrimp').addClass('narrow');
});

$('.fish').mouseenter(function() {
  $('.octopus').addClass('narrow');
});


$('.fish').mouseleave(function(){
    $(this).removeClass('expand');
  });

$('.fish').mouseleave(function() {
  $('.shrimp').removeClass('narrow');
});

$('.fish').mouseleave(function() {
  $('.octopus').removeClass('narrow');
});












// end here
});