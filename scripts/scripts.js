import * as THREE from 'https://unpkg.com/three@0.119.0/build/three.module.js';
import {canvas, renderer, scene, camera, control} from './base.js'
import Block from './shape.js';
import {EXISTING_BLOCKS, ACTUAL_BLOCK} from './shape.js';
import SHAPES from './loader.js';
import newRandomBlock from './shape.js';
import moveBlocks from './commands.js';

window.addEventListener('keydown', moveBlocks)
const loop = () =>
{
  verifyPosition();
  getCollision();
  control.update();
  renderer.render(scene, camera);
  requestAnimationFrame(loop)
}

function getCollision()
{

}

function verifyPosition()
{
  if (ACTUAL_BLOCK.position.y >= 1)
  {
    ACTUAL_BLOCK.position.y -= ACTUAL_BLOCK.speed;
  }
  else
  {
    newRandomBlock(SHAPES);
  }

}

export default loop
