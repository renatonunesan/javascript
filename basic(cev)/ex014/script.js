const botaoVerif = document.querySelector('.btn'); 
const anoDigit = document.querySelector('#txtano');
const res = document.querySelector('#res');
const data = new Date();
const ano = data.getFullYear();
const img = document.createElement('img');
img.setAttribute('id', 'foto');

botaoVerif.addEventListener('click', verificar);

function verificar() {
    if (Number(anoDigit.value) == 0 || Number(anoDigit.value) > ano) {
    window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        const fsex =  document.getElementsByName('radsex')
        const idade = ano - Number(anoDigit.value);
        let genero = '';
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/criancah.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovemh.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto.png')
            } else {
                img.setAttribute('src', 'imagens/idoso.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/crianca.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulta.png')
            } else {
                img.setAttribute('src', 'imagens/idosa.png')   
            }
        }
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}


