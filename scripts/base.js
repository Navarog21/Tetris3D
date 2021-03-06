import * as THREE from 'https://unpkg.com/three@0.119.0/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.119.0/examples/jsm/controls/OrbitControls.js';

const canvas = document.querySelector('#background');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const renderer = new THREE.WebGLRenderer({
  alpha: true,
  autoclear: true,
  canvas: canvas,
  antialiasing: true,
  shadowMap: true
});


window.addEventListener('resize', () =>
{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio)
})

renderer.setSize(canvas.width, canvas.height);
renderer.setPixelRatio(window.devicePixelRatio)

const scene = new THREE.Scene();
const gridHelper = new THREE.GridHelper(32,32);
scene.add(gridHelper);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
camera.lookAt(0, 0, 0);
camera.position.set(-25, 30, 30);

// let light = new THREE.HemisphereLight( "white", "white", 1 );
// scene.add(light);

const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
light.castShadow = true;
scene.add(light);

const light2 = new THREE.DirectionalLight( 0xffffbb, 0.3, 50 );
light2.castShadow = true;
scene.add(light2);

const control = new OrbitControls(camera, renderer.domElement);
control.enableDamping = true;
control.enablePan = true;

export {canvas, renderer, scene, camera, control};
export default scene;
