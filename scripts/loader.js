/* Se charge de récupérer les objets 3D*/

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

  /* On rajoute certaine propriété à ces objets*/
  for (let i = 0; i < shapes.length; i++)
  {
    Object.defineProperties(shapes[i], {
      speed: {
        enumerable: true,
        value: 0.05,
        writable: true
      },
      move: {
        enumerable: true,
        value: true,
        writable: true
    }
  });
    SHAPES.push(shapes[i]);
  }
  startGame();
})

function startGame()
{
  let playground = new Playground();
  playground.create();
  newRandomBlock(SHAPES);
  loop();
}

export default SHAPES;
