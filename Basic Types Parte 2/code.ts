function executar(){
    
    //tuple
    let eu: [string,number]= ['Igor',19]
    
    //enum
    enum RGB{Red,Green,Blue}
    let cor:RGB = RGB.Red
    let nome: string=RGB[0]

    //any
    let valor: any[]=['Ruan',43,false]
    valor[0]='Igor'
    
    document.getElementById('info').innerHTML=''

}