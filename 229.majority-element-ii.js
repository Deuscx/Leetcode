/*
 * @lc app=leetcode id=229 lang=javascript
 * @lcpr version=21917
 *
 * [229] Majority Element II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function majorityElement(nums) {
  const num = nums.length / 3

  const countMap = nums.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur] += 1
    }
    else {
      acc[cur] = 1
    }
    return acc
  }, {})

  return Object.entries(countMap).filter(([value, count]) => count > num).map(([value]) => value)
}
// @lc code=end

/*
// @lcpr case=start
// [3,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */
