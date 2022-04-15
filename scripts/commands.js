
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

canvas.addEventListener('click',(e) =>
{
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  character.attack();
})

window.addEventListener('keydown',(e) =>
{
  if (e.key == "Tab")
  {
    e.preventDefault();
    let audio = new Audio("sounds/swap.wav")
    audio.play();
    if (character.shape == 2) character.shape = 0;
    else character.shape++;
  }


  if (e.keyCode == 32)
  {
    character.toJump();
  }

  // Flèche de gauche
  if (event.key == "q" || event.key == "Q")
  {
    character.moveLeft();
  }

  // Flèche de droite
  if (event.key == "d" || event.key == "D")
  {
    character.moveRight();
  }

  if (e.key == "Escape")
  {
    WORLD.break();
  }
})
