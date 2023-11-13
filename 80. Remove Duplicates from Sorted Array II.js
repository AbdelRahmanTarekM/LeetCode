// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function (nums) {
//   let p1 = 0,
//     p2 = 0,
//     l = nums.length - 1,
//     k = 0;

//   while (p1 < nums.length) {
//     if (nums[p1] === nums[p1 + 1]) {
//       p1++;
//       p2 = p1 + 1;
//       if (p1 >= l) break;
//     }
//     k++;
//     while (p2 < nums.length && nums[p2] === nums[p1]) {
//       p2++;
//     }
//     p1++;
//     nums[p1] = nums[p2];
//     k++;
//     if (nums[p2 + 1] === nums[p2]) {
//       nums[p1] = nums[p2];
//     }
//   }
//   return k;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = nums.length;
  let l = 0;
  let mid = 1;
  let r = 2;

  while (r < nums.length) {
    if (nums[l] === nums[mid] && nums[r] === nums[mid]) {
      nums[r] = "_";
      k--;
      r++;
    } else if (nums[l] === nums[mid] && nums[mid] !== nums[r]) {
      l = r;
      mid = l + 1;
      r = mid + 1;
    } else {
      l++;
      mid++;
      r++;
    }
  }
  let i = 0;
  let j = 1;

  while (j < nums.length) {
    if (nums[i] === "_" && nums[j] !== "_") {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j++;
    } else if (nums[i] === "_" && nums[j] === "_") {
      j++;
    } else {
      i++;
      j++;
    }
  }
  return k;
};

console.log(removeDuplicates([1, 2, 2, 2, 3, 3]));
