const saldoInicial = 100;
const resultadoUltimoRound = "Ganhou";
const custoItem = 115;

function decidirCompraOuEconomizar(saldoInicial, resultadoUltimoRound, custoItem) {
    let novoSaldo = 0


    // TODO: Implemente a lógica para ajustar o saldo de acordo com o resultado do último round
    
    if (resultadoUltimoRound === "Ganhou") {
      novoSaldo = saldoInicial * 1.15
      console.log(novoSaldo)
    }
    else if (resultadoUltimoRound === "Perdeu") {
      novoSaldo = saldoInicial * 1.05
    }
    else if (resultadoUltimoRound === "Bônus") {
      novoSaldo = saldoInicial * 1.20
    }

		// Utilizamos a função JavaScript Math.round() para arredondar um número para o inteiro mais próximo.
		novoSaldo = Math.round(novoSaldo);

    // TODO: Implemente a lógica para verificar se o saldo é suficiente para comprar o item

    if (novoSaldo >= custoItem) {
        console.log("Comprar");
    } else {
        console.log("Economizar");
    }
}

// TODO: Chame a função para imprimir o resultado
decidirCompraOuEconomizar(saldoInicial, resultadoUltimoRound, custoItem)