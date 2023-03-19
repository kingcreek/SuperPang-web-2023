
<<<<<<< HEAD
var width = window.innerWidth;
var height = window.innerHeight;

var ball = {
    position: {x: width/2, y: 0},
    velocity: {x: 10, y: 0},
    mass: 0.01, //kg
    radius: 15, // 1px = 1cm
    restitution: -0.7
};

var frameRate = 1/60; // Seconds
var frameDelay = frameRate * 1000; // ms
var Cd = 1.47;  // Dimensionless
var rho = 1.22; // kg / m^3
var A = Math.PI * ball.radius * ball.radius / (10000); // m^2
var ag = 9.81;  // m / s^2

//moveBubble("bubble1")
let bubbles = [];

function createbubble()
{
=======
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
>>>>>>> 9cb5a3740e78b7e35b61c5d8a45130cb83c02680

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
<<<<<<< HEAD

}

function moveBubble(bubbleId)
{
    let bubbleToMove = document.getElementById(bubbleId);
    // Force: Fd = -1/2 * Cd * A * rho * v * v
    var Fx = -0.5 * Cd * A * rho * ball.velocity.x * ball.velocity.x * ball.velocity.x / Math.abs(ball.velocity.x);
    var Fy = -0.5 * Cd * A * rho * ball.velocity.y * ball.velocity.y * ball.velocity.y / Math.abs(ball.velocity.y);
        
    Fx = (isNaN(Fx) ? 0 : Fx);
    Fy = (isNaN(Fy) ? 0 : Fy);
        
    // AceleracionCalculate acceleration ( F = ma )
    var ax = Fx / ball.mass;
    var ay = ag + (Fy / ball.mass);
    // Setear la velocidad
    ball.velocity.x += ax*frameRate;
    ball.velocity.y += ay*frameRate;
        
    // Setear la posicion
    ball.position.x += ball.velocity.x*frameRate*100;
    ball.position.y += ball.velocity.y*frameRate*100;
    console.log(ball.velocity.y)
    // Manejo de colisiones
    if (ball.position.y > height - 220) {
        //ball.velocity.y *= ball.restitution;
        ball.position.y = height - 220;
        ball.velocity.y = -50;
        ball.velocity.x *= 2;


        //(ball.position.y - 500) /10;
    }
    if (ball.position.x > width - 220) {
        ball.velocity.x *= ball.restitution;
        ball.position.x = width - 220;
    }
    if (ball.position.x < 220) {
        ball.velocity.x *= ball.restitution;
        ball.position.x = 220;
    }

    bubbleToMove.style.top = ball.position.y + "px";
    bubbleToMove.style.left = ball.position.x + "px";
}

/*
function moveBubble(bubbleId) {

    let bubbleToMove = document.getElementById(bubbleId);

    bubbleYPos = bubbleToMove.offsetTop;
    bubbleXPos = bubbleToMove.offsetLeft;



    window.requestAnimationFrame(() => {


        if(bubbleYPos < 0 || bubbleYPos + bubbleDiam > window.innerHeight){
            bubbleYMov = bubbleYMov*-1}
            console.log(bubbleXPos);
            
        if(bubbleXPos < 0 || bubbleXPos + bubbleDiam > window.innerWidth){
            bubbleXMov = bubbleXMov*-1}

        bubbleYPos += bubbleYMov;
        bubbleXPos += bubbleXMov;

        bubbleToMove.style.top = bubbleYPos + "px";
        bubbleToMove.style.left = bubbleXPos + "px";

        moveBubble(bubbleId);
=======
    var playerRect = imagePlayer.getBoundingClientRect();
    bubbles.forEach(async (bubble) => {
        var ballRect = bubble.getBoundingClientRect();
        if (ballRect.left < playerRect.right && ballRect.right > playerRect.left && ballRect.top < playerRect.bottom && ballRect.bottom > playerRect.top) {
            // hay colisión entre la pelota y el jugador
            console.log("colision entre jugador y una pelota")
        }
>>>>>>> 9cb5a3740e78b7e35b61c5d8a45130cb83c02680
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