import * as THREE from 'https://unpkg.com/three@0.119.0/build/three.module.js';
import scene from './base.js';
import SHAPES from './loader.js'

let EXISTING_BLOCKS = new Array();
let ACTUAL_BLOCK;

class Block
{
  contructor()
  {
    this.x = 0;
    this.y = 0;
    this.speed = 0.05;
  }
}

class Playground
{
  constructor(width = 30, height = 30, depth = 30)
  {
    this.width = width;
    this.height = height;
    this.depth = depth;
  }

  create()
  {
    const geometry = new THREE.BoxGeometry(this.width, this.height, this.depth, 8, 8, 8);
    const material = new THREE.MeshPhongMaterial({color: "red", wireframe: true});
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
  }
}

function newRandomBlock(blocks)
{
  let block = blocks[getRandomNumber(0, blocks.length-1)].clone();
  block.position.set(0, 20, 0);
  ACTUAL_BLOCK = block;
  EXISTING_BLOCKS.push(block);
  scene.add(block);
}

export { EXISTING_BLOCKS, ACTUAL_BLOCK, Playground};
export default newRandomBlock;
