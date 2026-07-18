// Expressão de função é quando atribuímos o retorno de uma função a uma variável já na sua declaração.

const situacaoFinal = function (media) {
    if(media >= 7) {
        return 'Aprovado.';
    } else {
        return 'Reprovado';
    }
}

console.log(situacaoFinal(8)); // APROVADO
console.log(situacaoFinal(4)); // REPROVADO
