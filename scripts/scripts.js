import * as THREE from 'https://unpkg.com/three@0.119.0/build/three.module.js';
import {canvas, renderer, scene, camera, control} from './base.js'
import Block from './shape.js';
import {EXISTING_BLOCKS, ACTUAL_BLOCK} from './shape.js';
import SHAPES from './loader.js';
import newRandomBlock from './shape.js';
import * as commands from './commands.js';
const loop = () =>
{
  verifyPosition();
  control.update();
  renderer.render(scene, camera);
  requestAnimationFrame(loop)
}


function verifyPosition()
{
  for (let i = 0; i < EXISTING_BLOCKS.length; i++)
  {
    if (ACTUAL_BLOCK.y <= EXISTING_BLOCKS[i])
    {

    }

  }
  if (ACTUAL_BLOCK.position.y <= 0 + 1)
  {
    newRandomBlock(SHAPES);
  }
  else {
    ACTUAL_BLOCK.position.y -= 0.05;;
  }

}

export default loop
