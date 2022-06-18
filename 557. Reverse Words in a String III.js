/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.split(" ");
  s.forEach((element, index) => {
    element = element.split("");
    element.reverse();
    s[index] = element.join("");
  });
  return s.join(" ");
};
