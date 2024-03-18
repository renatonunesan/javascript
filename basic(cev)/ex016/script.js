const numero = document.querySelector('.num');
const botao = document.querySelector('.btn');
const res = document.querySelector('.res');
const tab = document.querySelector('#seltab')

botao.addEventListener('click', tabuada);

function tabuada() {
    if(numero.value.lenght == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(numero.value);
        let cont = 1;
        tab.innerHTML = ''
        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n * cont}`
            tab.appendChild(item)
            cont++
        }
    }
}