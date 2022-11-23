/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let binSearch = (idx) => {
    //binary search helper function
    let l = 0,
      r = matrix.length - 1;
    let mid = Math.floor((l + r) / 2);
    while (l <= r) {
      if (matrix[mid][idx] < target) {
        l = mid + 1;
        mid = Math.floor((l + r) / 2);
      } else if (matrix[mid][idx] > target) {
        r = mid - 1;
        mid = Math.floor((l + r) / 2);
      } else {
        return true;
      }
    }
    return false;
  };
  for (let i = 0; i < matrix[0].length; i++) {
    //loop through the columns
    if (target >= matrix[0][i] && target <= matrix[matrix.length - 1][i]) {
      //do search only if target is in bounds for that column
      if (binSearch(i))
        //if not found in one column, but still could be present in future columns
        return true;
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
);
