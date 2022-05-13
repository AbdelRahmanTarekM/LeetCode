/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let K = 0;

  for (let j = K + 1; j < nums.length; j++) {
    if (nums[j] > nums[K]) {
      K++;
      nums[K] = nums[j];
    }
  }

  return K + 1;
};

console.log(removeDuplicates([1, 1, 2]));
