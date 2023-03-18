let main_char = document.getElementById("mainchar");
const play_zone = document.getElementById("playzone");

let positionX = 44;
let width = 9;
let heigth = 180;
let idnum = 1;
let movement = 0;
let shooting = 0;
let cooldown = false;

var map = []; //CONTAINS KEY INPUTS IN USE

start();

onkeydown = onkeyup = function (e) {

    map[e.key] = e.type == 'keydown';

    if (map["ArrowRight"]) {

        movement = 0.8;
    }

    if (map["ArrowLeft"]) {
        movement = -0.8;

    }
    if (map["z"] && !cooldown) {

        shooting = 1;
    }

    if (!map["ArrowRight"] && !map["ArrowLeft"]) {

        movement = 0;
    }

    if (!map["z"]) {
        shooting = 0;
    }
}

//ANIM FRAME

var requestId;

function loop() {

    requestId = undefined;

    move();

    if (shooting == 1) {
        launchAttack();
    }
    start()
}


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
let bubbleXMov = 1;
let bubbleYMov = 3;

moveBubble("bubble1")

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