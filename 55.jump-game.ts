/*
 * @lc app=leetcode.cn id=55 lang=typescript
 * @lcpr version=30204
 *
 * [55] 跳跃游戏
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function canJump(nums: number[]): boolean {
  // use a variable to hold the furthest point we can reach so far, ie. furthest = max(furthest, i+nums[i]). Then think of a way to use it for judging if we can get to the end.
  let furthest = 0
  for (let i = 0; i < nums.length; i++) {
    if (i > furthest) {
      return false
    }
    furthest = Math.max(furthest, i + nums[i])
  }
  return true
};
// @lc code=end

/*
// @lcpr case=start
// [2,3,1,1,4]\n
// @lcpr case=end

// @lcpr case=start
// [3,2,1,0,4]\n
// @lcpr case=end

 */
