/*
 * @lc app=leetcode.cn id=1358 lang=typescript
 * @lcpr version=30204
 *
 * [1358] 包含所有三种字符的子字符串数目
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function numberOfSubstrings(s: string): number {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 3; j <= s.length; j++) {
      const subStr = s.slice(i, j)
      if (['a', 'b', 'c'].every(item => subStr.includes(item))) {
        count += s.length - j + 1
        break
      }
    }
  }

  return count
};
// @lc code=end

/*
// @lcpr case=start
// "abcabc"\n
// @lcpr case=end

// @lcpr case=start
// "aaacb"\n
// @lcpr case=end

// @lcpr case=start
// "abc"\n
// @lcpr case=end

 */
