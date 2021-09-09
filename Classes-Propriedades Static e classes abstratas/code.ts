function ex(){
    
    //classe-static properties
    class familia_kennedy{
        private _nome:string
        static _sobrenome: string='Kennedy'

        constructor(n:string){
            this._nome= n +' '+familia_kennedy._sobrenome
        }

        get Nome(){
            return this._nome
        }
    }

    let familiar=new familia_kennedy('John F.')
    let outro =new familia_kennedy('Jacqueline')
    document.write(outro.Nome)

}
function faz(){

    //classe-abstrata
    //base
    abstract class humano{
        nome:string
        idade:number
        abstract falar(t:string):string
    }

    class homem extends humano{
        falar(t:string){
            return 'Eu falei e sou homem'
        }
    }

    class mulher extends humano{
        falar(t:string){
            return 'Eu falei e sou mulher'
        }
    }

    let h=new homem()
    document.getElementById('info').innerHTML=h.falar('teste')

}
