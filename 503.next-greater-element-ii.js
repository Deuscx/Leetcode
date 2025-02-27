/*
 * @lc app=leetcode id=503 lang=javascript
 * @lcpr version=21917
 *
 * [503] Next Greater Element II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function nextGreaterElements(nums) {
  const n = nums.length
  const res = Array.from({ length: n }, () => -1)

  // 递减栈
  const indexs = []

  for (let i = 0; i < n * 2; i++) {
    while (indexs.length && nums[i % n] > nums[indexs[indexs.length - 1]]) {
      const index = indexs.pop()
      res[index] = nums[i % n]
    }
    indexs.push(i % n)
  }
  return res
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,3]\n
// @lcpr case=end

 */
