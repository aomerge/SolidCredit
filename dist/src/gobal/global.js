"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagofijo = exports.AnualMensual = void 0;
const AnualMensual = (interes, plazo) => {
    const INTERES_ANUAL = interes / 100;
    return Number((Math.pow(INTERES_ANUAL + 1, 1 / plazo) - 1).toFixed(3));
};
exports.AnualMensual = AnualMensual;
const pagofijo = (interes, Prestamo, plazo, cuota) => {
    const a = interes * Prestamo;
    const c = 1 - Math.pow(1 + interes, -plazo);
    return (cuota = a / c);
};
exports.pagofijo = pagofijo;
