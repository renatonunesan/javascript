// isNaN() verifica se é um number, isInteger() verifica se é uma integral(Não tem valor decimal)

console.log(Number.isNaN(10));
console.log(Number.isNaN(NaN));

console.log(Number.isInteger(20));
console.log(Number.isInteger(23.9));

// parseFloat() vai retornar um número a partir de uma string
// parseInt() vai retornar valor integral, corta qualquer decimal

console.log(parseFloat('32434'));
console.log(parseInt('100,34 reais'));

// toFixed serve para arredondar números decimais, com base no total de casas decimais

const preco = 2.99;
console.log(preco.toFixed());

const carro = 1000.455;
console.log(carro.toFixed(2)); // Você pode passar o parâmetro de quantas casas decimais deseja arredondar

// toString vai transformar o número em uma string com base no radix. Utilizando o 10 você indica o sistema decimal

const preco2 = 2.99;
console.log(preco2.toString(10));

//toLocaleString(lang, options) serve para formatar o número de acordo com a língua e opções passadas

let valor = 49.99;
valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

console.log(valor);

// Math é um objeto que possui propiedades e métodos de expressões matemáticas comuns

console.log(Math.PI.toFixed(2));

// Math.abs()(retorna o valor absoluto, ou seja, deixa positivo)
// Math.ceil()(arredonda o valor para cima)
// Math.floor()(arredonda o valor para baixo)
// Math.round()(arredonda para o número integral mais próximo)

// Math.max()(retorna o maior número de uma lista)
// Math.min()(retorna o menor número de uma lista)

//Math.random()(retorna um numero quebrado aleatório entre 0 e 1)

/* Math.floor(Math.random() * (max - min + 1)) + min; (Fórmula para ter um número aleatório entre números determinados) */

// ex001 

console.log(Math.floor(Math.random() * (1050 - 2000 + 1)) + 1050);
console.log(Math.floor(Math.random() * (1050 - 2000 + 1)) + 1050);
console.log(Math.floor(Math.random() * (1050 - 2000 + 1)) + 1050);

// ex002

const numeros = '4, 5, 20, 8, 9';
const arrayNumeros = numeros.split(', ')

console.log(arrayNumeros);
console.log(Math.max(...arrayNumeros));

// ex003

const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                    'R$ 230  ', 'r$  200'];

function limparPreco(preco) {
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
    preco = +preco.toFixed(2);
    return preco;
}

let soma = 0;
listaPrecos.forEach((item) => {
    soma += limparPreco(item);
});

soma = soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
console.log(soma);
