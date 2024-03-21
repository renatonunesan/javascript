fetch('./dados.json')
.then(r => r.json())
.then(json => {
    console.log(json)
})

const config = {
    memoriaRam: 40,
    pVideo: "1650",
    processador: "i5",
}

const stringConfig = JSON.stringify(config);
console.log(stringConfig);