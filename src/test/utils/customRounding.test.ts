import { expect } from "chai";
import { CustomRounding } from "../../global/utils/customRound.utils";

describe("CustomRounding", () => {
  let customRounding: CustomRounding;

  beforeEach(() => {
    customRounding = new CustomRounding();
  });

  describe("roundUp", () => {
    it("should round up to the nearest integer if decimal part is greater than or equal to 0.75", () => {
      expect(customRounding.GetroundUp(1.75)).equal(2);
      expect(customRounding.GetroundUp(2.99)).equal(3);
    });

    it("should round down to the nearest integer if decimal part is less than 0.25", () => {
        expect(customRounding.GetroundUp(1.24)).equal(1);
        expect(customRounding.GetroundUp(2.01)).equal(2);
    });

    it("should round up to the nearest half if decimal part is between 0.25 and 0.75", () => {
        expect(customRounding.GetroundUp(1.3)).equal(1.5);
        expect(customRounding.GetroundUp(2.6)).equal(2.5);
    });
  });
});