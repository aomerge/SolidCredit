"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cuotafija = void 0;
class Cuotafija {
    constructor(plazo = 12, interes = 18, prestamo = 100000, day, month, year) {
        this.plazo = plazo;
        this.interes = interes;
        this.prestamo = prestamo;
        this.day = day;
        this.month = month;
        this.year = year;
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
    pagofijo(interes, prestamo, plazo) {
        const a = interes * prestamo;
        const c = 1 - Math.pow(1 + interes, -plazo);
        const cuota = a / c;
        return cuota;
    }
    table() {
        let interesMensual = this.AnualMensual(this.interes, this.plazo);
        for (let i = 0; i < this.plazo; i++) {
            let pago = 1 + i;
            let cut = Number((this.pagofijo(interesMensual, this.prestamo, this.plazo)).toFixed(2));
            this.No.push({ pago });
            this.cuota.push({ cuota: cut });
            this.Interes.push({});
            this.abono.push({});
            this.saldo.push({});
        }
        this.Interes[0] = { interes: Number((interesMensual * this.prestamo).toFixed(2)) };
        this.abono[0] = { abono: Number((this.cuota[0].cuota - this.Interes[0].interes).toFixed(2)) };
        this.saldo[0] = { saldo: this.prestamo - this.abono[0].abono };
        for (let i = 1; i < this.plazo; i++) {
            this.Interes[i] = { interes: Number((this.saldo[i - 1].saldo * interesMensual).toFixed(2)) };
            this.abono[i] = { abono: Number((this.cuota[i].cuota - this.Interes[i].interes).toFixed(2)) };
            this.saldo[i] = { saldo: Number((this.saldo[i - 1].saldo - this.abono[i].abono).toFixed(2)) };
        }
        this.data.push(this.No, this.cuota, this.Interes, this.abono, this.saldo);
        console.log(this.data);
        return this.data;
    }
}
exports.Cuotafija = Cuotafija;
