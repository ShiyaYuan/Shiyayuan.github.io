'use strict';
import * as fileSaver from '../node_modules/file-saver/src/FileSaver.js';

import * as THREE from "../node_modules/three/build/three.module.js";

import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { GUI } from '../node_modules/three/examples/jsm/libs/dat.gui.module.js';

let camera, scene, renderer, ambientLight, plane;
let container;
let orbit;
let gui;
let model;


function init(){
  container = document.querySelector('#scene-container');
  scene = new THREE.Scene();

  gui = new GUI({ autoPlace: false });
  var guiContainer = document.getElementById('gui-pos');
  guiContainer.appendChild(gui.domElement);

  createCamera();
  createControls();
  createLights();
  createOrigin();
  loadModel();
  createRenderer();

  mainLoop();

}

function createOrigin(){
  var texture = new THREE.TextureLoader().load('images/floor.png');
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(6,6);

  var geometry = new THREE.PlaneGeometry( 200, 250, 32 );
  var material = new THREE.MeshBasicMaterial( {color: 'gray',map:texture} );
  plane = new THREE.Mesh( geometry, material );
  plane.rotation.x = -(Math.PI/2);
  plane.position.set (0,-10,0);

  scene.add( plane );
}


function createCamera(){
  camera = new THREE.PerspectiveCamera( 35, container.clientWidth / container.clientHeight, 1, 100 );
  camera.position.set( -5,0,25);
}

function createControls(){
  orbit = new OrbitControls( camera, container );
  orbit.enablePan = false;
  orbit.minDistance = 8;
  orbit.maxDistance = 90;
  orbit.target.set(-2,-2,8);

}

function createLights(){
  const color = 0xddeeff;
  const intensity = 12;
  ambientLight = new THREE.HemisphereLight( color, 0x0f0e0d, intensity );

  const mainLight = new THREE.DirectionalLight( 0xffffff, 1 );
  mainLight.position.set( 0, 20, -10 );

  scene.add(ambientLight);
  scene.add(mainLight);
}

