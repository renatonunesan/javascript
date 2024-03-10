const h1 = document.querySelector('h1');
const aniLista = document.querySelector('.animais-descricao');

console.log(h1.innerText);

//console.log(aniLista.innerHTML);

const lista = document.querySelector('.animais-lista');

console.log(lista.children[lista.children.length - 1]);
console.log(lista.querySelector('li:last-child'));
console.log(lista.childNodes);

const contato = document.querySelector('.contato');
const tituloC = contato.querySelector('.titulo');
console.log(contato, tituloC);

lista.appendChild(tituloC);

// ex001

const menu = document.querySelector('.menu');

const cloneMenu = menu.cloneNode(true);
const copy = document.querySelector('.copy');
copy.appendChild(cloneMenu);

// ex002

const faqlist = document.querySelector('.faq-lista');

console.log(faqlist.childNodes[1]);

// ex003

console.log(faqlist.childNodes[1].nextElementSibling);

// ex004

const animais = document.querySelector('.animais');

console.log(animais);
console.log(animais.nextElementSibling);


