/*
 * @lc app=leetcode.cn id=122 lang=typescript
 * @lcpr version=30204
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function maxProfit(prices: number[]): number {
  const len = prices.length
  const dp = Array.from({ length: len }, () => 0)
  for (let i = 1; i < len; i++) {
    dp[i] = dp[i - 1] + Math.max(0, prices[i] - prices[i - 1])
  }
  return dp[len - 1]
};
// @lc code=end

/*
// @lcpr case=start
// [7,1,5,3,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [7,6,4,3,1]\n
// @lcpr case=end

 */
