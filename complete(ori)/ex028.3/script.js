const pa = document.querySelector('.piada');
const botao = document.querySelector('.btn')

function puxarPiada() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(r => r.json())
    .then(piada => {
        pa.innerText = piada.value;
    })
}

botao.addEventListener('click', puxarPiada);