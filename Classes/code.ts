function executar(){
    
    //classe
    class veiculo{
        marca: string
        ano:number

        constructor(m:string,a:number){
            this.marca=m
            this.ano=a
        }

        mover(){
            return ('Eu andei')
        }

    }
    
    let automovel=new veiculo('Audi',2005)
   


    document.getElementById('info').innerHTML=(automovel.marca +' '+automovel.ano)

}