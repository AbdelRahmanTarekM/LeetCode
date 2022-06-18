/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const squaredPositiveNumbers = nums
    .filter((num) => num >= 0)
    .map((num) => num * num);
  const squaredNegativeNumbers = nums
    .filter((num) => num < 0)
    .reverse()
    .map((num) => num * num);

  let result = [];

  while (
    squaredPositiveNumbers.length !== 0 &&
    squaredNegativeNumbers.length !== 0
  ) {
    result.push(
      squaredPositiveNumbers[0] < squaredNegativeNumbers[0]
        ? squaredPositiveNumbers.shift()
        : squaredNegativeNumbers.shift()
    );
  }

  return squaredPositiveNumbers.length !== 0
    ? [...result, ...squaredPositiveNumbers]
    : [...result, ...squaredNegativeNumbers];
};
