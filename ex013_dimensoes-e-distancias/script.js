const listaAnimais = document.querySelector('.animais-lista');
console.log(listaAnimais.clientHeight);
console.log(listaAnimais.scrollHeight);

const animaisTopo = listaAnimais.offsetTop; // Distância entre o topo do elemento e o topo da página
console.log(animaisTopo);

const animaisLeft = listaAnimais.offsetLeft; // Distância entre o canto esquerdo do elemento e o canto esquerdo da página
console.log(animaisLeft);

const primeiroH1 = document.querySelector('h1');
const h1top = primeiroH1.offsetTop;

console.log(h1top);

//window.innerWidth; -> Width da janela
//window.innerHeight; -> Height da janela

//window.pageYOffset; -> distância total do scroll horizontal
//window.pageXOffset; -> distância total do scroll vertical

// ex001

const pImg = document.querySelector('img');
const distpImg = pImg.offsetTop;

console.log(distpImg);

// ex002

function somaImagens() {
    const imgs = document.querySelectorAll('img');
    let soma = 0;
    imgs.forEach((item) => {
        soma += item.offsetWidth;
    });
    console.log(soma);
}

window.onload = function() {
    somaImagens();
}

// ex003

const links = document.querySelectorAll('a');

links.forEach((item) => {
    const linkWidth = item.offsetWidth;
    const linkHeight = item.offsetHeight;
    if (linkWidth >= 48 && linkHeight >= 48) {
        console.log(item, 'adequado')
    } else {
        console.log(item, 'Não adequado')
    }
});

// ex004

const smallBrowser = window.matchMedia('(max-width: 720px)').matches;

if(smallBrowser) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mabole');
}
