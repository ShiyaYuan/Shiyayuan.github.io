window.onbeforeunload = function () {
    // window.scrollTo(0, 0);
     window.scrollTo($('#homepage'), 0);
};

// window.onload = function () {
//     window.scrollTo(0, 0);
// };

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

  //blur image on squeeze (on leave)
  gsap.utils.toArray(".projects img").forEach(elem => {
    // if($(".project img").width < )

    const tl= gsap.timeline({
      scrollTrigger: {
        trigger: elem,
        start: "bottom top",
        end: "+=200%",
        scrub: true,
        markers:true
      }
    });

    tl.to(elem, {duration: 1,blur: 15,ease: "none",})

  });

gsap.registerPlugin(ScrollTrigger);

//project image grow
gsap.utils.toArray(".projects img").forEach(elem => {

  const tl2= gsap.timeline({
    scrollTrigger: {
      trigger: elem,
      start: "top bottom",
      end: "+=200%",
      scrub: true,
      markers:true
    }
  });

  tl2.fromTo(elem, {scale:0},{scale:1})

});


////////////////////////////////////////////////////////
  //squeeze homepage
  gsap.to('#homepage',{scaleY:0, transformOrigin:'top', scrollTrigger:{
      trigger:'#homepage',
      start:'top top', //top of #intro div and top of viewport
      end:'bottom top',
      scrub:true,
      pin:"#homepage",
      markers:true
  }});

  //expand bg2 (#bg2)
  gsap.fromTo('#bg2',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom', scrollTrigger:{
      trigger:'#bg2-wrapper',
      start:'top top', //top of #intro div and top of viewport
      end:'bottom top',
      scrub:true,
      pin:"#bg2-wrapper",
      markers:true
  }});

  // const openWindow1 = () => {
  //   window.open("project1.html");
  // }
  // squeeze bg2 (#bg2-wrapepr)
  gsap.fromTo('#bg2-wrapper',{scaleY:1, transformOrigin:'top'},{scaleY:0, transformOrigin:'top', scrollTrigger:{
      trigger:'#bg2-wrapper',
      start:'bottom bottom', //top of #intro div and top of viewport
      end:'bottom top',
      pin:true,
      scrub:true,
      pin:"#bg2-wrapper",
      markers:true,
      // onEnter: self => console.log("hi")
      // onEnter: openWindow1
  }});

  //expand bg3
  gsap.fromTo('#bg3',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom', scrollTrigger:{
      trigger:'#bg3-wrapper',
      start:'top top', //top of #intro div and top of viewport
      end:'bottom top',
      scrub:true,
      pin:"#bg3-wrapper",
      markers:true
  }});

  // squeeze bg3
  gsap.fromTo('#bg3-wrapper',{scaleY:1, transformOrigin:'top'},{scaleY:0, transformOrigin:'top', scrollTrigger:{
      trigger:'#bg3-wrapper',
      start:'bottom bottom', //top of #intro div and top of viewport
      end:'bottom top',
      pin:true,
      scrub:true,
      pin:"#bg3-wrapper",
      markers:true
  }});

  //expand bg4
  gsap.fromTo('#bg4',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom', scrollTrigger:{
      trigger:'#bg4-wrapper',
      start:'top top', //top of #intro div and top of viewport
      end:'bottom top',
      scrub:true,
      pin:"#bg4-wrapper",
      markers:true
  }});

  // squeeze bg4
  gsap.fromTo('#bg4-wrapper',{scaleY:1, transformOrigin:'top'},{scaleY:0, transformOrigin:'top', scrollTrigger:{
      trigger:'#bg4-wrapper',
      start:'bottom bottom', //top of #intro div and top of viewport
      end:'bottom top',
      pin:true,
      scrub:true,
      pin:"#bg4-wrapper",
      markers:true
  }});

  //expand bg5
  gsap.fromTo('#bg5',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom', scrollTrigger:{
      trigger:'#bg5-wrapper',
      start:'top top', //top of #intro div and top of viewport
      end:'bottom top',
      scrub:true,
      pin:"#bg5-wrapper",
      markers:true
  }});

  // squeeze bg5
  gsap.fromTo('#bg5-wrapper',{scaleY:1, transformOrigin:'top'},{scaleY:0, transformOrigin:'top', scrollTrigger:{
      trigger:'#bg5-wrapper',
      start:'bottom bottom', //top of #intro div and top of viewport
      end:'bottom top',
      pin:true,
      scrub:true,
      pin:"#bg5-wrapper",
      markers:true
  }});

  //expand bg6
  gsap.fromTo('#bg6',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom', scrollTrigger:{
      trigger:'#bg6-wrapper',
      start:'top top', //top of #intro div and top of viewport
      end:'bottom top',
      scrub:true,
      pin:"#bg6-wrapper",
      markers:true
  }});

  // squeeze bg6
  gsap.fromTo('#bg6-wrapper',{scaleY:1, transformOrigin:'top'},{scaleY:0, transformOrigin:'top', scrollTrigger:{
      trigger:'#bg6-wrapper',
      start:'bottom bottom', //top of #intro div and top of viewport
      end:'bottom top',
      pin:true,
      scrub:true,
      pin:"#bg6-wrapper",
      markers:true
  }});

  //expand bg7
  gsap.fromTo('#bg7',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom', scrollTrigger:{
      trigger:'#bg7-wrapper',
      start:'top top', //top of #intro div and top of viewport
      end:'bottom top',
      scrub:true,
      pin:"#bg7-wrapper",
      markers:true
  }});

  // squeeze bg7
  gsap.fromTo('#bg7-wrapper',{scaleY:1, transformOrigin:'top'},{scaleY:0, transformOrigin:'top', scrollTrigger:{
      trigger:'#bg7-wrapper',
      start:'bottom bottom', //top of #intro div and top of viewport
      end:'bottom top',
      pin:true,
      scrub:true,
      pin:"#bg7-wrapper",
      markers:true
  }});

  //expand bg8
  gsap.fromTo('#bg8',{scaleY:0, transformOrigin:'bottom'},{scaleY:1, transformOrigin:'bottom', scrollTrigger:{
      trigger:'#bg8-wrapper',
      start:'top top', //top of #intro div and top of viewport
      end:'bottom top',
      scrub:true,
      pin:"#bg8-wrapper",
      markers:true
  }});

  // squeeze bg8
  gsap.fromTo('#bg8-wrapper',{scaleY:1, transformOrigin:'top'},{scaleY:0, transformOrigin:'top', scrollTrigger:{
      trigger:'#bg8-wrapper',
      start:'bottom bottom', //top of #intro div and top of viewport
      end:'bottom top',
      pin:true,
      scrub:true,
      pin:"#bg8-wrapper",
      markers:true
  }});



};




window.addEventListener('load', function(){
    init();
});
