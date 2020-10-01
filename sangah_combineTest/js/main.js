// window.onbeforeunload = function () {
//     // window.scrollTo(0, 0);
//      window.scrollTo($('#homepage'), 0);
// };

// INTERACTIONS
$( document ).ready(function() {

  // CLICK TO PLAY/PAUSE AUDIO
  var audio = document.getElementById("audio");

  $('#muted').click(function() {
    audio.play();
    $('#muted').addClass('hide');
    $('#unmute').removeClass('hide');
  });

  $('#unmute').click(function() {
    audio.pause();
    $('#unmute').addClass('hide');
    $('#muted').removeClass('hide');
  });

  // disable scroll
  function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
  }
  function enableScroll() {
    window.onscroll = function() {};
  }

  // click for about
  $('#name').click(function() {

    $('#about').toggleClass('hide');
    if($('#about').hasClass('hide')){
      enableScroll();
    } else{
      disableScroll();
    }

  });

  // close about when click about
  $('#about').click(function(){
    $(this).addClass('hide');
    enableScroll();
  });

  $('#scrollToP3').click(function(){
    // gsap.to(window,{duration: 1, scrollTo: {y: "#name3", offsetY: "600vh"}});
    // gsap.to(window, {duration: 1, scrollTo: {y: "200vh"}});

  });

});



function init(){

  //creating 'blur' filter plugin
  (function() {
    const blurProperty = gsap.utils.checkPrefix("filter"),
            blurExp = /blur\((.+)?px\)/,
            getBlurMatch = target => (gsap.getProperty(target, blurProperty) || "").match(blurExp) || [];

    gsap.registerPlugin({
        name: "blur",
        get(target) {
            return +(getBlurMatch(target)[1]) || 0;
        },
        init(target, endValue) {
            let data = this,
          filter = gsap.getProperty(target, blurProperty),
          endBlur = "blur(" + endValue + "px)",
          match = getBlurMatch(target)[0],
          index;
      if (filter === "none") {
        filter = "";
      }
      if (match) {
        index = filter.indexOf(match);
        endValue = filter.substr(0, index) + endBlur + filter.substr(index + match.length);
      } else {
        endValue = filter + endBlur;
        filter += filter ? " blur(0px)" : "blur(0px)";
      }
      data.target = target;
      data.interp = gsap.utils.interpolate(filter, endValue);
        },
        render(progress, data) {
            data.target.style[blurProperty] = data.interp(progress);
        }
    });
  })();

  gsap.registerPlugin(ScrollTrigger);


// SMOOTH SCROLLING
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".scrollContainer"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".scrollContainer", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".scrollContainer").style.transform ? "transform" : "fixed"
});


  //squeeze hoempage --> bg1
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger:"#homepage",
      scrub:true,
      start:"top top",
      end:"+=200%",
      // markers:true,
    }
  });

  timeline
  //homepage squeeze
  .to('#homepage',{scaleY:0, transformOrigin:'top'},"same")
  //bg1 expand
  .fromTo('#bg1',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same")
  .to('#name1',{top:'1em'},"same")
  .fromTo('#bg1-wrapper img',{scale:0},{scale:1},"same")
  .to('#bg1-wrapper img', {scale:1})


  //bg2 3
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger:".bg-wrapper",
      scrub:true,
      start:"+=200%",
      end:"+=400%",
      // markers:true,
    }
  });

tl2
.to('#bg1-wrapper',{scaleY:0, transformOrigin:'top'},"same2")
.to(['#project1','#name1'],{blur:10,duration:1},"same2")
.to('#name1',{autoAlpha:0},"same2")
.fromTo('#bg2-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same2")
.to('#name2',{top:'1em'},"same2")
.fromTo('#bg2-wrapper img',{scale:0},{scale:1},"same2")
// .to('#bg2-wrapper img', {scale:1})
.to('#bg2-wrapper',{scaleY:0, transformOrigin:'top'},"same")
.to(['#project2','#name2'],{blur:10,duration:1},"same")
.to('#name2',{autoAlpha:0},"same")
.fromTo('#bg3-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same")
.to('#name3',{top:'1em'},"same")
.fromTo('#bg3-wrapper img',{scale:0},{scale:1},"same")
// .to('#bg3-wrapper img', {scale:1})


//bg4 5
const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger:".bg-wrapper",
    scrub:true,
    start:"+=600%",
    end:"+=400%",
    // markers:true,
  }
});

