import * as THREE from 'https://unpkg.com/three@0.119.0/build/three.module.js';
import { EXISTING_BLOCKS, ACTUAL_BLOCK, GHOST, Playground} from './shape.js';

export default function moveBlocks(e)
{
  let position = ACTUAL_BLOCK.position;
  let ghostPosition = GHOST.position;
  switch (e.code)
  {
    case "KeyA":
    if (position.x <= -14) break;
    position.x -= 2;
    ghostPosition.x -= 2;
    break;

    // Bouger à droite
    case "KeyD":
    if (position.x >= 14) break;
    position.x += 2;
    ghostPosition.x += 2;
    break;

    // Bouger au fondw
    case "KeyW":
    if (position.z <= -14) break;
    position.z -= 2;
    ghostPosition.z -= 2;
    break;

    // Bouger devant
    case "KeyS":
    if (position.z >= 14) break;
    position.z += 2;
    ghostPosition.z += 2;
    break;

    // Poser directement le bloc
    case "Space":
    position.y = 1 ;
    break;

    // Rotation X
    case "KeyR":
    ACTUAL_BLOCK.rotation.x += Math.PI/2;
    GHOST.rotation.x += Math.PI/2;
    break;

    // Rotation Y
    case "KeyF":
    ACTUAL_BLOCK.rotation.y += Math.PI/2;
    GHOST.rotation.y += Math.PI/2;
    break;

    // Rotation Z
    case "KeyE":
    ACTUAL_BLOCK.rotation.z += Math.PI/2;
    GHOST.rotation.z += Math.PI/2;
    break;
    default:
  }
}