function loadModel(){
  const loader = new GLTFLoader();

  const onLoad = (gltf, position) => {
    model = gltf.scene.children[0];
    model.position.copy( position );

    // model.position.set(2,-4.5, 10);
    model.rotation.x = 1.1;
    model.rotation.y = 1;
    model.rotation.z = 0;


    // wrist
    let wristJoint = model.getObjectByName( 'wrist_joint' );
    wristJoint.rotation.x = 0.3;
    wristJoint.rotation.z = -0.1;

    // thumb
    let thumbJoint1 = wristJoint.children[2];
    let thumbJoint2 = thumbJoint1.children[0];
    let thumbJoint3 = thumbJoint2.children[0];

    // point
    let pointJoint1 = wristJoint.children[0].children[1];
    let pointJoint2 = pointJoint1.children[0];
    let pointJoint3 = pointJoint2.children[0];

    // middle
    let middleJoint1 = wristJoint.children[0].children[2];
    let middleJoint2 = middleJoint1.children[0];
    let middleJoint3 = middleJoint2.children[0];

    // ring
    let ringJoint1 = wristJoint.children[0].children[0];
    let ringJoint2 = ringJoint1.children[0];
    let ringJoint3 = ringJoint2.children[0];

    // pinky
    let pinkyJoint1 = wristJoint.children[1];
    let pinkyJoint2 = pinkyJoint1.children[0];
    let pinkyJoint3 = pinkyJoint2.children[0];


    //gui color helper
    class ColorGUIHelper {
      constructor(object, prop) {
        this.object = object;
        this.prop = prop;
      }
      get value() {
        return `#${this.object[this.prop].getHexString()}`;
      }
      set value(hexString) {
        this.object[this.prop].set(hexString);
      }
    }

    //gui controls
    var options = {
  relaxed: function() {
    thumbJoint1.rotation.x= -0.12;
    thumbJoint1.rotation.y= 0.37;
    thumbJoint1.rotation.z= -0.1;
    thumbJoint3.rotation.y= -0.34;

    pointJoint1.rotation.x= -0.1;
    pointJoint1.rotation.y= 0.56;
    pointJoint1.rotation.z= -0.12;
    pointJoint2.rotation.z= -0.3;
    pointJoint3.rotation.z= 0;

    middleJoint1.rotation.x= -0.1;
    middleJoint1.rotation.y= 0.5;
    middleJoint1.rotation.z= -0.2;
    middleJoint2.rotation.z= -0.1;
    middleJoint3.rotation.z= 0;

    ringJoint1.rotation.x= 0;
    ringJoint1.rotation.y= 0.42;
    ringJoint1.rotation.z= -0.19;
    ringJoint2.rotation.z= -0.07;
    ringJoint3.rotation.z= 0.1;

    pinkyJoint1.rotation.x= 0.3;
    pinkyJoint1.rotation.y= -0.16;
    pinkyJoint1.rotation.z= -0.04;
    pinkyJoint2.rotation.z= -0.024;
    pinkyJoint3.rotation.z= -0.31;
  },
  reset: function() {
    thumbJoint1.rotation.x= 0.033;
    thumbJoint1.rotation.y= 0.46;
    thumbJoint1.rotation.z= -0.097;
    thumbJoint3.rotation.y= -0.14;

    pointJoint1.rotation.x= -0.097;
    pointJoint1.rotation.y= 0.65;
    pointJoint1.rotation.z= 0.082;
    pointJoint2.rotation.z= -0.08;
    pointJoint3.rotation.z= 0.092;

    middleJoint1.rotation.x= -0.17;
    middleJoint1.rotation.y= 0.49;
    middleJoint1.rotation.z= -0.0028;
    middleJoint2.rotation.z= 0.07;
    middleJoint3.rotation.z= 0.12;

    ringJoint1.rotation.x= -0.18;
    ringJoint1.rotation.y= 0.45;
    ringJoint1.rotation.z= 0.012;
    ringJoint2.rotation.z= 0.079;
    ringJoint3.rotation.z= 0.15;

    pinkyJoint1.rotation.x= -0.014;
    pinkyJoint1.rotation.y= -0.2;
    pinkyJoint1.rotation.z= -0.11;
    pinkyJoint2.rotation.z= -0.081;
    pinkyJoint3.rotation.z= -0.055;
  }
};

    //hand position preset
    gui.add(options, 'relaxed').name('👉Relax Hand');
    gui.add(options, 'reset').name('👉Reset Hand Posture');

    //move hand position x y
    var folder1 = gui.addFolder("Adjust Hand Position");
    folder1.add(model.position, 'x', -25, 20).name('left / right');
    folder1.add(model.position, 'y', -25, 20 ).name('down / up');

    folder1.add(model.rotation, 'y', -1, 1 ).name('rotate1');
    folder1.add(model.rotation, 'z', -1, 1 ).name('rotate2');

    //exapnd folder
    folder1.open();

    //adjust fingers and wrist
    var folder = gui.addFolder("Adjust Fingers");
    //thumb folder
    var thumbFolder = folder.addFolder("Thumb");
    thumbFolder.add(thumbJoint1.rotation, 'x', -0.5, 0.5).name("rotate");
    thumbFolder.add(thumbJoint1.rotation, 'y', 0, 0.5).name( "move in / out" );
    thumbFolder.add(thumbJoint1.rotation, 'z', -0.5, 0.5).name( "lower / lift" );

    thumbFolder.add(thumbJoint3.rotation, 'y', -0.5, 0).name( "fingertip" );
    //point folder
    var pointFolder = folder.addFolder("Point Finger");
    pointFolder.add(pointJoint1.rotation, 'z', -0.5, 0.5).name( "lower / lift" );

    pointFolder.add(pointJoint2.rotation, 'z', -0.5, 0).name( "knuckle" );
    pointFolder.add(pointJoint3.rotation, 'z', -0.5, 0).name( "fingertip" );
    //middle folder
    var middleFolder = folder.addFolder("Middle Finger");
    middleFolder.add(middleJoint1.rotation, 'z', -0.5, 0.5).name( "lower / lift" );

    middleFolder.add(middleJoint2.rotation, 'z', -0.5, 0.2).name( "knuckle" );
    middleFolder.add(middleJoint3.rotation, 'z', -0.5, 0.2).name( "fingertip" );
    //ring folder
    var ringFolder = folder.addFolder("Ring Finger");
    ringFolder.add(ringJoint1.rotation, 'z', -0.5, 0.5).name( "lower / lift" );

    ringFolder.add(ringJoint2.rotation, 'z', -0.5, 0).name( "knuckle" );
    ringFolder.add(ringJoint3.rotation, 'z', -0.5, 0).name( "fingertip" );
    //pinky folder
    var pinkyFolder = folder.addFolder("Pinky");
    pinkyFolder.add(pinkyJoint1.rotation, 'z', -0.5, 0.5).name( "lower / lift" );

    pinkyFolder.add(pinkyJoint2.rotation, 'z', -0.5, 0).name( "knuckle" );
    pinkyFolder.add(pinkyJoint3.rotation, 'z', -0.5, 0).name( "fingertip" );

    //lighting
    var folder = gui.addFolder("Adjust Lighting");
    folder.addColor(new ColorGUIHelper(ambientLight, 'color'), 'value').name('light color');
    folder.add(ambientLight, 'intensity', 5, 20, 0.01).name('brightness');
    //end gui controls

    scene.add( model );

    //skeleton helper
    // var helper = new THREE.SkeletonHelper( model );
    // scene.add( helper );
  };

  const onProgress = () => {};
  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  const modelPosition = new THREE.Vector3( 0, -6, 5 );
  loader.load('models/scene-final.glb', gltf => onLoad( gltf,modelPosition ), onProgress, onError);
  // console.log(modelPosition);
}
//finish loadModel



