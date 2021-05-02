import { get } from './getElement.js';
var watchDays = get('.watch-days');
var watchHours = get('.watch-hours');
var watchMinutes = get('.watch-minutes');
var watchSeconds = get('.watch-seconds');
var year = 2021;
var countDownDate = new Date(`may 27, ${year} 14:07:00`).getTime();

//funcion que se va a actualizar cada segundo
let watch = setInterval(() => {

    //la fecha de hoy
    let now = new Date().getTime();

    //la diferencia de tiempo entre el tiempo futuro y el actual
    let difference = countDownDate - now;

    //transforma la diferencia en dias, horas, minutos y segundos
    let days = Math.floor(difference / (1000 * 60 ** 2 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    //mostramos el tiempo
    watchDays.innerText = days;
    watchHours.innerHTML = hours;
    watchMinutes.innerHTML = minutes;
    if (seconds < 10) {
        watchSeconds.innerHTML = '0' + seconds;
    } else {
        watchSeconds.innerHTML = seconds;
    }

    //cambia el año
    if (difference <= 0) {
        year += 1;
        countDownDate = new Date(`april 27, ${year} 14:01:00`).getTime();
    }
    console.log(year);
}, 1000)


// USAMOS AJAX PARA AÑADIR LAS IMAGENES DEL FOOTER CON EL FORMATO Json
let xhr = new XMLHttpRequest();

xhr.onload = () => {
    if (xhr.status === 200) {
        // statement
        let jsonObject = JSON.parse(xhr.responseText);

        let imgs = '';
        jsonObject.imgs.forEach( img => {
            // statements
            imgs += `<img src="${img.src}" alt="${img.alt}">`
        });

        document.getElementById('imgs-container').innerHTML = imgs;
    }
}



xhr.open('GET', './data/images.json', true);
xhr.send(null);

//USAMOS AJAX PARA MOSTRAR EL TITULO EN PANTALLA QUE PROCIENE DE UN ARCHIVO HTML
let xhr2 = new XMLHttpRequest();
xhr2.onload = () => {
    if (xhr2.status === 200) {
        // statement
        let response = xhr2.responseText;
        document.getElementsByClassName('title-container')[0].innerHTML = response;
    }
}

xhr2.open('GET', './data/title.html', true);
xhr2.send(null);