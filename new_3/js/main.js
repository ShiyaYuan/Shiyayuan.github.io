
// utils throttle
function throttle(fn, interval, lock = false) {
  return function(...args) {
    if (lock) return;
    lock = true;
    fn(...args);
    setTimeout(() => {
      lock = false
    }, interval);
  }
}
// Compatible with mobile phones and computers
function getXY(ev) {
  let x, y;
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    x = ev.touches[0].clientX;
    y = ev.touches[0].clientY;
  } else {
    x = ev.clientX;
    y = ev.clientY;
  }

  return {
    clientX: x,
    clientY: y
  };
}

function init() {

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  //INTERACTIONS
  // OPEN about
  $('#about-btn').click(function() {

    $('#scrollbar').addClass('hide');
    $('.close-btn').removeClass('hide');
    $('#about').removeClass('hide');

    $('#project-wrapper,#homepage').addClass('blur');
  });

  //CLOSE about
  $('#back-home-btn').click(function() {

    $('#scrollbar').removeClass('hide');
    $('.close-btn').addClass('hide');
    $('#about').addClass('hide');

    $('#project-wrapper,#homepage').removeClass('blur');
  });

  //side bar
  gsap.set(".thumbnail-wrapper", {
    xPercent: 100
  });

  let scrollbtn = document.querySelector(".thumbnail-wrapper"),
    scrollBar = document.querySelector(".customScrollbar"),
    tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        scroller: "#path-wrapper",
        trigger: "#section1",
        start: "top top",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
        // markers: true,
      }
    });

  let header = document.querySelector("header");
  let footer = document.querySelector(".audio-control");
  var scrollbar = document.querySelector("#scrollbar");
  var scrollbarWidth = scrollBar.offsetWidth / document.documentElement.clientWidth * 100;
  const headerWidth = header.offsetWidth / document.documentElement.clientWidth * 100;
  const footerWidth = footer.offsetWidth / document.documentElement.clientWidth * 100;
  const newHeaderWidth = headerWidth - scrollbarWidth;
  tl.to(scrollbtn, {xPercent: 0,duration: 1})
    .fromTo(".audio-control", {width: footerWidth + "%"}, {width: newHeaderWidth + "%",duration: 1}, "<")

  scrollBar.addEventListener("mouseenter", () => tl.play());
  scrollBar.addEventListener("mouseleave", () => tl.reverse());

  // end INTERACTIONS


  //custom scrollbar navigation
  gsap.utils.toArray(".customScrollbar .thumbnails").forEach(function(thumbnails, index) {
    thumbnails.addEventListener("click", () => {
      gsap.to("#path-wrapper", {duration: 1, ease: "sine.inOut", scrollTo: {y: "#section" + (index + 1)}});
    });
  });

  // scroll back to home, scroll to top
  $('#back-to-home').click(function() {
    gsap.to("#path-wrapper", {duration: 1, ease: "sine.inOut", scrollTo: "#homepage"});
  });


};


//////////////////////////////////////////////////////////////////////
//document ready
function dom() {
  // init();

  //getting custom cursor to work
  function customCursor(event) {
    var el = document.getElementById("cursor");
    el.style.top = event.clientY + "px";
    el.style.left = event.clientX + "px";
  }

  customCursor = throttle(customCursor, 10);
  window.addEventListener('mousemove', customCursor);

  /////////////////////////////////////////////////////////////////////
  const canvas = document.getElementById('imageView');
  // var canvas2 = document.getElementById("canvas2");

  context = canvas.getContext("2d");

  //click to clear canvas
  $('#clear-canvas-btn').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
  });

  var rect = canvas.parentNode.getBoundingClientRect();
  context.canvas.width = window.innerWidth;
  context.canvas.height = rect.height;

  /////////////////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////////////////
  let last_event; // we will store our mouseevents here

  // we now listen to the mousemove event on the document,
  // not only on the canvas
  // throttle for ev_mousemove, max 50ms execute once
  ev_mousemove = throttle(ev_mousemove, 10);
  // throttle for ev_mousemove, max 50ms execute once
  fireLastMouseEvent = throttle(fireLastMouseEvent, 10);
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    document.addEventListener('touchmove', (e) => ev_mousemove(e));
  } else {
    document.addEventListener('mousemove', ev_mousemove);
  }

  document.addEventListener('scroll', fireLastMouseEvent, {
    capture: true
  });

  // called in scroll event
  function fireLastMouseEvent() {
    if (last_event) {
      // fire a new event on the document using the same clientX and clientY values
      if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        document.dispatchEvent(new MouseEvent("mousemove", last_event));
      }
    }
  }

  // mousemove event handler.
  function ev_mousemove(ev) {
    // only for "true" mouse event
    if (ev.isTrusted) {
      // store the clientX and clientY props in an object
      const {
        clientX,
        clientY
      } = getXY(ev);

      last_event = {
        clientX,
        clientY
      };
    }

    // get the relative x and y positions from the mouse event
    const point = getRelativePointFromEvent(ev, canvas);

    // add it to the context's sub-path definition
    context.lineTo(point.x, point.y);

    // clear the previous drawings
    context.clearRect(0, 0, canvas.width, canvas.height);
    // draw everything again
    context.lineJoin = context.lineCap = "round";
    context.shadowBlur = 10;
    // context.shadowColor = 'rgb(0, 0, 0)';
    // store preset gradient in variable
    var gradient = context.createLinearGradient(0, 0, canvas.width, 100);
    gradient.addColorStop("0", "#865e62");
    gradient.addColorStop("0.2", "#d32642");
    gradient.addColorStop("0.4", "#c0b8ad");
    gradient.addColorStop("0.5", "white");
    gradient.addColorStop("0.8", "#f68d91");
    gradient.addColorStop("0.9", "#7f88a8");
    gradient.addColorStop("1.0", "#865e62");

    context.strokeStyle = gradient;

    context.lineWidth = 4;
    context.stroke();

  }

  function getRelativePointFromEvent(ev, elem) {
    // first find the bounding rect of the element
    const bbox = elem.getBoundingClientRect();
    // subtract the bounding rect from the client coords
    const {
      clientX,
      clientY
    } = getXY(ev);
    const x = clientX - bbox.left;
    const y = clientY - bbox.top;

    return {
      x,
      y
    };
  }

}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", dom);
} else {
  dom();
}

//////////////////////////////////////////////////////////////////////
function enableScroll() {
  document.getElementById("path-wrapper").style.overflow = "scroll";
}
function bringToFront() {
  document.getElementById("scrollbar").style.zIndex="9999";
}

//////////////////////////////////////////////////////////////////////
window.addEventListener("load", function() {
  init();


  // cursor loading/loaded
  setTimeout(function() {
    $('#cursor').fadeOut(500);
    setTimeout(function() {
      $('#cursor').fadeIn(500);
      $(('#cursor')).html("scroll");
      bringToFront();
      enableScroll();
      setTimeout(function() {
        $('#cursor').fadeOut(1000);
      }, 2000)
    })
  });

});
