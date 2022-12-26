/* Utilities */
const utilities = {
    addCSS: (id, classname) => document.getElementById(id).classList.add(classname),
    removeCSS: (id, classname) => document.getElementById(id).classList.remove(classname),
    setBackground: (backgroundName) => {
        const style = document.body.style;
        style['background-image'] = `url(./media/images/${backgroundName})`;
        style['background-position'] = 'center center';
        style['background-size'] = backgroundName === 'background-fantasy.webp' ? 'auto' : '100%';
        style['background-repeat'] = 'no-repeat';
    },
    setMainContentBackground: (backgroundName) => {
        const style = document.getElementById('main-content').style;
        style['background-image'] = `url(./media/images/${backgroundName})`;
        style['background-position'] = 'center center';
        style['background-size'] = '100%';
        style['background-repeat'] = 'no-repeat';
    }
}
/* End utilities */

let sound = null;
let harrySound = false;

const loadSound = (src, volume) => {
    sound = document.createElement("audio");
    sound.src = `media/audio/${src}`;
    sound.setAttribute("preload", "auto");
    sound.setAttribute("controls", "none");
    sound.style.display = "none";
    sound.volume = volume || 0.7;
    sound.loop = true;
    document.body.appendChild(sound);
}

let currentAnimation = 'fireflies';
let animation = false;
const disableAnimation = () => {
    const button = document.getElementById('animation-button');
    if (!animation) {
        button.classList.add('disable-animation');
        button.classList.remove('animation');
        utilities.addCSS(currentAnimation, 'hidden');
    } else {
        button.classList.add('animation');
        button.classList.remove('disable-animation');
        utilities.removeCSS(currentAnimation, 'hidden');
    }
    animation = !animation;
}

let muted = false;
const muteMusic = () => {
    const button = document.getElementById('mute-button');
    if (!muted) {
        button.classList.add('mute');
        button.classList.remove('unmute');
        sound.pause();
    } else {
        button.classList.add('unmute');
        button.classList.remove('mute');
        sound.play();
    }
    muted = !muted;
}

const getMainContent = () => document.getElementById('main-content');

const loadNextPage = (nextPageNum) => listOfPage[nextPageNum]();

const addPageControlButton = (next, previous) => {
    let result = '';

    if (next !== null) {
        result += `<button id="next" class='next' onclick="loadNextPage(${next})"></button>`;
    }
    if (previous !== null) {
        result += `<button id="previous" class='previous' onclick="loadNextPage(${previous})"></button>`;
    }

    return result;
}

const loadPage1 = () => {
    if (!harrySound) {
        loadSound('HarryPotter.mp3');
        harrySound = true;
        sound.play();
    }
    const content = '<div style="font-size: 22px">' +
        '<h1>2021 Encuentro</h1>' +
        'Gracias a Óscar invitan a Jose al cumpleaños de Mar,<br> es ahí donde conoce por primera vez a nuestra ex-rubia favorita ¡Sofi!<br>' +
        'Ella llega tarde por el curro, pero sin conocer de nada a Jose,<br> comenta que le suena su cara.<br>' +
        'Es ahí cuando Jose nota que ella podría ser muy buena amistad.' +
        '</div>'
    getMainContent().innerHTML = content;
    getMainContent().innerHTML += addPageControlButton(2, null);
};

const loadPage2 = () => {
    const content = '<div>' +
        '<h1>2021 Halloween</h1>' +
        'Pasan los meses y después de un par de quedadas<br>' +
        'deciden hacer una fiesta de halloween...<br>' +
        '<div class="center-content">' +
        '<img src="./media/images/sofia/halloween1.jpg"/>' +
        '<img style="padding-left: 1rem;" src="./media/images/sofia/halloween2.jpeg"/>' +
        '</div>'
    '</div>';
    getMainContent().innerHTML = content;
    getMainContent().innerHTML += addPageControlButton(3, 1);
};

