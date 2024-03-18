var videoGames = ['PS5', 'XBOX', 'PSP'];

// videoGames.pop(); --- Remove o último item da Array e retorna ele
// videoGames.push('3DS); --- Adiciona o item ao final da Array
// videoGames.length; --- Mostra o tamanho da array

for (var numero = 0; numero <= 10; numero++) {
    console.log(numero);
}

var i = 0;
while (i <= 10){
    console.log(i);
    i++;
}

var itensL = ['Hidra Raivosa', 'Cutelo Negro', 'Espada do Rei', 'Rabadon']

for (var item = 0; item < itensL.length; item++) {
    console.log(itensL[item]);
    if(itensL[item] === 'Espada do Rei'){
        break;
    }
}

itensL.forEach(function(it, index, array) {
    itensL.pop();
    console.log(it, index, array)
});

// ex001

var braCup = ['1959', '1962', '1970', '1994', '2002']

// ex002

for (var copa = 0; copa < braCup.length; copa++) {
    console.log(`O Brasil ganhou a copa de ${braCup[copa]}`)
}

// ex 003

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (var fru = 0; fru < frutas.length; fru++) {
    console.log(frutas[fru]);
    if(frutas[fru] === 'Pera') {
        break
    }
}

// ex004

var ultimaFruta = frutas[frutas.length - 1];
