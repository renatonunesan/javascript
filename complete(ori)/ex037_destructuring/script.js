const carro = {
    marca: 'Ferrari',
    ano: 2018
}

const {marca, ano} = carro;

console.log(marca, ano);

const cliente = {
    nome: 'Renato',
    compras: {
        digitais: {
        livros: ['Livro 1', 'Livro 2'],
        videos: ['Video JS', 'Video HTML']
        },
        fisicas: {
        cadernos: ['Caderno 1']
        }
    }
}

const {digitais, fisicas, digitais: {livros, videos}} = cliente.compras; 
// O Nome da variável sempre vai ser oque eu estou querendo puxar

console.log(livros);

// Desestruturando Arrays

const saladaFrutas = ['Banana', 'Maca', 'Manga', 'Laranja'];

const [fruta1, fruta2, fruta3, fruta4] = saladaFrutas; // Pode colocar qualquer nome

console.log(fruta4);

// Desestruturando argumento
// Podemos fazer isso caso a função espere como argumento um objeto

function teclou({key}) {
    console.log(key);
}

document.addEventListener('keyup', teclou);

// Exercícios

// ex001

const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

const {backgroundColor, color, margin} = btnStyles;

console.log(backgroundColor);
console.log(color);
console.log(margin);

// ex002

let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];

console.log(cursoAtivo);
console.log(cursoInativo);

// ex003

const cachorro = {
    nome: 'Bob',
    raca: 'Labrador',
    cor: 'Amarelo'
}

const {cor: bobCor} = cachorro;

console.log(bobCor)