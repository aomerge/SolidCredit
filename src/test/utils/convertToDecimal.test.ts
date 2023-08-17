import { expect } from "chai";
import { convertToDecimal } from "../../global/utils/convertToDecimal.utils";

describe("convert To Decimal", () => {
  let ConvertToDecimal: convertToDecimal;

  beforeEach(() => {
    ConvertToDecimal = new convertToDecimal();
  });

  describe("getdecimalize", () => {
    it("should return a number with two decimal places", () => {
      const num = 1234;
      const result = ConvertToDecimal.getdecimalize(num);
      expect(result).to.equal(12.34);
    });

    it("should return a negative number with two decimal places", () => {
      const num = -5678;
      const result = ConvertToDecimal.getdecimalize(num);
      expect(result).to.equal(-56.78);
    });

    it("should return zero when given zero", () => {
      const num = 0;
      const result = ConvertToDecimal.getdecimalize(num);
      expect(result).equal(0);
    });
  });
});
