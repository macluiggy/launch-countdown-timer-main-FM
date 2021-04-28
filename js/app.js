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