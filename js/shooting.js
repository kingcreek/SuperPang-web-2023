const play_zone = document.getElementById("playzone");
import * as Player from "./player.js";

let shooting = 0;
let idnum = 1;

function setShooting(value)
{
	shooting = value;
}

function launchAttack() {

	if (shooting != 1)
		return;

    const attack_img = document.createElement('img');

    let bulletid = "bullet" + idnum;
    attack_img.setAttribute('id', bulletid);


    attack_img.style.position = "absolute"
    attack_img.style.width = "30px"

    attack_img.margin = "auto"
    attack_img.src = "res/arrowup.png";
    attack_img.style.left = (Player.positionX + 2) + "vw";

    attack_img.style.bottom = Player.heigth + "px";

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


export { setShooting, launchAttack };