const loadPage3 = () => {
    const content = '<div>' +
        '<h1>2021 Feria</h1>' +
        '¡Winter is coming!<br>' +
        'Así que es época de feria y allí que fueron...<br>' +
        '<div class="center-content">' +
        '<img src="./media/images/sofia/feria1.jpg"/>' +
        '<img style="padding-left: 1rem;" src="./media/images/sofia/feria2.jpg"/>' +
        '</div>'
    '</div>';
    getMainContent().innerHTML = content;
    getMainContent().innerHTML += addPageControlButton(4, 2);
};

const loadPage4 = () => {
    const content = '<div>' +
        '<h1>2021 Tú cumpleaños (¿¡Otra vez!?)</h1>' +
        'Un año ha pasado ya desde aquel día, pero aquí siguen ambos<br>' +
        'Esperemos que este año lo pases mejor que el anterior, <br>' +
        '¡pero no tan bien como el siguiente! <br>' +
        '<div class="center-content">' +
        '<img style="transform: rotate(-90deg)" src="./media/images/sofia/cumple sofi.jpg"/>' +
        '<img style="padding-left: 0.5rem;" src="./media/images/sofia/cumple sofi2.jpg"/>' +
        '</div>'
    '</div>';
    getMainContent().innerHTML = content;
    getMainContent().innerHTML += addPageControlButton(5, 3);
};

const loadPage5 = () => {
    const content = '<div>' +
        '<h1>2021 Nochevieja</h1>' +
        'Ya hay muy buen rollo entre ellos y deciden invitarle a nochevieja.<br>' +
        'Aun comiendo sandwiches por nochevieja fueron días muy divertidos.<br>' +
        '<div class="center-content">' +
        '<img src="./media/images/sofia/nochevieja.jpg"/>' +
        '<img style="padding-left: 0.5rem;" src="./media/images/sofia/nochevieja2.jpg"/>' +
        '</div>'
    '</div>';
    getMainContent().innerHTML = content;
    getMainContent().innerHTML += addPageControlButton(6, 4);
};

const loadPage6 = () => {
    const content = '<div>' +
        '<h1>2022 Cumple Sergio</h1>' +
        'En el cumple del más loco... ¿Dónde podrían ir a celebrarlo?<br>' +
        'Pues a hacer el cabra saltando, ¡cómo no! <br>' +
        '<div class="center-content">' +
        '<img src="./media/images/sofia/cumple sergio.jpg"/>' +
        '</div>'
    '</div>';
    getMainContent().innerHTML = content;
    getMainContent().innerHTML += addPageControlButton(7, 5);
};

const loadPage7 = () => {
    const content = '<div>' +
        '<h1>2022 Cumple David</h1>' +
        '¿Y en el cumple del amante de scape rooms?<br>' +
        '¡Pues se decidió hacer un hall scape!<br>' +
        'Aunque el equipo con más expertos es el acabó perdiendo <br>' +
        '<div class="center-content">' +
        '<img src="./media/images/sofia/cumple david.jpg"/>' +
        '</div>'
    '</div>';
    getMainContent().innerHTML = content;
    getMainContent().innerHTML += addPageControlButton(8, 6);
};

const loadPage8 = () => {
    if (!harrySound || previousIs9) {
        loadSound('HarryPotter.mp3');
        harrySound = true;
        currentAnimation = 'fireflies';
        utilities.removeCSS('fireflies', 'hidden');
        sound.play();
    }
    const content = '<div>' +
        '<h1>2022 Cumple Choco</h1>' +
        '¿Y porqué no hacer algo distinto a lo que el cumpleañero normalmente hace?<br>' +
        'Pues aquí los tienes después de tirar con el arco...<br>' +
        '<div class="center-content">' +
        '<img src="./media/images/sofia/cumple choco.jpg"/>' +
        '</div>'
    '</div>';
    getMainContent().innerHTML = content;
    getMainContent().innerHTML += addPageControlButton(9, 7);
};

