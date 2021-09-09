function executar(){
    
    //classe-modifiers

    class humano{
        private nome:string

        constructor(n:string){
            this.nome=n
        }

        private falar(texto:string){
            return 'Eu, '+this.nome+', disse'+texto
        }

        public gritar(){
            return this.falar('AHHHH!')
        }
    }

    let pessoa=new humano('Igor')
    document.getElementById('info').innerHTML=(pessoa.gritar())

}