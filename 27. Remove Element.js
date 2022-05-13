/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;

  nums.forEach((num) => {
    if (num != val) {
      nums[i] = num;
      i++;
    }
  });

  return i;
};
