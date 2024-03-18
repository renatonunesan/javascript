// ex001
function mudarClasse() {
    document.body.classList.toggle('active');
}

setInterval(mudarClasse, 2000);

// ex002

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const resetar = document.querySelector('.resetar');
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
resetar.addEventListener('click', resetarTempo);

let i = 0;
let timer;

function iniciarTempo() {
    timer = setInterval(() => {
        tempo.innerText = i++;
    }, 100);
    iniciar.setAttribute('disabled', '');
}

function pausarTempo() {
    clearInterval(timer);
    iniciar.removeAttribute('disabled');
}

function resetarTempo() {
    tempo.innerText = 0;
    i = 0;
}