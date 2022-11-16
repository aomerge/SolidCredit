"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solid = void 0;
const index_1 = require("../src/packages/CF/index");
const index_2 = require("../src/packages/CV/index");
const index_3 = require("../src/packages/PG/index");
const index_4 = require("../src/packages/MA/index");
const global_1 = require("../src/gobal/global");
class solid extends global_1.credit {
    constructor(plazo, prestamo, interes) {
        super(plazo, interes, prestamo);
    }
    ;
    static cuotafija(plazo, interes, prestamo) {
        const cuotafija = index_1.Cuotafija.create(plazo, interes, prestamo);
        const data = cuotafija.data();
        return data;
    }
    ;
    static cuotavariable(plazo, interes, prestamo) {
        const cuotavariable = index_2.CuotaVariable.create(plazo, interes, prestamo);
        const data = cuotavariable.data();
        return data;
    }
    ;
    static PeriodosdeGracia(plazo, interes, prestamo) {
        const PeriodosdeGracia = index_3.Periodos_de_Gracia.create(plazo, interes, prestamo);
        const data = PeriodosdeGracia.data();
        return data;
    }
    ;
    static metodoAericano(plazo, interes, prestamo) {
        const metodoamericano = index_4.MetodoAmericano.create(plazo, interes, prestamo);
        const data = metodoamericano.data();
        return data;
    }
    ;
}
exports.solid = solid;
const a = solid.cuotavariable(15, 42, 1000);
console.log(a);
