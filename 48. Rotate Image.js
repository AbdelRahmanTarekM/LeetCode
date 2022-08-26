/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let cm = [];
  for (let i = 0; i < matrix.length; i++) {
    let tmp = [];
    for (let j = 0; j < matrix.length; j++) {
      tmp.push(matrix[i][j]);
    }
    cm.push(tmp);
  }
  let n = matrix.length;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      let y = n - i - 1;
      matrix[j][i] = cm[y][j];
    }
  }
};
