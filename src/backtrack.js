/* A Backtracking program in
Javascript to solve Sudoku problem */

// sudokuUtils.js

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
}

// Check if placing 'num' in the given 'row' causes a clash
export function hasRowClash(board, row, num) {
	for (let d = 0; d < board[row].length; d++) {
		if (getElement(board, row, d) == num) {
			return true;
		}
	}
	return false;
}

// Check if placing 'num' in the given 'col' causes a clash
export function hasColClash(board, col, num) {
	for (let r = 0; r < board.length; r++) {
		if (getElement(board, r, col) === num) {
			return true;
		}
	}
	return false;
}

// Check if placing 'num' in the given 'row' and 'col' causes a clash within the square
export function hasSquareClash(board, row, col, num) {
	const sqrt = Math.floor(Math.sqrt(board.length));
	const boxRowStart = row - row % sqrt;
	const boxColStart = col - col % sqrt;

	for (let r = boxRowStart; r < boxRowStart + sqrt; r++) {
		for (let c = boxColStart; c < boxColStart + sqrt; c++) {
			if (getElement(board, r, c) === num) {
				return true;
			}
		}
	}

	return false;
}

// Check if placing 'num' in the given 'row' and 'col' is safe
export function isSafe(board, row, col, num) {
	return !hasRowClash(board, row, num) &&
		!hasColClash(board, col, num) &&
		!hasSquareClash(board, row, col, num);
}


function solveSudoku(board, n) {
	// let row = -1;
	// let col = -1;
	let row, col;
	let isEmpty = true;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (getElement(board, i, j) == 0) {
				row = i;
				col = j;

				// We still have some remaining
				// missing values in Sudoku
				isEmpty = false;
				break;
			}
		}
		// if (!isEmpty) {
		// 	break;
		// }
	}

	// No empty space left
	if (isEmpty) {
		return true;
	}

	// Else for each-row backtrack
	for (let num = 1; num <= n; num++) {
		if (isSafe(board, row, col, num)) {
			// board[row][col] = num;
			putElement(board,row,col,num);
			if (solveSudoku(board, n)) {

				// print(board, n);
				return true;
			}
			else {

				// Replace it
				// board[row][col] = 0;
				putElement(board,row,col,0);
			}
		}
	}
	return false;
}

export const sudokuArrayToString = (boardArray) => {
	let boardString = '';

	for (let i = 0; i < boardArray.length; i++) {
		for (let j = 0; j < boardArray[i].length; j++) {
			// boardString += boardArray[i][j];
			boardString += getElement(boardArray,i,j);
		}
	}

	return boardString;
}

export const stringToSudokuArray = (boardString) => {
	const boardArray = [];
	const N = 9

	for (let i = 0; i < N; i++) {
		const row = boardString.slice(i * N, (i + 1) * N).split('').map(Number);
		boardArray.push(row);
	}

	return boardArray;
}

export const SudokuBacktrack = (boardString) => {
	if (boardString.length != 81)
		return null
	let board = stringToSudokuArray(boardString);
	if (solveSudoku(board, 9)) {
		// Return the solved board
		return sudokuArrayToString(board);
	} else {
		// Return null if no solution
		return null;
	}
}