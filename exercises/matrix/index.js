// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

const matrix = n => {
  const matrixArray = [];
  for (let i = 0; i < n; i++) {
    matrixArray.push([]);
  }

  let counter = 1, startRow = 0, endRow = n - 1, startCol = 0, endCol = n - 1;

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      matrixArray[startRow][i] = counter;
      counter++;
    }
    startRow++;
    for (let i = startRow; i <= endRow ; i++) {
      matrixArray[i][endCol] = counter;
      counter++;
    }
    endCol--;
    for (let i = endCol; i >=startCol ; i--) {
      matrixArray[endRow][i] = counter;
      counter++;
    }
    endRow--;
    for (let i = endRow; i >=startRow ; i--) {
      matrixArray[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }

  return matrixArray;
};

module.exports = matrix;
