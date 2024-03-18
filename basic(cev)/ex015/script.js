const inicio = document.querySelector('.inicio');
const fim = document.querySelector('.fim');
const passo = document.querySelector('.passo');
const botao = document.querySelector('.btn');
const res = document.querySelector('.res');

botao.addEventListener('click', resp);

function resp(event) {
    event.preventDefault();

    let nInicio = Number(inicio.value);
    let nFim = Number(fim.value);
    let pa = Number(passo.value);
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = '<br> Impossível contar! Digite valores válidos nos campos acima'
    } else {
        res.innerHTML = '<br> Contando... <br>'
        if (pa <= 0) {
            pa = 1;
        }
        if (nInicio < nFim) {
            for(let contador = nInicio ; contador <= nFim ; contador += pa ) {
                res.innerHTML  += `${contador} \u{1F449} `  
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            for(let contador = nInicio ; contador >= nFim ; contador -= pa) {
                res.innerHTML  += `${contador} \u{1F449} `
            }
            res.innerHTML += `\u{1F3C1}`    
        }
    }
}