/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // Initialize the unique number...
  let uniqNum = 0;
  // TRaverse all elements through the loop...
  for (let idx = 0; idx < nums.length; idx++) {
    // Concept of XOR...
    uniqNum = uniqNum ^ nums[idx];
  }
  return uniqNum; // Return the unique number...
};
