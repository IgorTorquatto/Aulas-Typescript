var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function ex() {
    //classe-static properties
    var familia_kennedy = /** @class */ (function () {
        function familia_kennedy(n) {
            this._nome = n + ' ' + familia_kennedy._sobrenome;
        }
        Object.defineProperty(familia_kennedy.prototype, "Nome", {
            get: function () {
                return this._nome;
            },
            enumerable: false,
            configurable: true
        });
        familia_kennedy._sobrenome = 'Kennedy';
        return familia_kennedy;
    }());
    var familiar = new familia_kennedy('John F.');
    var outro = new familia_kennedy('Jacqueline');
    document.write(outro.Nome);
}
function faz() {
    //classe-abstrata
    //base
    var humano = /** @class */ (function () {
        function humano() {
        }
        return humano;
    }());
    var homem = /** @class */ (function (_super) {
        __extends(homem, _super);
        function homem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        homem.prototype.falar = function (t) {
            return 'Eu falei e sou homem';
        };
        return homem;
    }(humano));
    var mulher = /** @class */ (function (_super) {
        __extends(mulher, _super);
        function mulher() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        mulher.prototype.falar = function (t) {
            return 'Eu falei e sou mulher';
        };
        return mulher;
    }(humano));
    var h = new homem();
    document.getElementById('info').innerHTML = h.falar('teste');
}
