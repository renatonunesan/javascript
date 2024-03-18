const btnVerif = document.querySelector('.btn');
const vel = document.querySelector('#txtvel')
const divRes = document.querySelector('.res')

btnVerif.addEventListener('click', verificar);

function verificar() {
    if(Number(vel.value) < 60) {
        divRes.innerText = 'Velocidade permitida!';
    } else {
        divRes.innerText = 'Velocidade não permitida!';
        divRes.innerHTML += `<p>Você está <strong>MULTADO!</strong> por excesso de velocidade</p>`
    }
}