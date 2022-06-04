/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  let result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let temp = [];
    for (let j = 0; j < matrix.length; j++) {
      temp.push(matrix[j][i]);
    }
    result.push(temp);
  }

  return result;
};
