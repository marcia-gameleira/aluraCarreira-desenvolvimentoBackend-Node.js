const user = {
    nome: 'Márcia',
    email: 'mag@gmail.com',
    nascimento: '1990-07-22',
    role: 'estudante',
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email);
    }
}

user.exibirInfos();