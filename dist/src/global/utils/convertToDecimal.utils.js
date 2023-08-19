"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToDecimal = void 0;
class convertToDecimal {
    getdecimalize(num) {
        return Number((num / Math.pow(10, 2)).toFixed(2));
    }
}
exports.convertToDecimal = convertToDecimal;
