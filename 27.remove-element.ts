/*
 * @lc app=leetcode id=27 lang=typescript
 * @lcpr version=21914
 *
 * [27] Remove Element
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function removeElement(nums: number[], val: number): number {
  let i = 0
  for (const num of nums) {
    if (num !== val)
      nums[i++] = num
  }

  return i
};
// @lc code=end

/*
// @lcpr case=start
// [3,2,2,3]\n3\n
// @lcpr case=end

// @lcpr case=start
// [0,1,2,2,3,0,4,2]\n2\n
// @lcpr case=end

 */
