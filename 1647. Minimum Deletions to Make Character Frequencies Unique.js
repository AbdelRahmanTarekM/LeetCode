/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
  let dictionary = new Map();
  let deleteCount = 0;

  for (let letter of s) {
    dictionary.set(
      letter,
      dictionary.has(letter) ? dictionary.get(letter) + 1 : 1
    );
  }
  let row = Array.from(dictionary.values()).sort((a, b) => a - b);
  let isGood = false;
  while (!isGood) {
    isGood = true;

    for (let i = 0; i < row.length - 1; i++) {
      if (row[i] !== 0 && row[i] === row[i + 1]) {
        row[i]--;
        deleteCount++;
        isGood = false;
        break;
      }
    }
  }

  return deleteCount;
};

console.log(minDeletions("aaabbbcc"));
