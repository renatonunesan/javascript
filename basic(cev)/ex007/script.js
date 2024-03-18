const botao = document.querySelector('.btn');
const result = document.querySelector('#res');
const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');

botao.addEventListener('click', somar);

function somar() {
    let n1 = Number(number1.value);
    let n2 = Number(number2.value);
    const soma =  n1 + n2;
    result.innerHTML = `Resultado = ${soma}`;
}
