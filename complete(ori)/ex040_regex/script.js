const frase = 'Sung Jin Woo for Solo Leveling'
const fraseNova = frase.replace(/o/g, 'e');

console.log(fraseNova);

// Regex para padrões

//CEP
const regexCEP = /\d{5}[-\s]?\d{3}/g;

const ceps = [
    '00000-000',
    '00000 000',
    '00000000'
];

for(cep of ceps) {
    console.log(cep, cep.match(regexCEP));
}

//CPF
const regexpCPF = /(?:\d{3}[-.]?){3}\d{2}/g;

const cpfs = [
    '000.000.000-00',
    '000-000-000-00',
    '000.000.000.00',
    '000000000-00',
    '00000000000'
];

for(cpf of cpfs) {
    console.log(cpf, cpf.match(regexpCPF));
}

//CNPJ
const regexpCNPJ = /\d{2}[-.]?(?:\d{3}[-.]?){2}[-\/]?\d{4}[-.]?\d{2}/g;

const cnpjs = [
    '00.000.000/0000-00',
    '00000000000000',
    '00-000-000-0000-00',
    '00.000.000/000000',
    '00.000.000.000000',
    '00.000.000.0000.00',
];

for(cnpj of cnpjs) {
    console.log(cnpj, cnpj.match(regexpCNPJ));
}

//Telefone

const regexpTELEFONE = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;

const telefones = [
    '+55 11 98888-8888',
    '+55 11 98888 8888',
    '+55 11 988888888',
    '+55 11988888888',
    '+5511988888888',
    '5511988888888',
    '11 98888-8888',
    '11 98888 8888',
    '(11) 98888 8888',
    '(11) 98888-8888',
    '11-98888-8888',
    '11 98888 8888',
    '11988888888',
    '11988888888',
    '988888888',
    '(11)988888888',
    '98888 8888',
    '8888 8888'
];

for(telefone of telefones) {
    console.log(telefone, telefone.match(regexpTELEFONE));
}

//Email
const regexpEMAIL = /[\w.-]+@[\w-]+\.[\w-.]+/gi;

const emails = [
    'email@email.com',
    'email@email.com.org',
    'email-email@email.com',
    'email_email@email.com',
    'email.email23@email.com.br',
    'email.email23@empresa-sua.com.br',
    'c@contato.cc',
];

for(email of emails) {
    console.log(email, email.match(regexpEMAIL));
}

//TAG
const regexpTAG = /<\/?[\w\s="']+\/?>/gi;

const tags = [
    '<div>Isso é uma div</div>',
    '<div class="ativa">Essa está ativa</div>',
    '<img src="imagem" />',
    '<img src="imagem">',
    '<ul class="ativa">',
    '<li>Essa está ativa</li>',
    '</ul>'
];

for(tag of tags) {
    console.log(tag, tag.match(regexpTAG));
}

//O nome da TAG
const regexpNameTAG = /(?<=<\/?)[\w]+/gi;

const tagsN = [
    '<div>Isso é uma div</div>',
    '<div class="ativa">Essa está ativa</div>',
    '<img src="imagem" />',
    '<img src="imagem">',
    '<ul class="ativa">',
    '<li>Essa está ativa</li>',
    '</ul>'
];

for(tag of tagsN) {
    console.log(tag, tag.match(regexpNameTAG));
}

// Utilizando Regexp com Métodos

const regexp = /\w+/gi;

const regexp1 = new RegExp('\\d+', 'gi');

const exemplo = 'Sung jin woo top 1';
console.log(exemplo.replace(regexp1, 'x'))

// Método test() - Verifica se a ocorrência existe e retorna true or false
// Método exec() - Verifica a ocorrência e retorna mais informações

const exemploDeFrase = 'JavaScript, TypeScript, SungScript, 200';

const regexp2 = /\w+/g;

let regexpResult;
while((regexpResult = regexp2.exec(exemploDeFrase)) !== null) {
    console.log(regexpResult[0])
}

console.log(exemploDeFrase.match(regexp2)); // Método que recebe uma regexp como argumento

const regexpNova = /[A-Za-z]+/g;

const resultados = exemploDeFrase.split(regexpNova); // Método que quebra a string conforme o argumento
console.log(resultados)

const newTags = `
<a>
    <img/>
</a>
`;   

const regexpForTags = /(?<=<\/?)\w+/g;
const resultadoTags = newTags.replace(regexpForTags, 'div');

console.log(resultadoTags);