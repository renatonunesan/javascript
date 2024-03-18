// testes com funções construtoras

function Mouse() {
    this.marca = 'Marca';
    this.dpi = 3000;
}

const redragon = new Mouse();
redragon.marca = 'Redragon';
redragon.dpi = 4000;
const razer = new Mouse();
razer.marca = 'Razer';
razer.dpi = 5000;

//

function HeadsetGamer(marcaAtribuida, precoAtribuido) {
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
}

const logitech = new HeadsetGamer('Logitech', 500);
const hyperx = new HeadsetGamer('Hyper X', 800);

//

const Dom = {
    seletor: 'li',
    element() {
        return document.querySelector(this.seletor);
    },
    ativar() {
        this.element().classList.add('ativar');
    }
}

//

function Donuts(seletor) {
    this.element = function() {
        return document.querySelector(seletor);
    }
    this.ativar = function() {
        this.element().classList.add('ativar');
    }
}

const li = new Donuts('li');
li.ativar();

// ex001

function Person(nomeAtribuido, idadeAtribuida) {
    this.nome = nomeAtribuido;
    this.idade = idadeAtribuida;
    this.andar = function() {
        console.log(nomeAtribuido + ' andou');
    }
}

const joao = new Person('João', 20);
joao.andar();

const maria = new Person('Maria', 25);
maria.andar();

const bruno = new Person('Bruno', 15);
bruno.andar();

// ex002

function Dominic(seletor) {
    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;
    this.addClass = function(classe) {
        elementList.forEach((element) => {
            element.classList.add(classe);
        })
    }
    this.removeClass = function(classe) {
        elementList.forEach((element) => {
            element.classList.remove(classe);
        })
    }
}

const listaLi = new Dominic('li');
listaLi.addClass('ativando');
listaLi.removeClass('ativando')


