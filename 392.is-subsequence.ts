/*
 * @lc app=leetcode id=392 lang=typescript
 * @lcpr version=21914
 *
 * [392] Is Subsequence
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
  let start = 0
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[start]) {
      start++
    }
  }

  return start === s.length
};
// @lc code=end

/*
// @lcpr case=start
// "abc"\n"ahbgdc"\n
// @lcpr case=end

// @lcpr case=start
// "axc"\n"ahbgdc"\n
// @lcpr case=end

 */
