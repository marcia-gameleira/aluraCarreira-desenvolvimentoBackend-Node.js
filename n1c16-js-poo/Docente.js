import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true){
        super(nome, email, nascimento, role, ativo);
    }

    aprovarEstudante(estudante, curso){
       return `Estudante aprovado: ${estudante} - Curso: ${curso}. Docente responsável: ${this.nome}`;
    }
}

const docente = new Docente('Felipe', 'felipe@gmail.com', '1985-05-15');
console.log(docente.exibirInfos());
console.log(docente.aprovarEstudante('João', 'JavaScript Avançado'));
