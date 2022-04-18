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
let geometry = new THREE.BoxGeometry(4,4,4);
let material = new THREE.MeshPhongMaterial({color: "red"});
let mesh = new THREE.Mesh(geometry, material);
let boxx = new THREE.Box3();
boxx.setFromObject(mesh);
mesh.name = "box";
console.log(mesh)
scene.add(mesh);

let click = false;
function checkCollisions()
{
  let yMax;
  let box = new THREE.Box3();
  box.setFromObject(CURRENT_BLOCK);
  let currentBlockPosition = CURRENT_BLOCK.position;
  CURRENT_BLOCK.geometry.boundingBox.applyMatrix4( CURRENT_BLOCK.matrixWorld );

  if (click == false)
  {
    console.log(CURRENT_BLOCK.geometry.boundingBox)
    console.log(CURRENT_BLOCK.geometry.boundingBox.intersectsBox(scene.getObjectByName('box')))
    if (CURRENT_BLOCK.position.y >= 1)
    {
      for (let i = 0; i < EXISTING_BLOCKS.length; i++)
      {
        if (CURRENT_BLOCK.geometry.boundingBox.intersect(EXISTING_BLOCKS[i].geometry.boundingBox))
        {
          newRandomBlock(SHAPES)
        }
      }
      if (EXISTING_BLOCKS.length >= 0)
      {
        currentBlockPosition.y -= CURRENT_BLOCK.speed
      }
    }
    else
    {
      EXISTING_BLOCKS.push(CURRENT_BLOCK)
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
