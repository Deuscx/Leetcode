/*
 * @lc app=leetcode id=287 lang=typescript
 * @lcpr version=21914
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
function findDuplicate(nums: number[]): number {
  let slow = 0
  let fast = 0

  while (fast !== undefined && nums[fast] !== undefined) {
    slow = nums[slow]
    fast = nums[nums[fast]]

    if (fast === slow) {
      slow = 0
      while (slow !== fast) {
        slow = nums[slow]
        fast = nums[fast]
      }
      return slow
    }
  }

  return 0
};
// @lc code=end

/*
// @lcpr case=start
// [1,3,4,2,2]\n
// @lcpr case=end

// @lcpr case=start
// [3,1,3,4,2]\n
// @lcpr case=end

 */