let previousIs9 = false;
const loadPage9 = () => {
    sound.pause();
    utilities.addCSS('fireflies', 'hidden');
    utilities.removeCSS('main-content', 'microphone');
    utilities.addCSS('main-content', 'wand');
    utilities.setBackground('background-fantasy.webp');
    utilities.setMainContentBackground('papiro.png');

    const content = '<div>' +
        '<h1>Creo que nos hemos saltado algo...</h1>' +
        'Un momento, que es esto, esto no estaba en la historia<br>' +
        '¿Rosalía?' +
        '</div>';
    getMainContent().innerHTML = content;
    getMainContent().innerHTML += addPageControlButton(10, 8);
};

const loadPage10 = () => {
    previousIs9 = true;
    utilities.setBackground('background-disco.jpg');
    utilities.setMainContentBackground('stage.webp');
    utilities.removeCSS('main-content', 'wand');
    utilities.addCSS('main-content', 'microphone');
    utilities.addCSS('lights', 'hidden');
    const content = '<div>' +
        '<h1>2022 Navarra inicio</h1>' +
        'Ahora quien narra soy yo ¡la Rosalía!<br>' +
        'Empezaron un viaje un poco mal, la verdad...' +
        '<div class="center-content">' +
        '<img src="./media/images/sofia/navarra1.jpeg"/>' +
        '</div>'
    '</div>';
    getMainContent().innerHTML = content;
    getMainContent().innerHTML += addPageControlButton(11, 9);
};

const loadPage11 = () => {
    if (harrySound || previousIs9) {
        loadSound('Rosalia-Bizcochito.mp3', 0.2);
        harrySound = false;
        sound.play();
    }
    utilities.removeCSS('lights', 'hidden');
    currentAnimation = 'lights';
    const content = '<div>' +
        '<h1>2022 Navarra fin</h1>' +
        'Pero eso no les impidó pasarlo en grande con muy buenos recuerdos y momentos<br>' +
        '<div class="center-content">' +
        '<img src="./media/images/sofia/navarra2.jpg"/>' +
        '<img style="padding-left: 0.5rem;" src="./media/images/sofia/navarra3.jpg"/>' +
        '</div>'
    '</div>';
    getMainContent().innerHTML = content;
    getMainContent().innerHTML += addPageControlButton(12, 10);
};

const loadPage12 = () => {
    const content = '<div>' +
        '<h1>2022 Quedadas random</h1>' +
        'Luego vinieron las típicas quedadas... B de barbacoa... P de piso patera' +
        '<div class="center-content">' +
        '<img src="./media/images/sofia/barbacoa.jpeg"/>' +
        '<img style="padding-left: 0.5rem;" src="./media/images/sofia/patera house.jpeg"/>' +
        '</div>'
    '</div>';
    getMainContent().innerHTML = content;
    getMainContent().innerHTML += addPageControlButton(13, 11);
};

const loadPage13 = () => {
    const content = '<div>' +
        '<h1>2022 Hogueras Alicante</h1>' +
        'No tenemos mucha información sobre que pasó en hogueras...<br>' +
        'Pero aquí tenemos imagenes de los acontecimientos que se dieron' +
        '<div class="center-content">' +
        '<img src="./media/images/sofia/hogueras.jpg"/>' +
        '<img style="padding-left: 0.5rem;" src="./media/images/sofia/hogueras2.jpg"/>' +
        '</div>'
    '</div>';
    getMainContent().innerHTML = content;
    getMainContent().innerHTML += addPageControlButton(14, 12);
};

