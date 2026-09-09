//questao 1
const nomeMissao = "SuperDev";
const destino = "Alpha";
const numeroTripulantes = 4;
const missaoTripulada = true;

console.log(nomeMissao);
console.log(destino);
console.log(numeroTripulantes);
console.log(missaoTripulada);

//Qual dessas informações provavelmente deveria utilizar `const`?
// no numeroTripulantes e missaoTripulada


//questao 2
console.log(typeof nomeMissao); //string
console.log(typeof numeroTripulantes); //number
console.log(typeof missaoTripulada); //boolean


//questao 3
const distanciaAteEstacao = 384000;

console.log(distancia * 2); //768000

console.log("Distância total da missão:" + " "+ distancia * 2 + " " + "km");


//questao 4
//tempo = distância / velocidade
const velocidade = 28000;
const distancia = 768000;

console.log(distancia / velocidade);
const tempo = 27.42

console.log("Tempo estimado da missão:" + " " + tempo + " " + "horas")
// Tempo estimado da missão: 27.42 horas


//questao 5
const combustivel = 50000
const ida = 18000
const volta = 17000
const utilizado = 35000
const restante = 15000

console.log(ida + volta)
//foi utilizado 35000 L de combustivel

console.log(combustivel - utilizado)
//sobrou 15000

console.log("Combustível inicial:"+ " " + combustivel + " " + "litros")
console.log("Combustível utilizado:"+ " " + utilizado + " " + "litros")
console.log("Combustível restante:"+ " " + restante + " " + "litros")
//Combustível inicial: 50000 litros
// Combustível utilizado: 35000 litros
// Combustível restante: 15000 litros


//questao 6
// consumo médio = distância total / combustível utilizado
const consumoMedio = 21.94

console.log(distancia / utilizado) //21.94

console.log("consumo medio:" + " " + consumoMedio + " " + "km/L")
//consumo medio: 21.94 km/L



//questao 7
const valorCombustivel = 1.250.000
const 