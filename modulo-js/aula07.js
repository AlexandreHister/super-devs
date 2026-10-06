let texto = "JavaScript";

texto.trim(); // Remve todos os espaços em branco do texto
texto.toUpperCase(); // Tranforma a string em maisculo = JAVACRIPT
texto.toLowerCase(); // Transforma a string em minusculo = javascript
texto.startsWith("ja"); //Verifica se o texto fornecido no paramentro está contido no INICIO do texto
texto.endsWith("script"); // Verifica se o texto fornecido no paremetro está contdo no FINAL do texto

console.log(texto.length); //Retorna a quantidade de caracteres na string (contando espaço)

console.log(texto[0]) // pega o primeiro caracter da string

console.log(texto[texto.length - 1]) // Pega o ultimo caracter da string
texto.charAt(texto.length - 1);

for (let i = 0; i < texto.length; i++) {
    console.log(texto[i]);
}

let palavra = "banana";
let quantidade = 0;

for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === "a") {
        quantidade++
    }
}

let palavra = "javascript";
let invertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
    invertida += palavra[i];
}

console.log(invertida);





for (let andar = 1; andar <= 4; andar++) {
    for (let sala = 1; sala <= 3; sala++) {
        console.log("Andar", andar, "sala", sala);
    }
}







for (let linha = 1; linha <= 5; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 5; coluna++){
        
    }
}