function calculateMaxProfit(prices: number[]): number {
    let maxProfit: number = 0;
    let minPrice: number = Number.MAX_VALUE;

    for (const price of prices) {
        minPrice = Math.min(minPrice, price);
        const profit: number = price - minPrice;
        maxProfit = Math.max(maxProfit, profit);
    }

    return maxProfit;
}

// Test cases
const testCases: [number[], number][] = [
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
function runTests(): void {
    // @ts-ignore
    for (const [index, [prices, expected]] of testCases.entries()) {
        const result = calculateMaxProfit(prices);
        if (result !== expected) {
            throw new Error(`Test case ${index + 1} failed: expected ${expected}, got ${result}`);
        }
        console.log(`Test case ${index + 1} passed.`);
    }
}

// Execute the tests.
runTests();
