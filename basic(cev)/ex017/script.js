// testes com arrays simples

let num = [5, 2, 3];
num[3] = 2;
num.push(4) // Adicionar um novo elemento a array na próxima posição disponível

console.log(num)
console.log(num.length) // tamanho da array
console.log(num.sort()) // Coloca a array em ordem crescente

for(let pos = 0 ; pos < num.length ; pos++) { // for tradicional para percurso em vetores
    console.log(`Array na posição ${pos} tem valor ${num[pos]}`)
}

for(let pos in num) { // Maneira simplificada
    console.log(num[pos])
}

console.log(num.indexOf(4)); // Posição do elemento na array