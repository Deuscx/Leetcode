/*
 * @lc app=leetcode.cn id=2460 lang=typescript
 * @lcpr version=30204
 *
 * [2460] Apply Operations to an Array
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function applyOperations(nums: number[]): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2
      nums[i + 1] = 0
    }
  }
  return nums.filter(num => num !== 0).concat(nums.filter(num => num === 0))
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,2,1,1,0]\n
// @lcpr case=end

// @lcpr case=start
// [0,1]\n
// @lcpr case=end

 */
