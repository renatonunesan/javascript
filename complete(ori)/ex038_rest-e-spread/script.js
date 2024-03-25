function arCirculo (pi, raio = 4) { // Padrão
    return pi * raio ** 2;
}

console.log(arCirculo(3.14));

function anunciarGanhadores(premio, ...ganhadores) { // Rest
    ganhadores.forEach(ganhador => {
        console.log(ganhador + ' ganhou um ' + premio)
    });
}

anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria');

const perifericos = ['Mouse', 'Teclado', 'Headset'];
const jogos = ['Resident Evil village', 'Dying light', 'Overwatch 2'];

const tudo = [...perifericos, ...jogos] // Spread

console.log(tudo)

const todosOsNumeros = [3, 4, 5, 12, 24, 45];
const numeroMaximo = Math.max(...todosOsNumeros); // Spread para lista de argumentos

console.log(numeroMaximo);

const btns = document.querySelectorAll('button');
const btnsArray = [...btns]; // Uso de spread para transformar uma Nodelist em Array

console.log(btnsArray);

// ex001

function createButton(background = 'blue', color = 'red') {
    const buttonElement = document.createElement('button');
    buttonElement.style.background = background;
    buttonElement.style.color = color;
    return buttonElement;
} 

createButton();

// ex002 

const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];

comidas.push(...frutas);

console.log(comidas);