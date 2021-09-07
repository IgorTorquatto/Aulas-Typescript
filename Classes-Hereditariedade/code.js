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
function executar() {
    //classe -hereditariedade
    //classe base
    var animal = /** @class */ (function () {
        function animal(designacao) {
            this.designaçao = designacao;
        }
        animal.prototype.mover = function (metros) {
            return ("Me desloquei " + metros + " metros.");
        };
        return animal;
    }());
    //==================================
    var cavalo = /** @class */ (function (_super) {
        __extends(cavalo, _super);
        function cavalo(designacao) {
            return _super.call(this, designacao) || this;
        }
        cavalo.prototype.mover = function (metros) {
            return ('Estou cavalgando....' + _super.prototype.mover.call(this, metros));
        };
        return cavalo;
    }(animal));
    //==================================
    var peixe = /** @class */ (function (_super) {
        __extends(peixe, _super);
        function peixe() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        peixe.prototype.mover = function (metros) {
            return ("Estou nadando..." + _super.prototype.mover.call(this, metros));
        };
        return peixe;
    }(animal));
    var p = new peixe('Peixe');
    var c = new cavalo('Cavalo');
    document.write(c.mover(100));
}
