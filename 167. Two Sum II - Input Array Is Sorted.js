/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let p1 = 0;
  let result = [];
  while (p1 < numbers.length && result.length < 2) {
    let tmpTarget = target - numbers[p1];
    let p2 = p1 + 1;
    while (p2 < numbers.length && numbers[p2] <= tmpTarget) {
      if (numbers[p2] === tmpTarget) {
        result.push(p1 + 1);
        result.push(p2 + 1);
        break;
      }
      p2++;
    }

    p1++;
  }
  return result;
};

//way faster solution

var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    if (numbers[left] + numbers[right] === target) {
      return [left + 1, right + 1];
    }
    if (numbers[left] + numbers[right] < target) {
      left++;
    } else {
      right--;
    }
  }
  return [null, null];
};
