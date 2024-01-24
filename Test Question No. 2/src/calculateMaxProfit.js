"use strict";
function calculateMaxProfit(prices) {
    var maxProfit = 0;
    var minPrice = Number.MAX_VALUE;
    for (var _i = 0, prices_1 = prices; _i < prices_1.length; _i++) {
        var price = prices_1[_i];
        minPrice = Math.min(minPrice, price);
        var profit = price - minPrice;
        maxProfit = Math.max(maxProfit, profit);
    }
    return maxProfit;
}
// Test cases
var testCases = [
    // @ts-ignore
    ([7, 1, 5, 3, 6, 4], 5),
    // @ts-ignore
    ([7, 6, 4, 3, 1], 0),
    // @ts-ignore
    ([1, 2, 3, 4, 5], 4),
    // @ts-ignore
    ([2, 3, 6, 4, 3], 4),
    // @ts-ignore
    ([8, 9, 2, 5, 7, 6], 5),
    // @ts-ignore
    ([10, 7, 5, 8, 11, 9], 6),
    // @ts-ignore
    ([1], 0),
    // @ts-ignore
    ([], 0),
];
// Function to run all test cases.
function runTests() {
    // @ts-ignore
    for (var _i = 0, _a = testCases.entries(); _i < _a.length; _i++) {
        var _b = _a[_i], index = _b[0], _c = _b[1], prices = _c[0], expected = _c[1];
        var result = calculateMaxProfit(prices);
        if (result !== expected) {
            throw new Error("Test case ".concat(index + 1, " failed: expected ").concat(expected, ", got ").concat(result));
        }
        console.log("Test case ".concat(index + 1, " passed."));
    }
}
// Execute the tests.
runTests();
