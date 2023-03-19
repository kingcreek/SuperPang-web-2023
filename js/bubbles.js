
var image = document.getElementById('bubble1');
var imagePlayer = document.getElementById('mainchar');
var x = 0; // posición horizontal de la imagen
var y = 0; // posición vertical de la imagen
var vx = 1; // velocidad horizontal de la imagen
var vy = 1; // velocidad vertical de la imagen
var gravity = 0.1; // gravedad que afecta a la imagen
var bounce = 1; // factor de rebote de la imagen
var width = window.innerWidth; // ancho de la pantalla
var height = window.innerHeight; // alto de la pantalla
var bubbles = []; // arreglo para guardar las demás bolas en el juego

function addBubble(x, y, size, vx, vy) {
  var bubble = document.createElement('img');
  bubble.src = 'res/bubble.png';
  bubble.style.position = 'absolute';
  bubble.style.left = x + 'px';
  bubble.style.top = y + 'px';
  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';
  bubble.vx = vx;
  bubble.vy = vy;
  document.body.appendChild(bubble);
  bubbles.push(bubble);
}

function checkPlayerColisson() //NO PROBADO
{
    var playerRect = imagePlayer.getBoundingClientRect();
    bubbles.forEach(async (bubble) => {
        var ballRect = bubble.getBoundingClientRect();
        if (ballRect.left < playerRect.right && ballRect.right > playerRect.left && ballRect.top < playerRect.bottom && ballRect.bottom > playerRect.top) {
            // hay colisión entre la pelota y el jugador
            console.log("colision entre jugador y una pelota")
        }
    })
}

function moveImage() {
    bubbles.forEach(async (bubble) => {
        // actualiza la posición horizontal de la imagen
        x += vx;
        if (x + bubble.width > width) {
            // si la imagen choca con el borde derecho de la pantalla, cambia su dirección horizontal
            x = width - bubble.width;
            vx = -vx;
        } else if (x < 0) {
            // si la imagen choca con el borde izquierdo de la pantalla, cambia su dirección horizontal
            x = 0;
            vx = -vx;
        }
  
        // actualiza la posición vertical de la imagen
        vy += gravity;
        y += vy;
        if (y + bubble.height > height) {
            // si la imagen choca con el borde inferior de la pantalla, cambia su dirección vertical y reduce su velocidad
            y = height - bubble.height;
            vy = -vy * bounce;
            vx *= bounce;
        } else if (y < 0) {
            // si la imagen choca con el borde superior de la pantalla, cambia su dirección vertical y reduce su velocidad
            y = 0;
            vy = -vy * bounce;
            vx *= bounce;
        }
  
        // actualiza la posición de la imagen en la pantalla
        bubble.style.left = x + 'px';
        bubble.style.top = y + 'px';

    })
}

export { moveImage, addBubble };