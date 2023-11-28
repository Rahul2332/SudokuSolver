import { SudokuNaive, sudokuArrayToString, stringToSudokuArray, putElement, getElement } from "../src/naive.js";
import { generateSudoku } from "../src/generator.js";
import { isValid } from "../src/valid.js";
import { expect } from "chai";

describe('naive', () => {
    const myArray = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
    
      it('correct getElement', () => {
        expect(getElement(myArray, 1, 2)).to.equal(6);
      });
    
      it('row out-of-bounds getElement', () => {
        expect(() => getElement(myArray, 3, 2)).to.throw('Index out of bounds');
      });
    
      it('col out-of-bounds getElement', () => {
        expect(() => getElement(myArray, 1, 3)).to.throw('Index out of bounds');
      });
    
      it('correct puttElement', () => {
        putElement(myArray, 1, 2, 42);
        expect(myArray[1][2]).to.equal(42);
      });
    
      it('row out-of-bounds putElement', () => {
        // expect(getElement(myArray, 3, 2)).to.equal(-1);
        expect(() => putElement(myArray, 3, 2, 42)).to.throw('Index out of bounds');
      });
      it('col out-of-bounds putElement', () => {
        // expect(getElement(myArray, 1, 3)).to.equal(-1);
        expect(() => putElement(myArray, 1, 3, 42)).to.throw('Index out of bounds');
      });

    it('case atos', () => {
        let grid = [ [ 3, 0, 6, 5, 0, 8, 4, 0, 0 ],
                 [ 5, 2, 0, 0, 0, 0, 0, 0, 0 ],
                 [ 0, 8, 7, 0, 0, 0, 0, 3, 1 ],
                 [ 0, 0, 3, 0, 1, 0, 0, 8, 0 ],
                 [ 9, 0, 0, 8, 6, 3, 0, 0, 5 ],
                 [ 0, 5, 0, 0, 9, 0, 6, 0, 0 ],
                 [ 1, 3, 0, 0, 0, 0, 2, 5, 0 ],
                 [ 0, 0, 0, 0, 0, 0, 0, 7, 4 ],
                 [ 0, 0, 5, 2, 0, 6, 3, 0, 0 ] ]
        
        expect(sudokuArrayToString(grid)).to.equal("306508400520000000087000031003010080900863005050090600130000250000000074005206300");
      });
    
      it('case stoa', () => {
        let grid = [ [ 3, 0, 6, 5, 0, 8, 4, 0, 0 ],
                 [ 5, 2, 0, 0, 0, 0, 0, 0, 0 ],
                 [ 0, 8, 7, 0, 0, 0, 0, 3, 1 ],
                 [ 0, 0, 3, 0, 1, 0, 0, 8, 0 ],
                 [ 9, 0, 0, 8, 6, 3, 0, 0, 5 ],
                 [ 0, 5, 0, 0, 9, 0, 6, 0, 0 ],
                 [ 1, 3, 0, 0, 0, 0, 2, 5, 0 ],
                 [ 0, 0, 0, 0, 0, 0, 0, 7, 4 ],
                 [ 0, 0, 5, 2, 0, 6, 3, 0, 0 ] ]
        let gridstring = "306508400520000000087000031003010080900863005050090600130000250000000074005206300";
        
        expect(stringToSudokuArray(gridstring)).deep.to.equal(grid);
      });

    it('case 0', () => {
        var str = generateSudoku()
        var pred = SudokuNaive(str)
        expect(isValid(pred, str)).to.equal(true);
    });

    it('case 1 ', () => {
        var pred = SudokuNaive("306508400520000000087000031003010080900863005050090600130000250000000074005206300")
        expect(pred).to.equal("316578492529134768487629531263415987974863125851792643138947256692351874745286319");
    });

    it('case 2 ', () => {
        var pred = SudokuNaive("326508400520000000087000031003010080900863005050090600130000250000000074005206300")
        expect(pred).to.equal(null);
    });

    // it('case 3 ', () => {
    //     var pred = SudokuNaive("306508400520000000087000031003010080900863005050090600130000250000000074005206300123")
    //     expect(pred).to.equal(null);
    // });
    // it('case 4 ', () => {
    //     var pred = SudokuNaive("12300")
    //     expect(pred).to.equal(null);
    // });

});
