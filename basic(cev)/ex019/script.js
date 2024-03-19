const entrada = document.querySelector('.num');
const botaoAdd = document.querySelector('.btn');
const res = document.querySelector('.res');
const caixa = document.querySelector('#seltab');
const botaoFinalizar = document.querySelector('.btn2');

botaoAdd.addEventListener('click', adicionar);

let arrayCode = [];

function adicionar() {
    if(arrayCode.includes(Number(entrada.value)) || entrada.value.length == 0) {
        window.alert('Valor inválido')
    } else if(Number(entrada.value) < 1 || Number(entrada.value) > 100) {
        window.alert('Valor inválido, por favor digite um número entre 1 e 100')
    } else {
        arrayCode.push(Number(entrada.value))
        let item = document.createElement('option')
        item.text = `Valor ${Number(entrada.value)} adicionado!`
        caixa.appendChild(item)
    }
    entrada.value = ''
    entrada.focus()
}

botaoFinalizar.addEventListener('click', finalizar);

function finalizar() {
    if (arrayCode.length == 0) {
    res.innerHTML = 'Nenhum número foi adicionado'
    } else {
        arrayCode.sort();
        let s = 0;
        for(let c = 0 ; c < arrayCode.length ; c++) {
            s += arrayCode[c]
        }
        const media = s / arrayCode.length;
        res.innerHTML = `Ao todo, temos ${arrayCode.length} número(s) cadastrados. <br> O maior valor informado foi ${arrayCode[arrayCode.length - 1]}. <br> O menor valor informado foi ${arrayCode[0]}. <br> Somando todos os valores, temos ${s}. <br> A média dos valores digitados é ${media}. `
    } 
} 