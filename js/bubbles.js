
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

}

function splitBubble(bubbleId)
{

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
    })
}
*/

export { moveBubble };