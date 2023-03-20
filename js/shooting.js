import * as Player from "./player.js";

const play_zone = document.getElementById("playzone");
import * as Player from "./player.js";

let shooting = 0;
let idnum = 1;
let heigth = 180;

let maxBullets = 1;
let bullets = []; // arreglo para guardar las balas


function canShoot()
{
    return bullets.length < maxBullets;
}

function setShooting(value)
{
	shooting = value;
}

function launchAttack() {

	if (shooting != 1 || bullets.length >= maxBullets)
		return;

    const attack_img = document.createElement('img');

    //let bulletid = "bullet" + idnum;
    //attack_img.setAttribute('id', bulletid);


    attack_img.style.position = "absolute"
    attack_img.style.width = "30px"

    attack_img.margin = "auto"
    attack_img.src = "res/arrowup.png";
    attack_img.style.left = (Player.positionX + 2) + "vw";

    attack_img.style.bottom = Player.heigth + "px";

    play_zone.appendChild(attack_img);

    bullets.push(attack_img);
    moveAttack();

    idnum++;
}

function moveAttack() {
    bullets.slice().reverse().forEach(function(bullet, index, object) {
        let bulletpos = bullet.offsetTop;

        if (bulletpos + 30 > 0) {

            window.requestAnimationFrame(() => {
                bulletpos = (bulletpos - 8);
                bullet.style.top = bulletpos + "px";
                moveAttack();
            })

        } else {
            bullet.remove();
            bullets.splice(object.length - 1 - index, 1);
        }
    });
}


export { setShooting, launchAttack, shooting, canShoot, bullets };
