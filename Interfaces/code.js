function executar() {
    //interfaces
    function pessoa(dados) {
        return (dados.nome + ' ' + dados.sobrenome);
    }
    var nome_completo = pessoa({ nome: 'Joao', sobrenome: 'Uli' });
    document.getElementById('info').innerHTML = nome_completo;
}
