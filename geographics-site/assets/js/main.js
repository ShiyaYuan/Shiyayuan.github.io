$( document ).ready(function() {
// start here


// collapsible
$(".geographics").click(function()
  {

    $(".layers").slideToggle( "slow");


  });

	function updateView(oLayer)
	{
		oLayer.css({"transform":"perspective(525px) translateZ(" + Z + "px) rotateX(" + XAngle + "deg) rotateY(" + YAngle + "deg)","transition":"none","-webkit-transition":"none"});
		oLayer.find("strong").css({"transform":"perspective(525px) translateZ(" + Z + "px) rotateX(" + (XAngle / 0.66) + "deg) rotateY(" + (YAngle / 0.66) + "deg)","transition":"none","-webkit-transition":"none"});
	}






// end here
});
