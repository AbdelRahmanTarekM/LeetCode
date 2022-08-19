/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  var patt = patternarr(pattern);
  return words.filter((e) => patternarr(e) == patt);
};

const patternarr = function (str) {
  var result = "";

  for (let i = 0; i < str.length; i++) {
    //finding the first index
    result += str.indexOf(str[i]);
  }
  return result;
};

console.log(patternarr("abbc"));
