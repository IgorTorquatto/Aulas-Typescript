function executar(){
    
   //classe-readonly
   class homem{

    readonly nome:string
    readonly idade:number

    constructor(n:string,i:number){
        this.nome=n
        this.idade=i
    }
   }

let h=new homem('Igor',19)
document.write(h.nome+' -- '+h.idade)

}

function fazer(){

    //classe-accessors
    class homem{
        private _nome:string
        private _apelido:string

        //nome
        //setter
        set Nome(v:string){
            if(v!='x'){
                this._nome=v
            }else{
                this._nome='Indefinido'
            }
        }

        //getter
        get Nome(){
            return this._nome
        }
    }

    let h=new homem()
    h.Nome='x'
    document.write(h.Nome)
}