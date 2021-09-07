var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function executar() {
    //spread
    var nomes_1 = ['Joao', 'Carlos'];
    var nomes_2 = ['Ana', 'Cristina'];
    var nomes_totais = __spreadArray(__spreadArray(__spreadArray(['Carlos'], nomes_1, true), ['Antonio'], false), nomes_2, true);
    document.getElementById('info').innerHTML = nomes_totais.toString();
}
function alterar() {
    //spread
    var pessoa = {
        nome: 'Igor',
        sobrenome: 'Torquato',
        idade: 19
    };
    var nova_pesssoa = __assign(__assign({}, pessoa), { profissão: 'programador' });
    document.write(JSON.stringify(nova_pesssoa));
}
