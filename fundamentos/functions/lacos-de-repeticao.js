const studentsNames = [
    "Ana", "Beatriz", "Camila", "Diana", "Elena", 
    "Fernanda", "Gabriela", "Heloísa", "Isadora", "Júlia", 
]

const studentsGrades = [8, 6, 4, 9.6, 4.6, 10, 7, 6.8, 9.4, 10]

const lista = [studentsNames, studentsGrades]
// console.log(lista);

function showNameAndGrade(student) {
    const [studentsList, avgGradeList] = lista  // Desestruturação de lista
    if (studentsList.includes(student)){
        const indexOfStudent = studentsList.indexOf(student);
        const avgGrade = avgGradeList[indexOfStudent]
        console.log(`Nota de ${student}: ${avgGrade}`);
    }
    else {
        console.log(`Estudante ${student} não existe na lista.`);
    }
}

showNameAndGrade('Elena')
showNameAndGrade('Sula')
