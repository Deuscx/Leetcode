/*
 * @lc app=leetcode id=80 lang=typescript
 * @lcpr version=21917
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let i = 0
  for (const item of nums) {
    if (i <= 1 || nums[i - 2] !== item) {
      nums[i] = item
      i++
    }
  }
  return i
};
// @lc code=end

/*
// @lcpr case=start
// [1,1,1,2,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,1,1,1,1,2,3,3]\n
// @lcpr case=end

 */
