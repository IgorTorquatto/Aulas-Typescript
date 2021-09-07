function executar():void{
    
   //interfaces

    interface intPessoa{
        nome:string,
        sobrenome:string,
    }

    function pessoa(dados:intPessoa){
        return( dados.nome+' '+dados.sobrenome)
    }

    let nome_completo=pessoa({nome:'Joao',sobrenome:'Uli'})

    document.getElementById('info').innerHTML=nome_completo

}