
const precoCombustivel = 5.79;
const gastoMedioKm = 12;
const distanciaKm = 1580;

const gastoLitros = distanciaKm / gastoMedioKm;
let valorViagem = gastoLitros * precoCombustivel;




console.log(valorViagem.toFixed(2));