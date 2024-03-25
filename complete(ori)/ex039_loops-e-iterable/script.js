const frutas = ['Banana', 'Abacaxi', 'Melancia'];

for(const loop of frutas) {
    console.log(loop);
}

const buttons = document.querySelectorAll('button');

for(const btn of buttons) { // Uso do for...of
    btn.style.color = 'white';
    btn.style.background = 'black'
}

console.log(...buttons);

const moto = {
    marca: 'Yamaha',
    ano: 2020,
    km: 50,
}

for(const key in moto) {
    console.log(moto[key]);
}

// ex001

const itens = document.querySelectorAll('li');

for(const item of itens) {
    item.classList.add('ativo');
}

// ex002

for(const windowKey in window) {
    console.log(windowKey + ': ' + window[windowKey]);
}