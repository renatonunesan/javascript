function Button(text, background) {
    this.text = text;
    this.background = background;
}

Button.prototype.element = function() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    return buttonElement;
}

const blueButton = new Button('Comprar', 'blue');

console.log(blueButton);

// Transformando em classe

class Button2 {
    constructor(text, background, color) {
        this.text = text;
        this.background = background;
        this.color = color;
    }
    element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        buttonElement.style.color = this.color;
        return buttonElement;
    }
    appendTo(target) { //método para colocar o botão onde quiser
        const targetElement = document.querySelector(target);
        targetElement.appendChild(this.element());
        return targetElement;
    }
}

const grayButton = new Button2('Vender', 'gray', 'white');

console.log(grayButton.appendTo('body'));

// Passando outros valores na propiedade 

class Button3 {
    constructor(opcoes) {
        this.opcoes = opcoes;
    }
}

const diffButton = new Button3({
    backgroundColor: 'red',
    text: 'Negociar',
    color: 'white'
})

console.log(diffButton)

// Ilustrando o uso comum da palavra chave static

class Button4 {
    constructor(text, background) {
        this.text = text;
        this.background = background;
    }
    element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        return buttonElement;
    }
    static createViolet(text) {
        return new Button(text, 'violet');
    }
}

const btnViolet = Button4.createViolet()

// Sobre GET  e SET

const buttonzin = {
    get tamanho() {
        return this._numero;
    },
    set tamanho(numero) {
        this._numero = numero * 2;
    }
}

class fruta {
    constructor(color, name) {
        this.color = color;
        this.name = name;
    }
    get element() {
        const type = this._elementType || 'h1';
        const frutaElement = document.createElement(type);
        frutaElement.style.color = this.color;
        frutaElement.innerText = this.name;
        return frutaElement;
    }
    set element(type) {
        this._elementType = type;
    }
}

const melancia = new fruta('verde', 'Melancia');

// Exemplificando o uso do EXTENDS e SUPER

class Veiculo {
    constructor(rodas, cor) {
        this.rodas = rodas;
        this.cor = cor;
    }
    acelerar() {
        console.log('Acelerou');
    }
}

class Moto extends Veiculo { // Com o Extend podemos utilizar as propiedades e métodos da classe pai
    acelerar() {
        super.acelerar();
        console.log('Desacelerou');
    }
}

class triciclo extends Veiculo {
    constructor(rodas, cor, combustivel) {
        super(rodas, cor, combustivel);
        this.combustivel = combustivel; 
        // Usando o super com o construtor, podemos estender as propiedades
    }
}

const honda = new Moto(2);
honda.acelerar();
const hondaT = new triciclo(3, 'cinza', 'Gasolina');