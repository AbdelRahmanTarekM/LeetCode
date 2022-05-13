/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let result = "";
  result = result.concat(s.charAt(result.length));
  let yAxis = 0;
  while (result.length < s.length) {
    let index = (result.length * (numRows + 1)) % s.length;
    console.log(index);
    result = result.concat(s.charAt(index));
  }
  return result;
};

console.log(convert("PAYPALISHIRING", 3));
