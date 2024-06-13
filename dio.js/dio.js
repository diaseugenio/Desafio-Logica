const quantidadeVitorias = 65;
const quantidadeDerrotas = 15;
const resultadoRank = 0;

function CalculadoraDePartidaRankeadas(
  quantidadeVitorias,
  quantidadeDerrotas,
  resultadoRank
) {
  resultadoRank = quantidadeVitorias - quantidadeDerrotas;
let classe = ''
  if (resultadoRank < 10) {
    classe = "Ferro";
  } else if (resultadoRank < 20) {
    classe = "Bronze";
  } else if (resultadoRank < 50) {
    classe = "Prata";
  } else if (resultadoRank < 80) {
    classe = "Ouro";
  } else if (resultadoRank < 90) {
    classe = "Diamante";
  } else if (resultadoRank < 100) {
    classe = "Lendário";
  } else if (resultadoRank < 101) {
    classe = "Imortal";
  }
  console.log( "O Herói de saldo de " + resultadoRank + " vitórias está no nível de " + classe )
}
CalculadoraDePartidaRankeadas(
  quantidadeVitorias,
  quantidadeDerrotas,
  resultadoRank
);
