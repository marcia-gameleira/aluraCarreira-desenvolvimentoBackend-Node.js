const studentsGradesList = [8, 6, 4, 9.6, 4.6, 10, 7, 6.8, 9.4, 10]

// Show grades
for (let index = 0; index < studentsGradesList.length; index++) {
    const grade = studentsGradesList[index];
    console.log(`Índice ${index} - ${index + 1}ª Posição: nota ${grade.toFixed(1)}`);
}

// Calc general average
let sum = 0;
for (let index = 0; index < studentsGradesList.length; index++) {
    sum = sum + studentsGradesList[index];
}
const avgGrade = sum / studentsGradesList.length;
console.log(`Média das notas: ${avgGrade.toFixed(2)}`);
