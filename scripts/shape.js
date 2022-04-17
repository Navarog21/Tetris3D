import * as THREE from 'https://unpkg.com/three@0.119.0/build/three.module.js';
import scene from './base.js';
import SHAPES from './loader.js'

let EXISTING_BLOCKS = new Array();
let CURRENT_BLOCK, GHOST;


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
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    scene.add(mesh);
  }
}


const lShape = new THREE.Shape();
lShape.moveTo(0,20);
lShape.lineTo(0,18);
lShape.lineTo(3,18);
lShape.lineTo(3,19);
lShape.lineTo(1,19);
lShape.lineTo(1,20);
lShape.lineTo(0,20);

const extrudeSettings = { depth: 1, bevelEnabled:false };
const geometry = new THREE.ExtrudeGeometry( lShape, extrudeSettings );
const mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial());
scene.add(mesh);


function newRandomBlock(blocks)
{
  console.log(blocks)
  let block, ghost;
  block = blocks[getRandomNumber(0, blocks.length-1)].clone();
  block.position.set(0, 30, 0);
  ghost = block.clone();
  let material = new THREE.MeshPhysicalMaterial({transparent: true, opacity: 0.6, color: block.material.color});
  ghost.material = material;
  CURRENT_BLOCK = block;
  defineProperties(block)
  GHOST = ghost;
  CURRENT_BLOCK.attach(GHOST)
  ghost.position.set(0, 1, 0);
  GHOST.name = "ghost"
  scene.add(block, ghost);
}

function defineProperties(block)
{
  Object.defineProperties(block, {
    speed: {
      configurable: true,
      enumerable: true,
      value: 0.05,
      writable: true
    }
  });
}


export { EXISTING_BLOCKS, CURRENT_BLOCK, GHOST, Playground};
export default newRandomBlock;
