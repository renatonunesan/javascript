var carro = 'Camaro'
function mostrarCarro() {
    console.log(carro);
}

mostrarCarro();
console.log(carro);

/* Sobre escopo de função: Variáveis declaradas dentro de funções não são acessadas fora delas
Ao declarar a variável fora da função, permitimos que tanto a variável quanto o console acesse ela */

/* Existe uma variável global que é declarada sem palavras chaves como (var,const ou let) que mesmo sendo declarada dentro da função ainda pode ser acessada 'use strict' */
// OBS: É um erro!

function mostrarMoto() {
    moto = 'Ninja';
    console.log(moto);
}

mostrarMoto();
console.log(moto);

// A palavra chave 'var' para declarar uma variável não é mais comumente utilizada, pois o 'var' vaza o escopo

for (let i = 0; i < 10; i++) {
    console.log(`Número ${i}`)
}

/* Sobre o Const: 
    - Ele impede a redeclaração
    - Impede modificação do valor da variável
*/    

/* Sobre o Let:
    - Mantém o escopo do bloco
    - Impede a redeclaração
    - Permitei modificação do valor da variável
*/    

// ex001
{
    var cor = 'preto';
    const marca = 'Ford';
    let portas = 4;
    console.log(cor, marca, portas);
}

// ex002
const dois = 2;
function somarDois(x) {
    return x + dois;
}
function dividirDois(x) {
    return x / dois;
}

console.log(somarDois(4));
console.log(dividirDois(6));

// ex003

const numero = 50;

for (let numero = 0; numero <= 10; numero++) {
    console.log(numero);
}

const total = 10 * numero;
console.log(total);