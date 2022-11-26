const precoEtanol = 4.49;
const precoGasolina = 5.09;
const kmPorLitro = 10;
const distanciaEmkm = 100;
const tipoDeCombustivel = 'Etanol';
 
const litrosConsumidos = distanciaEmkm / kmPorLitro;

if (tipoDeCombustivel === 'Etanol') {
const valorGasto = litrosConsumidos * precoEtanol; 
console.log(valorGasto);
} else { 
const valorGasto = litrosConsumidos * precoGasolina;
console.log(valorGasto);
}

