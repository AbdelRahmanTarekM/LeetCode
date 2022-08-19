/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    let x = s.charAt(i);
    if (map.has(x)) {
      let val = map.get(x);
      map.set(x, val + 1);
    } else {
      map.set(x, 1);
    }
  }
  let map2 = new Map();
  for (let i = 0; i < t.length; i++) {
    let x = t.charAt(i);
    if (map2.has(x)) {
      let val = map2.get(x);
      map2.set(x, val + 1);
    } else {
      map2.set(x, 1);
    }
  }
  if (map.size !== map2.size) return false;
  for (var [key, val] of map) {
    if (!map2.has(key)) return false;
    if (map2.get(key) !== val) return false;
  }
  return true;
};

console.log(isAnagram("aa", "a"));
