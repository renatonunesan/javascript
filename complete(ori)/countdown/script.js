import Countdown from "./countdown.js";

const tempoParaONatal = new Countdown('24 December 2024 23:59:59 GMT-0300');

setInterval(() => {
    console.log(tempoParaONatal.total);
}, 1000 * 60)

