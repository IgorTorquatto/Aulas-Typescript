function executar() {
    //classe-readonly
    var homem = /** @class */ (function () {
        function homem(n, i) {
            this.nome = n;
            this.idade = i;
        }
        return homem;
    }());
    var h = new homem('Igor', 19);
    document.write(h.nome + ' -- ' + h.idade);
}
function fazer() {
    //classe-accessors
    var homem = /** @class */ (function () {
        function homem() {
        }
        Object.defineProperty(homem.prototype, "Nome", {
            //getter
            get: function () {
                return this._nome;
            },
            //nome
            //setter
            set: function (v) {
                if (v != 'x') {
                    this._nome = v;
                }
                else {
                    this._nome = 'Indefinido';
                }
            },
            enumerable: false,
            configurable: true
        });
        return homem;
    }());
    var h = new homem();
    h.Nome = 'x';
    document.write(h.Nome);
}
