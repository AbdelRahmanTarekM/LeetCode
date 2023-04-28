/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let n = nums.length,
    frequency = {};

  for (const el of nums) {
    frequency[el] = (frequency[el] || 0) + 1;

    if (frequency[el] > n / 2) {
      return el;
    }
  }

  return -1;
};
