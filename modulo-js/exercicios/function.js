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

// #####################################

function apresentar(nome, idade) {
    console.log("Meu nome é", nome, "e tenho", idade, "anos");
}

apresentar("diogo", 20);
apresentar("xanXan", 17);
apresentar("nathan", 10);

// #####################################

function media(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3
}

console.log(media(6, 7, 9));

// #####################################

function ehDeMaior(idade) {
    return idade >= 18 ? "Maior de idade" : "Menor de idade";
}

console.log(ehDeMaior(18));
console.log(ehDeMenor(10));

// #####################################

function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

console.log(parOuImpar(10));
console.log(parOuImpar(7));

// #####################################

function classificarNumero(numero) {
    if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Zero";
    }
}

console.log(classificarNumero(10));
console.log(classificarNumero(-5));
console.log(classificarNumero(0));


// #####################################

function maior(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    }
}

console.log(maior(10, 25));
console.log(maior(30, 15));


// #####################################


function situacaoAluno(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

console.log(situacaoAluno(8));
console.log(situacaoAluno(6));
console.log(situacaoAluno(4));


// #####################################

function dentroIntervalo(numero) {
    if (numero >= 10 && numero <= 20) {
        return true;
    } else {
        return false;
    }
}

console.log(dentroIntervalo(10));
console.log(dentroIntervalo(15));
console.log(dentroIntervalo(21));


// #####################################

function primeiraLetra(palavra) {
    return palavra[0];
}

console.log(primeiraLetra("JavaScript"));



// #####################################


function ultimaLetra(palavra) {
    return palavra[palavra.length - 1];
}

console.log(ultimaLetra("JavaScript"));


// #####################################

function maiusculo(palavra) {
    return palavra.toUpperCase();
}

console.log(maiusculo("javascript"));


// #####################################

function comecaCom(palavra, letra) {
    return palavra[0] === letra;
}

console.log(comecaCom("Anderson", "A"));
console.log(comecaCom("Anderson", "B"));



// #####################################

function contarLetra(palavra, letra) {
    let contador = 0;

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === letra) {
            contador++;
        }
    }

    return contador;
}

console.log(contarLetra("banana", "a"));



// #####################################


function contarVogais(palavra) {
    let contador = 0;
    palavra = palavra.toLowerCase();

    for (let i = 0; i < palavra.length; i++) {
        if (
            palavra[i] === "a" ||
            palavra[i] === "e" ||
            palavra[i] === "i" ||
            palavra[i] === "o" ||
            palavra[i] === "u"
        ) {
            contador++;
        }
    }

    return contador;
}

console.log(contarVogais("JavaScript"));
console.log(contarVogais("ABACAXI"));



// #####################################


function palindromo(palavra) {
    palavra = palavra.toLowerCase();

    let invertida = "";

    for (let i = palavra.length - 1; i >= 0; i--) {
        invertida += palavra[i];
    }

    return palavra === invertida;
}

console.log(palindromo("arara"));
console.log(palindromo("osso"));
console.log(palindromo("casa"));




// #####################################



function inverter(palavra) {
    let resultado = "";

    for (let i = palavra.length - 1; i >= 0; i--) {
        resultado += palavra[i];
    }

    return resultado;
}

console.log(inverter("casa")); 





// #####################################




function contarEspacos(frase) {
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === " ") {
            contador++;
        }
    }

    return contador;
}

console.log(contarEspacos("Eu gosto de JavaScript")); 