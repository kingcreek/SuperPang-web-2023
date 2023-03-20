
let main_char = document.getElementById("mainchar");
import * as Shooting from "./shooting.js";

let movement = 0;
let positionX = 44;
let width = 10;
let isDead = false;

// LOOP PLAYER
function loop() {

    requestId = undefined;

    move();

    if (shooting == 1) {
        Shooting.launchAttack();
    }
    start()
}

function setPlayerMovement(value)
{
	movement = value;
}

function move() {
    positionX = positionX < 0 ? 0 : positionX;
    positionX = (positionX + width) > 100 ? (100 - width) : positionX;
    positionX += movement;
    main_char.style.left = positionX + "vw";
}


function animateSprite()
{
    /*
    sprite line 1: mover a la derecha
    sprite line 1 inverse: mover a la izquierda
    sprite line 3: idle
    sprite line 4: muere
    sprite line 5: dispara
    */
    let    spriteW = 321.6;
    let    spriteH = 280.75;
    let    frames = 10;
    let    posX = 0; //start position for the image slicer
    let    posY = 0; //start position for the image slicer
    let    reverse = false;
    const  interval = 100; //100 ms of interval for the setInterval()
    setInterval ( () => {
        if (movement < 0) //se mueve a la izquierda
        {
            reverse = true;
            posY = 0;
            frames = 10;
            reverse = true;
        }
        else if (movement > 0) //se mueve a la derecha
        {
            posY = 0;
            frames = 10;
            reverse = false;
        }
        else if (Shooting.shooting) // disparando
        {
            posY = spriteH * 3;
            frames = 2;
        }
        else if (isDead)
        {
            posY = spriteH * 2;
            frames = 10;
        }
        else if (movement == 0) //idle
        {
            posY = spriteH * 1;
            frames = 10;
        }

        if (reverse)
            main_char.style.transform = `scaleX(-1)`; 
        else
            main_char.style.transform = ``; 

        if (posX < frames * spriteH)
        { 
            posX += spriteW;
        }
        else
        { 
            posX = 0; 
        }
        main_char.style.backgroundPosition = `-${posX}px -${posY}px`;
    }, interval );
}


export { setPlayerMovement, move, positionX, animateSprite };
