/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = 0;
  let p2 = 0;
  if (n > 0)
    while (p2 < n) {
      if (nums1[p1] < nums2[p2]) {
        if (nums1[p1] === 0) nums1.splice(p1, 1);
        else p1++;
      } else {
        nums1.splice(p1, 0, nums2[p2]);
        p2++;
      }
    }
  console.log(nums1);
};

merge([2, 0], 1, [1], 1);

mergeSol = function (nums1, m, nums2, n) {
  m--;
  n--;
  let i = nums1.length - 1;
  while (i >= 0) {
    if (n > -1 && m > -1 && nums1[m] >= nums2[n]) {
      nums1[i] = nums1[m];
      nums1[m] = nums2[n];
      m--;
    } else if (n > -1) {
      nums1[i] = nums2[n--];
    }
    i--;
  }
};
