/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
//nop
var maxSumSubmatrix = function (matrix, k) {
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      let tmp =
        matrix[i][j] +
        matrix[i][j + 1] +
        matrix[i + 1][j] +
        matrix[i + 1][j + 1];
      if (tmp > max && tmp <= k) {
        max = tmp;
      }
    }
  }
  return max;
};
