/*
 * @lc app=leetcode.cn id=121 lang=typescript
 * @lcpr version=30204
 *
 * [121] 买卖股票的最佳时机
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function maxProfit(prices: number[]): number {
  let maxProfit = 0
  let minCost = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < prices.length; i++) {
    minCost = Math.min(minCost, prices[i])
    maxProfit = Math.max(maxProfit, prices[i] - minCost)
  }

  return maxProfit
};
// @lc code=end

/*
// @lcpr case=start
// [7,1,5,3,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [7,6,4,3,1]\n
// @lcpr case=end

 */
