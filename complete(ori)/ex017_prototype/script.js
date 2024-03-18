function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.andar = function() {
    return this.nome + ' andou';
}

Pessoa.prototype.nadar = function() {
    return this.nome + ' nadou';
}

const ronaldo = new Pessoa('Ronaldo', 80);
console.log(Pessoa.prototype);
console.log(ronaldo.prototype);

//
function Carro(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}

Carro.prototype.descricao = function() {
    return "Este é um " + this.marca + " " + this.modelo;
};

Carro.prototype.ano = "2022";
var meuCarro = new Carro("Toyota", "Corolla");

console.log(meuCarro.descricao());
console.log(meuCarro.ano); 
//

const lista = document.querySelectorAll('li');

// transformando em array
const listaArray = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

// ex001

function People(nomeAtribuido, sobrenomeAtribuido, idadeAtribuida){
    this.nome = nomeAtribuido;
    this.sobrenome = sobrenomeAtribuido;
    this.idade = idadeAtribuida;
}

People.prototype.nomecompleto = function() {
    return "Meu nome é " + this.nome + " " + this.sobrenome;
};

const pessoa1 = new People('Ronaldo', 'Fenomeno', 90)
console.log(pessoa1.nomecompleto());

//ex002

const li = document.querySelector('li');

li; // Elemento LI HTML
li.click; // Função
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined

// ex004

li.hidden.constructor.name; // String
