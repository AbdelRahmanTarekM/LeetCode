/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums[nums.length - 1] < target) return nums.length;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === target) {
      return index;
    }
    if (nums[index] > target) return index;
  }
};
