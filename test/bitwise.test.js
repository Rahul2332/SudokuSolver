import { SudokuBitwise, isSafe, clearCellValue, setCellValue, getBox,sudokuArrayToString, stringToSudokuArray, getElement, putElement} from "../src/bitwise.js";
import { generateSudoku } from "../src/generator.js";
import { isValid } from "../src/valid.js";
import { expect } from "chai";

describe('bitwise', () => {
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
    var pred = SudokuBitwise(str)
    expect(isValid(pred,str)).to.equal(true);
  });

  it('case 1: solver ', () => {
    var pred = SudokuBitwise("306508400520000000087000031003010080900863005050090600130000250000000074005206300")
    expect(pred).to.equal("316578492529134768487629531263415987974863125851792643138947256692351874745286319");
  });

  it('case 2: solver ', () => {
    var pred = SudokuBitwise("326508400520000000087000031003010080900863005050090600130000250000000074005206300")
    expect(pred).to.equal(0);
  });

  it('case 3: solver ', () => {
    var pred = SudokuBitwise("306508400520000000087000031003010080900863005050090600130000250000000074005206300123")
    expect(pred).to.equal(-1);
  });
  // it('case 4: solver ', () => {
  //   var pred = SudokuBitwise("12300")
  //   expect(pred).to.equal(-1);
  // });

  it('case 1: isSafe ', () => {
    expect(isSafe(0, 0, 5, [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0])).to.equal(true);
  });
  it('case 2: isSafe ', () => {
    expect(isSafe(3, 5, 2, [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0])).to.equal(true);
  });
  it('case 3: isSafe ', () => {
    expect(isSafe(1, 7, 3, [0, 2, 4, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0])).to.equal(true);
  });

  // it('case 1: getBox ', () => {
  //   expect(getBox(0, 0)).to.equal(0);
  // });
  // it('case 2: getBox ', () => {
  //   expect(getBox(4, 4)).to.equal(4);
  // });
  // it('case 3: getBox ', () => {
  //   expect(getBox(8, 7)).to.equal(8);
  // });
  // it('case 4: getBox ', () => {
  //   expect(getBox(-1, 2)).to.equal(null);
  // });
  // it('case 5: getBox ', () => {
  //   expect(getBox(3, 10)).to.equal(null);
  // });
  it('case 1a: getBox ', () => {
    expect(getBox(0, 3)).to.equal(1);
  });
  it('case 1b: getBox ', () => {
    expect(getBox(-1, 3)).to.equal(null);
  });
  it('case 1c: getBox ', () => {
    expect(getBox(1, 3)).to.equal(1);
  });

  it('case 2a: getBox ', () => {
    expect(getBox(3, 0)).to.equal(3);
  });
  it('case 2b: getBox ', () => {
    expect(getBox(3, -1)).to.equal(null);
  });
  it('case 2c: getBox ', () => {
    expect(getBox(3, 1)).to.equal(3);
  });

  it('case 3a: getBox ', () => {
    expect(getBox(9, 3)).to.equal(null);
  });
  it('case 3b: getBox ', () => {
    expect(getBox(10, 3)).to.equal(null);
  });
  it('case 3c: getBox ', () => {
    expect(getBox(8, 3)).to.equal(7);
  });

  it('case 4a: getBox ', () => {
    expect(getBox(3, 9)).to.equal(null);
  });
  it('case 4b: getBox ', () => {
    expect(getBox(3, 10)).to.equal(null);
  });
  it('case 4c: getBox ', () => {
    expect(getBox(3, 8)).to.equal(5);
  });

  

});
