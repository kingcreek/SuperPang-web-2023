
import * as Player from "./player.js";
import * as Shooting from "./shooting.js";
import * as Bubbles from "./bubbles.js";

var frameRate = 1/60; // Seconds
var frameDelay = frameRate * 1000; // ms



var map = []; //CONTAINS KEY INPUTS IN USE

setInterval(loop, frameDelay);
//start();

// LOOP PLAYER
function loop() {
    Player.move();
    Shooting.launchAttack();
    Bubbles.moveBubble("bubble1");
}


// MAIN KEYHOOK FUNCTION
onkeydown = onkeyup = function (e) {

    map[e.key] = e.type == 'keydown';

    if (map["ArrowRight"]) {

        Player.setPlayerMovement(0.8);
    }

    if (map["ArrowLeft"]) {
        Player.setPlayerMovement(-0.8);
    }
    if (map["z"]) {

        Shooting.setShooting(1);
    }

    if (!map["ArrowRight"] && !map["ArrowLeft"]) {
        Player.setPlayerMovement(0);
    }

    if (!map["z"]) {
        Shooting.setShooting(0);
    }
}

//ANIM FRAME
/*
var requestId;
function start() {
    if (!requestId) {
        requestId = window.requestAnimationFrame(loop);
    }
}

function stop() {
    if (requestId) {

        window.cancelAnimationFrame(requestId);
        requestId = undefined;
    }
}


function move() {

    positionX = positionX < 0 ? 0 : positionX;
    positionX = (positionX + width) > 100 ? (100 - width) : positionX;


    positionX += movement;
    main_char.style.left = positionX + "vw";
}


//SHOOTING KEYLISTENER

function launchAttack() {

    startCooldown();
    const attack_img = document.createElement('img');

    let bulletid = "bullet" + idnum;
    attack_img.setAttribute('id', bulletid);


    attack_img.style.position = "absolute"
    attack_img.style.width = "30px"

    attack_img.margin = "auto"
    attack_img.src = "res/arrowup.png";
    attack_img.style.left = (positionX + 2) + "vw";

    attack_img.style.bottom = heigth + "px";

    play_zone.appendChild(attack_img);

    moveAttack(bulletid);

    idnum++;
}

function moveAttack(bulletnum) {

    let bulletpos = document.getElementById(bulletnum).offsetTop;
    let bulletmoving = document.getElementById(bulletnum);

    if (bulletpos + 30 > 0) {

        window.requestAnimationFrame(() => {

            bulletpos = (bulletpos - 8);
            bulletmoving.style.top = bulletpos + "px";

            moveAttack(bulletnum);
        })

    } else {
        bulletmoving.remove();
    }
}

function startCooldown() {
    //cooldown = true;
}

//BUBBLE MOVEMENT

let bubblemaxHeight;
let bubbleDiam = 220;
let bubbleXPos;
let bubbleYPos;
let bubbleXMov = 2;
let bubbleYMov = 3;

moveBubble("bubble1")

function moveBubble(bubbleId) {

    let bubbleToMove = document.getElementById(bubbleId);

    bubbleYPos = bubbleToMove.offsetTop;
    bubbleXPos = bubbleToMove.offsetLeft;



    window.requestAnimationFrame(() => {


        if (bubbleYPos < 0 || bubbleYPos + bubbleDiam > window.innerHeight) {
            bubbleYMov = bubbleYMov * -1
        }

        if (bubbleXPos < 0 || bubbleXPos + bubbleDiam > window.innerWidth) {
            bubbleXMov = bubbleXMov * -1
        }

        bubbleYPos += bubbleYMov;
        bubbleXPos += bubbleXMov;

        bubbleToMove.style.top = bubbleYPos + "px";
        bubbleToMove.style.left = bubbleXPos + "px";

        moveBubble(bubbleId);
    })
}
*/