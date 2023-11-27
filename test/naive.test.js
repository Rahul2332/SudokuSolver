import { SudokuNaive, sudokuArrayToString, stringToSudokuArray } from "../src/naive.js";
import { generateSudoku } from "../src/generator.js";
import { isValid } from "../src/valid.js";
import { expect } from "chai";

describe('naive', () => {
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
