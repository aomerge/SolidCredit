import { IconvertToDecimal } from "./interface/IconvertToDecimal.interface";

export class convertToDecimal implements IconvertToDecimal {

  getdecimalize(num: number): number {    
    return Number( (num / Math.pow(10, 2)).toFixed(2) );
  }
}