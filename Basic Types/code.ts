function executar(){
    
    //boolean
    //true or false
     let value: boolean= false

    //numeros
    //decimal
    let numero1: number=10
    
    //hexodecimal
    let numero2: number=0xA
    
    //binario
    let numero3: number=0b1100100
    
    //octal
    let numero4: number=0o144

    //String
    let primeiro_nome='Igor'
    let nome_completo=`${primeiro_nome} Torquato`
    
    //Array
    let nomes: string[]= ['Joao','Igor','Ana']
    let sobrenomes: Array<string>=['Silva','Rodrigues','Oliveira']

    document.getElementById('info').innerHTML=`${nomes[1]} ${sobrenomes[2]}`

}