import * as THREE from 'https://unpkg.com/three@0.119.0/build/three.module.js';
import { EXISTING_BLOCKS, CURRENT_BLOCK, GHOST, Playground} from './shape.js';

export default function moveBlocks(e)
{
  let position = CURRENT_BLOCK.position;
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
    CURRENT_BLOCK.rotation.x += Math.PI/2;
    GHOST.rotation.x += Math.PI/2;
    break;

    // Rotation Y
    case "KeyF":
    CURRENT_BLOCK.rotation.y += Math.PI/2;
    GHOST.rotation.y += Math.PI/2;
    break;

    // Rotation Z
    case "KeyE":
    CURRENT_BLOCK.rotation.z += Math.PI/2;
    GHOST.rotation.z += Math.PI/2;
    break;
    default:
  }
}
