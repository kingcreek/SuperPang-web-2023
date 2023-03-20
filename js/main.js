
import * as Player from "./player.js";
import * as Shooting from "./shooting.js";
import * as Bubbles from "./bubbles.js";

var frameRate = 1/60; // Seconds
var frameDelay = frameRate * 1000; // ms



var map = []; //CONTAINS KEY INPUTS IN USE

setInterval(loop, frameDelay);
//init player animation
Player.animateSprite();
//start();

// ADD 1 BUBBLE
Bubbles.addBubble(0, 0, 220, 3, 1, 2);
// LOOP PLAYER
function loop() {
    Player.move();
    Shooting.launchAttack();
    Bubbles.moveImage();
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
*/