function createRenderer() {
  renderer = new THREE.WebGLRenderer( { antialias: true, alpha:true } );
  renderer.setSize( container.clientWidth, container.clientHeight );

  renderer.setPixelRatio( window.devicePixelRatio );

  renderer.outputEncoding = THREE.sRGBEncoding;

  renderer.physicallyCorrectLights = true;

  container.appendChild( renderer.domElement );
}





function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;

  // update the camera's frustum
  camera.updateProjectionMatrix();
  renderer.setSize( container.clientWidth, container.clientHeight );

} window.addEventListener( 'resize', onWindowResize );

function mainLoop() {
        requestAnimationFrame(mainLoop);

        orbit.update();
        renderer.render(scene, camera);

    };
////////////////////////////////////////////////////
init();

///////////////////////////////////////////////////
// TYPING START UP PAGE
let i = 0;
let startText = 'On the internet I place my hand on yours';

function startTitle() {
  if (i < startText.length) {
    document.getElementById("start-title").innerHTML += startText.charAt(i);
    i++;
    setTimeout(startTitle, 75);
  }
  // $("#start-title").delay(4500).fadeOut(1500);
  setTimeout(startTip,6000);
}

let i3 = 0;
let navTip = '**Use left and right arrow key to navigate menu';

function startTip() {
  if (i3 < navTip.length) {
    document.getElementById("nav-tip").innerHTML += navTip.charAt(i3);
    i3++;
    setTimeout(startTip, 3000);
  }
  // $("#start-btn").delay(5000).fadeIn(1000);

}


