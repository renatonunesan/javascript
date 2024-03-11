// testes com propiedades e métodos de String

const banda = 'Chiclete com banana';
const musica = 'Titerê';

console.log(banda.length);
console.log(musica.length);
console.log(banda.charAt(0));
console.log(banda.charAt(5));

//

const frase1 = 'Ela gosta de';
const frase2 = 'Java e Kotlin';

const fraseCompleta = frase1.concat(frase2, '!')
console.log(fraseCompleta);

//

const perifericosBolsa = 'Mouse';
const perifericosCasa = 'Mouse, Teclado, Headset'

console.log(perifericosCasa.includes(perifericosBolsa));

//

console.log(perifericosBolsa.startsWith('M'));
console.log(perifericosCasa.endsWith('t'));

//

console.log(perifericosBolsa.slice(0, 3));
console.log(perifericosCasa.slice(20, 23));

//

const periferico = 'Headset';

console.log(periferico.indexOf('set'));

//

const listaPrecos = ['R$ 100', 'R$ 200', 'R$ 500']

listaPrecos.forEach((preco) => {
    console.log(preco.padEnd(9, ',00'));
})

//

const jotaroKujo = 'ORA';
const dio = 'MUDA';

console.log(jotaroKujo.repeat(5));
console.log(dio.repeat(5));

//

let listaVocabulos = 'Ohayo Sayonara Itadakimasu Oyasuminasai Genki Subarashii'
listaVocabulos = listaVocabulos.replace(/[ ]+/g, ', ');

console.log(listaVocabulos);

//

const sexo1 = 'feminino';
const sexo2 = 'FEMININO';

console.log((sexo1.toLowerCase() === 'feminino'));
console.log((sexo2.toUpperCase() === 'FEMININO'));

// 

// Remove espaços em brancos na string

const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'

// ex001

const transacoes = [
    {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
    },
    {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
    },
    {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
    },
    {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
    },
    {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
    },
];

let taxaTotal = 0;
let recebimentoTotal = 0;

transacoes.forEach((item) => {
    const numeroLimpo = +item.valor.replace('R$ ', '');
    if (item.descricao.slice(0, 4) === 'Taxa') {
        taxaTotal += numeroLimpo;
    } else {
        recebimentoTotal += numeroLimpo;
    }
});

console.log(taxaTotal);
console.log(recebimentoTotal);

// ex002

const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(';');

console.log(arrayTransportes);

// ex003

let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
            </ul>`;

html = html.split('span').join('a');
console.log(html);

//ex004
    
const frase = 'Melhor do ano!';
console.log(frase.charAt(13));

//ex005

const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let somaTaxa = 0;

transacoes2.forEach((item) => {
    semEspaco = item.trim();
    padronizado = semEspaco.toLowerCase();
    if (padronizado.slice(0, 4) === 'taxa') {
        somaTaxa += 1;
    }
});

console.log(somaTaxa);


