/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  if (!intervals.length) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];

  for (let index = 1; index < intervals.length; index++) {
    if (intervals[index][0] <= result[result.length - 1][1]) {
      result[result.length - 1][1] = Math.max(
        intervals[index][1],
        result[result.length - 1][1]
      );
    } else {
      result.push(intervals[index]);
    }
  }
  return result;
}
