// O uso da function expression pe algo que contribui para um código melhor estruturado, já que
// força a criação da função antes da ativação

const somar = function(a, b) {
    return a + b;
}

console.log(somar(3, 4));

const areaQuadrado = l => l * l; // Function expression com Arrow function
console.log(areaQuadrado(8));

const instrumento = 'Violão';

(() => { // Uso de  IIFE
    const instrumento = 'Guitarra';
    console.log(instrumento);
})();

console.log(instrumento);

// Exercícios

// ex001

const priceNumber = n => +n.replace('R$', '').replace(',', '.'); // Função para converter preço em Number
console.log(priceNumber('R$ 99,99'));

// ex002

(function() {
    const nome = 'Renato';
    console.log(nome);
})();

// ex003

const active = callback => callback();

active(function() {
    console.log('Testando função');
})