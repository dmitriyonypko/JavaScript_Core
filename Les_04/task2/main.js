/*
Task 2:
Tic-Tac-Toe Checker
If we were to set up a Tic-Tac-Toe game,
 we would want to know whether the board's current state is solved, wouldn't we?
  Our goal is to create a function that will check that for us!
Assume that the board comes in the form of a 3x3 array,
 where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:
[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]

We want our function to return:
-1 if the board is not yet finished (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
*/

function checkBoard(arr) {
    if (arr.some((elem) => elem === 2 ** board.length)) {
        return 2;
    } else if (arr.some((elem) => elem === 1)) {
        return 1;
    } else if (arr.every((elem) => elem !== 0)) {
        return 0;
    }
    return -1;
}

function ticTacToeChecker(board) {
    let checkArr = -1;
    // Ряд
    const row = board.map((arr) => arr.reduce((elem, current) => elem * current));

    checkArr = checkBoard(row);
    if (checkArr > 0) return checkArr;

    //Столбец
    let col = [];
    let indexForColumn = 0;
    while (indexForColumn < board.length) {
        let counterForCol = 1;
        const unnecessary = board.map((arr) => counterForCol *= arr[indexForColumn]);
        col.push(counterForCol);
        indexForColumn++;
    }

    checkArr = checkBoard(col);
    if (checkArr > 0) return checkArr;

    //Диагональ
    let indexForMainDiag = 0;
    let indexForSecondaryDiag = board.length - 1;
    let counterForMainDiag = 1;
    let counterForSecondaryDiag = 1;

    const unnecessary2 = board.map((arr) => counterForMainDiag *= arr[indexForMainDiag++]);
    const unnecessary3 = board.map((arr) => counterForSecondaryDiag *= arr[indexForSecondaryDiag--]);
    const diag = [counterForMainDiag, counterForSecondaryDiag];

    const allArrays = [].concat(row, col, diag);
    return checkBoard(allArrays);
}


const board = [[1, 2, 2],
[1, 0, 0],
[2, 2, 2]];

alert(ticTacToeChecker(board));
