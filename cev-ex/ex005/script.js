window.document.write(window.document.URL)

const p1 = document.getElementsByTagName('p')[0]; // Selecionando por tag
document.write('<br> Está escrito assim: ' + p1.innerText);

const mensagem = document.getElementById('msg');
mensagem.style.color = 'lightgray';
mensagem.innerText = 'Estou aguardando...';

const h1 = document.querySelector('h1'); // Selecionar apenas um elemento
h1.style.color = 'red';

const p2 =  document.querySelectorAll('p.red') // Selecionar vários elementos


