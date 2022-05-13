/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0;
  height.forEach((line, index) => {
    for (let i = index; i < height.length; i++) {
      let temp = (line > height[i] ? height[i] : line) * (i - index);
      if (temp > maxArea) maxArea = temp;
    }
  });

  return maxArea;
};
