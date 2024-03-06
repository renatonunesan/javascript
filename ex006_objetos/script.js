var person = {
    nome : 'Sung Jin Woo',
    idade : 24,
    profissao : 'Hunter',
    possuiFaculdade : false,
}

console.log(person);

var quadrado = {
    lados : 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        return this.lados * lado;
    }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E'
}

menu.color = 'blue';

// A propiedade (hasOwnProperty) serve para você verificar se o objeto possui determinada propriedade

// ex001 e ex002

var person2 = {
    nome: 'Renato',
    sobrenome: 'Nunes',
    idade: 21,
    profissao: 'Desenvolvedor',
    possuiDoutorado: false,
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

// ex 003
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;

//ex 004

var cachorro = {
    raca: 'Labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa) {
        if(pessoa === 'homem') {
            return 'latir';
        } else {
            return 'Nada'
        }
    }
}





