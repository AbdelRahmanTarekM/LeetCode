/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let closest = 0;
  let currentDiff = 1001;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let pointer1 = i + 1;
    let pointer2 = nums.length - 1;
    while (pointer1 < pointer2) {
      if (
        Math.abs(nums[i] + nums[pointer1] + nums[pointer2] - target) <
        currentDiff
      ) {
        closest = nums[i] + nums[pointer1] + nums[pointer2];
        currentDiff = Math.abs(
          nums[i] + nums[pointer1] + nums[pointer2] - target
        );
      }
      if (nums[i] + nums[pointer1] + nums[pointer2] > target) {
        pointer2--;
      } else {
        pointer1++;
      }
    }
  }
  return closest;
};
