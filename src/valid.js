// JavaScript program to implement
// the above approach

var N = 9;

// Function to check if all elements
// of the board[][] array store
// value in the range[1, 9]
function isinRange(board)
{
	
	// Traverse board[][] array
	for(var i = 0; i < N; i++) 
	{
		for(var j = 0; j < N; j++)
		{
			
			// Check if board[i][j]
			// lies in the range
			if (board[i][j] <= 0 ||
				board[i][j] > 9)
			{
				return false;
			}
		}
	}
	return true;
}

// Function to check if the solution
// of sudoku puzzle is valid or not
function isValidSudoku(board)
{
	
	// Check if all elements of board[][]
	// stores value in the range[1, 9]
	if (isinRange(board) == false)
	{
		return false;
	}

	// Stores unique value
	// from 1 to N
	var unique = Array(N+1).fill(false);

	// Traverse each row of
	// the given array
	for(var i = 0; i < N; i++)
	{
		unique = Array(N+1).fill(false);

		// Traverse each column
		// of current row
		for(var j = 0; j < N; j++) 
		{

			// Stores the value
			// of board[i][j]
			var Z = board[i][j];

			// Check if current row
			// stores duplicate value
			if (unique[Z])
			{
				return false;
			}
			unique[Z] = true;
		}
	}

	// Traverse each column of
	// the given array
	for(var i = 0; i < N; i++)
	{

		// Initialize unique[]
		// array to false
		unique = Array(N+1).fill(false);

		// Traverse each row
		// of current column
		for(var j = 0; j < N; j++)
		{

			// Stores the value
			// of board[j][i]
			var Z = board[j][i];

			// Check if current column
			// stores duplicate value
			if (unique[Z])
			{
				return false;
			}
			unique[Z] = true;
		}
	}

	// Traverse each block of
	// size 3 * 3 in board[][] array
	for(var i = 0; i < N - 2; i += 3) 
	{
		
		// j stores first column of
		// each 3 * 3 block
		for(var j = 0; j < N - 2; j += 3) 
		{

			// Initialize unique[]
			// array to false
			unique = Array(N+1).fill(false);

			// Traverse current block
			for(var k = 0; k < 3; k++)
			{
				for(var l = 0; l < 3; l++) 
				{
					
					// Stores row number
					// of current block
					var X = i + k;

					// Stores column number
					// of current block
					var Y = j + l;

					// Stores the value
					// of board[X][Y]
					var Z = board[X][Y];

					// Check if current block
					// stores duplicate value
					if (unique[Z])
					{
						return false;
					}
					unique[Z] = true;
				}
			}
		}
	}

	// If all conditions satisfied
	return true;
}

function sudokuArrayToString(boardArray) {
	let boardString = '';
	
	for (let i = 0; i < boardArray.length; i++) {
	  for (let j = 0; j < boardArray[i].length; j++) {
		boardString += boardArray[i][j];
	  }
	}
  
	return boardString;
  }
  
function stringToSudokuArray(boardString) {
	const N = 9;
	const boardArray = [];

	for (let i = 0; i < N; i++) {
		const row = boardString.slice(i * N, (i + 1) * N).split('').map(Number);
		boardArray.push(row);
	}

	return boardArray;
}

function isIntact(solved, original) {
	for (let i = 0; i < solved.length; i++) {
		for (let j = 0; j < solved[i].length; j++) {
			if(original[i][j] != 0 && original[i][j] != solved[i][j])
				return false;
		}
	}
	return true;
}

// Driver Code
export const isValid = (solved_str, orig_str) => {
	var solved = stringToSudokuArray(solved_str);
	var original = stringToSudokuArray(orig_str);
	if(isValidSudoku(solved) && isIntact(solved,original))
		return true;
	else 
		return false;
}