/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let index = 1;
  let addedValue = nums[0];
  for (index; index < nums.length; index++) {
    addedValue += nums[index];
    nums[index] = addedValue;
  }
  return nums;
};
