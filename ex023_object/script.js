// Testes com objeto

const pessoa = new Object({
    nome: 'Renato',
    prof: 'Desenvolvedor'
})

console.log('pessoa');

// .create(obj, defineProperties) é outra forma de criar objetos, onde a partir de um objeto que você criou
// você pode criar um novo objeto com as mesmas propiedades e métodos que o outro tem

const lapis = {
    tipo: 'Tipo',
    ponta: 0,
    riscou() {
        return this.tipo + ' de ponta ' + this.ponta + ' riscou!';
    }
}

const lapiseira = Object.create(lapis);
lapiseira.tipo = 'Lapiseira'
lapiseira.ponta = 0.5

console.log(lapiseira.riscou())

// .assign(alvo, objeto1, objeto2,...) vai ter um objeto alvo como parâmetro, onde o alvo irá receber as propiedades e métodos dos demais objetos

const apagarPapel = {
    apagar() {
        return 'apagou';
    },
    limpar() {
        return 'limpou';
    },
}

const borracha = {
    tamanho: 'médio',
    eficacia: true,
}

const limpaTipos = {
    tamanho: 'pequeno',
    eficacia: true,
}

Object.assign(borracha, apagarPapel);
Object.assign(limpaTipos, apagarPapel);

console.log(borracha);
console.log(limpaTipos);

// .defineProperties(alvo, propiedades) serve para adicionar ao alvo novas propiedades, aqui podemos configurar as 
// características dessas propiedades

const folha = {
    modelo: 'A4'
}

Object.defineProperties(folha, {
    gramatura: {
        value: 90, // Valor atribuido
        configurable: false, // Assim a propiedade não consegue ser alterada nem apagada
        writable: true, // Mesmo com o configurable 'false', colocando essa propiedade possibilida a alteração
    }
});

// Ainda no .defineProperties podemos definir diferentes comportamentos para o get e set de uma propiedade do objeto 

const bic = {}

Object.defineProperties(bic, {
    tinta: {
        get() {
            return this._tinta;
        },
        set(valor) {
            this._tinta = valor + ' escuro';
        }
    },
});

// O .Object.getOwnPropertyDescriptors(Objeto) vai listar todas as propiedades e métodos do objetos passado, como também suas 
// devidas configurações

console.log(Object.getOwnPropertyDescriptors(folha));

// Object.keys(objeto) retorna uma array com as chaves do objeto
// Object.values(objeto) retorna uma array com o valor das chaves
// Object.entries(objeto) retorna uma array com as chaves e os valores

console.log(Object.keys(borracha));
console.log(Object.values(borracha));
console.log(Object.entries(borracha));

// Object.getOwnPropertyNames(Objeto) vai retornar uma array com as chaves do objeto que não são enumeráveis também.

console.log(Object.keys(bic));
console.log(Object.getOwnPropertyNames(bic));

// Object.getPrototypeOf() retorna o protótipo do objeto

// Object.is(objeto1, objeto2) verifica se os dois objetos são iguais  

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];

console.log(Object.is(frutas1, frutas2)); // Mesmo ambos objetos tendo o mesmo valor, ainda são objetos diferentes

// Object.freeze() impede mudanças nas propiedades
// Object.seal() impede a criação de novas propiedades e também impede que as atuais sejam deletadas
// Object.preventExtesions() impede a criação de novas propiedades

const impressora = {
    tipo: 'xerox',
    recebe: 'A4',
    quantidade: 80,
}

Object.freeze(impressora);
Object.seal(impressora);
Object.preventExtensions(impressora);

console.log(Object.isFrozen(impressora));
console.log(Object.isSealed(impressora));
console.log(Object.isExtensible(impressora)); 

// ex001

function verifDado (dado) {
    return Object.prototype.toString.call(dado); // Dessa forma conseguimos verificar o tipo de dado passado
}

console.log(verifDado([])); // Objeto do tipo Array

// ex002

const quadrado = {
    lados: 4,
}

Object.freeze(quadrado);
console.log(Object.isFrozen(quadrado));

const quad = {};
Object.defineProperties(quadrado, {
    lados: {
        value: 4,
        configurable: false,
    }
});

// ex003

const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
}

Object.freeze(configuracao);

// ex004

console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));

// (52) ['length', 'constructor', 'anchor', 'at', 'big', 'blink', 'bold', 'charAt', 'charCodeAt', 'codePointAt', 'concat', 'endsWith', 'fontcolor', 'fontsize', 'fixed', 'includes', 'indexOf', 'isWellFormed', 'italics', 'lastIndexOf', 'link', 'localeCompare', 'match', 'matchAll', 'normalize', 'padEnd', 'padStart', 'repeat', 'replace', 'replaceAll', 'search', 'slice', 'small', 'split', 'strike', 'sub', 'substr', 'substring', 'sup', 'startsWith', 'toString', 'toWellFormed', 'trim', 'trimStart', 'trimLeft', 'trimEnd', 'trimRight', 'toLocaleLowerCase', 'toLocaleUpperCase', 'toLowerCase', 'toUpperCase', 'valueOf']

// (40) ['length', 'constructor', 'at', 'concat', 'copyWithin', 'fill', 'find', 'findIndex', 'findLast', 'findLastIndex', 'lastIndexOf', 'pop', 'push', 'reverse', 'shift', 'unshift', 'slice', 'sort', 'splice', 'includes', 'indexOf', 'join', 'keys', 'entries', 'values', 'forEach', 'filter', 'flat', 'flatMap', 'map', 'every', 'some', 'reduce', 'reduceRight', 'toReversed', 'toSorted', 'toSpliced', 'with', 'toLocaleString', 'toString']