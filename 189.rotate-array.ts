/*
 * @lc app=leetcode id=189 lang=typescript
 * @lcpr version=21917
 *
 * [189] Rotate Array
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const step = k % nums.length

  function reverse(nums: number[], start: number, end: number) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]]
      start++
      end--
    }
  }

  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, step - 1)
  reverse(nums, step, nums.length - 1)
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5,6,7]\n3\n
// @lcpr case=end

// @lcpr case=start
// [-1,-100,3,99]\n2\n
// @lcpr case=end

 */
