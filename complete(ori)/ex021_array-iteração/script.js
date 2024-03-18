// ex001 
// Para retornamos uma array, usaremos o 'map'
const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);

const objCurso = arrayCursos.map((curso) => {
    const titulo = curso.querySelector('h1').innerText;
    const descricao = curso.querySelector('p').innerText;
    const aulas = curso.querySelector('.aulas').innerText;
    const horas = curso.querySelector('.horas').innerText;
    return {
        Título: titulo,
        Descrição: descricao,
        Aulas: aulas,
        Horas: horas
    }
});

console.log(objCurso);

// ex002

const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiorQ100 = numeros.filter(n => n > 100);

console.log(maiorQ100);

// ex003

const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const possuiBaixo = instrumentos.some((item) => {
    return item === 'Baixo';
});

console.log(possuiBaixo);

// ex004


const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Quejo',
        preco: 'R$ 10,60'
    },
    {
        item: 'Frango',
        preco: 'R$ 20,60'
    }
]

let soma = 0;

const valorTotal = compras.forEach((item) => {
    const precoFormatado = +item.preco.replace('R$ ', '').replace(',', '.');
    return soma += precoFormatado
}, 0);

soma = soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
console.log(soma);
