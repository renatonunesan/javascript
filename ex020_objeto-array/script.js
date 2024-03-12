// Testes com array

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 199, 299];

console.log(instrumentos[1]);
console.log(precos[0]);

//

const carros = new Array('Ford', 'Chevrolet', 'Honda');

carros[2] = 'Ferrari'; // Vai substituir o valor do elemento 2 pelo novo, já que arrays não são estáticas
carros[19] = 'Fiat'; // Como a array não tem 20 elementos, ela vai criar espaços vazios

console.log(carros.length);
console.log(carros);

//

const li = document.querySelectorAll('li');
const arrayLi = Array.from(li); // Transformando uma arraylike (Nodelist) em uma array

console.log(li);
console.log(arrayLi);

const obj = {
    0: 'Renato',
    1: 'Nunes',
    2: 'Teste',
    length: 3, // Para transformar um objeto em array, temos que colocar a propiedade lenght
}

const objArray = Array.from(obj);
console.log(objArray);

// Para verificarmos se uma "Array" é uma array, utilizamos a propiedade Array.isArray()

console.log(Array.isArray(obj));
console.log(Array.isArray(objArray));

// Para propiedades e Métodos do Prototype temos primeiramente o .lenght que vai retornar o tamanho da array ou 
// elemento da array utilizando o [0].length

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];

console.log(frutas[0].length); // Retornou quantos caracteres 'Banana' possui
console.log(frutas[2].length); // Retornou o tamanho da array que está dentro da Array 'frutas'

// Agora vamos citar os métodos modificadores, eles retornam a array modificada. 
// O .sort() serve pra organizar a array por orden alfabética(strings) e para number ele vai considerar o primeiro
// numero que aparecer.

const garrafas = ['500ml', '900ml', '1L', '2L', '5L'];
garrafas.sort();

const nomes = ['Renato', 'Dilera', 'Cilian', 'Oppenheimer']
nomes.sort();

console.log(garrafas);
console.log(nomes);

// Os próximos métodos modificadores são o .unshift() que adiciona elementos ao ínicio da array e o
// .push() que adiciona elementos ao final da array. Ambos retornam o .lenght da array gerada

const ativTecla = ['Numlock', 'Shift', 'ctrl'];
ativTecla.unshift('caps')
ativTecla.push('scrollLock')

console.log(ativTecla);

// Também temos o .shift() que remove o primeiro elemento da array e retorna ele
// e o .pop() que remove o última elemento da array e retorna ele

const primeiraAtivTecla = ativTecla.shift();
console.log(primeiraAtivTecla);

const ultimaAtivTecla = ativTecla.pop();
console.log(ultimaAtivTecla);

console.log(ativTecla);

// Também temos o .reverse(), que inverte os itens da array e retorna a nova array

const phones = ['Samsumg', 'Motorola', 'Apple', 'Xiaomi']
console.log(phones.reverse());

// Complicando um pouco mais, temos o .splice() que vão ter 4 parâmetros(index, remover, item1, itemn,...)
// O index é basicamente o número referente ao elemento da array, nesse caso, ele vai adicionar novos itens a
// partir do numero do index
// O 'remover' serve para você explicitar quantos elementos irá remover para colocar os novos
// E por último você vai adicionar o novo elemento(item1) ou novos elementos a array

phones.splice(1, 0, 'LG', 'Realme');
console.log(phones);

// .copywithin() possui 3 parâmetros (alvo, ínicio, alvo)

console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].copyWithin(2, 0, 5));

// .fill() preenche a array com o item que você colocar no parâmetro

const fillBanana = ['ItemA', 'ItemB', 'ItemC', 'ItemD'].fill('Banana');
console.log(fillBanana);

const fillPera = ['ItemA', 'ItemB', 'ItemC', 'ItemD'].fill('Pêra', 2); // Também podemos passar como segundo 
//parâmetro o index, assim a partir do item que você definiu, ele vai preencher com o valor que você passou
console.log(fillPera); 

// O método .concat() serve para concatenar a array com o valor passado, podendo ser outra array e até um novo 
//elemento

const estojo1 = ['lapis', 'borracha'];
const estojo2 = ['caneta', 'marcador']
const estojoCompleto = estojo1.concat(estojo2, 'Lapiseira');

console.log(estojoCompleto);

// .includes() verifica se tal valor está dentro da array e retorna true or false
// .indexOf() retorna o index do valor passado
// .lastindexOf() retorna o index do último elemento

// Exemplificando o uso do .join() e .split()

let htmlJhonsons = '<h2>SubJhonsons</h2>'
htmlJhonsons = htmlJhonsons.split('h2');
htmlJhonsons = htmlJhonsons.join('h1')

console.log(htmlJhonsons);

// Por último temos o .slice() que possui dois parâmetros .slice(inicio, final)
// Irá retornar os itens da array a partir do index 'inicio' até o index 'final'

const linguagens = ['html', 'css', 'js', 'php', 'python'];
linguagens.slice(3); // ['php', 'python']

const back = linguagens.slice(3); // É bom para atribuirmos a uma nova variável
console.log(back);

// ex001

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
comidas.shift();
comidas.pop();
comidas.unshift('Peixe', 'Batata')
comidas.push('Arroz');

console.log(comidas);

// ex002

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
estudantes.sort();
estudantes.reverse();

console.log(estudantes.includes('Joana'))
console.log(estudantes.includes('Juliana'))
console.log(estudantes);

// ex003

let html = `<section>
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contato</div>
            </section>`            

html = html.split('section').join('ul').split('div').join('li');
console.log(html);

// ex004

const carros2 = ['Ford', 'Fiat', 'VW', 'Honda'];
const carros3 = carros2.slice(0);
carros2.pop();

console.log(carros2)
console.log(carros3)
