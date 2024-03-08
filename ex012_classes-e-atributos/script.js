// testes com objetos

const menu = document.querySelector('.menu');

menu.classList.add('ativo');
menu.classList.remove('ativo');
menu.classList.toggle('ativo');

if(menu.classList.contains('azul')) {
    menu.classList.add('possui-azul');
} else {
    menu.classList.add('nao-possui-azul');
}

menu.className += ' vermelho'

menu.classList.remove('ativo', 'nao-possui-azul', 'vermelho');

console.log(menu.classList);

// testes com atributos

const animais = document.querySelector('.animais');

console.log(animais.attributes);


// ex001

const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => {
    item.classList.add('ativo');
});

// ex002

itensMenu.forEach((item) => {
    item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo');

// ex003

const imagens = document.querySelectorAll('img');

imagens.forEach((item) => {
    const possuiAtributo = item.hasAttribute('alt');
    console.log(possuiAtributo);
})

// ex004

const lExterno = document.querySelector('a[href^="http"]');

lExterno.setAttribute('href', 'https://www.google.com/')
