function calcularSaldo(nVitorias = 0, nDerrotas = 0) {
    let resultadoSaldo = nVitorias - nDerrotas;
    return resultadoSaldo;
}
function classificarRank(nVitorias, nDerrotas){

    let saldoVitorias = calcularSaldo(nVitorias, nDerrotas);
let rank;

switch (true) {
    case (saldoVitorias <= 10):
        rank = 'Ferro'
        break
    case (saldoVitorias <= 10):
        rank = 'Bronze'
        break;
    case (saldoVitorias <= 10):
        rank = 'Prata'
        break;
    case (saldoVitorias <= 10):
        rank = 'Ouro'
        break
    case (saldoVitorias <= 10):
        rank = 'Diamante'
        break
    case (saldoVitorias <= 10):
        rank = 'Lendário'
        break
    default:
        rank = 'Imortal'
        break
}

return {saldoVitorias, rank};

}

let {saldoVitorias, rank} = classificarRank(10,5)

console.log(`O herói tem saldo de ${saldoVitorias} e está no rank ${rank}`)