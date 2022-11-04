/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = ["a", "e", "o", "u", "i", "A", "E", "O", "U", "I"];
  let p1 = 0;
  let p2 = s.length - 1;
  let arr = s.split("");
  while (p1 < p2) {
    if (vowels.includes(s.charAt(p1)) && vowels.includes(s.charAt(p2))) {
      let tmp = s.charAt(p1);
      arr[p1] = s.charAt(p2);
      arr[p2] = tmp;
      p1++;
      p2--;
    }
    if (!vowels.includes(s.charAt(p1))) {
      p1++;
    }
    if (!vowels.includes(s.charAt(p2))) {
      p2--;
    }
  }
  return arr.join("");
};
