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
function checkCollisions()
{
  let currentBlockPosition = CURRENT_BLOCK.position.y;
  let currentBlockVertex = CURRENT_BLOCK.geometry.attributes.position;

  if (currentBlockPosition >= 0)
  {
    CURRENT_BLOCK.position.y -= CURRENT_BLOCK.speed

    if (EXISTING_BLOCKS.length > 0)
    {
      let yMax;
      for (let i = 0; i < EXISTING_BLOCKS.length; i++)
      {
        if (EXISTING_BLOCKS.position.y) {

        }
        EXISTING_BLOCKS[i]
      }
      for (let i = 0; i < currentBlockVertex.count; i++)
      {

        let vertexPosition = CURRENT_BLOCK.geometry.getAttribute('position');
        let vertex = new THREE.Vector3();
        vertex.fromBufferAttribute(vertexPosition, i)
        let currentBlockVertexVector = CURRENT_BLOCK.localToWorld(vertex)

        for (let j = 0; j < EXISTING_BLOCKS.length; j++)
        {
          let exisitingBlockVertexPosition = EXISTING_BLOCKS[j].geometry.getAttribute('position');
          for (let k = 0; k < currentBlockVertex.count; k++)
          {
            let existingBlockVertex = new THREE.Vector3();
            vertex.fromBufferAttribute(vertexPosition, k)
            let vertexVector = EXISTING_BLOCKS[j].localToWorld(vertex)
            if (currentBlockVertexVector.equals(vertexVector))
            {
              newRandomBlock(SHAPES)
            }
          }
        }
      }
    }
  }
  else
  {
    EXISTING_BLOCKS.push(CURRENT_BLOCK)
    newRandomBlock(SHAPES)
  }
}


export default loop
