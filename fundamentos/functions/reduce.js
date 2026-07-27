const salaJs = [4, 6, 8.9, 7]
const salaPython = [10, 6, 9, 4]
const salaJava = [8, 6.5, 9, 5.3]

function calculaMediaDaSala(listaDeNotas) {
    const somaDasNotas = listaDeNotas.reduce((ac, nota) =>  ac + nota, 0)
    const media = somaDasNotas / listaDeNotas.length;
    return media;
}

console.log(calculaMediaDaSala(salaJava));
console.log(calculaMediaDaSala(salaJs));
console.log(calculaMediaDaSala(salaPython));
