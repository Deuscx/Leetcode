/*
 * @lc app=leetcode.cn id=3191 lang=typescript
 * @lcpr version=30204
 *
 * [3191] 使二进制数组全部等于 1 的最少操作次数 I
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function minOperations(nums: number[]): number {
  let count = 0
  for (let i = 2; i < nums.length; i++) {
    if (nums[i - 2] === 0) {
      count += 1

      nums[i - 2] = nums[i - 2] ^ 1
      nums[i - 1] = nums[i - 1] ^ 1
      nums[i] = nums[i] ^ 1
    }
  }

  if (nums.reduce((a, b) => a + b, 0) === nums.length)
    return count

  return -1
};
// @lc code=end

/*
// @lcpr case=start
// [0,1,1,1,0,0]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,1,1]\n
// @lcpr case=end

 */
