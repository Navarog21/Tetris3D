import * as THREE from 'https://unpkg.com/three@0.119.0/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.119.0/examples/jsm/loaders/GLTFLoader.js';
import loop from './scripts.js';
import scene from './base.js';
import newRandomBlock from './shape.js';
import { EXISTING_BLOCKS, ACTUAL_BLOCK, Playground} from './shape.js';

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
// TEST DEMAIN
// Creer les formes avec des cube basiques
// Une forme est donc un tableau de 4/5 cubes
// On détermine la position de chaque cube
// ACTUAL_SHAPE est un tableau d'objets
function oui()
{
  for (let i = 0; i < EXISTING_BLOCKS.length; i++)
  {
    for (let j = 0; j < ACTUAL_SHAPE.length; j++)
    {
      if (ACTUAL_SHAPE[j].y == EXISTING_BLOCKS[i].y+2 && ACTUAL_SHAPE[j].x == EXISTING_BLOCKS[i].x && ACTUAL_SHAPE[j].z == EXISTING_BLOCKS[i].z)
      {
        newRandomBlock(SHAPES);
      }
      else {
        ACTUAL_BLOCK.position.y -= ACTUAL_BLOCK.speed;
      }
    }
  }


}
export default SHAPES;
