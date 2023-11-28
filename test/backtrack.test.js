import { SudokuBacktrack, sudokuArrayToString, stringToSudokuArray, hasRowClash, hasColClash, hasSquareClash, isSafe, getElement, putElement } from "../src/backtrack.js";
import { generateSudoku } from "../src/generator.js";
import { isValid } from "../src/valid.js";
import { expect } from "chai";

describe('backtrack', () => {
  // const myArray = [
  //   [1, 2, 3, 4],
  //   [4, 5, 6, 4],
  //   [7, 8, 9, 4],
  //   [4, 5, 6, 4]
  // ];

  // it('correct getElement', () => {
  //   expect(getElement(myArray, 1, 2)).to.equal(6);
  // });

  // it('case 1a: getElement ', () => {
  //   expect(getElement(myArray, 0, 2)).to.equal(3);
  // });
  // it('case 1b: getElement ', () => {
  //   // expect(getElement(myArray, -1, 2)).to.equal(null);
  //   expect(() => getElement(myArray, -1, 2)).to.throw('Index out of bounds');
  // });
  // it('case 1c: getElement ', () => {
  //   expect(getElement(myArray, 1, 2)).to.equal(6);
  // });

  // it('case 2a: getElement ', () => {
  //   expect(getElement(myArray, 2, 0)).to.equal(7);
  // });
  // it('case 2b: getElement ', () => {
  //   // expect(getElement(myArray, 2, -1)).to.equal(null);
  //   expect(() => getElement(myArray, 2, -1)).to.throw('Index out of bounds');
  // });
  // it('case 2c: getElement ', () => {
  //   expect(getElement(myArray, 2, 1)).to.equal(8);
  // });

  // it('case 3a: getElement ', () => {
  //   expect(getElement(myArray, 3, 2)).to.equal(6);
  // });
  // it('case 3b: getElement ', () => {
  //   // expect(getElement(myArray, 4, 2)).to.equal(null);
  //   expect(() => getElement(myArray, 4, 2)).to.throw('Index out of bounds');
  // });
  // it('case 3c: getElement ', () => {
  //   // expect(getElement(myArray, 5, 2)).to.equal(null);
  //   expect(() => getElement(myArray,5, 2)).to.throw('Index out of bounds');
  // });

  // it('case 4a: getElement ', () => {
  //   expect(getElement(myArray, 2, 3)).to.equal(4);
  // });
  // it('case 4b: getElement ', () => {
  //   // expect(getElement(myArray, 2, 4)).to.equal(null);
  //   expect(() => getElement(myArray, 2, 4)).to.throw('Index out of bounds');
  // });
  // it('case 4c: getElement ', () => {
  //   // expect(getElement(myArray, 2, 5)).to.equal(null);
  //   expect(() => getElement(myArray, 2, 5)).to.throw('Index out of bounds');
  // });

  // it('correct putElement', () => {
  //   putElement(myArray, 1, 2, 42);
  //   expect(myArray[1][2]).to.equal(42);
  // });

  // it('case 1a: putElement', () => {
  //   // expect(putElement(myArray, 4, 2, 42)).to.equal(false);
  //   expect(() => putElement(myArray, 4, 2, 42)).to.throw('Index out of bounds');
  // });
  // it('case 1b: putElement', () => {
  //   // expect(putElement(myArray, 5, 2, 42)).to.equal(false);
  //   expect(() => putElement(myArray, 5, 2, 42)).to.throw('Index out of bounds');
  // });
  // it('case 1c: putElement', () => {
  //   expect(putElement(myArray, 3, 2, 42)).to.equal(true);
  // });
  
  // it('case 2a: putElement', () => {
  //   // expect(putElement(myArray, 2, 4, 42)).to.equal(false);
  //   expect(() => putElement(myArray, 2, 4, 42)).to.throw('Index out of bounds');
  // });
  // it('case 2b: putElement', () => {
  //   // expect(putElement(myArray, 2, 5, 42)).to.equal(false);
  //   expect(() => putElement(myArray, 2, 5, 42)).to.throw('Index out of bounds');
  // });
  // it('case 2c: putElement', () => {
  //   expect(putElement(myArray, 2, 3, 42)).to.equal(true);
  // });

  // it('case 3a: putElement', () => {
  //   // expect(putElement(myArray, 2, -1, 42)).to.equal(false);
  //   expect(() => putElement(myArray, 2, -1, 42)).to.throw('Index out of bounds');
  // });
  // it('case 3a: putElement', () => {
  //   expect(putElement(myArray, 2, 0, 42)).to.equal(true);
  // });
  // it('case 3a: putElement', () => {
  //   expect(putElement(myArray, 2, 1, 42)).to.equal(true);
  // });

  // it('case 4a: putElement', () => {
  //   // expect(putElement(myArray, -1, 2, 42)).to.equal(false);
  //   expect(() => putElement(myArray, -1, 2, 42)).to.throw('Index out of bounds');
  // });
  // it('case 4a: putElement', () => {
  //   expect(putElement(myArray, 0, 2, 42)).to.equal(true);
  // });
  // it('case 4a: putElement', () => {
  //   expect(putElement(myArray, 1, 2, 42)).to.equal(true);
  // });


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
    var str = generateSudoku(9, 40)
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

  // let testInputStrings = [
  //   "018020930000700000304081500400000023500002080200003600100000807020007300800000090",
  //   "400000726006000014092000000900020000030800470000603895004069000300581000108204600",
  //   "800960107046001500070005000580090001009200800000000009095000010008100030310406200",
  //   "200040190500200804000710000100900000903050082002007600000020040020000001418000200",
  //   "500200030002815000847060102004100300908450020005300084003081000000500000006000918",
  // ]

  // let testOutputStrings = [
  //   "718526934952734168364981572496158723573692481281473659135269847629847315847315296",
  //   "413958726856372914792146583985427361631895472247613895524769138369581247178234659",
  //   "853962147946731582271845963584697321739214856162583479695328714428179635317456298",
  //   "287543196531296874694718523176982435943651782852437619769125348325874961418369257",
  //   "519274836362815479847963152674128395938457621125396784293681547781549263456732918",
  // ]
  // for(let i=0;i<5;i++){
  //   it('case testing ' + i, () => {
  //     var pred = SudokuBacktrack(testInputStrings[i])
  //     expect(pred).to.equal(testOutputStrings[i]);
  //   });
  // }

  it('rowClash true', () => {
    let invalidBoard = [
      [0,0,6,5,7,8,4,9,6,1],
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
    expect(hasRowClash(invalidBoard,0,1)).to.equal(true);
  });
  it('rowClash false', () => {
    let validBoard = [
      [3,0,6,5,7,8,4,9,2],
      [5,2,9,1,3,4,7,6,8], 
      [4,8,7,6,2,9,5,3,1], 
      [2,6,3,4,1,5,9,8,7], 
      [9,7,4,8,6,3,1,2,5], 
      [8,5,1,7,9,2,6,4,3], 
      [1,3,8,9,4,7,2,5,6], 
      [6,9,2,3,5,1,8,7,4], 
      [7,4,5,2,8,6,3,1,9],
    ]
    expect(hasRowClash(validBoard,0,1)).to.equal(false);
  });

  it('colClash true', () => {
    let invalidBoard = [
      [0,0,6,5,7,8,4,9,6,1],
      [5,2,9,1,3,4,7,6,8,1], 
      [4,8,1,6,2,9,5,3,1,1], 
      [2,6,3,4,1,5,9,8,7,1], 
      [9,7,4,8,6,3,1,2,5,1], 
      [8,5,1,7,9,2,6,4,3,1], 
      [1,3,8,9,4,7,2,5,6,1], 
      [6,9,2,3,5,1,8,7,4,1], 
      [0,4,5,2,8,6,3,1,9,1],
      [3,0,6,5,7,8,4,9,1,1]
    ]
    expect(hasColClash(invalidBoard,0,3)).to.equal(true);
  });
  it('colClash false', () => {
    let validBoard = [
      [0,1,6,5,7,8,4,9,2],
      [5,2,9,1,3,4,7,6,8], 
      [4,8,7,6,2,9,5,3,1], 
      [2,6,3,4,1,5,9,8,7], 
      [9,7,4,8,6,3,1,2,5], 
      [8,5,1,7,9,2,6,4,3], 
      [1,3,8,9,4,7,2,5,6], 
      [6,9,2,3,5,1,8,7,4], 
      [7,4,5,2,8,6,3,1,9],
    ]
    expect(hasColClash(validBoard,0,3)).to.equal(false);
  });

  it('sqrClash true', () => {
    let invalidBoard = [
      [0,0,6,5,7,8,4,9,6,1],
      [5,2,9,1,3,4,7,6,8,1], 
      [4,8,1,6,2,9,5,3,1,1], 
      [2,6,3,4,1,5,9,8,7,1], 
      [9,7,4,8,6,3,1,2,5,1], 
      [8,5,1,7,9,2,6,4,3,1], 
      [1,3,8,9,4,7,2,5,6,1], 
      [6,9,2,3,5,1,8,7,4,1], 
      [0,4,5,2,8,6,3,1,9,1],
      [3,0,6,5,7,8,4,9,1,1]
    ]
    expect(hasSquareClash(invalidBoard,0,1,1)).to.equal(true);
  });
  it('sqrClash false', () => {
    let validBoard = [
      [3,0,6,5,7,8,4,9,2],
      [5,2,9,1,3,4,7,6,8], 
      [4,8,7,6,2,9,5,3,1], 
      [2,6,3,4,1,5,9,8,7], 
      [9,7,4,8,6,3,1,2,5], 
      [8,5,1,7,9,2,6,4,3], 
      [1,3,8,9,4,7,2,5,6], 
      [6,9,2,3,5,1,8,7,4], 
      [7,4,5,2,8,6,3,1,9],
    ]
    expect(hasSquareClash(validBoard,0,1,1)).to.equal(false);
  });

  it('isSafe false', () => {
    let invalidBoard = [
      [0,0,6,5,7,8,4,9,6,1],
      [5,2,9,1,3,4,7,6,8,1], 
      [4,8,1,6,2,9,5,3,1,1], 
      [2,6,3,4,1,5,9,8,7,1], 
      [9,7,4,8,6,3,1,2,5,1], 
      [8,5,1,7,9,2,6,4,3,1], 
      [1,3,8,9,4,7,2,5,6,1], 
      [6,9,2,3,5,1,8,7,4,1], 
      [0,4,5,2,8,6,3,1,9,1],
      [3,0,6,5,7,8,4,9,1,1]
    ]
    expect(isSafe(invalidBoard,0,1,1)).to.equal(false);
  });
  it('isSafe true', () => {
    let validBoard = [
      [3,0,6,5,7,8,4,9,2],
      [5,2,9,1,3,4,7,6,8], 
      [4,8,7,6,2,9,5,3,1], 
      [2,6,3,4,1,5,9,8,7], 
      [9,7,4,8,6,3,1,2,5], 
      [8,5,1,7,9,2,6,4,3], 
      [1,3,8,9,4,7,2,5,6], 
      [6,9,2,3,5,1,8,7,4], 
      [7,4,5,2,8,6,3,1,9],
    ]
    expect(isSafe(validBoard,0,1,1)).to.equal(true);
  });


  
  
});