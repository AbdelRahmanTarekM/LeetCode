//Main function
var reorderedPowerOf2 = function (n) {
  let arr = FindDigitMapArray(n);

  for (let i = 0; i < 31; i++) {
    //Till value of power of 2 is less than 10^9 or 2^32 find all such power of 2
    let num = Math.pow(2, i);
    let twoArray = FindDigitMapArray(num);
    if (CheckTwoArraysAreEqual(arr, twoArray)) return true;
  }
  return false;
};

//Function to generate digit map
var FindDigitMapArray = function (n) {
  //For a given number it stores the count of digit on respective index.
  let arr = Array(10).fill(0);
  while (n > 0) {
    arr[n % 10] += 1;
    n /= 10;
    n = Math.floor(n);
  }
  return arr;
};

//Function to check if two arrays are equal
var CheckTwoArraysAreEqual = function (arr, twoArray) {
  let count = 0;
  for (let i = 0; i < 10; i++) {
    //Check if digit map of both numbers are equal
    if (twoArray[i] == arr[i]) {
      count++;
    }
  }
  if (count == 10) return true;
};
