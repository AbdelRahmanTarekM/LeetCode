/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let res = [];
  res.push(nums[0]);
  nums.reduce((acc, curr) => {
    res.push(acc + curr);
    return acc + curr;
  });
  return res;
};
