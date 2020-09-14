// ALWAYS REFRESH TO TOP
window.onbeforeunload = function () {
    // window.scrollTo(0, 0);
     window.scrollTo($('#homepage'), 0);
};

// INTERACTIONS
$( document ).ready(function() {
  // ABOUT
  $('#name').click(function() {
    $('#about').toggleClass('hide');
  });

  // AUDIO
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

//SMOOTH SCROLL
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

// gsap.utils.toArray(".bg-wrapper").forEach((elem) => {
//   const bgTrigger = document.querySelector(".triggerLoop");
//   const bg = elem.querySelector(".bg");
//
//   const tl2= gsap.timeline({
//     scrollTrigger: {
//       trigger:bgTrigger,
//       start: "top top",
//       end: "+=200%",
//       scrub: true,
//       markers:true
//     }
//   });
//
//   tl2.fromTo(bg, {scaleY:1},{scaleY:0, transformOrigin:'top'})
//
// });

// gsap.utils.toArray(".bg").forEach(function(section) {
//   var bg = section.querySelector(".bg");
//   var bgTrigger = section.querySelector(".bg-trigger");
//
//     const tl2= gsap.timeline({
//       scrollTrigger: {
//         trigger:section,
//         start: "top top",
//         end: "+=200%",
//         scrub: true,
//         markers:true
//       }
//     });
//
//     tl2.fromTo(bg, {scaleY:0},{scaleY:1, transformOrigin:'bottom'})
// });


  //homepage
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger:"#trigger1",
      scrub:true,
      pin:"#homepage",
      start:"top top",
      end:"+=100%",
      markers:true,
    }
  });

  timeline
  .to('#homepage',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg1',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to('#name1',{top:'1em'},"same")

  //bg1
  const timeline_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#trigger1",
      scrub:true,
      start:"top top",
      end:"+=350%",
      markers:true
    }
  });

  timeline_img
  .fromTo('#bg1-wrapper img',{scale:0},{scale:1})
  .to('#bg1-wrapper img', {scale:1})

  .to('#bg1',{scaleY:0, transformOrigin:'top'},"same2")
  .fromTo('#bg2',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same2")
  .to(['#project1','#name1'],{blur:10,duration:1},"same2")
  .to('#name2',{top:'1em'},"same2")



  // bg2 img
  const timeline2_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#trigger3",
      scrub:true,
      start:"top top",
      end:"+=350%",
      markers:true
    }
  });

  timeline2_img
  .fromTo('#bg2-wrapper img',{scale:0},{scale:1})
  .to('#bg2-wrapper img', {scale:1})

  .to('#bg2',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg3',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to(['#project2','#name2'],{blur:10,duration:1},"same")
  .to('#name3',{top:'1em'},"same")


  // bg3 img
  const timeline3_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#trigger5",
      scrub:true,
      start:"top top",
      end:"+=350%",
      markers:true
    }
  });

  timeline3_img
  .fromTo('#bg3-wrapper img',{scale:0},{scale:1})
  .to('#bg3-wrapper img', {scale:1})

  .to('#bg3',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg4',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to(['#project3','#name3'],{blur:10,duration:1},"same")
  .to('#name4',{top:'1em'},"same")

  // bg4 img
  const timeline4_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#trigger7",
      endTrigger:"#bg5",
      scrub:true,
      start:"top top",
      end:"+=350%",
      markers:true
    }
  });

  timeline4_img
  .fromTo('#bg4-wrapper img',{scale:0},{scale:1})
  .to('#bg4-wrapper img', {scale:1})

  .to('#bg4',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg5',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to(['#project4','#name4'],{blur:10,duration:1},"same")
  .to('#name5',{top:'1em'},"same")

  // bg5 img
  const timeline5_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#trigger9",
      scrub:true,
      start:"top top",
      end:"+=350%",
      markers:true
    }
  });

  timeline5_img
  .fromTo('#bg5-wrapper img',{scale:0},{scale:1})
  .to('#bg5-wrapper img', {scale:1})

  .to('#bg5',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg6',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to(['#project5','#name5'],{blur:10,duration:1},"same")
  .to('#name6',{top:'1em'},"same")

  // bg6 img
  const timeline6_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#trigger11",
      scrub:true,
      start:"top top",
      end:"+=350%",
      markers:true
    }
  });

  timeline6_img
  .fromTo('#bg6-wrapper img',{scale:0},{scale:1})
  .to('#bg6-wrapper img', {scale:1})

  .to('#bg6',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg7',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to(['#project6','#name6'],{blur:10,duration:1},"same")
  .to('#name7',{top:'1em'},"same")

  // bg7 img
  const timeline7_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#trigger13",
      scrub:true,
      start:"top top",
      end:"+=350%",
      markers:true
    }
  });

  timeline7_img
  .fromTo('#bg7-wrapper img',{scale:0},{scale:1})
  .to('#bg7-wrapper img', {scale:1})

  .to('#bg7',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg8',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to(['#project7','#name7'],{blur:10,duration:1},"same")
  .to('#name8',{top:'1em'},"same")

  // bg8 img
  const timeline8_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#trigger15",
      scrub:true,
      start:"top top",
      end:"+=350%",
      markers:true
    }
  });

  timeline8_img
  .fromTo('#bg8-wrapper img',{scale:0},{scale:1})
  .to('#bg8-wrapper img', {scale:1})

  .to('#bg8',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg9',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to(['#project8','#name8'],{blur:10,duration:1},"same")
  .to('#name9',{top:'1em'},"same")

  // bg9 img
  const timeline9_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#trigger17",
      scrub:true,
      start:"top top",
      end:"+=350%",
      markers:true
    }
  });

  timeline9_img
  .fromTo('#bg9-wrapper img',{scale:0},{scale:1})
  .to('#bg9-wrapper img', {scale:1})

  .to('#bg9',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg10',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to(['#project9','#name9'],{blur:10,duration:1},"same")
  .to('#name10',{top:'1em'},"same")

  // bg10 img
  const timeline10_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#trigger19",
      scrub:true,
      start:"top top",
      end:"+=350%",
      markers:true
    }
  });

  timeline10_img
  .fromTo('#bg10-wrapper img',{scale:0},{scale:1})
  .to('#bg10-wrapper img', {scale:1})

  .to('#bg10',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg11',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to(['#project10','#name10'],{blur:10,duration:1},"same")
  .to('#name11',{top:'1em'},"same")

  // bg11 img
  const timeline11_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#trigger21",
      scrub:true,
      start:"top top",
      end:"+=350%",
      markers:true
    }
  });

  timeline11_img
  .fromTo('#bg11-wrapper img',{scale:0},{scale:1})
  .to('#bg11-wrapper img', {scale:1})

  .to('#bg11',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg12',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to(['#project11','#name11'],{blur:10,duration:1},"same")
  .to('#name12',{top:'1em'},"same")

  // bg12 img
  const timeline12_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#trigger23",
      scrub:true,
      start:"top top",
      end:"+=350%",
      markers:true
    }
  });

  timeline12_img
  .fromTo('#bg12-wrapper img',{scale:0},{scale:1})
  .to('#bg12-wrapper img', {scale:1})

  .to('#bg12',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg13',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to(['#project12','#name12'],{blur:10,duration:1},"same")
  .to('#name13',{top:'1em'},"same")

  // bg13 img
  const timeline13_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#trigger25",
      scrub:true,
      start:"top top",
      end:"+=350%",
      markers:true
    }
  });

  timeline13_img
  .fromTo('#bg13-wrapper img',{scale:0},{scale:1})
  .to('#bg13-wrapper img', {scale:1})

  .to('#bg13',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg14',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to(['#project13','#name13'],{blur:10,duration:1},"same")
  .to('#name14',{top:'1em'},"same")

  // bg14 img
  const timeline14_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#trigger27",
      scrub:true,
      start:"top top",
      end:"+=350%",
      markers:true
    }
  });

  timeline14_img
  .fromTo('#bg14-wrapper img',{scale:0},{scale:1})
  .to('#bg14-wrapper img', {scale:1})

  .to('#bg14',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg15',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to(['#project14','#name14'],{blur:10,duration:1},"same")
  .to('#name15',{top:'1em'},"same")

  // bg15 img
  const timeline15_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#trigger29",
      scrub:true,
      start:"top top",
      end:"+=350%",
      markers:true
    }
  });

  timeline15_img
  .fromTo('#bg15-wrapper img',{scale:0},{scale:1})
  .to('#bg15-wrapper img', {scale:1})

  .to('#bg15',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg16',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to(['#project15','#name15'],{blur:10,duration:1},"same")
  .to('#name16',{top:'1em'},"same")

  // bg16 img
  const timeline16_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#trigger31",
      scrub:true,
      start:"top top",
      end:"+=350%",
      markers:true
    }
  });

  timeline16_img
  .fromTo('#bg16-wrapper img',{scale:0},{scale:1})
  .to('#bg16-wrapper img', {scale:1})

  .to('#bg16',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg17',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to(['#project16','#name16'],{blur:10,duration:1},"same")
  .to('#name17',{top:'1em'},"same")

  // bg17 img
  const timeline17_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#trigger33",
      scrub:true,
      start:"top top",
      end:"+=350%",
      markers:true
    }
  });

  timeline17_img
  .fromTo('#bg17-wrapper img',{scale:0},{scale:1})
  .to('#bg17-wrapper img', {scale:1})

  .to('#bg17',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg18',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to(['#project17','#name17'],{blur:10,duration:1},"same")
  .to('#name18',{top:'1em'},"same")

  // bg18 img
  const timeline18_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#trigger35",
      scrub:true,
      start:"top top",
      end:"+=350%",
      markers:true
    }
  });

  timeline18_img
  .fromTo('#bg18-wrapper img',{scale:0},{scale:1})
  .to('#bg18-wrapper img', {scale:1})

  .to('#bg18',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg19',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to(['#project18','#name18'],{blur:10,duration:1},"same")
  .to('#name19',{top:'1em'},"same")

  // bg19 img
  const timeline19_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#trigger37",
      scrub:true,
      start:"top top",
      end:"+=350%",
      markers:true
    }
  });

  timeline19_img
  .fromTo('#bg19-wrapper img',{scale:0},{scale:1})
  .to('#bg19-wrapper img', {scale:1})

  .to('#bg19',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg20',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to(['#project19','#name19'],{blur:10,duration:1},"same")
  .to('#name20',{top:'1em'},"same")

  // bg20 img
  const timeline20_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#trigger39",
      scrub:true,
      start:"top top",
      end:"+=350%",
      markers:true
    }
  });

  timeline20_img
  .fromTo('#bg20-wrapper img',{scale:0},{scale:1})
  .to('#bg20-wrapper img', {scale:1})

  .to('#bg20',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg21',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to(['#project20','#name20'],{blur:10,duration:1},"same")
  .to('#name21',{top:'1em'},"same")

  // bg21 img
  const timeline21_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#trigger41",
      scrub:true,
      start:"top top",
      end:"+=350%",
      markers:true
    }
  });

  timeline21_img
  .fromTo('#bg21-wrapper img',{scale:0},{scale:1})
  .to('#bg21-wrapper img', {scale:1})

  .to('#bg21',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg22',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to(['#project21','#name21'],{blur:10,duration:1},"same")
  .to('#name22',{top:'1em'},"same")

  // bg22 img
  const timeline22_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#trigger43",
      scrub:true,
      start:"top top",
      end:"+=350%",
      markers:true
    }
  });

  timeline22_img
  .fromTo('#bg22-wrapper img',{scale:0},{scale:1})
  .to('#bg22-wrapper img', {scale:1})

  .to('#bg22',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg23',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to(['#project22','#name22'],{blur:10,duration:1},"same")
  .to('#name23',{top:'1em'},"same")

  // bg23 img
  const timeline23_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#trigger45",
      scrub:true,
      start:"top top",
      end:"+=350%",
      markers:true
    }
  });

  timeline23_img
  .fromTo('#bg23-wrapper img',{scale:0},{scale:1})
  .to('#bg23-wrapper img', {scale:1})

  .to('#bg23',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg24',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to(['#project23','#name23'],{blur:10,duration:1},"same")
  .to('#name24',{top:'1em'},"same")

  // bg24 img
  const timeline24_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#trigger47",
      scrub:true,
      start:"top top",
      end:"+=350%",
      markers:true
    }
  });

  timeline24_img
  .fromTo('#bg24-wrapper img',{scale:0},{scale:1})
  .to('#bg24-wrapper img', {scale:1})

  .to('#bg24',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg25',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to(['#project24','#name24'],{blur:10,duration:1},"same")
  .to('#name25',{top:'1em'},"same")

  // bg25 img
  const timeline25_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#trigger49",
      scrub:true,
      start:"top top",
      end:"+=350%",
      markers:true
    }
  });

  timeline25_img
  .fromTo('#bg25-wrapper img',{scale:0},{scale:1})
  .to('#bg25-wrapper img', {scale:1})

  .to('#bg25',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg26',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to(['#project25','#name25'],{blur:10,duration:1},"same")
  .to('#name26',{top:'1em'},"same")


  const ST = ScrollTrigger.create({
    trigger: "body",
    start: 0,
    end: "bottom bottom",
    scrub:true
  });

  // The relevant part to keeping the progress
  ScrollTrigger.addEventListener("refreshInit", () => progress = scrollContainer.progress);
  ScrollTrigger.addEventListener("refresh", () => ST.scroll(progress * ScrollTrigger.maxScroll(window)));

  // // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  // ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  //
  // // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  // ScrollTrigger.refresh();

};


window.addEventListener('load', function(){
    init();

});

// const locoScroll = new LocomotiveScroll();

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