tl4
.to('#bg3-wrapper',{scaleY:0, transformOrigin:'top'},"same2")
.to(['#project3','#name3'],{blur:10,duration:1},"same2")
.to('#name3',{autoAlpha:0},"same2")
.fromTo('#bg4-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same2")
.to('#name4',{top:'1em'},"same2")
.fromTo('#bg4-wrapper img',{scale:0},{scale:1},"same2")
// .to('#bg4-wrapper img', {scale:1})
.to('#bg4-wrapper',{scaleY:0, transformOrigin:'top'},"same")
.to(['#project4','#name4'],{blur:10,duration:1},"same")
.to('#name4',{autoAlpha:0},"same")
//bg5 expand
.fromTo('#bg5-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same")
.to('#name5',{top:'1em'},"same")
.fromTo('#bg5-wrapper img',{scale:0},{scale:1},"same")
// .to('#bg5-wrapper img', {scale:1})


//bg6 7
const tl6 = gsap.timeline({
  scrollTrigger: {
    trigger:".bg-wrapper",
    scrub:true,
    start:"+=1000%",
    end:"+=400%",
    // markers:true,
  }
});

tl6
.to('#bg5-wrapper',{scaleY:0, transformOrigin:'top'},"same2")
.to(['#project5','#name5'],{blur:10,duration:1},"same2")
.to('#name5',{autoAlpha:0},"same2")

.fromTo('#bg6-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same2")
.to('#name6',{top:'1em'},"same2")
.fromTo('#bg6-wrapper img',{scale:0},{scale:1},"same2")
// .to('#bg6-wrapper img', {scale:1})
.to('#bg6-wrapper',{scaleY:0, transformOrigin:'top'},"same")
.to(['#project6','#name6'],{blur:10,duration:1},"same")
.to('#name6',{autoAlpha:0},"same")

.fromTo('#bg7-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same")
.to('#name7',{top:'1em'},"same")
.fromTo('#bg7-wrapper img',{scale:0},{scale:1},"same")
// .to('#bg7-wrapper img', {scale:1})

//bg8 9
const tl8 = gsap.timeline({
  scrollTrigger: {
    trigger:".bg-wrapper",
    scrub:true,
    start:"+=1400%",
    end:"+=400%",
    // markers:true,
  }
});

tl8
.to('#bg7-wrapper',{scaleY:0, transformOrigin:'top'},"same2")
.to(['#project7','#name7'],{blur:10,duration:1},"same2")
.to('#name7',{autoAlpha:0},"same2")

.fromTo('#bg8-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same2")
.to('#name8',{top:'1em'},"same2")
.fromTo('#bg8-wrapper img',{scale:0},{scale:1},"same2")
// .to('#bg8-wrapper img', {scale:1})
.to('#bg8-wrapper',{scaleY:0, transformOrigin:'top'},"same")
.to(['#project8','#name8'],{blur:10,duration:1},"same")
.to('#name8',{autoAlpha:0},"same")

.fromTo('#bg9-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same")
.to('#name9',{top:'1em'},"same")
.fromTo('#bg9-wrapper img',{scale:0},{scale:1},"same")
// .to('#bg9-wrapper img', {scale:1})



//bg10 11
const tl10 = gsap.timeline({
  scrollTrigger: {
    trigger:".bg-wrapper",
    scrub:true,
    start:"+=1800%",
    end:"+=400%",
    // markers:true,
  }
});

tl10
.to('#bg9-wrapper',{scaleY:0, transformOrigin:'top'},"same2")
.to(['#project9','#name9'],{blur:10,duration:1},"same2")
.to('#name9',{autoAlpha:0},"same2")

.fromTo('#bg10-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same2")
.to('#name10',{top:'1em'},"same2")
.fromTo('#bg10-wrapper img',{scale:0},{scale:1},"same2")

.to('#bg10-wrapper',{scaleY:0, transformOrigin:'top'},"same")
.to(['#project10','#name10'],{blur:10,duration:1},"same")
.to('#name10',{autoAlpha:0},"same")

.fromTo('#bg11-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same")
.to('#name11',{top:'1em'},"same")
.fromTo('#bg11-wrapper img',{scale:0},{scale:1},"same")



//bg12 13
const tl12 = gsap.timeline({
  scrollTrigger: {
    trigger:".bg-wrapper",
    scrub:true,
    start:"+=2200%",
    end:"+=400%",
    // markers:true,
  }
});

tl12
.to('#bg11-wrapper',{scaleY:0, transformOrigin:'top'},"same2")
.to(['#project11','#name11'],{blur:10,duration:1},"same2")
.to('#name11',{autoAlpha:0},"same2")

.fromTo('#bg12-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same2")
.to('#name12',{top:'1em'},"same2")
.fromTo('#bg12-wrapper img',{scale:0},{scale:1},"same2")

.to('#bg12-wrapper',{scaleY:0, transformOrigin:'top'},"same")
.to(['#project12','#name12'],{blur:10,duration:1},"same")
.to('#name12',{autoAlpha:0},"same")

.fromTo('#bg13-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same")
.to('#name13',{top:'1em'},"same")
.fromTo('#bg13-wrapper img',{scale:0},{scale:1},"same")


//bg14 15
const tl14 = gsap.timeline({
  scrollTrigger: {
    trigger:".bg-wrapper",
    scrub:true,
    start:"+=2600%",
    end:"+=400%",
    // markers:true,
  }
});

tl14
.to('#bg13-wrapper',{scaleY:0, transformOrigin:'top'},"same2")
.to(['#project13','#name13'],{blur:10,duration:1},"same2")
.to('#name13',{autoAlpha:0},"same2")

.fromTo('#bg14-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same2")
.to('#name14',{top:'1em'},"same2")
.fromTo('#bg14-wrapper img',{scale:0},{scale:1},"same2")

.to('#bg14-wrapper',{scaleY:0, transformOrigin:'top'},"same")
.to(['#project14','#name14'],{blur:10,duration:1},"same")
.to('#name14',{autoAlpha:0},"same")

.fromTo('#bg15-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same")
.to('#name15',{top:'1em'},"same")
.fromTo('#bg15-wrapper img',{scale:0},{scale:1},"same")

//bg16 17
const tl16 = gsap.timeline({
  scrollTrigger: {
    trigger:".bg-wrapper",
    scrub:true,
    start:"+=3000%",
    end:"+=400%",
    // markers:true,
  }
});

tl16
.to('#bg15-wrapper',{scaleY:0, transformOrigin:'top'},"same2")
.to(['#project15','#name15'],{blur:10,duration:1},"same2")
.to('#name15',{autoAlpha:0},"same2")

.fromTo('#bg16-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same2")
.to('#name16',{top:'1em'},"same2")
.fromTo('#bg16-wrapper img',{scale:0},{scale:1},"same2")

.to('#bg16-wrapper',{scaleY:0, transformOrigin:'top'},"same")
.to(['#project16','#name16'],{blur:10,duration:1},"same")
.to('#name16',{autoAlpha:0},"same")

.fromTo('#bg17-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same")
.to('#name17',{top:'1em'},"same")
.fromTo('#bg17-wrapper img',{scale:0},{scale:1},"same")


//bg18
const tl18 = gsap.timeline({
  scrollTrigger: {
    trigger:".bg-wrapper",
    scrub:true,
    start:"+=3400%",
    end:"+=400%",
    // markers:true,
  }
});

tl18
.to('#bg17-wrapper',{scaleY:0, transformOrigin:'top'},"same2")
.to(['#project17','#name17'],{blur:10,duration:1},"same2")
.to('#name17',{autoAlpha:0},"same2")

.fromTo('#bg18-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same2")
.to('#name18',{top:'1em'},"same2")
.fromTo('#bg18-wrapper img',{scale:0},{scale:1},"same2")

.to('#bg18-wrapper',{scaleY:0, transformOrigin:'top'},"same")
.to(['#project18','#name18'],{blur:10,duration:1},"same")
.to('#name18',{autoAlpha:0},"same")

.fromTo('#bg19-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same")
.to('#name19',{top:'1em'},"same")
.fromTo('#bg19-wrapper img',{scale:0},{scale:1},"same")

//bg20 21
const tl20 = gsap.timeline({
  scrollTrigger: {
    trigger:".bg-wrapper",
    scrub:true,
    start:"+=3800%",
    end:"+=400%",
    // markers:true,
  }
});

tl20
.to('#bg19-wrapper',{scaleY:0, transformOrigin:'top'},"same2")
.to(['#project19','#name19'],{blur:10,duration:1},"same2")
.to('#name19',{autoAlpha:0},"same2")

.fromTo('#bg20-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same2")
.to('#name20',{top:'1em'},"same2")
.fromTo('#bg20-wrapper img',{scale:0},{scale:1},"same2")

.to('#bg20-wrapper',{scaleY:0, transformOrigin:'top'},"same")
.to(['#project20','#name20'],{blur:10,duration:1},"same")
.to('#name20',{autoAlpha:0},"same")

.fromTo('#bg21-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same")
.to('#name21',{top:'1em'},"same")
.fromTo('#bg21-wrapper img',{scale:0},{scale:1},"same")


//bg22 23
const tl22 = gsap.timeline({
  scrollTrigger: {
    trigger:".bg-wrapper",
    scrub:true,
    start:"+=4200%",
    end:"+=400%",
    // markers:true,
  }
});

tl22
.to('#bg21-wrapper',{scaleY:0, transformOrigin:'top'},"same2")
.to(['#project21','#name21'],{blur:10,duration:1},"same2")
.to('#name21',{autoAlpha:0},"same2")

.fromTo('#bg22-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same2")
.to('#name22',{top:'1em'},"same2")
.fromTo('#bg22-wrapper img',{scale:0},{scale:1},"same2")

.to('#bg22-wrapper',{scaleY:0, transformOrigin:'top'},"same")
.to(['#project22','#name22'],{blur:10,duration:1},"same")
.to('#name22',{autoAlpha:0},"same")

.fromTo('#bg23-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same")
.to('#name23',{top:'1em'},"same")
.fromTo('#bg23-wrapper img',{scale:0},{scale:1},"same")



//bg24 25
const tl24 = gsap.timeline({
  scrollTrigger: {
    trigger:".bg-wrapper",
    scrub:true,
    start:"+=4600%",
    end:"+=400%",
    // markers:true,
  }
});

tl24
.to('#bg23-wrapper',{scaleY:0, transformOrigin:'top'},"same2")
.to(['#project23','#name23'],{blur:10,duration:1},"same2")
.to('#name23',{autoAlpha:0},"same2")

.fromTo('#bg24-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same2")
.to('#name24',{top:'1em'},"same2")
.fromTo('#bg24-wrapper img',{scale:0},{scale:1},"same2")

.to('#bg24-wrapper',{scaleY:0, transformOrigin:'top'},"same")
.to(['#project24','#name24'],{blur:10,duration:1},"same")
.to('#name24',{autoAlpha:0},"same")

.fromTo('#bg25-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same")
.to('#name25',{top:'1em'},"same")
.fromTo('#bg25-wrapper img',{scale:0},{scale:1},"same")




//bg26 27
const tl26 = gsap.timeline({
  scrollTrigger: {
    trigger:".bg-wrapper",
    scrub:true,
    start:"+=5000%",
    end:"+=400%",
    // markers:true,
  }
});

tl26
.to('#bg25-wrapper',{scaleY:0, transformOrigin:'top'},"same2")
.to(['#project25','#name25'],{blur:10,duration:1},"same2")
.to('#name25',{autoAlpha:0},"same2")

.fromTo('#bg26-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same2")
.to('#name26',{top:'1em'},"same2")
.fromTo('#bg26-wrapper img',{scale:0},{scale:1},"same2")

.to('#bg26-wrapper',{scaleY:0, transformOrigin:'top'},"same")
.to(['#project26','#name26'],{blur:10,duration:1},"same")
.to('#name26',{autoAlpha:0},"same")

.fromTo('#bg27-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same")
.to('#name27',{top:'1em'},"same")
.fromTo('#bg27-wrapper img',{scale:0},{scale:1},"same")

//bg28
const tl28 = gsap.timeline({
  scrollTrigger: {
    trigger:".bg-wrapper",
    scrub:true,
    start:"+=5400%",
    end:"+=400%",
    // markers:true,
  }
});

tl28
.to('#bg27-wrapper',{scaleY:0, transformOrigin:'top'},"same2")
.to(['#project27','#name27'],{blur:10,duration:1},"same2")
.to('#name27',{autoAlpha:0},"same2")

.fromTo('#bg28-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same2")
.to('#name28',{top:'1em'},"same2")
.fromTo('#bg28-wrapper img',{scale:0},{scale:1},"same2")

.to('#bg28-wrapper',{scaleY:0, transformOrigin:'top'},"same")
.to(['#project28','#name28'],{blur:10,duration:1},"same")
.to('#name28',{autoAlpha:0},"same")

.fromTo('#bg29-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same")
.to('#name29',{top:'1em'},"same")
.fromTo('#bg29-wrapper img',{scale:0},{scale:1},"same")

//bg30 31
const tl30 = gsap.timeline({
  scrollTrigger: {
    trigger:".bg-wrapper",
    scrub:true,
    start:"+=5800%",
    end:"+=400%",
    // markers:true,
  }
});

tl30
.to('#bg29-wrapper',{scaleY:0, transformOrigin:'top'},"same2")
.to(['#project29','#name29'],{blur:10,duration:1},"same2")
.to('#name29',{autoAlpha:0},"same2")

.fromTo('#bg30-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same2")
.to('#name30',{top:'1em'},"same2")
.fromTo('#bg30-wrapper img',{scale:0},{scale:1},"same2")

.to('#bg30-wrapper',{scaleY:0, transformOrigin:'top'},"same")
.to(['#project30','#name30'],{blur:10,duration:1},"same")
.to('#name30',{autoAlpha:0},"same")

.fromTo('#bg31-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same")
.to('#name31',{top:'1em'},"same")
.fromTo('#bg31-wrapper img',{scale:0},{scale:1},"same")


//bg32 33
const tl32 = gsap.timeline({
  scrollTrigger: {
    trigger:".bg-wrapper",
    scrub:true,
    start:"+=6200%",
    end:"+=400%",
    // markers:true,
  }
});

tl32
.to('#bg31-wrapper',{scaleY:0, transformOrigin:'top'},"same2")
.to(['#project31','#name31'],{blur:10,duration:1},"same2")
.to('#name31',{autoAlpha:0},"same2")

.fromTo('#bg32-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same2")
.to('#name32',{top:'1em'},"same2")
.fromTo('#bg32-wrapper img',{scale:0},{scale:1},"same2")

.to('#bg32-wrapper',{scaleY:0, transformOrigin:'top'},"same")
.to(['#project32','#name32'],{blur:10,duration:1},"same")
.to('#name32',{autoAlpha:0},"same")

.fromTo('#bg33-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same")
.to('#name33',{top:'1em'},"same")
.fromTo('#bg33-wrapper img',{scale:0},{scale:1},"same")


//bg34 35
const tl34 = gsap.timeline({
  scrollTrigger: {
    trigger:".bg-wrapper",
    scrub:true,
    start:"+=6600%",
    end:"+=400%",
    // markers:true,
  }
});

tl34
.to('#bg33-wrapper',{scaleY:0, transformOrigin:'top'},"same2")
.to(['#project33','#name33'],{blur:10,duration:1},"same2")
.to('#name33',{autoAlpha:0},"same2")

.fromTo('#bg34-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same2")
.to('#name34',{top:'1em'},"same2")
.fromTo('#bg34-wrapper img',{scale:0},{scale:1},"same2")

.to('#bg34-wrapper',{scaleY:0, transformOrigin:'top'},"same")
.to(['#project34','#name34'],{blur:10,duration:1},"same")
.to('#name34',{autoAlpha:0},"same")

.fromTo('#bg35-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same")
.to('#name35',{top:'1em'},"same")
.fromTo('#bg35-wrapper img',{scale:0},{scale:1},"same")



//bg36 37
const tl36 = gsap.timeline({
  scrollTrigger: {
    trigger:".bg-wrapper",
    scrub:true,
    start:"+=7000%",
    end:"+=400%",
    // markers:true,
  }
});

tl36
.to('#bg35-wrapper',{scaleY:0, transformOrigin:'top'},"same2")
.to(['#project35','#name35'],{blur:10,duration:1},"same2")
.to('#name35',{autoAlpha:0},"same2")

.fromTo('#bg36-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same2")
.to('#name36',{top:'1em'},"same2")
.fromTo('#bg36-wrapper img',{scale:0},{scale:1},"same2")

.to('#bg36-wrapper',{scaleY:0, transformOrigin:'top'},"same")
.to(['#project36','#name36'],{blur:10,duration:1},"same")
.to('#name36',{autoAlpha:0},"same")

.fromTo('#bg37-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same")
.to('#name37',{top:'1em'},"same")
.fromTo('#bg37-wrapper img',{scale:0},{scale:1},"same")


//bg38
const tl38 = gsap.timeline({
  scrollTrigger: {
    trigger:".bg-wrapper",
    scrub:true,
    start:"+=7400%",
    end:"+=200%",
    // markers:true
  }
});

tl38
.to('#bg37-wrapper',{scaleY:0, transformOrigin:'top'},"same2")
.to(['#project37','#name37'],{blur:10,duration:1},"same2")
.to('#name37',{autoAlpha:0},"same2")

.fromTo('#bg38-wrapper',{scaleY:0},{scaleY:1, transformOrigin:'bottom'},"same2")
.to('#name38',{top:'1em'},"same2")
.fromTo('#bg38-wrapper img',{scale:0},{scale:1},"same2")



// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//
// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();


  const ST = ScrollTrigger.create({
    trigger: "body",
    // scroller:".scrollContainer",
    start: 0,
    // end: "+=7600%",
    end:"bottom bottom",
    // scrub:true
  });


  // The relevant part to keeping the progress
  ScrollTrigger.addEventListener("refreshInit", () => progress = body.progress );
  ScrollTrigger.addEventListener("refresh", () => ST.scroll(progress * ScrollTrigger.maxScroll(window)));




};






window.addEventListener('load', function(){
    init();

});


const locoScroll = new LocomotiveScroll();
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
