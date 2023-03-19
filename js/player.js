
let main_char = document.getElementById("mainchar");
import { launchAttack } from "./shooting.js";

let movement = 0;
let positionX = 44;
let width = 9;
let heigth = 180;

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


export { setPlayerMovement, move, positionX, heigth };
