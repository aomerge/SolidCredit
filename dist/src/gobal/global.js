"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credit = void 0;
class credit {
    constructor(plazo, interes, prestamo) {
        this.plazo = plazo;
        this.interes = interes;
        this.prestamo = prestamo;
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
    static switch(setting, credit, data) {
        switch (true) {
            //case setting.React && setting.fecha:
            case setting.React:
                return credit.genereteReact();
            /* */
            case setting.fecha:
                const date = new Date();
                const fechaS = [];
                for (let i = 0; i < data[0].length; i++) {
                    const day = 0o1;
                    let month = date.getMonth() + 1 + i;
                    if (month >= 13) {
                        month = i - 1;
                    }
                    const year = date.getFullYear();
                    const ddmmyyyy = [day, month, year];
                    fechaS.push(ddmmyyyy);
                }
                data.push(fechaS);
                console.log(data);
                break;
            default:
                break;
        }
    }
}
exports.credit = credit;