//DOCUMENT READY JQUERY
$( document ).ready(function() {
  //ENTERING SITE
  $('#loader').fadeOut(1000);

  setTimeout(startTitle, 1500);
  $("#start-title").delay(5500).fadeOut(1500);
  $("#start-btn").delay(12000).fadeIn(1000);

  ///CLICK TO START EXPERIENCE
  $('#start-btn').click(function(){
    $('.banner').delay(1000).fadeOut(100),
    $('.fade-page').fadeIn(1000),
    $(".fade-page").fadeOut(800);
  });

//EXPAND MANUAL GALLERY VIDEO
$( '#vid-trigger' ).hover(function() {
    $( '.bg-vid' ).toggleClass('vid-expand');
});

//ABOUT PAGE
$('#about-btn').click(function(){
    $('#lang-switch-wrapper').addClass('hide'),
    $('#tips-btn').removeClass('hide'),
    $('.tips-wrapper').addClass('hide'),
    $('#about-page').removeClass('hide'),
    $('.page-wrapper').removeClass('hide'),
    orbit.enableZoom = false;
  });

// CLICK TO CLOSE PAGE
$('.page').click(function(){
    $('#lang-switch-wrapper').removeClass('hide'),
    orbit.enableZoom = true,
    $('.menu').removeClass('hide'),

    $('.bg-vid').removeClass('hide'),
    scene.add(model),

    $('.tips-wrapper').removeClass('hide'),
    $(this).addClass('hide');
  });

//GALLERY PAGE
$('#gallery-btn').click(function(){
    $('#lang-switch-wrapper').addClass('hide'),
    $('#edit-btn').removeClass('hide'),
    $('.menu').addClass('hide'),

    $('.bg-vid').addClass('hide'),
    scene.remove(model),

    $('.tips-wrapper').addClass('hide'),
    $('#gallery-page').removeClass('hide'),
    orbit.enableZoom = false;
  });

  // HAND CONTROL WINDOW
  $('#hand-control-btn').click(function(){
      $('#gui-pos').fadeIn(100);
    });

  //EDIT MODE
  $('#edit-btn').click(function(){
      $('#lang-switch-wrapper').addClass('hide'),

      $('#frame').removeClass('hide'),
      $('#edit-mode-bg').removeClass('hide'),
      $(this).addClass('gone'),
      $('.entering-text').removeClass('gone'),
      scene.remove( plane ),

      $('.cell1').addClass('hide'),
      $('.cell2').addClass('hide'),
      $('.cell3').addClass('hide'),
      $('.bg-vid').addClass('gone');

    });

    // CLICK TO EDIT MODE
    $('#enter-enter').click(function(){
      setTimeout(fadeAway,1000);

      // $('#gui-pos').delay(1000).fadeIn(100),
      $('#edit-text').delay(1000).fadeIn(100),
      $(this).delay(1000).fadeOut(100),
      $('#exit-edit-btn').delay(1000).fadeIn(100),
      $('.fade-page').fadeIn(1000),
      $(".fade-page").fadeOut(800);
    });

    function fadeAway(){
      orbit.enableRotate = false,
      camera.position.set( -5,0,25);
    }

    //2nd EDIT MODE
    $('#edit-btn2').click(function(){
      setTimeout(enterFadeAway,1000);

      $('#gui-pos').delay(1200).fadeIn(100),
      $('#edit-text').delay(800).fadeIn(100),
      $('#exit-edit-btn').delay(1000).fadeIn(100),
      $(this).delay(1000).fadeOut(100),
      $('.fade-page').fadeIn(1000),
      $(".fade-page").fadeOut(800);

    });

  function enterFadeAway(){
    $('#lang-switch-wrapper').addClass('hide'),
    $('.cell1').addClass('hide'),
    $('.cell2').addClass('hide'),
    $('.cell3').addClass('hide'),
    $('.bg-vid').addClass('gone'),
    orbit.enableRotate = false,
    camera.position.set( -5,0,25),
    scene.remove( plane ),
    $('#frame').removeClass('hide'),
    $('#edit-mode-bg').removeClass('hide');
  }


    //CLICK TO EXIT EDIT MODE
    $('#exit-edit-btn').click(function(){
      setTimeout(exitFadeAway,1000);

      $('#gui-pos').delay(500).fadeOut(100),
      $('#edit-text').delay(500).fadeOut(100),
      $(this).delay(1000).fadeOut(100),
      $('#edit-btn2').delay(1000).fadeIn(100),
      $('.fade-page').fadeIn(1000),
      $(".fade-page").fadeOut(800);
    });

    function exitFadeAway(){
      $('#lang-switch-wrapper').removeClass('hide'),
      $('.cell1').removeClass('hide'),
      $('.cell2').removeClass('hide'),
      $('.cell3').removeClass('hide'),
      $('.bg-vid').removeClass('gone'),
      scene.add( plane ),
      orbit.enableRotate = true,
      $('#frame').addClass('hide'),
      $('#edit-mode-bg').addClass('hide');
    }

    //MOUSE OVER TO REMOVE DRAG HINT
    $('#gui-drag').mousemove(function(){
      $('#drag-here').fadeOut(100);
    });

    //AFTER CLICK SAVE ALERT APPEARS
    $('#btn-save').click(function(){
      $('#after-save').delay(300).fadeIn(800);
    });

});


//UPLOAD AND PREVIEW IMAGE
const frame = document.getElementById('frame');
const input = document.getElementById('file');

input.addEventListener('change', readURL, true);
function readURL(){
   var file = input.files[0];
   var reader = new FileReader();
   var readFile = reader.readAsDataURL(file);
   reader.onloadend = function(){
     frame.style.backgroundImage = "url(" + reader.result + ")";
   }
}

//SCREENSHOT AND DOWNLOAD! :D
function screenshotAndDownload(){
  renderer.render(scene, camera);
  html2canvas(document.body).then(function(canvas){
    //export canvas as a toBlob
    canvas.toBlob(function(blob){
      //generate file screenshotAndDownload
      window.saveAs(blob, "my-hand-on-yours.png");
    });
  });
}

document.getElementById("btn-save").addEventListener ("click", screenshotAndDownload , false);

// MENU NAV
const LEFT = 37, RIGHT = 39;
const SPACE = 32;


var xAngle = 0, yAngle = 0, zAngle = 0;

