/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let s = "",
    carry = 0,
    temp,
    i = num1.length - 1,
    j = num2.length - 1;

  while (i >= 0 || j >= 0) {
    temp = carry;

    if (i >= 0) temp += Number(num1[i--]);
    if (j >= 0) temp += Number(num2[j--]);

    carry = Math.trunc(temp / 10);
    s += temp % 10;
  }

  if (carry) s += "1";

  // if  you like my solution, please upvote :) thanks
  return s.split("").reverse().join("");
};
let result = addStrings("9333852702227987", "85731737104263");
console.log(result);
