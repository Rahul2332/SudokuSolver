/* A Backtracking program in
Javascript to solve Sudoku problem */

function isSafe(board, row, col, num)
{
	
	// Row has the unique (row-clash)
	for(let d = 0; d < board.length; d++)
	{
		
		// Check if the number we are trying to
		// place is already present in
		// that row, return false;
		if (board[row][d] == num)
		{
			return false;
		}
	}

	// Column has the unique numbers (column-clash)
	for(let r = 0; r < board.length; r++)
	{
		
		// Check if the number
		// we are trying to
		// place is already present in
		// that column, return false;
		if (board[r][col] == num)
		{
			return false;
		}
	}

	// Corresponding square has
	// unique number (box-clash)
	let sqrt = Math.floor(Math.sqrt(board.length));
	let boxRowStart = row - row % sqrt;
	let boxColStart = col - col % sqrt;

	for(let r = boxRowStart;
			r < boxRowStart + sqrt; r++)
	{
		for(let d = boxColStart;
				d < boxColStart + sqrt; d++)
		{
			if (board[r][d] == num)
			{
				return false;
			}
		}
	}

	// If there is no clash, it's safe
	return true;
}

function solveSudoku(board, n)
{
	let row = -1;
	let col = -1;
	let isEmpty = true;
	for(let i = 0; i < n; i++)
	{
		for(let j = 0; j < n; j++)
		{
			if (board[i][j] == 0)
			{
				row = i;
				col = j;

				// We still have some remaining
				// missing values in Sudoku
				isEmpty = false;
				break;
			}
		}
		if (!isEmpty)
		{
			break;
		}
	}

	// No empty space left
	if (isEmpty)
	{
		return true;
	}

	// Else for each-row backtrack
	for(let num = 1; num <= n; num++)
	{
		if (isSafe(board, row, col, num))
		{
			board[row][col] = num;
			if (solveSudoku(board, n))
			{
				
				// print(board, n);
				return true;
			}
			else
			{
				
				// Replace it
				board[row][col] = 0;
			}
		}
	}
	return false;
}

export const sudokuArrayToString = (boardArray) => {
	let boardString = '';
	
	for (let i = 0; i < boardArray.length; i++) {
	  for (let j = 0; j < boardArray[i].length; j++) {
		boardString += boardArray[i][j];
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
	if(boardString.length != 81)
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