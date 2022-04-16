import * as THREE from 'https://unpkg.com/three@0.119.0/build/three.module.js';
import scene from './base.js';
import SHAPES from './loader.js'

let EXISTING_BLOCKS = new Array();
let ACTUAL_BLOCK, GHOST;


class Playground
{
  constructor(width = 25, height = 25, depth = 25)
  {
    this.width = width;
    this.height = height;
    this.depth = depth;
  }

  create()
  {
    const geometry = new THREE.PlaneGeometry(this.width, this.height);
    const material = new THREE.MeshPhongMaterial({color: "cyan", side: THREE.DoubleSide});
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = Math.PI/2;
    mesh.name = 'sol';
    scene.add(mesh);
  }
}

class Block
{
  constructor()
  {
    this.position = new THREE.Vector3(0, 0, 0)
  }

  create()
  {

  }
}

class Ghost extends Block
{
  constructor()
  {

  }
}

function newRandomBlock(blocks)
{
  let block, ghost;
  block = blocks[getRandomNumber(0, blocks.length-1)].clone();
  block.position.set(0, 30, 0);
  ghost = block.clone();
  let material = new THREE.MeshPhysicalMaterial({transparent: true, opacity: 0.6, color: block.material.color});
  ghost.material = material;
  ACTUAL_BLOCK = block;
  Object.defineProperties(block, {
    speed: {
      configurable: true,
      enumerable: true,
      value: 0.05,
      writable: true
    },
    move: {
      configurable: true,
      enumerable: true,
      value: true,
      writable: true
    }
  });
  let y = getGhostPosition(ghost);
  console.log(y)
  ghost.position.set(0, y, 0);
  GHOST = ghost;
  EXISTING_BLOCKS.push(block);
  scene.add(block, ghost);
}

function getGhostPosition(ghost)
{
  for (let i = 0; i < EXISTING_BLOCKS.length; i++)
  {
    if (ghost.position.y == EXISTING_BLOCKS[i].position.y && ghost.position.x == EXISTING_BLOCKS[i].position.x && ghost.position.z == EXISTING_BLOCKS[i].position.z)
    {
      console.log('oui')
      return EXISTING_BLOCKS[i].position.y+5;
    }
    else {
      return 0
    }
  }
  return 0
}

export { EXISTING_BLOCKS, ACTUAL_BLOCK, GHOST, Playground};
export default newRandomBlock;
