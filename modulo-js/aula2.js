/* console.log(10 > 5);
console.log(10 < 5);
console.log(18 >= 18);
console.log(17 >= 18);

console.log(5 === "5");
console.log(5 !== "5"); */

/* const media = Math.round(7);

if (media >= 7){
    console.log("aprovado");
}
else {
    console.log("reprovado");
}

const idade = 18;

if (idade >=18) {
    console.log("maior de idade");
}
else {
    console.log("manor de idade");
}

const meta = 10000;
const vendeu = 9500;

if (vendeu > meta){
    console.log("atingiu a meta");
}
else {
    console.log("demitida");
} */


/* const idade = 17;
const possuiuIngresso = true;
const querComprarIngresso = true;
const possuiEstoque = true;

if (idade >= 18 && possuiuIngresso) {
    console.log("Pode entrar na festa")
}
else if (idade >= 18 && !possuiuIngresso) {
    if (querComprarIngresso && possuiEstoque) {
        console.log("O ingresso está R$ 500")
    }
    else if (querComprarIngresso && !possuiEstoque) {
        console.log("Nao tem ingresso disponivel")
    }
    else {
        console.log("Vá embora")
    }
}
else if (idade < 18 && possuiuIngresso) {
    console.log("Nao Pode entrar na festa por que é de menor")
}
else {
    console.log("Nao Pode entrar na festa")
} */


/* const possuiCupom = false;
const clienteVip = true;

if (possui || clienteVip) {
    console.log("possui desconto");
} */

const valorCompra = 850;
const clienteVip = true;
let desconto;

if(clienteVip && valorCompra >=500)
    desconto = valorCompra * 20 /100
    console.log(desconto);