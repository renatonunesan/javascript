const mensagem = document.querySelector('section#msg');
const imgs = document.querySelector('.dia');
const data = new Date();
const hora = data.getHours();

function carregar() {
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        imgs.src = 'imagens/dia.jpg';
        document.body.style.backgroundImage = 'linear-gradient(to bottom, #aab4c0, #3b70ec)';
    } else if (hora >= 12 && hora < 18) {
        imgs.src = 'imagens/tarde.jpg'
        document.body.style.backgroundImage = 'linear-gradient(to bottom, #fdc66d, #bc6550)';
    } else {
        imgs.src = 'imagens/noite.jpg'
        document.body.style.backgroundImage = 'linear-gradient(to bottom, #0093c9, #003255)';
    }
}

