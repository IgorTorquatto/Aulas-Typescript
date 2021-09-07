function executar(){
    
    //classe -hereditariedade

    //classe base
    class animal{
        designaçao:string

        constructor(designacao:string){
            this.designaçao=designacao
        }

        mover(metros:number){
            return(`Me desloquei ${metros} metros.`)
        }
    }
    //==================================
    class cavalo extends animal{
        constructor(designacao:string){
            super(designacao)
        }

        mover(metros:number){
            return( 'Estou cavalgando....'+super.mover(metros))
        }
    }
    //==================================
    class peixe extends animal{
        mover(metros:number){
            return(`Estou nadando...`+super.mover(metros))
        }
    }

    let p = new peixe('Peixe')
    let c=new cavalo('Cavalo')
    document.write(c.mover(100))
}