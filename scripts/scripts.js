import * as THREE from 'https://unpkg.com/three@0.119.0/build/three.module.js';
import { RGBELoader } from 'https://unpkg.com/three@0.119.0/examples/jsm/loaders/RGBELoader.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.119.0/examples/jsm/loaders/GLTFLoader.js';
import {canvas, renderer, scene, camera, control} from './base.js'
import Shapes from './shape.js';

let SHAPES = new Array();
let EXISTING_BLOCKS = new Array();
let ACTUAL_SHAPES;


const loop = () =>
{
  control.update();
  renderer.render(scene, camera);
  requestAnimationFrame(loop)
}

let loader = new GLTFLoader();

loader.load("./images/shapes.glb", (gltf) =>
{
  SHAPES = [...gltf.scene.children];
  loop();
})
