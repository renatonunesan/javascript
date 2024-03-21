// O async serve para indicar que na sua função vão ter partes assíncronas como o 'await'
// A diferença de usar o async/then é que com o async temos uma sintaxe mais limpa

async function puxarDados() {
    const responseDados = await fetch('./dados.json'); 
    // Com o await, ele vai esperar a promessa ser resolvida para retornar o resultado
    const jsonDados = await responseDados.json();
    console.log(responseDados)
    console.log(jsonDados)
}

puxarDados();

/*

Para lidarmos com erros utilizamos o try e o catch

try {
    'executar isso'
} catch {
    console.log(erro);
}

*/

async function leiaClientes() {
    const responseClientes = fetch('./clientes.json');

    const jsonClientes = await (await responseClientes).json();
    console.log(jsonClientes);
}

leiaClientes();

// O await sempre vai esperar o resultado de uma promise