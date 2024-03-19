// testes com funções

function parImp(n) {
    if (n%2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

console.log(parImp(10));

function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(3, 9))
console.log(soma(2))

function fatorial(n) { // Função com Recursividade
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5));