//Chefao

/* const salario = 5000;
const valorEmprestimo = 20000;
const parcelas = 24;
const possuiDividas = false;

valorParcela = valorEmprestimo / parcelas;
parcelaLimite = parcelas < salario * 30 /100;

if(!possuiDividas && parcelaLimite && valorEmprestimo < salario * 10 && parcelas > 6 && parcelas < 48) {
    console.log("Emprestimo aprovado")
}
else {
    console.log("emprestimo negado")
} */

    
const salario = 5000;
const valorEmprestimo = 20000;
const parcelas = 24;
const possuiDividas = false;

const valorParcela = valorEmprestimo / parcelas;
const parcelaLimite = parcelas < salario * 30 /100;
const limiteEmprestimo = salario * 10;

if(possuiDividas) {
    console.log("emprestimo negado: possui dividas")
}
else if()