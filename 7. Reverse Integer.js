/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let isNegative = x < 0;
  let stringified = Math.abs(x).toString();
  stringified = stringified.split("").reverse().join("");
  if (+stringified > Math.pow(2, 31) - 1) {
    return 0;
  }
  if (isNegative && +stringified > Math.pow(2, 31)) {
    return 0;
  }
  if (isNegative) {
    stringified = "-" + stringified;
  }
  return +stringified;
};

console.log();
