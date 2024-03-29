/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  //   let k = 0;
  //   for (let i = 0; i < prices.length; i++) {
  //     for (let j = i + 1; j < prices.length; j++) {
  //       if (prices[j] > prices[i]) {
  //         if (prices[j] - prices[i] > k) {
  //           k = prices[j] - prices[i];
  //         }
  //       }
  //     }
  //   }
  //   return k;
  let maxProfit = 0;
  let minPrice = Number.MAX_VALUE;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
};
