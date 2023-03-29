/* Exercício 

Um código para calcular o valor gasto de uma viagem, tendo em mente 5 variáveis;

1 - Preço do etanol
2 - Preço da gasolina
3 - Tipo de combustível que está no seu carro
4 - Quantos KM ele faz por litro de combustível
5 - Distância em KM da viagem

*/

// Resolução:


const precoEtanol = 5.79;
const precoGasolina = 6.66;
const KmPorLitro = 10;
const distanciaKm = 100;

const tipoCombustivel = 'Gasolina'
const gastoLitros = distanciaKm / KmPorLitro;

if (tipoCombustivel === 'Etanol') {
    const valorViagem = gastoLitros * precoEtanol;
    console.log(valorViagem.toFixed(2));
} else {
    const valorViagem = gastoLitros * precoGasolina;
    console.log(valorViagem.toFixed(2));
}