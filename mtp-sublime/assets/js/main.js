$( document ).ready(function() {
// start here  

$('.video1').click(function(){
    $(this).toggleClass('large');
  });

$('.video2').click(function(){
    $(this).toggleClass('large');
  });

$('.video3').click(function(){
    $(this).toggleClass('large');
  });

$('.video4').click(function(){
    $(this).toggleClass('large');
  });

$('.video5').click(function(){
    $(this).toggleClass('large');
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
  $('.bg-nav').toggleClass('hide');
});





// end here
});

// transform image
$(function(){
    boxRollovers();
  });
  
  function boxRollovers()
  {
    $selector = $("li");
    XAngle = 0;
    YAngle = 0;
    Z = 10;
    
    $selector.on("mousemove",function(e){
      var $this = $(this);
      var XRel = e.pageX - $this.offset().left;
      var YRel = e.pageY - $this.offset().top;
      var width = $this.width();
    
      YAngle = -(0.5 - (XRel / width)) * 5; 
      XAngle = (0.5 - (YRel / width)) * 5;
      updateView($this.children(".bg"));
    });
    
    $selector.on("mouseleave",function(){
      oLayer = $(this).children(".bg");
      oLayer.css({"transform":"perspective(600px) translateZ(0) rotateX(0deg) rotateY(0deg)","transition":"all 150ms linear 0s","-webkit-transition":"all 150ms linear 0s"});
      oLayer.find("strong").css({"transform":"perspective(600px) translateZ(0) rotateX(0deg) rotateY(0deg)","transition":"all 150ms linear 0s","-webkit-transition":"all 150ms linear 0s"});
    });
  }
  
  function updateView(oLayer)
  {
    oLayer.css({"transform":"perspective(600px) translateZ(" + Z + "px) rotateX(" + XAngle + "deg) rotateY(" + YAngle + "deg)","transition":"none","-webkit-transition":"none"});
    oLayer.find("strong").css({"transform":"perspective(600px) translateZ(" + Z + "px) rotateX(" + (XAngle / 0.66) + "deg) rotateY(" + (YAngle / 0.66) + "deg)","transition":"none","-webkit-transition":"none"});
  }
