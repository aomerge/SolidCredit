"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuotaVariable = void 0;
const global_1 = require("../../gobal/global");
class CuotaVariable extends global_1.credit {
    constructor(plazo = 12, interes = 18, prestamo = 100000) {
        super(plazo, interes, prestamo);
        this.plazo = plazo;
        this.interes = interes;
        this.prestamo = prestamo;
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
            this._cuota.push({});
            this._Interes.push({});
            this._abono.push({ abono: Number((this.prestamo / this.plazo).toFixed(2)) });
            this._saldo.push({});
        }
        ;
        this._Interes[0] = { interes: this.prestamo * interesMensual };
        this._saldo[0] = { saldo: this.prestamo - this._abono[0].abono };
        for (let i = 1; i < this.plazo; i++) {
            this._Interes[i] = { interes: Number((this._saldo[i - 1].saldo * interesMensual).toFixed(2)) };
            this._saldo[i] = { saldo: Number((this._saldo[i - 1].saldo - this._abono[i].abono).toFixed(2)) };
        }
        this._cuota.forEach((item, i) => {
            item.cuota = Number((this._Interes[i].interes + this._abono[i].abono).toFixed(2));
        });
        this._data.push(this._No, this._cuota, this._Interes, this._abono, this._saldo);
        return this._data;
    }
    static create(plazo, interes, prestamo) {
        if (CuotaVariable.instance === null) {
            CuotaVariable.instance = new CuotaVariable(plazo, interes, prestamo);
        }
        return CuotaVariable.instance;
    }
}
exports.CuotaVariable = CuotaVariable;
CuotaVariable.instance = null;
