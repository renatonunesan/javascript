// Operadores de atribuição

var numero = 20;
var numero2 = 10;

numero += 10; // numero = numero + 10
numero *= numero2;

console.log(numero);

// Operador Ternário

var idade = 19;
var podeBeber = (idade >=18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber)

// Estrutura do operador ternário: condição ? true : false

// ex001 

var scroll = 1000;

scroll += 500;
console.log(scroll);

// ex002

var possuiCarro = true;
var possuiCasa = true;
var darCredito = (possuiCarro && possuiCasa) ? 'Crédito aprovado!' : 'Crédito não aprovado!'
console.log(darCredito)