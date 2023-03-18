
let bubblemaxHeight;
let bubbleDiam = 220;
let bubbleXPos;
let bubbleYPos;
let bubbleXMov = 1;
let bubbleYMov = 3;

//moveBubble("bubble1")

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

export * from "./boobles.js";