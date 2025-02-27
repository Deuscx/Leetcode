/*
 * @lc app=leetcode id=389 lang=typescript
 * @lcpr version=21917
 *
 * [389] Find the Difference
 */

// @lc code=start
function findTheDifference(s: string, t: string): string {
  const tMap = t.split('').reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 1
    }
    else {
      acc[cur] += 1
    }
    return acc
  }, {})

  const sMap = s.split('').reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 1
    }
    else {
      acc[cur] += 1
    }

    return acc
  }, {})

  for (const char of Object.keys(tMap)) {
    if (tMap[char] === sMap[char])
      continue
    return char
  }
};
// @lc code=end

/*
// @lcpr case=start
// "abcd"\n"abcde"\n
// @lcpr case=end

// @lcpr case=start
// ""\n"y"\n
// @lcpr case=end

 */
