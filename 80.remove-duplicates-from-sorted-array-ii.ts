/*
 * @lc app=leetcode id=80 lang=typescript
 * @lcpr version=21917
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function removeDuplicates(nums: number[]): number {
  let current = 2
  // 从第三个元素开始遍历
  for (let i = 2; i < nums.length; i++) {
    // 如果当前元素与前两个元素不同，则将当前元素添加到栈中
    if (nums[i] !== nums[current - 2]) {
      nums[current] = nums[i]
      current++
    }
  }
  return current
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
