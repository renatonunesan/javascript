const href = window.location.href;

if (href === 'http://127.0.0.1:5500/DOM/dom001/index.html') {
    console.log('É igual!')
} else {
    console.log('Não é igual!')
}

const h1Select = document.querySelector('h1');

function callb() {
    console.log('Clicou em', h1Select.innerText)
}

const elementoAtivo = document.querySelector('.ativo')

const language = window.navigator.language;
console.log(language);

const wid = window.innerWidth;
console.log(wid);



