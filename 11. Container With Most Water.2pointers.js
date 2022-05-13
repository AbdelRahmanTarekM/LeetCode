/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0;
  let pointer1 = 0;
  let pointer2 = height.length - 1;
  while (pointer1 < pointer2) {
    let temp =
      (height[pointer1] > height[pointer2]
        ? height[pointer2]
        : height[pointer1]) *
      (pointer2 - pointer1);
    if (temp > maxArea) maxArea = temp;
    if (height[pointer1] < height[pointer2]) {
      pointer1++;
    } else {
      pointer2--;
    }
  }
  return maxArea;
};
