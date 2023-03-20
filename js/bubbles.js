import * as Shooting from "./shooting.js";

var image = document.getElementById('bubble1');
var imagePlayer = document.getElementById('mainchar');

var width = window.innerWidth; // ancho de la pantalla
var height = window.innerHeight; // alto de la pantalla

var gravity = 0.1; // gravedad que afecta a la imagen
var bounce = 1; // factor de rebote de la imagen

var bubbles = []; // arreglo para guardar las demás bolas en el juego

function addBubble(x, y, size, vx, vy, split) {
  var bubble = document.createElement('img');
  bubble.src = 'res/bubble.png';
  bubble.style.position = 'absolute';
  bubble.style.left = x + 'px';
  bubble.style.top = y + 'px';
  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';
  bubble.vx = vx; // velocidad horizontal de la imagen
  bubble.vy = vy; // velocidad vertical de la imagen
  bubble.px = x; // posición horizontal de la imagen
  bubble.py = y; // posición vertical de la imagen
  bubble.split = split; // la cantidad restarnte de divisiones de la burbuja
  bubble.currentSize = size; // la cantidad restarnte de divisiones de la burbuja
  document.body.appendChild(bubble);
  bubbles.push(bubble);
}

function checkPlayerColisson(bubble)
{
    var playerRect = imagePlayer.getBoundingClientRect();
    var ballRect = bubble.getBoundingClientRect();
    if (ballRect.left < playerRect.right && ballRect.right > playerRect.left && ballRect.top < playerRect.bottom && ballRect.bottom > playerRect.top) {
        // hay colisión entre la pelota y el jugador
        console.log("colision entre jugador y una pelota")
    }
}

function checkBulletColisson(bubble)
{
    let  ret = false
    Shooting.bullets.slice().reverse().forEach(function(bullet, index, object) {
      var bulletRect = bullet.getBoundingClientRect();
      var ballRect = bubble.getBoundingClientRect();
      if (ballRect.left < bulletRect.right && ballRect.right > bulletRect.left && ballRect.top < bulletRect.bottom && ballRect.bottom > bulletRect.top) {
        // hay colisión entre la pelota y el jugador
        console.log("colision entre bala y una pelota")
        bullet.remove();
        Shooting.bullets.splice(object.length - 1 - index, 1);
        ret = true;
      }
    });
    return ret;
}

function moveImage() {
  bubbles.slice().reverse().forEach(function(bubble, index, object) {
        checkPlayerColisson(bubble);
        if(checkBulletColisson(bubble))
        {
          //colision entre la burbuja y la bala, se elimina la burbuja actual y despues se splitea en 2 mas pequeñas

          //backup datos actuales
          let bx =    bubble.px;
          let by =    bubble.py;
          let size =  bubble.currentSize;
          let vx =    bubble.vx;
          let vy =    bubble.vy;
          let split = bubble.split;

          //se elimina la grande
          bubble.remove();
          Shooting.bullets.splice(object.length - 1 - index, 1);

          //splitear en 2 mas pequeñas solo en caso de poder
          if(split != 0)
          {
            addBubble(bx, by, size/2, -vx, vy, split-1);
            addBubble(bx, by, size/2, vx, vy, split-1);
          }

          return;
        }
        // actualiza la posición horizontal de la imagen
        bubble.px += bubble.vx;
        if (bubble.px + bubble.width > width) {
            // si la imagen choca con el borde derecho de la pantalla, cambia su dirección horizontal
            bubble.px = width - bubble.width;
            bubble.vx = -bubble.vx;
        } else if (bubble.x < 0) {
            // si la imagen choca con el borde izquierdo de la pantalla, cambia su dirección horizontal
            bubble.px = 0;
            bubble.vx = -bubble.vx;
        }
  
        // actualiza la posición vertical de la imagen
        bubble.vy += gravity;
        bubble.py += bubble.vy;
        if (bubble.py + bubble.height > height) {
            // si la imagen choca con el borde inferior de la pantalla, cambia su dirección vertical y reduce su velocidad
            bubble.py = height - bubble.height;
            bubble.vy = -bubble.vy * bounce;
            bubble.vx *= bounce;
        } else if (bubble.y < 0) {
            // si la imagen choca con el borde superior de la pantalla, cambia su dirección vertical y reduce su velocidad
            bubble.py = 0;
            bubble.vy = -bubble.vy * bounce;
            bubble.vx *= bounce;
        }
  
        // actualiza la posición de la imagen en la pantalla
        bubble.style.left = bubble.px + 'px';
        bubble.style.top = bubble.py + 'px';

    })
}

export { moveImage, addBubble };