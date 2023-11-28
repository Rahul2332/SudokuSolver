import { generateSudoku } from "../src/generator.js";
import { isValid } from "../src/valid.js";
import { expect } from "chai";

describe('generator', () => {
      it('all missing', () => {
        expect(generateSudoku(9, 81) != null).to.equal(true);
      });
      it('K greater grid length', () => {
        expect(generateSudoku(9, 90)).to.equal(null);
      });
});
