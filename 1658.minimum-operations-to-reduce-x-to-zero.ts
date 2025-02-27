/*
 * @lc app=leetcode id=1658 lang=typescript
 * @lcpr version=21914
 *
 * [1658] Minimum Operations to Reduce X to Zero
 */

// @lc code=start
function minOperations(nums: number[], x: number): number {
  const target = nums.reduce((a, b) => a + b, 0) - x
  if (target < 0) {
    return -1
  }
  let sum = 0
  let left = 0
  let maxLen = Number.MIN_SAFE_INTEGER

  const len = nums.length
  for (let right = 0; right < len; right++) {
    sum += nums[right]
    while (sum > target) {
      sum -= nums[left++]
    }

    if (sum === target) {
      maxLen = Math.max(maxLen, right - left + 1)
    }
  }

  return maxLen === Number.MIN_SAFE_INTEGER ? -1 : len - maxLen
};
// @lc code=end

/*
// @lcpr case=start
// [1,1,4,2,3]\n5\n
// @lcpr case=end

// @lcpr case=start
// [5,6,7,8,9]\n4\n
// @lcpr case=end

// @lcpr case=start
// [3,2,20,1,1,3]\n10\n
// @lcpr case=end

 */
