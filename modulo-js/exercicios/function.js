/* function dobro(numero) {
    return numero * 2;
}

console.log(dobro(5));
console.log(dobro(20)); */


function darBoasVindas() {
    console.log("Bem-vindo ao sistema!")
}
darBoasVindas();

// #####################################

function mostrarMensagem() {
    return "Estou aprendendo funções em JavaScript!"
}

console.log(mostrarMensagem());
console.log(mostrarMensagem());
console.log(mostrarMensagem());

// #####################################

function cumprimentar(nome) {
    return "ola," + nome;
}

console.log(cumprimentar("diogo"));
console.log(cumprimentar("XanXAN"));
console.log(cumprimentar("Nathan"));


function apresentar(nome, idade) {
    console.log("Meu nome é", nome, "e tenho", idade, "anos");
}

apresentar("diogo", 20);
apresentar("xanXan", 17);
apresentar("nathan", 10);


function media(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3
}

console.log(media(6, 7, 9));

function ehDeMaior(idade) {
    return idade >= 18 ? "Maior de idade" : "Menor de idade";
}

console.log(ehDeMaior(18));
console.log(ehDeMenor(10));


