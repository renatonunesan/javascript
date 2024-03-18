// Testes

const perimetro = new Function('lado', 'return lado * 4');
console.log(perimetro(5));

// Propiedades: 
// Function.lenght: vai retornar o total de argumentos da função
// Function.name: vai retornar uma string com o nome da função 

function somar(n1, n2) {
    return n1 + n2;
}

console.log(somar.length);
console.log(somar.name);

// Métodos:

// function.call() permitei que você controle o valor de 'this' ao chamar a função. Você ássa os argumentos 
// separadamente, como se fosse uma lista de vários elementos

const lapiseira = {
    marca: 'Pentel',
    ponta: 0.5
}

function minhaLapiseira() {
    console.log(this.marca + ' ' + this.ponta);
}

minhaLapiseira.call(lapiseira); // Passando a referência do meu objeto 'lapiseira' dentro da função

// Já a function.apply() é bem parecida com a call, porém no argumento você vai passar como se fosse uma só array

const numeros = [33, 232, 30, 20, 1220 , 23];
console.log(Math.max.apply(null, numeros));

// Comparando as duas:

const nPrimos = [2, 3, 5, 7, 11, 13, 17 ,19];

console.log(Math.min.call(null, 2, 3, 5, 7, 11, 13, 17 ,19)) // Método call()

console.log(Math.min.apply(null, [2, 3, 5, 7, 11, 13, 17 ,19])) // Método apply()

// function.bind() também é semelhante ao call e ao apply, porém ele não executa imediatamente, você que escolhe
// quando ativa-la, assim possibilita reusar a função e também passar novos argumentos porteriormente

const myObject = {
    x: 10,
    getX: function() {
        return this.x;
    }
};

const boundFunction = myObject.getX.bind(myObject);

console.log(boundFunction());

// ex001

const paragrafos = document.querySelectorAll('p');
const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
    return acumulador + item.innerText.length
}, 0);

console.log(totalCaracteres);

// ex002

function criarElementos(tag, classe, conteudo) {
    const elemento = document.createElement(tag)
    classe ? elemento.classList.add(classe) : null;
    conteudo ? elemento.innerHTML = conteudo : null;
    return elemento;
}

console.log(criarElementos('h1', 'Vermelho', 'Esse é o título'))

// ex003

function criarTitulo(content) {
    return criarElementos('h1', 'título', content);
}

console.log(criarTitulo('content'));

//

const h1Titulo = criarElementos.bind(null, 'h1', 'titulo');

const cursoPHP = h1Titulo('Curso de PHP');
console.log(cursoPHP);