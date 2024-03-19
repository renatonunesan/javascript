const amigo = {
    nome: 'Yuri Brodo',
    idade: 40,
    profissao: 'Dev-BackEnd',
    estudo: 5,
    estudar(e=0) {
        console.log('Estudou')
        this.estudo += e
    }
}

amigo.estudar(2)
console.log(`Amigo estudou ${amigo.estudo} horas`)
console.log(amigo);