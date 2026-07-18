const grades = [10, 6, 8];
console.log(grades);

// PUSH: Adding new element into an array.
grades.push(7);
console.log(grades);

// POP: removing the last element from an array.
grades.pop();
console.log(grades);

// SLICE: catching part of an array.
const studentsNames = [
  "Ana", "Beatriz", "Camila", "Diana", "Elena", 
  "Fernanda", "Gabriela", "Heloísa", "Isadora", "Júlia", 
  "Laura", "Manuela", "Natália", "Olívia", "Sophia",
  "Arthur", "Bruno", "Caio", "Daniel", "Eduardo", 
  "Felipe", "Gabriel", "Heitor", "Igor", "João", 
  "Lucas", "Mateus", "Noah", "Oliver", "Rafael"
];

const array1 = studentsNames.slice(0, studentsNames.length/2);
const array2 = studentsNames.slice(studentsNames.length/2);
console.log(studentsNames);
console.log(array1);
console.log(array2);

// SPLICE: remove elements from mentioned index and optionally insert new elements at a removed element position.
studentsNames.splice(5, 5, 'João', 'Márcia', 'Felipe')
console.log(studentsNames);

// CONCAT: join one or more arrays.
const jsRoom = ['João', 'Márcia', 'Felipe'];
const pythonRoom = ['Lulu', 'Gagá', 'Baby'];
const unifiedRoom = jsRoom.concat(pythonRoom);
console.log(unifiedRoom);
