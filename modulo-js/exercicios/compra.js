const valorCompra = 850;
const clienteVip = true;
const possuiCupom = true;
const cupomValido = true;
const primeiraCompra = false;

let percentualDesconto = 0;

if(clienteVip && valorCompra >= 1000) {
    percentualDesconto = 20;
}
else if (possuiCupom && cupomValido) {
    percentualDesconto = 15;
}
else if (primeiraCompra) {
    percentualDesconto 10;
}
else if (clienteVip){
    percentualDesconto 5;
}

const valorDesconto = valorCompra * percentualDesconto / 100;

const valorFinal = valorCompra - valorDesconto;

let frete = 30;

if(valorFinal >= 500 || clienteVip) {
    frete = 0;
}

const totalPedido = valorFinal + frete;

console.log("compra: R$", valorCompra)
console.log("Percentual Desconto:", percentualDesconto, "%")
console.log("Valor Desconto: R$", valorDesconto)
console.log("valor compra pós desconto: R$", valorFinal)
console.log("valor frete:", frete)
console.log("valor total pedido: R$", totalPedido)