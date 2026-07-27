const notas = [10 , 6.5, 8, 7.5]

const notasAtualizadas = notas.map(nota => nota + 1 >= 10 ? 10 : nota + 1)

console.log(notas);
console.log(notasAtualizadas);

const nomes = ['Márcia', 'João', 'Felipe']
const nomesUpperCase = nomes.map((nome) => nome.toUpperCase())
console.log(nomes);
console.log(nomesUpperCase);

