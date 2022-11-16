"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cuotafija = void 0;
const global_1 = require("../../gobal/global");
class Cuotafija extends global_1.credit {
    constructor(plazo, interes = 18, prestamo = 100000) {
        super(plazo, interes, prestamo);
        this.plazo = plazo;
        this.interes = interes;
        this.prestamo = prestamo;
        this._No = [];
        this._cuota = [];
        this._interes = [];
        this._abono = [];
        this._saldo = [];
        this._data = [];
    }
    ;
    data() {
        let interesMensual = this.AnualMensual(this.interes, this.plazo);
        for (let i = 0; i < this.plazo; i++) {
            let pago = 1 + i;
            let cut = Number((this.pagofijo(interesMensual, this.prestamo, this.plazo)).toFixed(2));
            this._No.push({ pago });
            this._cuota.push({ cuota: cut });
            this._interes.push({});
            this._abono.push({});
            this._saldo.push({});
        }
        this._interes[0] = { interes: Number((interesMensual * this.prestamo).toFixed(2)) };
        this._abono[0] = { abono: Number((this._cuota[0].cuota - this._interes[0].interes).toFixed(2)) };
        this._saldo[0] = { saldo: this.prestamo - this._abono[0].abono };
        for (let i = 1; i < this.plazo; i++) {
            this._interes[i] = { interes: Number((this._saldo[i - 1].saldo * interesMensual).toFixed(2)) };
            this._abono[i] = { abono: Number((this._cuota[i].cuota - this._interes[i].interes).toFixed(2)) };
            this._saldo[i] = { saldo: Number((this._saldo[i - 1].saldo - this._abono[i].abono).toFixed(2)) };
        }
        this._data.push(this._No, this._cuota, this._interes, this._abono, this._saldo);
        return this._data;
    }
    static create(plazo, interes, prestamo) {
        if (Cuotafija.instance === null) {
            Cuotafija.instance = new Cuotafija(plazo, interes, prestamo);
        }
        return Cuotafija.instance;
    }
    genereteReact() {
        return (console.log(this._data));
    }
    generatejs() {
    }
}
exports.Cuotafija = Cuotafija;
Cuotafija.instance = null;
