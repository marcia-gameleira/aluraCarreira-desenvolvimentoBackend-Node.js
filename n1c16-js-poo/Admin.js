import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true){
        super(nome, email, nascimento, role, ativo);
    }

    criarCurso(nomeCurso, qtdVagas){
       return `Curso criado: ${nomeCurso} - Vagas: ${qtdVagas}`;
    }
}

const novoAdmin = new Admin('Márcia', 'mag@gmail.com', '1990-07-22');
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.criarCurso('JavaScript Avançado', 20));
