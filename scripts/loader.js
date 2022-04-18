import * as THREE from 'https://unpkg.com/three@0.119.0/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.119.0/examples/jsm/loaders/GLTFLoader.js';
import loop from './scripts.js';
import scene from './base.js';
import nextRandomBlock from './shape.js';
import { EXISTING_BLOCKS, CURRENT_BLOCK, Playground} from './shape.js';

let SHAPES = new Array();
let loader = new GLTFLoader();

window.addEventListener('load', () =>
{
  createSquareShape();
})

function createSquareShape()
{
  const lShape = new THREE.Shape();
  lShape.moveTo(0,0);
  lShape.lineTo(0, 0);
  lShape.lineTo(0, 1);
  lShape.lineTo(0, 2);
  lShape.lineTo(1, 2);
  lShape.lineTo(1, 1);
  lShape.lineTo(2, 1);
  lShape.lineTo(3, 1);
  lShape.lineTo(3, 0);
  lShape.lineTo(2, 0);
  lShape.lineTo(1, 0);
  lShape.lineTo(0, 0);

  const extrudeSettings = { depth: 1, bevelEnabled:false };
  const geometry = new THREE.ExtrudeGeometry( lShape, extrudeSettings);
  const mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: "red"}));
  SHAPES.push(mesh)

  startGame();
}

function startGame()
{
  let playground = new Playground();
  playground.create();
  nextRandomBlock(SHAPES);
  loop();
}

export default SHAPES;
