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

  //INTERACTIONS
  var audio = document.getElementById("audio");

  function fetchAudioAndPlay() {
      return audio.play();
  }

  // function playAudio(){
  //   audio.load();
  //   fetchAudioAndPlay();
  //   $('#muted').addClass('hide');
  //   $('#unmute').removeClass('hide');
  // }
  //
  // function pauseAudio(){
  //   audio.pause();
  //   $('#unmute').addClass('hide');
  //   $('#muted').removeClass('hide');
  // }
  //
  // $('#muted').addEventListener("click", playAudio);
  // $('#unmuted').addEventListener("click", pauseAudio);

  $('#muted').click(function() {
    // audio.play();
    audio.load();
    fetchAudioAndPlay();
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

  // click about-btn on HOME to OPEN
  $('#about-btn-home').click(function() {
    $(this).addClass('hide');
    $('#about-btn-about').removeClass('hide');

    gsap.to('.bg-wrapper',{ease: "expo.out",scaleY:0, transformOrigin:'bottom', duration:2})
    $('#about').removeClass('hide');
    gsap.fromTo('#about',{scaleY:0, blur:10},{ease: "expo.out",blur:0,scaleY:1, duration:2,transformOrigin:'top'})
    disableScroll()
  });

  //click about-btn on ABOUT to CLOSE
  $('#about-btn-about').click(function() {
    $(this).addClass('hide');
    $('#about-btn-home').removeClass('hide');

    gsap.fromTo('#about',{scaleY:1},{ease: "expo.out", scaleY:0, blur:10, duration:2,transformOrigin:'top'})
    gsap.to('.bg-wrapper',{ease: "expo.out", scaleY:1, transformOrigin:'bottom', duration:2})
    enableScroll();
  });

  // click about to CLOSE about
  $('#about').click(function(){
    $('#about-btn-about').addClass('hide');
    $('#about-btn-home').removeClass('hide');

    gsap.fromTo($(this),{scaleY:1},{ease: "expo.out", scaleY:0, blur:10, duration:2,transformOrigin:'top'})
    gsap.to('.bg-wrapper',{ease: "expo.out", scaleY:1, transformOrigin:'bottom', duration:2})
    enableScroll();
  });

  // $('#scrollToP3').click(function(){
  //   gsap.to(window,{duration: 1, scrollTo: {y: "#name3", offsetY: "600vh"}});
  //   // gsap.to(window, {duration: 1, scrollTo: {y: "200vh"}});
  //
  // });
// end INTERACTIONS

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


//match media
// ScrollTrigger.matchMedia({
//
//   //desktop
//   "(min-width: 800px)": function(){
//
//   },
//
//   //mobile
//   "(max-width: 799px)": function(){
//
//   }
//
// });

//LOOP
const bgs = gsap.utils.toArray(".projects");
const imgs = gsap.utils.toArray(".project-img");
const names = gsap.utils.toArray(".project-name");

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    scrub: true,
    start: "top top",
    end: "bottom bottom"
  }
});


bgs.forEach((section, i) => {

  if(i !== bgs.length - 1) {
    timeline.to(section,{duration:1, scaleY:0, transformOrigin:'top'},"<")
    //warnings
    // .to(imgs[i-1],{blur:10,duration:1},"<")
    // .to(names[i-1],{blur:10,duration:1,autoAlpha:0},"<")
  }

  if(bgs[i + 1]){
    timeline
    .fromTo(bgs[i + 1],{scaleY: 0},{duration:1, scaleY: 1, transformOrigin: 'bottom'}, "<")
    .to(names[i],{duration:1, top:'1em'},"<")
    .from(imgs[i],{scale: 0, duration:1},"<")
    // .fromTo(imgs[i],{scale: 0},{duration:1, scale: 1}, "<")
    // .to(imgs[i],{scale:1})
    .to(imgs[i],{blur:10, duration:1},"+=1")
    .to(names[i],{blur:10,duration:1, autoAlpha:0},"<")
    //or
    // .to(imgs,{scale: 1})
  }


});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

let progress = 0;
// The relevant part to keeping the progress
ScrollTrigger.addEventListener("refreshInit", () => progress = timeline.scrollTrigger.progress );
ScrollTrigger.addEventListener("refresh", () => timeline.scrollTrigger.scroll(progress * ScrollTrigger.maxScroll(window)));




};






window.addEventListener("load", function(){
    init();

});


// const locoScroll = new LocomotiveScroll();
// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//
// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();
