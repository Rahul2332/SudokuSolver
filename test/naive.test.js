import { SudokuNaive, sudokuArrayToString, stringToSudokuArray, putElement, getElement } from "../src/naive.js";
import { generateSudoku } from "../src/generator.js";
import { isValid } from "../src/valid.js";
import { expect } from "chai";

describe('naive', () => {
    const myArray = [
        [1, 2, 3, 4],
        [4, 5, 6, 4],
        [7, 8, 9, 4],
        [4, 5, 6, 4]
      ];
    
      it('correct getElement', () => {
        expect(getElement(myArray, 1, 2)).to.equal(6);
      });
    
      it('case 1a: getElement ', () => {
        expect(getElement(myArray, 0, 2)).to.equal(3);
      });
      it('case 1b: getElement ', () => {
        // expect(getElement(myArray, -1, 2)).to.equal(null);
        expect(() => getElement(myArray, -1, 2)).to.throw('Index out of bounds');
      });
      it('case 1c: getElement ', () => {
        expect(getElement(myArray, 1, 2)).to.equal(6);
      });
    
      it('case 2a: getElement ', () => {
        expect(getElement(myArray, 2, 0)).to.equal(7);
      });
      it('case 2b: getElement ', () => {
        // expect(getElement(myArray, 2, -1)).to.equal(null);
        expect(() => getElement(myArray, 2, -1)).to.throw('Index out of bounds');
      });
      it('case 2c: getElement ', () => {
        expect(getElement(myArray, 2, 1)).to.equal(8);
      });
    
      it('case 3a: getElement ', () => {
        expect(getElement(myArray, 3, 2)).to.equal(6);
      });
      it('case 3b: getElement ', () => {
        // expect(getElement(myArray, 4, 2)).to.equal(null);
        expect(() => getElement(myArray, 4, 2)).to.throw('Index out of bounds');
      });
      it('case 3c: getElement ', () => {
        // expect(getElement(myArray, 5, 2)).to.equal(null);
        expect(() => getElement(myArray,5, 2)).to.throw('Index out of bounds');
      });
    
      it('case 4a: getElement ', () => {
        expect(getElement(myArray, 2, 3)).to.equal(4);
      });
      it('case 4b: getElement ', () => {
        // expect(getElement(myArray, 2, 4)).to.equal(null);
        expect(() => getElement(myArray, 2, 4)).to.throw('Index out of bounds');
      });
      it('case 4c: getElement ', () => {
        // expect(getElement(myArray, 2, 5)).to.equal(null);
        expect(() => getElement(myArray, 2, 5)).to.throw('Index out of bounds');
      });
    
      it('correct putElement', () => {
        putElement(myArray, 1, 2, 42);
        expect(myArray[1][2]).to.equal(42);
      });
    
      it('case 1a: putElement', () => {
        // expect(putElement(myArray, 4, 2, 42)).to.equal(false);
        expect(() => putElement(myArray, 4, 2, 42)).to.throw('Index out of bounds');
      });
      it('case 1b: putElement', () => {
        // expect(putElement(myArray, 5, 2, 42)).to.equal(false);
        expect(() => putElement(myArray, 5, 2, 42)).to.throw('Index out of bounds');
      });
      it('case 1c: putElement', () => {
        expect(putElement(myArray, 3, 2, 42)).to.equal(true);
      });
      
      it('case 2a: putElement', () => {
        // expect(putElement(myArray, 2, 4, 42)).to.equal(false);
        expect(() => putElement(myArray, 2, 4, 42)).to.throw('Index out of bounds');
      });
      it('case 2b: putElement', () => {
        // expect(putElement(myArray, 2, 5, 42)).to.equal(false);
        expect(() => putElement(myArray, 2, 5, 42)).to.throw('Index out of bounds');
      });
      it('case 2c: putElement', () => {
        expect(putElement(myArray, 2, 3, 42)).to.equal(true);
      });
    
      it('case 3a: putElement', () => {
        // expect(putElement(myArray, 2, -1, 42)).to.equal(false);
        expect(() => putElement(myArray, 2, -1, 42)).to.throw('Index out of bounds');
      });
      it('case 3a: putElement', () => {
        expect(putElement(myArray, 2, 0, 42)).to.equal(true);
      });
      it('case 3a: putElement', () => {
        expect(putElement(myArray, 2, 1, 42)).to.equal(true);
      });
    
      it('case 4a: putElement', () => {
        // expect(putElement(myArray, -1, 2, 42)).to.equal(false);
        expect(() => putElement(myArray, -1, 2, 42)).to.throw('Index out of bounds');
      });
      it('case 4a: putElement', () => {
        expect(putElement(myArray, 0, 2, 42)).to.equal(true);
      });
      it('case 4a: putElement', () => {
        expect(putElement(myArray, 1, 2, 42)).to.equal(true);
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
