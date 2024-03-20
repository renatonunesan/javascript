const btcP = document.querySelector('.btc')

function fetchBtc() {
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(btcJson => {
        btcP.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',');
    })
}

setInterval(fetchBtc, 1000 * 30);
fetchBtc();
