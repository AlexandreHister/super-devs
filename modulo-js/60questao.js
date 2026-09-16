/* # Regras da atividade

Por enquanto, utilize apenas:

- `const`
- `let`
- `console.log()`
- operações matemáticas
- `%`
- comparações
- `if`
- `else`
- `else if`
- `&&`
- `||`
- `!` */


/* ## 1. Maior de idade ⭐
Crie uma variável`idade`.Se a idade for maior ou igual a 18, mostre`Maior de idade`
.Caso contrário, `Menor de idade`.
 */

const quest1 = 18;

if (quest1 >= 18) {
    console.log("1: maior de idade");
}
else {
    console.log("manor de idade")
}



/* ## 2. Positivo, negativo ou zero ⭐⭐
Dado um número, mostre `Positivo`, `Negativo` ou `Zero`. */

const quest2 = 100

if (quest2 > 0) {
    console.log("2: É positivo");
}
else if (quest2 < 0) {
    console.log("É negativo");
}
else {
    console.log("É zero");
}



/* ## 3. Pode dirigir? ⭐⭐
Dados:
```javascript
const idade = 20;
const possuiCNH = true; */

const quest3 = 20;
const possuiCNH = true;

if (quest3 >= 18 && possuiCNH) {
    console.log("3: Pode dirigir");
}
else {
    console.log("Nao pode dirigir");
}



/* ## 4. Desconto maluco ⭐⭐⭐⭐
Uma loja oferece:
- compra acima de R$ 1.000 → 15%
- compra acima de R$ 500 → 10%
- compra acima de R$ 200 → 5%
- demais compras → sem desconto */

const compra1 = 1000;
const compra2 = 500;
const compra3 = 200;

if (compra1 >= 1000) {
    desconto = compra1 * 15 / 100
    console.log("compra1:", "valor do desconto é:", desconto, "A compra ficou:", compra1 - desconto);
}
 if (compra2 >= 500){
    desconto2 = compra2 * 10 / 100
    console.log("compra2:", "valor do desconto é:", desconto2, "A compra ficou:", compra2 - desconto2);
}
if (compra3 >= 200){
    desconto3 = compra3 * 5 / 100
    console.log("compra3:", "valor do desconto é:", desconto3, "A compra ficou:", compra3 - desconto3);
}
console.log("demais itens sem desconto");



/* ## 5. Par ou ímpar ⭐
Dado um número, determine se ele é par ou ímpar.
 */

const quest5 = 0

if (quest5 % 2 === 0) {
        console.log("5: par:", quest5)
    }
else {
    comsole.log("impar", quest5)
}



/* ## 6. Aluno aprovado ⭐⭐
Dados:
```javascript
const nota1 = 7;
const nota2 = 8;
const nota3 = 5; */

const nota1 = 7;
const nota2 = 8;
const nota3 = 5;
const notaTotal = nota1 + nota2 + nota3;

if(notaTotal >= 7){
    console.log("6: Aprovado");
}
else {
    console.log("reprovado");
}



/* ## 7. Qual número é maior? ⭐
Dados dois números diferentes, mostre qual é o maior. */

const quest7 = 100
const questt7 = 1000

if(quest7 < questt7){
    console.log("7: 1000 é maior que 100");
}
else {
    console.log("100 é maior que 1000");
}



/* ## 8. Login ⭐⭐
Dados:
```javascript
const usuario = "admin";
const senha = "1234"; */
/* Se usuário e senha estiverem corretos, mostre `Login realizado`. Caso contrário, `Usuário ou senha incorretos`. */

const usuario = "admin";
const senha = "1234";

if(usuario === "admin" && senha === "1234"){
    console.log("8: login realizado");
}
else {
    console.log("Usuário ou senha incorretos");
}



/* ## 9. Pode entrar no brinquedo? ⭐⭐⭐
Uma pessoa só pode entrar se altura >= 1.40 e idade >= 12. */

const altura = 1.40
const quest9 = 12

if(altura >= 1.40 && quest9 == 12){
    console.log("9: Pode entrar no brinquedo");
}
else {
    console.log("Nao pode entrar no brinquedo");
}



/* ## 10. Maior entre três números ⭐⭐⭐⭐
Dados três números diferentes, descubra qual deles é o maior. */

const quest10 = 1
const questt10 = 10
const questtt10 = 100

if(questtt10 > questt10 && questtt10 > quest10){
    console.log("10: 100 é maior que 10 e 1");
}
else if(questt10 > questtt10 && questt10 > quest10){
    console.log("10 é maior que 100 e 1");
}
else {
    console.log("1 é maior que 100 e 10");
}



/* ## 11. Número múltiplo de 5 ⭐
Mostre se determinado número é múltiplo de 5. */

const quest11 = 70

if(quest11 % 5=== 0){
    console.log("11: numero:", quest11, "é multiplo de 5");
}



/* ## 12. Frete grátis ⭐⭐
A loja oferece frete grátis se compra >= R$ 300 ou o cliente for VIP. */

const compra12 = 200
const vip = true

if(compra12 >= 300){
    console.log("frete gratis");
}
else if(vip){
    console.log("12: ganhou frete gratis por ser vip");
}



/* ## 13. Classificação de temperatura ⭐⭐
- abaixo de 10 → `Muito frio`
- de 10 até 19 → `Frio`
- de 20 até 29 → `Agradável`
- 30 ou mais → `Quente` */

const muitoFrio = 10;
const frio = 19;
const agradavel = 29;
const quente = 30;
const temperatura = 25;

if(temperatura <=10){
    console.log("Ta muito frio")
}
else if (temperatura >= 10 && temperatura <= 19){
    console.log("ta frio")
}
else if(temperatura >= 20 && temperatura <= 29){
    console.log("13: ta agradavel")
}
else if (temperatura <= 30){
    console.log("Ta quente")
}