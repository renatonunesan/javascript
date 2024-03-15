const div = document.querySelector('div');
div.addEventListener('click', clicar);
div.addEventListener('mouseover', mouseEntrar);
div.addEventListener('mouseout', sair);

function clicar() {
    div.innerText = 'clicou!';
    div.style.background = 'red';
}

function mouseEntrar() {
    div.innerText = 'Passou o mouse!';
}

function sair() {
    div.innerText = 'Tirou o mouse!';
    div.style.background = 'rgb(129, 190, 38)';
}