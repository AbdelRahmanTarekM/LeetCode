/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let tmp = map.get(nums[i]);
    if (tmp === undefined) tmp = 0;
    if (tmp >= 1) return true;
    map.set(nums[i], tmp + 1);
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
