const cep = fetch('https://viacep.com.br/ws/01001000/json/');

cep.then(resolucao => {
    const resolucao2 = resolucao.clone();
    resolucao.json().then((json) => {
        console.log(json);
    })
    resolucao2.text().then((text) => {
        console.log(text);
    })
}).then((body) => {
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerText = body;
    console.log(body)
});

const sobre = fetch('./sobre.html');

const div = document.createElement('div');

sobre.then(r => r.text())
.then(body => {
    div.innerHTML = body;
    const titulo = div.querySelector('h1');
    document.querySelector('h1').innerText = titulo.innerText;
});

fetch('./sung.jpg')
.then(response => response.blob())
.then (imgBlob => {
    const blobUrl = URL.createObjectURL(imgBlob);
    const imagemDom = document.querySelector('img');
    imagemDom.src = blobUrl;
});

const sunga = fetch('./sung2.jpg');

sunga.then(response => {
    console.log(response);
    response.headers.forEach(console.log);
});

