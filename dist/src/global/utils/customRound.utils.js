"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRounding = void 0;
class CustomRounding {
    // method public
    GetroundUp(num) {
        return this.calculateRoundUp(num);
    }
    // method protected
    calculateRoundUp(num) {
        let decimalPart = num - Math.floor(num);
        if (decimalPart < 0.25) {
            return Math.floor(num);
        }
        else if (decimalPart < 0.75) {
            return Math.floor(num) + 0.5;
        }
        else {
            return Math.ceil(num);
        }
    }
}
exports.CustomRounding = CustomRounding;
