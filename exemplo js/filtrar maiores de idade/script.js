
const pessoas = [
    { nome: 'João',idade: 20},
    { nome: "Ana", idade: 15}
];

const maiores = pessoas.filter(p => p.idade >= 18);
console.log(maiores);