let onKeyDown = function(e) {
        if(e.keyCode == LEFT){
          yAngle += 82;
          xAngle = -30;
          zAngle = 10;
          $('.carousel').css("webkit-transform","rotateX("+xAngle+"deg) rotateY("+yAngle+"deg) rotateZ("+zAngle+"deg)");
        } else if(e.keyCode == RIGHT){
          yAngle -= 82;
          xAngle = -30;
          zAngle = 10;
          $('.carousel').css("webkit-transform","rotateX("+xAngle+"deg) rotateY("+yAngle+"deg) rotateZ("+zAngle+"deg)");
        }  else if(e.keyCode == SPACE){
            model.applyMatrix(new THREE.Matrix4().makeScale(-1, 1, 1));
        } else {
          return;
        }

        $('#other-tips').addClass('hide');

    };

document.addEventListener('keydown', onKeyDown, false);

// PUSH TIPS
var tips = [
  "[SPACE] to switch left / right hands",
  "Check out Gallery before you try Edit Mode!",
  "Have you tried scrolling or dragging?",
  "Place my hand on yours!"
], t = 0;

var textBox = document.getElementById("other-tips");
var tipsBtn = document.getElementById("tips-btn");

function pushTips(){
  // change btn to MORE TIPS
  tipsBtn.innerHTML = "MORE TIPS!";

  $('#other-tips').removeClass('hide');

  if(t === tips.length){
    t=0;
  }

  textBox.innerHTML = tips[t];
  t++;
  return false;
}

tipsBtn.addEventListener('click', pushTips, false);


// ENTERING EDIT MODE PUSH TEXT
var t1 = 0;
var txt1 = 'You are entering an intimate space...';

function enter1() {
  if (t1 < txt1.length) {
    document.getElementById("entering-text1").innerHTML += txt1.charAt(t1);
    t1++;
    setTimeout(enter1, 70);
  }

}

document.getElementById("edit-btn").addEventListener('click', enter1, false);

//2nd
var t2 = 0;
var txt2 = 'In Edit Mode, you can use Hand Controls to manipulate hand';

function enter2() {
  $('#entering-text1').addClass('gone');
  $('#enter-nxt1').addClass('gone');
  $('#enter-nxt2').removeClass('gone');

  if (t2 < txt2.length) {
    document.getElementById("entering-text2").innerHTML += txt2.charAt(t2);
    t2++;
    setTimeout(enter2, 70);
  }

}

document.getElementById("enter-nxt1").addEventListener('click', enter2, false);

// You can also drag the Hand Control around
var t3 = 0;
var txt3 = 'You can also drag the Hand Control around';

function enter3() {
  $('#entering-text2').addClass('gone');
  $('#enter-nxt2').addClass('gone');
  $('#enter-nxt3').removeClass('gone');

  if (t3 < txt3.length) {
    document.getElementById("entering-text3").innerHTML += txt3.charAt(t3);
    t3++;
    setTimeout(enter3, 70);
  }

}

document.getElementById("enter-nxt2").addEventListener('click', enter3, false);

//Place my hand on yours
var t4 = 0;
var txt4 = 'Place my hand on yours...';

function enter4() {
  $('#entering-text3').addClass('gone');
  $('#enter-nxt3').addClass('gone');
  $('#enter-nxt4').removeClass('gone');

  if (t4 < txt4.length) {
    document.getElementById("entering-text4").innerHTML += txt4.charAt(t4);
    t4++;
    setTimeout(enter4, 70);
  }

}

document.getElementById("enter-nxt3").addEventListener('click', enter4, false);

//last
$('#enter-nxt4').click(function(){
  $('#entering-text4').addClass('gone'),
  $('#enter-nxt4').addClass('gone'),
  $('#enter-enter').fadeIn(1000);
});


//NEW DRAG GUI
const dragItem = document.getElementById("gui-drag");
const draggable = document.getElementById("gui-pos");

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

document.addEventListener("touchstart", dragStart, false);
document.addEventListener("touchend", dragEnd, false);
document.addEventListener("touchmove", drag, false);

document.addEventListener("mousedown", dragStart, false);
document.addEventListener("mouseup", dragEnd, false);
document.addEventListener("mousemove", drag, false);

function dragStart(e) {
  if (e.type === "touchstart") {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;
  } else {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
  }

  if (e.target === dragItem) {
    active = true;
  }
}

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;

  active = false;
}

function drag(e) {
  if (active) {

    e.preventDefault();

    if (e.type === "touchmove") {
      currentX = e.touches[0].clientX - initialX;
      currentY = e.touches[0].clientY - initialY;
    } else {
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
    }

    xOffset = currentX;
    yOffset = currentY;

    // setTranslate(currentX, currentY, dragItem);
    setTranslate(currentX, currentY, draggable);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}
// END DRAG GUI
