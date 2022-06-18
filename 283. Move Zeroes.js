/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let pointer1 = 0;
  while (pointer1 < nums.length - 1) {
    if (nums[pointer1] === 0) {
      let temp = pointer1 + 1;
      while (nums[temp] === 0 && temp < nums.length - 1) {
        temp++;
      }
      nums[pointer1] = nums[temp];
      nums[temp] = 0;
    }
    pointer1++;
  }
};

let nums = [1, 0];
moveZeroes(nums);
console.log(nums);

//Faster solution
var moveZeroes = function (nums) {
  let numberOfZeroes = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i--, 1);
      numberOfZeroes++;
    }
  }
  nums.push(...new Array(numberOfZeroes).fill(0));
};
