/* # Regras gerais

1. Leia o exercício inteiro antes de começar.
2. Tente identificar:
   - Qual é o valor inicial?
   - Qual é a condição do `while`?
   -e O que deve acontecer a cada repetição?
   - O que muda para que o `while` termine?
3. Tome cuidado com **loops infinitos**.
4. Use nomes de variáveis que façam sentido.
5. Quando o exercício pedir uma contagem, provavelmente será necessário um **contador**.
6. Quando o exercício pedir uma soma total, provavelmente será necessário um **acumulador**.
7. Quando houver uma regra diferente dependendo do valor atual, provavelmente será necessário usar `if` dentro do `while`. */





/* # Parte 1 — Entendendo o ciclo do `while`

## Exercício 1

Mostre no console os números de `1` até `10`.

Saída esperada:

```text
1
2
3
4
5
6
7
8
9
10 */

/* let number = 1;

while(number <= 10){
    console.log(number);

    number += 1
} */






/* ## Exercício 2

Mostre no console os números de `10` até `1`.

--- */

/* let exer2 = 10;


while(exer2 >= 1){
    console.log(exer2);

    exer2--;
} */





/*    ## Exercício 3

Mostre os números de `0` até `20`, aumentando de `2` em `2`.

Saída esperada:

```text
0
2
4
6
8
...
20 */

/* let number = 0;

while(number <= 20){
    console.log(number);

    number += 2
} */







/*    ## Exercício 4

   Mostre os números:

   ```text
   5
   10
   15
   20
   25
   30
   35
   40
   45
   50 */


/* let number = 5;

while (number <= 50) {
    console.log(number);

    number += 5
} */




/* ## Exercício 5

Mostre todos os números de `20` até `0`, diminuindo de `2` em `2`. */

/* let exer2 = 20;


while(exer2 >= 0){
    console.log(exer2);

    exer2--;
} */







/*  ## Exercício 6

 Sem executar o código primeiro, escreva em um comentário qual será a saída: */

//```js
/* let numero = 2;

while (numero <= 8) {
    console.log(numero);
    numero += 2;
} */

//Resposta 2, 4, 6, 8






/* ## Exercício 7

Sem executar primeiro, diga qual será o valor final de `numero`:

```js
let numero = 1;

while (numero < 10) {
    numero += 3;
}

console.log(numero);
``` */

/// Resposta 10






/* ## Exercício 8

O código abaixo possui um problema:
 
```js
let numero = 1;
 
while (numero <= 10) {
    console.log(numero);
}
```
 
Responda:
 
1. Qual é o problema? nao tem um code pra parar
2. Por que ele acontece? Porque Sim
3. Corrija o código. */


/* let numero = 1;

while (numero <= 10) {
    console.log(numero);

    numero += 1;
} */






/* # Parte 2 — `while` com`if`

## Exercício 9

Percorra os números de `1` até`20`.

Mostre somente os números pares. */

/* let numero = 1;

while(numero <= 20){
    if(numero % 2 === 0){
        console.log("numeros pares de 1 a 20", numero)
    }
    numero += 1;
} */









/* ## Exercício 10

Percorra os números de `1` até`20`.
 
Mostre somente os números ímpares.
 
---
*/


/* let numero = 1;

while(numero <= 20){
    if(numero % 2 === 1){
        console.log("numeros impares de 1 a 20", numero)
    }
    numero += 1;
} */






/* ## Exercício 11

Percorra os números de `1` até `30`.
 
Para cada número, mostre se ele é `PAR` ou `ÍMPAR`.
 
Exemplo:
 
```text
1 é ÍMPAR
2 é PAR
3 é ÍMPAR
4 é PAR
...
``` */

/* let numero = 1;

while(numero <= 30){
    if(numero % 2 === 1){
        console.log("numeros impares de 1 a 30", numero)
    }
    else {
        console.log("numero par de 1 a 30", numero)
    }
    numero += 1;
}
 */






/* ## Exercício 12

Percorra os números de `1` até `50`.

Mostre somente os números divisíveis por `5`. */

/* let numero = 1;

while(numero <= 50){
    if(numero % 5 === 0){
        console.log("é divisivel por 5", numero)
    
}
    numero += 1;
} */






/* ## Exercício 13

Percorra os números de `1` até `50`.

Mostre somente os números que sejam divisíveis por `3`. */

/* let numero = 1;

while(numero <= 50){
    if(numero % 3 === 0){
        console.log("é divisivel por 3", numero)
    
}
    numero += 1;
}  */









/*     ## Exercício 14

    Percorra os números de `1` até`100`.
    
    Mostre somente os números que sejam divisíveis por`3` ** e ** por`5`. */


/* let numero = 1;

while (numero <= 100) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log("é divisivel por 3 e 5", numero)

    }
    numero += 1;
}
 */




/* ## Exercício 15

Percorra os números de `1` até `50`.

Mostre os números que sejam divisíveis por `3` **ou** por `7`. */


/*  let numero = 1;

while (numero <= 50) {
    if (numero % 3 === 0 || numero % 7 === 0) {
        console.log("é divisivel por 3 ou 7", numero)

    }
    numero += 1;
}
  */









/* ## Exercício 16

Percorra os números de `1` até `30`.

Para cada número:

- se for divisível por `3`, mostre `"Divisível por 3"`;
- caso contrário, mostre o próprio número. */



  /* let numero = 1;

while (numero <= 30) {
    if (numero % 3 === 0) {
        console.log("é divisivel por 3", numero)
    }
    else {
        console.log(numero)
    }
    numero += 1;
    } */








/* # Parte 3 — Contadores

## Exercício 17

Percorra os números de `1` até `20`.

No final, mostre quantos números pares existem.
 */

 let numero = 1;

while (numero <= 30) {
    if (numero % 3 === 0) {
        console.log("é divisivel por 3", numero)
    }
    else {
        console.log(numero)
    }
    numero += 1;
    }







