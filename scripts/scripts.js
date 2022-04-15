import * as THREE from 'https://unpkg.com/three@0.119.0/build/three.module.js';
import {canvas, renderer, scene, camera, control} from './base.js'
import Block from './shape.js';
import {EXISTING_BLOCKS, ACTUAL_BLOCK} from './shape.js';
import SHAPES from './loader.js';
import newRandomBlock from './shape.js';

const loop = () =>
{
  verifyPosition();
  control.update();
  renderer.render(scene, camera);
  requestAnimationFrame(loop)
}

function verifyPosition()
{

  if (ACTUAL_BLOCK.position.y <= 0)
  {
    newRandomBlock(SHAPES);
  }
  else {
    ACTUAL_BLOCK.position.y -= 0.05;;
  }

}

export default loop
