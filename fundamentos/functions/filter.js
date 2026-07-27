const alunos = ['Márcia', 'João', 'Felipe']
const medias = [3.7, 8.4, 6.9]

const reprovados = alunos.filter((aluno, i) => {
    return medias[i] < 7;
})

console.log(reprovados);
