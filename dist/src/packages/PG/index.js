"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Periodos_de_Gracia = void 0;
class Periodos_de_Gracia {
    constructor(plazo = 12, interes = 18, prestamo = 100000, amortizacion = 0) {
        this.plazo = plazo;
        this.interes = interes;
        this.prestamo = prestamo;
        this.amortizacion = amortizacion;
        this.No = [];
        this.cuota = [];
        this.Interes = [];
        this.abono = [];
        this.saldo = [];
        this.data = [];
    }
    ;
    AnualMensual(interes, plazo) {
        const INTERESANUAL = interes / 100;
        return Number((Math.pow(INTERESANUAL + 1, 1 / plazo) - 1).toFixed(3));
    }
    table() {
        let interesMensual = this.AnualMensual(this.interes, this.plazo);
        for (let i = 0; i < this.plazo; i++) {
            var no = 1 + i;
            this.No.push({ no });
            this.cuota.push({ cuota: 0 });
            this.Interes.push({ interes: 0 });
            this.abono.push({ abono: 0 });
            this.saldo.push({ saldo: 0 });
        }
        this.Interes[0] = { interes: this.prestamo * interesMensual };
        this.abono[0] = { abono: this.Interes[0].interes };
        this.saldo[0] = { saldo: this.Interes[0].interes + this.prestamo };
        for (let i = 1; i < this.plazo; i++) {
            this.Interes[i] = { interes: Number((this.saldo[i - 1].saldo * interesMensual).toFixed(2)) };
            this.abono[i] = { abono: Number((this.Interes[i].interes).toFixed(2)) };
            this.saldo[i] = { saldo: Number((this.Interes[i].interes + this.saldo[i - 1].saldo).toFixed(2)) };
        }
        for (let i = this.amortizacion; i < this.plazo; i++) {
            this.cuota[i] = { cuota: Number((this.Interes[i].interes + this.saldo[i - 1].saldo).toFixed(2)) };
            this.saldo[i] = { saldo: this.saldo[i].saldo - this.cuota[i].cuota };
        }
        this.data.push(this.No, this.cuota, this.Interes, this.abono, this.saldo);
        console.log(this.data);
        return this.data;
    }
}
exports.Periodos_de_Gracia = Periodos_de_Gracia;