const loadPage14 = () => {
    const content = '<div>' +
        '<h1>2022 Hogueras Sanvi</h1>' +
        'Y como no... si las de Alicante fueron aleatorias, las de sanvi...<br>' +
        'Bueno ¡que decir! seguro que si le preguntamos a cualquiera de ellos si <br>' +
        'esperaban estar en una cementera a la una de la mañana haciendo el loco...<br>' +
        'Todos te dirían que te has dado un golpe en la cabeza' +
        '<div class="center-content">' +
        '<img src="./media/images/sofia/hogueras sanvi.jpeg"/>' +
        '<img style="padding-left: 0.5rem;" src="./media/images/sofia/hogueras sanvi 2.jpeg"/>' +
        '</div>'
    '</div>';
    getMainContent().innerHTML = content;
    getMainContent().innerHTML += addPageControlButton(15, 13);
};

const loadPage15 = () => {
    const content = '<div>' +
        '<h1>2022 Scape Mutxamiel</h1>' +
        'Y si había algún plan loco improvisado, ahí estaban los dos<br>' +
        '<div class="center-content">' +
        '<img src="./media/images/sofia/scape.jpg"/>' +
        '</div>'
    '</div>';
    getMainContent().innerHTML = content;
    getMainContent().innerHTML += addPageControlButton(16, 14);
};

const loadPage16 = () => {
    const content = '<div>' +
        '<h1>2022 Planes incompletos</h1>' +
        'Y aunque le hubiese gustado celebrar este plan contigo<br>' +
        '<div class="center-content">' +
        '<img src="./media/images/sofia/pirata.jpg"/>' +
        '</div>'
    '</div>';
    getMainContent().innerHTML = content;
    getMainContent().innerHTML += addPageControlButton(17, 15);
};

const loadPage17 = () => {
    const content = '<div>' +
        '<h1>2022 Vaciladas</h1>' +
        'Y aunque te haya pegado estas vaciladas...<br>' +
        'o no pasemos tanto tiempo juntos como antes...<br>' +
        '<div class="center-content">' +
        '<img style="height:55vh;" src="./media/images/sofia/vacile.jpg"/>' +
        '<img style="height:55vh;padding-left: 0.5rem;" src="./media/images/sofia/vacile2.jpg"/>' +
        '</div>'
    '</div>';
    getMainContent().innerHTML = content;
    getMainContent().innerHTML += addPageControlButton(18, 16);
};

const loadPage18 = () => {
    const content = '<div>' +
        '<h1>2022 Felices 23!!!!</h1>' +
        'Tu amigo Jose te desea felices 23 y que lo pases en grande<br>' +
        'Que podamos celebrar juntos muchos más cumpleaños.<br>' +
        'Este es realmente mi regalo de cumpleaños y espero que lo hayas disfrutado<br>' +
        'al menos la mitad de lo que yo disfruto tu compañía<br>' +
        '<div class="center-content">' +
        '<img src="./media/images/sofia/ella y yo.jpg"/>' +
        '<img style="padding-left: 0.5rem;" src="./media/images/sofia/ella y yo2.jpg"/>' +
        '</div>'
    '</div>';
    getMainContent().innerHTML = content;
    getMainContent().innerHTML += addPageControlButton(null, 17);
};

const listOfPage = {
    1: loadPage1,
    2: loadPage2,
    3: loadPage3,
    4: loadPage4,
    5: loadPage5,
    6: loadPage6,
    7: loadPage7,
    8: loadPage8,
    9: loadPage9,
    10: loadPage10,
    11: loadPage11,
    12: loadPage12,
    13: loadPage13,
    14: loadPage14,
    15: loadPage15,
    16: loadPage16,
    17: loadPage17,
    18: loadPage18,
}

const start = () => {
    utilities.removeCSS('animation-button', 'hidden');
    utilities.removeCSS('mute-button', 'hidden');
    utilities.removeCSS('fireflies', 'hidden');
    utilities.addCSS('main-content', 'wand');
    listOfPage[1]();
}

document.onkeydown = (e) => {
    e = e || window.event;
    const click = (id) => {
        const elem = document.getElementById(id);
        if (elem) {
            elem.click();
        }
    }
    if (e.keyCode == '37') {
        click('previous');
        // left arrow
    }
    else if (e.keyCode == '39') {
        // right arrow
        click('next');
    }
};