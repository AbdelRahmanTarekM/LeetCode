/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let output = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue;
    let pointer1 = i + 1;
    let pointer2 = nums.length - 1;
    while (pointer1 < pointer2) {
      if (nums[i] + nums[pointer1] + nums[pointer2] === 0) {
        output.push([nums[i], nums[pointer1], nums[pointer2]]);
        pointer1++;
        while (pointer1 < pointer2 && nums[pointer1] === nums[pointer1 - 1])
          pointer1++;
      } else if (
        pointer1 < pointer2 &&
        nums[i] + nums[pointer1] + nums[pointer2] > 0
      ) {
        pointer2--;
      } else {
        pointer1++;
      }
    }
  }

  return output;
};
