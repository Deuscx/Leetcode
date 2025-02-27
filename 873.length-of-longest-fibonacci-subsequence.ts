/*
 * @lc app=leetcode.cn id=873 lang=typescript
 * @lcpr version=30204
 *
 * [873] Length of Longest Fibonacci Subsequence
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function lenLongestFibSubseq(arr: number[]): number {
  const n = arr.length
  const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => 0))
  let result = 0

  for (let i = 2; i < n; i++) {
    let l = 0
    let r = i - 1

    while (l < r) {
      const sum = arr[l] + arr[r]
      if (sum > arr[i]) {
        r--
      }
      else if (sum < arr[i]) {
        l++
      }
      else {
        dp[r][i] = dp[l][r] + 1
        result = Math.max(result, dp[r][i])
        l++
        r--
      }
    }
  }

  if (result === 0)
    return 0

  return result + 2
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5,6,7,8]\n
// @lcpr case=end

// @lcpr case=start
// [1,3,7,11,12,14,18]\n
// @lcpr case=end

 */
