//valor inicial
/* let contador = 0;


//while = ENQUANTO
//condiçao
while (contador <= 10) {
    //fazer algo
    console.log("ola")

    //atualiza algo

    //nova valor vai ser = valor antig
    contador = contador + 1;
} */


/* let vidaBoss = 100;

while (vidaBoss){
    console.log("atacando o boss")

    vidaBoss = vidaBoss - 20;

    console.log("vida do chefinho", vidaBoss)
} */





/* let numero = 1;

    while (numero <= 20){
        if(numero % 2 === 0){
        console.log(numero, "é par")
    }
    else {
        console.log(numero, "é impar")
    }

    numero = numero + 1

    } */




/* let numero = 0;
let divisivelPor5e3 = 0;
let divisivelPor5 = 0;
let divisivelPor3 = 0;

while (numero <= 100) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log(numero, "é divisivel por 3 e 5");
        divisivelPor5e3 += 1;
    }
    else if (numero % 3 === 0) {
        console.log(numero, "é divisivel por 3");
        divisivelPor3 += 1;
    }
    else if (numero % 5 === 0) {
        console.log(numero, "é divisivel por 5");
        divisivelPor5 += 1;
    }

    numero = numero + 1;
}

console.log("quantidade de numeros divisiveis por 3 e 5 é:", divisivelPor5e3);
console.log("quantidade de numeros divisiveis por 5 é:", divisivelPor5);
console.log("quantidade de numeros divisiveis por 3 é:", divisivelPor3); */


/* let money = 0;
let totalMeses = 0;

while (money <= 500){
    console.log("mes:", totalMeses, money);

    money += 50;

    totalMeses++;
}

console.log("total de meses:", totalMeses) */




let progresso = 0;

while(progresso <= 100) {
    console.log("download:", progresso, "%");

    progresso = progresso + parseInt(Math.random() * 11);
}