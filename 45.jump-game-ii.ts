/*
 * @lc app=leetcode.cn id=45 lang=typescript
 * @lcpr version=30204
 *
 * [45] 跳跃游戏 II
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function jump(nums: number[]): number {
  let furthest = 0
  let end = 0 // 记录当前能跳到的最远位置
  let steps = 0 // 记录跳跃次数
  for (let i = 0; i < nums.length - 1; i++) {
    furthest = Math.max(furthest, i + nums[i])
    if (i === end) {
      end = furthest
      steps++
      if (end >= nums.length - 1) {
        break
      }
    }
  }
  return steps
};
// @lc code=end

/*
// @lcpr case=start
// [2,3,1,1,4]\n
// @lcpr case=end

// @lcpr case=start
// [2,3,0,1,4]\n
// @lcpr case=end

 */
