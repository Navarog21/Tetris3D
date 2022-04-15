import * as THREE from 'https://unpkg.com/three@0.119.0/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.119.0/examples/jsm/loaders/GLTFLoader.js';
import scene from './base.js';

export default class Shapes
{
  constructor()
  {
    this.speed = 0.5;
  }

  create()
  {
    ACTUAL_SHAPES = getRandomShape();
    scene.add(ACTUAL_SHAPES);
  }

  fall()
  {
    let fall = setInterval(() =>
    {
      ACTUAL_SHAPES.position.y -= 0.5;
    }, 100)
  }
}

function getRandomShape()
{
  let shape = SHAPES[getRandomNumber(0, SHAPES.length-1)].clone();
  shape.position.y = 10;
  return shape;
}
