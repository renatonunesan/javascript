const entrada = document.getElementById('cepC');
const botao = document.getElementById('btn');
const res = document.querySelector('.res');

botao.addEventListener('click', handleClick);

function handleClick(event) {
    event.preventDefault();
    const cep = entrada.value;
    consultar(cep)
}

function consultar(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(resolucao => resolucao.json())
    .then(body => {
        res.innerHTML = `<p>Endereço: ${body.logradouro}, ${body.bairro}, ${body.localidade}, ${body.uf}</p>`;
    })
}

