function executar(){

    //spread

    let nomes_1=['Joao','Carlos']
    let nomes_2=['Ana','Cristina']
    let nomes_totais=['Carlos',...nomes_1,'Antonio',...nomes_2]

    document.getElementById('info').innerHTML=nomes_totais.toString()
    
}
function alterar(){

    //spread

    let pessoa={
        nome:'Igor',
        sobrenome:'Torquato',
        idade: 19
    }
    let nova_pesssoa={
        ...pessoa,
        profissão: 'programador',

    }
    document.write(JSON.stringify(nova_pesssoa))
}