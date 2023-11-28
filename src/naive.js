// Javascript program for above approach

// N is the size of the 2D matrix N*N

export function getElement(board, row, col) {
	// if (
	// 	row < 0 ||
	// 	row >= board.length ||
	// 	col < 0 ||
	// 	col >= board[0].length
	// ) {
	// 	throw new Error("Index out of bounds");
	// }

	return board[row][col];
}

export function putElement(board, row, col, val) {
	// if (
	// 	row < 0 ||
	// 	row >= board.length ||
	// 	col < 0 ||
	// 	col >= board[0].length
	// ) {
	// 	throw new Error("Index out of bounds");
	// }

	board[row][col] = val;
	// return true;
}

/* Takes a partially filled-in grid and attempts
	to assign values to all unassigned locations in
	such a way to meet the requirements for
	Sudoku solution (non-duplication across rows,
	columns, and boxes) */
function solveSudoku(grid, row, col)
{
	const N = grid.length
	/* If we have reached the 8th
	row and 9th column (0
	indexed matrix) ,
	we are returning true to avoid further
	backtracking	 */
	if (row == N - 1 && col == N)
		return true;

	// Check if column value becomes 9 ,
	// we move to next row
	// and column start from 0
	if (col == N)
	{
		row++;
		col = 0;
	}

	// Check if the current position
	// of the grid already
	// contains value >0, we iterate
	// for next column
	if (getElement(grid,row,col) != 0)
		return solveSudoku(grid, row, col + 1);

	for(let num = 1; num < 10; num++)
	{
		
		// Check if it is safe to place
		// the num (1-9) in the given 
		// row ,col ->we move to next column
		if (isSafe(grid, row, col, num))
		{
			
			/* assigning the num in the current
			(row,col) position of the grid and
			assuming our assigned num in the position
			is correct */
			putElement(grid,row,col,num);

			// Checking for next
			// possibility with next column
			if (solveSudoku(grid, row, col + 1))
				return true;
		}
		
		/* removing the assigned num , since our
		assumption was wrong , and we go for next
		assumption with diff num value */
		// grid[row][col] = 0;
		putElement(grid,row,col,0);
	}
	return false;
}

// Check whether it will be legal
// to assign num to the
// given row, col
function isSafe(grid, row, col, num)
{
	
	// Check if we find the same num
	// in the similar row , we
	// return false
	for(let x = 0; x<9; x++)
		if (getElement(grid,row,x) == num)
			return false;

	// Check if we find the same num
	// in the similar column ,
	// we return false
	for(let x = 0; x<9; x++)
		if (getElement(grid,x,col) == num)
			return false;

	// Check if we find the same num
	// in the particular 3*3
	// matrix, we return false
	let startRow = row - row % 3, 
		startCol = col - col % 3;
		
	for(let i = 0; i < 3; i++)
		for(let j = 0; j < 3; j++)
			if (getElement(grid, i + startRow, j + startCol) == num)
				return false;

	return true;
}

// Driver Code
export const sudokuArrayToString = (boardArray) => {
	let boardString = '';
	
	for (let i = 0; i < boardArray.length; i++) {
	  for (let j = 0; j < boardArray[i].length; j++) {
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

export const SudokuNaive = (boardString) => {
	let board = stringToSudokuArray(boardString);
    if (solveSudoku(board,0, 0)) {
        // Return the solved board
        return sudokuArrayToString(board);
    } else {
        // Return null if no solution
        return null;
    }
}
