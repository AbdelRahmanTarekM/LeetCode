// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var countSmaller = function (nums) {
//   let countsArr = [];
//   let sortedArr = nums.slice(0);
//   sortedArr.sort((a, b) => b - a);
//   for (let i = 0; i < nums.length; i++) {
//     let index = sortedArr.indexOf(nums[i]);
//     if (sortedArr[index] === sortedArr[index + 1]) {
//       while (
//         sortedArr[index] === sortedArr[index + 1] &&
//         index < sortedArr.length
//       ) {
//         index++;
//       }
//     }
//     countsArr.push(sortedArr.length - 1 - index);
//     sortedArr.splice(index, 1);
//   }
//   return countsArr;
// };

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var countSmaller = function (nums) {
//   let counts = [];
//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;
//     for (let j = i; j < nums.length; j++) {
//       if (nums[j] < nums[i]) {
//         count++;
//       }
//     }
//     counts.push(count);
//   }
//   return counts;
// };

const mid = function (left, right) {
  return Math.floor((left + right) / 2);
};

const TreeNode = class {
  constructor(lBound, rBound) {
    this.mid = mid(lBound, rBound);
    this.count = 0;
    if (lBound !== rBound) {
      this.left = new TreeNode(lBound, this.mid);
      this.right = new TreeNode(this.mid + 1, rBound);
    }
  }

  numSmaller(val) {
    if (!this.left) {
      return 0;
    }
    if (val <= this.mid) {
      return this.left.numSmaller(val);
    }
    return this.left.count + this.right.numSmaller(val);
  }

  addVal(val) {
    this.count += 1;
    if (this.left !== undefined) {
      if (val <= this.mid) {
        this.left.addVal(val);
      } else {
        this.right.addVal(val);
      }
    }
  }
};

var countSmaller = function (nums) {
  const tree = new TreeNode(-1e4, 1e4);
  const counts = [];
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    const val = nums[i];
    counts.unshift(tree.numSmaller(val));
    tree.addVal(val);
  }

  return counts;
};

console.log(countSmaller([5, 2, 6, 1]));
