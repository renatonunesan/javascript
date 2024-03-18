function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(25));

function imc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc
}

console.log(imc(90, 1.9));

function corFavorita(cor) {
    if(cor === 'Azul') {
        return 'Você gosta do céu'
    } else if(cor === 'Verde') {
        return 'Você gosta da floresta'
    } else {
        return 'Você não gosta de nada então?'
    }
}

console.log(corFavorita())

addEventListener('click', function(){ console.log('Você clicou!')});

function veioIdoso(idade) {
    if(idade >= 60) {
        console.log('É idoso')
    } else {
        console.log('Não é idoso')
    }
    console.log(idade)
}

veioIdoso(60)

var totalPaises = 193;

function faltaVisitar(paisesVisitados) {
    return `Faltam visitar ${totalPaises - paisesVisitados} países`
}

function jaVisitei(paisesVisitados) {
        return `Já visitei ${paisesVisitados} do total de ${totalPaises} países `
    }

console.log(jaVisitei(20));
console.log(faltaVisitar(12))

// ex001

function numberP(number) {
    if(number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(numberP(12))

// ex002

function quadP(lado) {
    return lado * 4;
}

console.log(quadP(3))

// ex003

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`
}

console.log(nomeCompleto('Renato', 'Nunes'));

// ex004

function typeData(data) {
    return (typeof data);
}

console.log(typeData('Renato'));

// ex005

addEventListener('click', function(){ console.log('Renato Nunes')});
