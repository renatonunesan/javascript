var _possuiGraduacao = true;
var _possuiDouturado = true;

if(_possuiGraduacao) {
    console.log('É verdadeiro');
} else {
    console.log('É falso');
}

if(_possuiDouturado) {
    console.log('Possui graduação e doutorado');
} else if (_possuiGraduacao) {
    console.log('Possui graduação, porém não possui doutorado');    
} else {
    console.log('Não possui graduação');
}

var x = 'Gato';
console.log (x !== 'Gato');

var corFavorita = 'Azul';

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu');
        break;
    case 'Vermelho':
        console.log('Olhe para o inferno');
    default:
        console.log('Feche os olhos')    
}

// EXERCÍCIO

// ex001
var minhaIdade = 21;
parenteIdade = 20;

if (minhaIdade > parenteIdade) {
    console.log('É maior')
} else {
    console.log ('É igual')
}

//ex002

var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(!!expressao);

//ex003

var nome = 'Renato'; //true
var idade = 21; //true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false

//ex004

if (('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

//ex005

var brasil = 207e10;
var china = 1340e10

if (brasil > china) {
    console.log ('Brasil tem mais habitantes')
} else {
    console.log ('Brasil tem menos habitantes')
}
