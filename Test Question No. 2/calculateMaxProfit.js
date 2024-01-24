function calculateMaxProfit(stockPrices) {
  if (stockPrices.length < 2) {
    return 0; // No profit can be obtained with less than 2 prices
  }

  let minPrice = stockPrices[0]; // Initialize the minimum price to the first value
  let maxProfit = 0; // Initialize the maximum profit to 0

  for (let i = 1; i < stockPrices.length; i++) {
    const currentPrice = stockPrices[i];
    minPrice = Math.min(minPrice, currentPrice); // Update minimum price if current price is lower
    const profit = currentPrice - minPrice; // Calculate the potential profit
    maxProfit = Math.max(maxProfit, profit); // Update maximum profit if the potential profit is higher
  }

  return maxProfit;
}

const stockPriceList = [2, 3, 6, 4, 3];
console.log(calculateMaxProfit(stockPriceList)); // Output: 4

// Test Case 1:
const stockPriceList1 = [4, 5, 2, 3, 6];
console.log(calculateMaxProfit(stockPriceList1)); // Output: 4
// Explanation: The maximum profit can be obtained by buying at day 1 (price 4) and selling at day 4 (price 6), resulting in a profit of 2.

// Test Case 2:
const stockPriceList2 = [7, 6, 4, 3, 1];
console.log(calculateMaxProfit(stockPriceList2)); // Output: 0
// Explanation: No profit can be achieved as the stock price is continuously decreasing.

// Test Case 3:
const stockPriceList3 = [7, 9, 10, 5, 2, 3, 1];
console.log(calculateMaxProfit(stockPriceList3)); // Output: 3
// Explanation: The maximum profit can be obtained by buying at day 4 (price 2) and selling at day 6 (price 3), resulting in a profit of 1.

// Test Case 4:
const stockPriceList4 = [5];
console.log(calculateMaxProfit(stockPriceList4)); // Output: 0
// Explanation: No profit can be obtained as there is only one price.

// Test Case 5:
const stockPriceList5 = [8, 7, 6, 5, 4, 3, 2, 1];
console.log(calculateMaxProfit(stockPriceList5)); // Output: 0
// Explanation: No profit can be achieved as the stock price is continuously decreasing.
