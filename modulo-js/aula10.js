const frutas = ["uva", "banana", "abacaxi", "manga"];

// ele nao leva em consideraçao acentos e caracteres especiais
frutas.sort();

console.log(frutas);

const nomes = ["Érica", "Bruno", "Alvaro", "Cáio"];

nomes.sort((a, b) => {
    return a.localeCompare(b, "pt-BR")
});

console.log(nomes);

///////////////////////////////////////////////////////

let fretes = [18, 7, 12, 25];

fretes.sort((a, b) => a - b);

let menorFrete = fretes[0];
let maiorFrete = fretes[fretes.length - 1];

console.log("Fretes ordenados:", fretes);
console.log("Menor frete:", menorFrete);
console.log("Maior frete:", maiorFrete);


///////////////////////////////////////////////////////

const valores = [20, 35, 15];

let total = 0;

valores.forEach((valor) => {
    // total = total + valor;
    total += valor;
})

console.log(total);

const totalv2 = valores.reduce((acumular, valorAtual) => {
    return acumular + valorAtual;
})

////////////////////////////////////////////////////////

let notas = [7, 8, 9];

let soma = notas.reduce((total, nota) => total + nota, 0);
let media = soma / notas.length;

console.log("Soma das notas:", soma);
console.log("Média:", media);


/////////////////////////////////////////////////////////

const nomeProduto = "Caderno";
const valorProduto = 25;

const produto = {
    //key : value
    nome: "caderno",
    valor: 25
}

// Estou acessandi uma propriedade do meu objetivo (que nesse caso é a string)
console.log(nomeProduto.length);

console.log(produto.nome);
console.log(produto.valor);

produto.valor = 33;

console.log(produto.valor)

//////////////////////////////////////////////////////////

const produtos = [{
     //key : value
    nome: "caderno",
    valor: 25,
    peso: 100.25
    
},
{
    nome: "Mochila",
    valor: 120,
    peso: 20.25
},
{
    nome: "caneta",
    valor: 5,
    peso: 1.12
}
]

console.log(produtos[0].nome);


//////////////////////////////////////////////////////////

let produtos = [
    { nome: "Mouse", preco: 707 },
    { nome: "Teclado", preco: 375 },
    { nome: "Headset", preco: 222 }
];

// Ordenar do menor para o maior preço
produtos.sort((a, b) => a.preco - b.preco);

// Mostrar os nomes com forEach
produtos.forEach((produto) => {
    console.log(produto.nome);
});