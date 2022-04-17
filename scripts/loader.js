import * as THREE from 'https://unpkg.com/three@0.119.0/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.119.0/examples/jsm/loaders/GLTFLoader.js';
import loop from './scripts.js';
import scene from './base.js';
import newRandomBlock from './shape.js';
import { EXISTING_BLOCKS, CURRENT_BLOCK, Playground} from './shape.js';

let SHAPES = new Array();
let loader = new GLTFLoader();

loader.load("images/shapes.glb", (gltf) =>
{
  let shapes = gltf.scene.children;

  for (let i = 0; i < shapes.length; i++)
  {
    SHAPES.push(shapes[i]);
  }
  startGame();
})

function startGame()
{
  let playground = new Playground();
  /*let block = new Block();
  block.create();*/
  playground.create();
  newRandomBlock(SHAPES);
  loop();
}

export default SHAPES;
