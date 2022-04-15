import * as THREE from 'https://unpkg.com/three@0.119.0/build/three.module.js';
import { EXISTING_BLOCKS, ACTUAL_BLOCK, Playground} from './shape.js';

class Controls
{
  constructor()
  {
    this.forward = document.querySelector('#moveForward').value;
    this.backward = document.querySelector('#moveBackward').value;
    this.right = document.querySelector('#moveRight').value;
    this.left = document.querySelector('#moveLeft').value;
    this.jump = document.querySelector('#jump').value;
    this.attack = document.querySelector('#attack').value;
    this.swap = document.querySelector('#swap').value;
  }
}

window.addEventListener('keydown',(e) =>
{
  e.preventDefault();
  switch (e.code)
  {
    case "KeyA":
    ACTUAL_BLOCK.position.x -= 2;
    break;

    // Bouger à droite
    case "KeyD":
    ACTUAL_BLOCK.position.x += 2;
    break;

    // Bouger au fond
    case "KeyW":
    ACTUAL_BLOCK.position.z -= 2;
    break;

    // Bouger devantzz
    case "KeyS":
    ACTUAL_BLOCK.position.z += 2;
    break;

    // Rotation X
    case "Tab":
    ACTUAL_BLOCK.rotation.x += Math.PI/2;
    break;

    // Rotation Y
    case "Space":
    ACTUAL_BLOCK.rotation.y +=  Math.PI/2;
    console.log(ACTUAL_BLOCK.rotation)
    break;

    // Rotation Z
    case "AltLeft":
    e.preventDefault();
    ACTUAL_BLOCK.rotation.z += Math.PI/2;
    break;
    default:
  }


})
