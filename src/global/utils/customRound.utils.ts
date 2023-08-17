import {IcustomRounding} from "./interface/IcustomRound.interface";
export class CustomRounding implements IcustomRounding {
  // method public
  public GetroundUp(num: number): number {
    return this.calculateRoundUp(num);
  }
  // method protected
  private calculateRoundUp(num: number): number {
    let decimalPart = num - Math.floor(num);
    if (decimalPart < 0.25) {
      return Math.floor(num);
    } else if (decimalPart < 0.75) {
      return Math.floor(num) + 0.5;
    } else {
      return Math.ceil(num);
    }
  }
}
