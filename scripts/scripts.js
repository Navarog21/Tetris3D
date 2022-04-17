import * as THREE from 'https://unpkg.com/three@0.119.0/build/three.module.js';
import {canvas, renderer, scene, camera, control} from './base.js'
import Block from './shape.js';
import {EXISTING_BLOCKS, CURRENT_BLOCK} from './shape.js';
import SHAPES from './loader.js';
import newRandomBlock from './shape.js';
import moveBlocks from './commands.js';


window.addEventListener('keydown', moveBlocks)

const loop = () =>
{
  checkCollisions();
  control.update();
  renderer.render(scene, camera);
  requestAnimationFrame(loop)
}
// On récupère chaque Vertex du block, et on compare leurs emplacement à ceux des autres blocks
// Si l'une d'entres elles possèdent la même position, c'est qu'il y a collision

let click = false;
function checkCollisions()
{
  let yMax;
  let currentBlockPosition = CURRENT_BLOCK.position;
  let currentBlockVertex = CURRENT_BLOCK.geometry.attributes.position;

  if (currentBlockPosition.y >= 1)
  {
    if (EXISTING_BLOCKS.length > 0)
    {

    }

    if (click == false) {
      currentBlockPosition.y -= CURRENT_BLOCK.speed
    }

  }
  else
  {
    EXISTING_BLOCKS.push(CURRENT_BLOCK)
    newRandomBlock(SHAPES)
  }
}

function getBlock()
{
  for (let i = 0; i < EXISTING_BLOCKS.length; i++)
  {
    let existingBlockPosition = EXISTING_BLOCKS.position;
    if (currentBlockPosition.x == existingBlockPosition.x && currentBlockPosition.z == existingBlockPosition.z && currentBlockPosition.y + 1 <= existingBlockPosition.y)
    {
      newRandomBlock(SHAPES)
    }
  }
}


window.addEventListener('click', () =>
{
  if (click == false)
  {
    if (click == false) click = true;
    else click = false;
  }
  else {
    if (click == true)click = false;
    else click = true;
  }
})
export default loop
