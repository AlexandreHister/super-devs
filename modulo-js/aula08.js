//funçoes

let numero = 51;
let numero2 = 4;

let soma = numero + numero2;
console.log(soma)

// Paramentro, Argumentos
function somar(numero, numero2) {
    console.log(numero, numero2)
}

somar(10, 10);


function somar(numero, numero2) {
    return numero + numero2;
}

let resultado = somar(2, 2);

//###########################################################

function darBoasVindas() {
    console.log("Bem-vindo ao sistema")
}

darBoasVindas();

function divisao(numero, numero2) {
    return numero / numero2;
}

// DECLARAR a funçao
// DIFERENTE 
// EXECUTAR a funçao

function cumprimentar(nome) {
    console.log("Olá", nome);

    return "Olá" + nome
}

console.log(cumprimentar("Dongle"))



function contarVogais(palavra) {
    let letra = palavra[i];
    if (letra === "a" ||
        letra === "e" ||
        letra === "i" ||
        letra === "o" ||
        letra === "u" ||  
    ) {
        quantidade++;
    }

    return quantidade;
}

console.log(contarVogais("Computador"));
console.log(contarVogais("Banana"));
console.log(contarVogais("Dongle"));