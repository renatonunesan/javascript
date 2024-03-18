const horario = new Date();
const hora = horario.getHours();

console.log(`Agora são exatamente ${hora} horas`)

if (hora >= 5) {
    console.log('Tenha um Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Tenha uma Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log(' Tenha uma Boa noite!')
} else {
    console.log('Tenha uma Boa madrugada!')
}
