window.onbeforeunload = function () {
    // window.scrollTo(0, 0);
     window.scrollTo($('#homepage'), 0);
};


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

const myFunc = () => {
    console.log('complete');

  }
  //pin homepage until img pops up and vanish --> bg1
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger:"#homepage",
      scrub:true,
      pin:true,
      start:"top top",
      end:"+=100%",
      markers:true,
    }, onComplete: myFunc
  });

  timeline
  //pin homepage and squeeze
  .to('#homepage',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg1',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")


  // bg1 img
  const timeline1_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#bg1-wrapper",
      scrub:true,
      start:"top top",
      end:"+=350%",
      markers:true
    }
  });

  timeline1_img
  .fromTo(['#bg1-wrapper img'],{scale:0},{scale:1})
  .to('#bg1-wrapper img', {scale:1})
  // .fromTo('#name1',{scale:0},{scale:1})

  .to('#bg1-wrapper',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg2',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to('#project1',{blur:10,duration:1},"same")


  // bg2 img
  const timeline2_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#bg2-wrapper",
      scrub:true,
      start:"+=180%",
      end:"+=350%",
      markers:true
    }
  });

  timeline2_img
  .fromTo(['#bg2-wrapper img'],{scale:0},{scale:1})
  .to('#bg2-wrapper img', {scale:1})

  .to('#bg2-wrapper',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg3',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to('#project2',{blur:10,duration:1},"same")


  // bg3 img
  const timeline3_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#bg3-wrapper",
      scrub:true,
      start:"+=360%",
      end:"+=350%",
      markers:true
    }
  });

  timeline3_img
  .fromTo('#bg3-wrapper .img',{scale:0},{scale:1})
  .to('#bg3-wrapper .img', {scale:1})

  .to('#bg3-wrapper',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg4',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to('#project3',{blur:10,duration:1},"same")

  // bg4 img
  const timeline4_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#bg4-wrapper",
      scrub:true,
      start:"+=540%",
      end:"+=350%",
      markers:true
    }
  });

  timeline4_img
  .fromTo('#bg4-wrapper .img',{scale:0},{scale:1})
  .to('#bg4-wrapper .img', {scale:1})

  .to('#bg4-wrapper',{scaleY:0, transformOrigin:'top'},"same")
  .fromTo('#bg5',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom'},"same")
  .to('#project4',{blur:10,duration:1},"same")

  // bg5 img
  const timeline5_img = gsap.timeline({
    scrollTrigger: {
      trigger:"#bg5-wrapper",
      scrub:true,
      start:"+=720%",
      end:"+=350%",
      markers:true
    }
  });

  timeline5_img
  .fromTo('#bg5-wrapper .img',{scale:0},{scale:1})
  .to('#bg5-wrapper .img', {scale:1})



};




window.addEventListener('load', function(){
    init();
});
