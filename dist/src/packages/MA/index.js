"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetodoAmericano = void 0;
const global_1 = require("../../gobal/global");
class MetodoAmericano extends global_1.credit {
    constructor(plazo = 12, interes = 18, prestamo = 100000, liquidacion = 0) {
        super(plazo, interes, prestamo);
        this.plazo = plazo;
        this.interes = interes;
        this.prestamo = prestamo;
        this.liquidacion = liquidacion;
        this._No = [];
        this._cuota = [];
        this._Interes = [];
        this._abono = [];
        this._saldo = [];
        this._data = [];
    }
    ;
    data() {
        let interesMensual = this.AnualMensual(this.interes, this.plazo);
        for (let i = 0; i < this.plazo; i++) {
            var no = 1 + i;
            this._No.push({ no });
            this._Interes.push({ interes: Number((interesMensual * this.prestamo).toFixed(2)) });
            this._cuota.push({ cuota: this._Interes[i].interes });
            this._abono.push({ abono: 0 });
            this._saldo.push({ saldo: this.prestamo });
        }
        for (let i = this.liquidacion; i < this.plazo; i++) {
            this._cuota[i] = { cuota: this._saldo[i].saldo + this._Interes[i].interes };
            this._abono[i] = { abono: this._saldo[i].saldo };
            this._saldo[i] = { saldo: this._saldo[i].saldo - this._abono[i].abono };
        }
        for (let i = this.liquidacion + 1; i <= this.plazo; i++) {
            this._Interes[i] = { interes: 0 };
            this._abono[i] = { abono: 0 };
            this._cuota[i] = { cuota: 0 };
        }
        this._data.push(this._No, this._cuota, this._Interes, this._abono, this._saldo);
        return this._data;
    }
    static create(plazo, interes, prestamo) {
        if (MetodoAmericano.instance === null) {
            MetodoAmericano.instance = new MetodoAmericano(plazo, interes, prestamo);
        }
        return MetodoAmericano.instance;
    }
}
exports.MetodoAmericano = MetodoAmericano;
MetodoAmericano.instance = null;
