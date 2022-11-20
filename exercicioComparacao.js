const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanhador(a, b) {
    let numPontos = {
        notasAlice: 0,
        notasBob: 0,
    };
    for(let i = 0 ; i < a.length; i++) {
        if (a[i] > b[i]) {
            numPontos.notasAlice += 1;
        } else if (a[i] < b[i]) {
            numPontos.notasBob += 1;
        } else {
            numPontos == 0;
        }

    }

    console.log(numPontos)

    if(numPontos.notasAlice> numPontos.notasBob) {
        return 'Alicia Ganhou!';
    } else {
        return 'Bob ganhou';
    }
}

console.log(encontrarGanhador(alicia,bob))