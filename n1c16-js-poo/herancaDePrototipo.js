const user = {
    nome: 'Márcia',
    email: 'm@m.com',
    role: 'estudante',
    exibirInfo: function() {
        console.log(`${this.nome} - ${this.email}`);
    }
}

const admin = {
    nome: 'João',
    email: 'j@j.com',
    role: 'admin',
    criaCurso: function() {
        console.log('Curso criado.');
    }
}

Object.setPrototypeOf(admin, user)
admin.exibirInfo();