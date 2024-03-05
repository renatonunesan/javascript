var idade = 23;
var simbolo = Symbol();
console.log(typeof simbolo);

var nome = 'Renato',
    sobronome = 'Nunes',
    nomeCompleto = nome + ' ' + sobronome;

console.log(nomeCompleto);    

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';
var fraseF = `Romário fez ${gols * 2} gols`;
console.log(frase);
console.log(fraseF);
    
var melhor = 'teste';
var frase1 = "Esse é o \"melhor\" jogo";
var frase2 = `Esse é o ${melhor} jogo`;
console.log(frase1);
console.log(frase2);

var idoso = 'Seu Raimundo';
var anos = '87 anos';
var idade = 87;

var nome = 'Raimundo',
    sobrenome = 'Francisco',
    fullName = nome + ' ' + sobrenome,
    fullName2 = `${nome} ${sobrenome}`;
console.log(fullName2)    

var frase = "It's time";
console.log(typeof nome)    
