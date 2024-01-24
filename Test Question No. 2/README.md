## How to run code
To run this TypeScript code, you need to have TypeScript installed in your environment. You can compile the TypeScript code to JavaScript using the TypeScript compiler (tsc) and then run the resulting JavaScript code with Node.js. Here's how you can do it:
1. Install TypeScript globally (if you haven't already):
```
npm install -g typescript
```
1. Save the TypeScript code to a file, for example, calculateMaxProfit.ts.
2. Compile the TypeScript code to JavaScript:
```
tsc calculateMaxProfit.ts
```
3. Run the JavaScript code:
```
node calculateMaxProfit.js
```
## Analysis Time Complexity and Space Complexity
### Time Complexity
Time complexity refers to the amount of time an algorithm takes to complete as a function of the length of the input. It's often expressed using Big O notation, which provides an upper bound on the time requirements and is useful for describing the worst-case scenario.

For the calculateMaxProfit function, the time complexity is O(n), where n is the number of days (or the length of the array of stock prices). This is because the function contains a single loop that iterates through each element of the array exactly once.
### Space Complexity
Space complexity refers to the amount of memory space required by an algorithm as a function of the length of the input. Like time complexity, it's often expressed using Big O notation to describe the worst-case space requirements.

The calculateMaxProfit function has a space complexity of O(1), which means constant space complexity. This is because the function allocates a fixed amount of space regardless of the input size: variables maxProfit and minPrice require a constant amount of memory, and no additional space that scales with input size is used.

### Conclusion
- Time Complexity: O(n) - The function needs to iterate through each stock price once.
- Space Complexity: O(1) - The function uses a constant amount of space.

## Add more test cases
The additional test cases for the calculateMaxProfit function have all passed. This indicates that the function correctly computes the maximum profit for various scenarios:

1. Prices go up and down; the maximum profit should be from the lowest buy price to the highest sell price after.
2. Prices only go down; no profit is possible, so the result should be 0.
3. Prices only go up; the maximum profit should be from the first day to the last day.
4. Prices fluctuate with multiple chances to buy low and sell high; the maximum profit should be from the lowest to the highest.
5. Prices start high, dip, and then rise again; the profit should be from the lowest dip to the highest subsequent price.
6. Prices fluctuate significantly; the maximum profit should be from the lowest to the highest price, not necessarily the first and last day.
7. Only one price is available; no profit is possible, so the result should be 0.
8. No prices available; no profit is possible, so the result should be 0.


