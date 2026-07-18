// Parecidas com expressões de funções, as arrow-functions eliminam a palavra reservada 'function' e faz uso da 'seta'( => )
// entre os parâmetros recebidos e o bloco de execução da função.

const situacaoFinal = (media) => {
    if(media >= 7) {
        return 'Aprovado.';
    } else {
        return 'Reprovado';
    }
}

console.log(situacaoFinal(8)); // APROVADO
console.log(situacaoFinal(4)); // REPROVADO