function executar() {
    //classe-modifiers
    var humano = /** @class */ (function () {
        function humano(n) {
            this.nome = n;
        }
        humano.prototype.falar = function (texto) {
            return 'Eu, ' + this.nome + ', disse' + texto;
        };
        humano.prototype.gritar = function () {
            return this.falar('AHHHH!');
        };
        return humano;
    }());
    var pessoa = new humano('Igor');
    document.getElementById('info').innerHTML = (pessoa.gritar());
}
