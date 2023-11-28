import { SudokuBacktrack, sudokuArrayToString, stringToSudokuArray, hasRowClash, hasColClash, hasSquareClash, isSafe } from "../src/backtrack.js";
import { generateSudoku } from "../src/generator.js";
import { isValid } from "../src/valid.js";
import { expect } from "chai";

describe('backtrack', () => {
  it('case atos', () => {
    let grid = [[3, 0, 6, 5, 0, 8, 4, 0, 0],
      [5, 2, 0, 0, 0, 0, 0, 0, 0],
      [0, 8, 7, 0, 0, 0, 0, 3, 1],
      [0, 0, 3, 0, 1, 0, 0, 8, 0],
      [9, 0, 0, 8, 6, 3, 0, 0, 5],
      [0, 5, 0, 0, 9, 0, 6, 0, 0],
      [1, 3, 0, 0, 0, 0, 2, 5, 0],
      [0, 0, 0, 0, 0, 0, 0, 7, 4],
      [0, 0, 5, 2, 0, 6, 3, 0, 0]]
    let gridstring = "306508400520000000087000031003010080900863005050090600130000250000000074005206300";

    expect(sudokuArrayToString(grid)).to.equal(gridstring);
  });

  it('case stoa', () => {
    let grid = [[3, 0, 6, 5, 0, 8, 4, 0, 0],
      [5, 2, 0, 0, 0, 0, 0, 0, 0],
      [0, 8, 7, 0, 0, 0, 0, 3, 1],
      [0, 0, 3, 0, 1, 0, 0, 8, 0],
      [9, 0, 0, 8, 6, 3, 0, 0, 5],
      [0, 5, 0, 0, 9, 0, 6, 0, 0],
      [1, 3, 0, 0, 0, 0, 2, 5, 0],
      [0, 0, 0, 0, 0, 0, 0, 7, 4],
      [0, 0, 5, 2, 0, 6, 3, 0, 0]]
    let gridstring = "306508400520000000087000031003010080900863005050090600130000250000000074005206300";

    expect(stringToSudokuArray(gridstring)).deep.to.equal(grid);
  });

  it('case 0', () => {
    var str = generateSudoku()
    var pred = SudokuBacktrack(str)
    expect(isValid(pred, str)).to.equal(true);
  });

  it('case 1 ', () => {
    var pred = SudokuBacktrack("306508400520000000087000031003010080900863005050090600130000250000000074005206300")
    expect(pred).to.equal("316578492529134768487629531263415987974863125851792643138947256692351874745286319");
  });

  it('case 2 ', () => {
    var pred = SudokuBacktrack("326508400520000000087000031003010080900863005050090600130000250000000074005206300")
    expect(pred).to.equal(null);
  });

  it('case 3 ', () => {
    var pred = SudokuBacktrack("306508400520000000087000031003010080900863005050090600130000250000000074005206300123")
    expect(pred).to.equal(null);
  });
  it('case 4 ', () => {
    var pred = SudokuBacktrack("12300")
    expect(pred).to.equal(null);
  });

  let validBoard = [
      [0,0,6,5,7,8,4,9,2],
      [5,2,9,1,3,4,7,6,8], 
      [4,8,7,6,2,9,5,3,1], 
      [2,6,3,4,1,5,9,8,7], 
      [9,7,4,8,6,3,1,2,5], 
      [8,5,1,7,9,2,6,4,3], 
      [1,3,8,9,4,7,2,5,6], 
      [6,9,2,3,5,1,8,7,4], 
      [7,4,5,2,8,6,3,1,9],
  ]
  let invalidBoard = [
    [0,0,6,5,7,8,4,9,1,1],
    [5,2,9,1,3,4,7,6,8,1], 
    [4,8,1,6,2,9,5,3,1,1], 
    [2,6,3,4,1,5,9,8,7,1], 
    [9,7,4,8,6,3,1,2,5,1], 
    [8,5,1,7,9,2,6,4,3,1], 
    [1,3,8,9,4,7,2,5,6,1], 
    [6,9,2,3,5,1,8,7,4,1], 
    [3,4,5,2,8,6,3,1,9,1],
    [0,0,6,5,7,8,4,9,1,1]
]

  it('rowClash true', () => {
    expect(hasRowClash(invalidBoard,0,1)).to.equal(true);
  });
  it('rowClash false', () => {
    expect(hasRowClash(validBoard,0,1)).to.equal(false);
  });

  it('colClash true', () => {
    expect(hasColClash(invalidBoard,0,3)).to.equal(true);
  });
  it('colClash false', () => {
    expect(hasColClash(validBoard,0,3)).to.equal(false);
  });

  it('sqrClash true', () => {
    expect(hasSquareClash(invalidBoard,0,1,1)).to.equal(true);
  });
  it('sqrClash false', () => {
    expect(hasSquareClash(validBoard,0,1,1)).to.equal(false);
  });

  it('isSafe false', () => {
    expect(isSafe(invalidBoard,0,1,1)).to.equal(false);
  });
  it('isSafe true', () => {
    expect(isSafe(validBoard,0,1,1)).to.equal(true);
  });
  
  
});