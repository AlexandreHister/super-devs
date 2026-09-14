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
const valorCombustivel = 1250000;
const custoEquipe = 480000;
const custoequipamento = 920000;
const custoAlimentaçao = 75000;


const custoTotal = valorCombustivel + custoEquipe + custoequipamento + custoAlimentaçao;

console.log();




//questao 8
const patrocinadores = 5;
const valorPatrocinador = 2725000 / patrocinador;

console.log("valor por patrocinador", valorPatrocinador);



//questao 9
const percentualReserva = 12;
const custoTotal = 2725000;

const valorReserva = custoTotal * percentualReserva / 100;
const custoFinal = custoTotal + valorReserva;

console.log("reserva de segurança: R$", valorReserva);
console.log("custo final: R$ ", custoFinal);



//questao 10
const patrocinadores = 5;
const valorPatrocinador = 3052000 / patrocinador;

console.log("Novo valor por patrocinador", valorPatrocinador);


//questao 11
console.log("10 minutos correspondem a", 10 * 60, "segundos");



//questao 12
const tempoEnviarNave = 8;
const tempoCentralReceber = 8;

const tempoTotalMensagem = tempoEnviarNave + tempoCentralReceber;

console.log("minutos", tempoTotalMensagem);
console.log("segundos", tempoTotalMensagem / 60);


//questao 13
const tripulantes = "4"
const novosTripulantes = 2;

console.log(tripulantes + novosTripulantes);



//questao 14
let codigoDeAcesso;

console.log(codigoDeAcesso);
console.log(typeof codigoDeAcesso);



//questao 15
const cargaUtilizada = 4250 + 1850 + 3100 + 950;
const capacidade = 12000;

const capacidaDeSobra = capacidade - cargaUtilizada;

console.log("Carga utilizada", cargaUtilizada, "kg");
console.log("Capacidade restante:", capacidaDeSobra, "kg");




//questao 16
const pacotes = 127;
const capacidaDeCaixa = 10;

const pacotesRestante = pacotes % capacidaDeCaixa;
const caixasCompletas = (pacotes - pacotesRestante) / capacidaDeCaixa;

console.log("pacotes restantes", pacotesRestantes);
console.log("caixas completas:", caixasCompletas);




//questao 17
const tripulantes = 4;
const aguaPorDia = 3;
const diasMissao = 16;
const aguaDisponivel = 220;

const consumoPorPessoa = aguaPorDia * diasMissao;

const consumoTotal = consumoPorPessoa * tripulantes;

