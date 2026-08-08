export default class User {
    constructor(nome, email, nascimento, role, ativo=true) {
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || 'estudante';
        this.ativo = ativo;
    }

    exibirInfos() {
        return `${this.nome} - ${this.email}`;
    }
}

const exibirInfosUser = new User('Márcia', 'mag@gmail.com', '1990-07-22');
// console.log(exibirInfosUser);
// console.log(exibirInfosUser.exibirInfos());
// console.log(User.prototype.isPrototypeOf(exibirInfosUser)); // true
