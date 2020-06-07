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
