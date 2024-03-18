const idade = 22;
const res = `Você tem ${idade} anos, logo, você`;
if(idade < 16) {
    res += ' não vota'
} else if(idade < 18 || idade > 65) {
    res += ' tem voto opcional'
} else {
    res += ' tem voto obrigatório'
}

console.log(res);