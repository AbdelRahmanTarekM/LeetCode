/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let zeroCount = 0;
  let oneCount = 0;
  let twoCount = 0;
  for (const num of nums) {
    switch (num) {
      case 0:
        zeroCount++;
        break;
      case 1:
        oneCount++;
        break;
      case 2:
        twoCount++;
        break;
    }
  }
  for (let i = 0; i < zeroCount; i++) nums[i] = 0;
  for (let i = zeroCount; i < zeroCount + oneCount; i++) nums[i] = 1;
  for (let i = zeroCount + oneCount; i < zeroCount + oneCount + twoCount; i++)
    nums[i] = 2;
};
