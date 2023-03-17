let main_char = document.getElementById("mainchar");
const play_zone = document.getElementById("playzone");

let positionX = 44;
let width = 6;
let heigth = 120;


//KEYLISTENER

document.addEventListener('keydown', (event) => {


    let keyName = event.key;
    console.log(keyName);

    //CONTROLS

    if(keyName == "ArrowRight" && positionX + width < 100){

        move(1);

    }else if(keyName == "ArrowLeft" && positionX>0){

        move(-1)   

    }else if(keyName == "z"){

        launchAttack(positionX);
    }
  }, false);


  function launchAttack(position){

    let attack_img = document.createElement('img');

    attack_img.style.position = "absolute"
    attack_img.style.width = "20px"
    
    attack_img.margin = "auto"
    attack_img.src = "res/arrowup.png";
    attack_img.style.left = position + "vw";
    attack_img.style.backgroundColor = "#000"

    attack_img.style.bottom = "120px";

    play_zone.appendChild(attack_img);
  }

  function move(direction){

    console.log("direccion: " + direction);
    console.log("posicion: " + positionX);

    positionX += direction;

    main_char.style.left = positionX + "vw";
  }