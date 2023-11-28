export function getElement(board, row, col) {
	if (
		row < 0 ||
		row >= board.length ||
		col < 0 ||
		col >= board[0].length
	) {
		throw new Error("Index out of bounds");
	}

	return board[row][col];
}

export function putElement(board, row, col, val) {
	if (
		row < 0 ||
		row >= board.length ||
		col < 0 ||
		col >= board[0].length
	) {
		throw new Error("Index out of bounds");
	}

	board[row][col] = val;
	return true;
}

export const getBox = (i, j) => {
    if (i < 0 || i >= 9 || j < 0 || j >= 9) {
        return null; // Return null for out-of-bounds coordinates
    }
    return 3 * Math.floor(i / 3) + Math.floor(j / 3);
}

export const isSafe = (i, j, number, row, col, box) => {
    return !((row[i] >> number) & 1)
        && !((col[j] >> number) & 1)
        && !((box[getBox(i, j)] >> number) & 1);
}

export const setCellValue = (grid, i, j, value, row, col, box) => {
    // grid[i][j] = value;
    putElement(grid, i, j, value);
    row[i] |= 1 << value;
    col[j] |= 1 << value;
    box[getBox(i, j)] |= 1 << value;
}

export const clearCellValue = (grid, i, j, value, row, col, box) => {
    // grid[i][j] = 0;
    putElement(grid, i, j, 0);
    row[i] &= ~(1 << value);
    col[j] &= ~(1 << value);
    box[getBox(i, j)] &= ~(1 << value);
}

export const setInitialValues = (grid, row, col, box) => {
    for (let i = 0; i < row.length; i++)
        for (let j = 0; j < col.length; j++)
            // if (grid[i][j]) {
            //     setCellValue(grid, i, j, grid[i][j], row, col, box);
            // }
            setCellValue(grid, i, j, getElement(grid, i, j), row, col, box);
}

export const solveSudoku = (grid, i, j, row, col, box) => {
    if (i === row.length - 1 && j === col.length)
        return true;
    if (j === 9) {
        j = 0;
        i++;
    }

    if (grid[i][j])
        return solveSudoku(grid, i, j + 1, row, col, box);

    for (let nr = 1; nr <= 9; nr++) {
        if (isSafe(i, j, nr, row, col, box)) {
            setCellValue(grid, i, j, nr, row, col, box);

            if (solveSudoku(grid, i, j + 1, row, col, box))
                return true;

            clearCellValue(grid, i, j, nr, row, col, box);
        }
    }

    return false;
}

export const solveSudokuWrapper = (grid) => {
    const row = new Array(9).fill(0);
    const col = new Array(9).fill(0);
    const box = new Array(9).fill(0);
    setInitialValues(grid, row, col, box);
    return solveSudoku(grid, 0, 0, row, col, box) ? grid : null;
}

export const sudokuArrayToString = (boardArray) => {
    let boardString = '';

    for (let i = 0; i < boardArray.length; i++) {
        for (let j = 0; j < boardArray[i].length; j++) {
            boardString += getElement(boardArray, i, j);
        }
    }

    return boardString;
}

export const stringToSudokuArray = (boardString) => {
    const boardArray = [];

    for (let i = 0; i < Math.sqrt(boardString.length); i++) {
        const row = boardString.slice(i * Math.sqrt(boardString.length), (i + 1) * Math.sqrt(boardString.length)).split('').map(Number);
        boardArray.push(row);
    }

    return boardArray;
}

export const SudokuBitwise = (boardString) => {
    if (boardString.length != 81)
        return -1

    let grid = stringToSudokuArray(boardString);
    if (solveSudokuWrapper(grid, 0, 0))
        return sudokuArrayToString(grid)
    else
        return 0
}
