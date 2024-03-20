const promise = new Promise((resolve, reject) => {
    let condicao = false;
    if(condicao) {
        setTimeout(() => {
            resolve({nome: 'Renato'});
        }, 1000)
        
    } else {
        reject(Error('Problema não resolvido'))
    }
});

console.log(promise);

const retorno = promise
.then((resolucao) => {
    resolucao.profissao = 'Desenvolvedor';
    return resolucao;
})
.then(resolucao => {
    console.log(resolucao)
}, rejeitada => { // Segundo argumento para o then, caso seja rejeitada(alternativa para o catch())
    console.log('CATCH');
    console.log(rejeitada);
})
.finally(() => {
    console.log('Tanto faz se for true or false')
})

const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Usuário Logado')
    }, 1000)
})

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados Carregados')
    }, 1500)
})

const carregouTudo = Promise.all([login, dados]);

carregouTudo.then((resolucao) => {
    console.log(resolucao)
})