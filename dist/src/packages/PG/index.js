"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Periodos_de_Gracia = void 0;
const global_1 = require("../../gobal/global");
class Periodos_de_Gracia extends global_1.credit {
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
            this._cuota.push({ cuota: 0 });
            this._Interes.push({ interes: 0 });
            this._abono.push({ abono: 0 });
            this._saldo.push({ saldo: 0 });
        }
        this._Interes[0] = { interes: this.prestamo * interesMensual };
        this._abono[0] = { abono: this._Interes[0].interes };
        this._saldo[0] = { saldo: this._Interes[0].interes + this.prestamo };
        for (let i = 1; i < this.plazo; i++) {
            this._Interes[i] = { interes: Number((this._saldo[i - 1].saldo * interesMensual).toFixed(2)) };
            this._abono[i] = { abono: Number((this._Interes[i].interes).toFixed(2)) };
            this._saldo[i] = { saldo: Number((this._Interes[i].interes + this._saldo[i - 1].saldo).toFixed(2)) };
        }
        for (let i = this.plazo - 1; i < this.plazo; i++) {
            this._cuota[i] = { cuota: Number((this._Interes[i].interes + this._saldo[i - 1].saldo).toFixed(2)) };
            this._saldo[i] = { saldo: this._saldo[i].saldo - this._cuota[i].cuota };
        }
        for (let i = 1; i < 5; i++) {
        }
        this._data.push(this._No, this._cuota, this._Interes, this._abono, this._saldo);
        return this._data;
    }
    static create(plazo, interes, prestamo) {
        if (Periodos_de_Gracia.instance === null) {
            Periodos_de_Gracia.instance = new Periodos_de_Gracia(plazo, interes, prestamo);
        }
        return Periodos_de_Gracia.instance;
    }
}
exports.Periodos_de_Gracia = Periodos_de_Gracia;
Periodos_de_Gracia.instance = null;
