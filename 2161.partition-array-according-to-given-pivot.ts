/*
 * @lc app=leetcode.cn id=2161 lang=typescript
 * @lcpr version=30204
 *
 * [2161] 根据给定数字划分数组
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function pivotArray(nums: number[], pivot: number): number[] {
  const startNums: number[] = []
  const endNums: number[] = []
  const equalNums: number[] = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > pivot) {
      endNums.push(nums[i])
    }
    else if (nums[i] < pivot) {
      startNums.push(nums[i])
    }
    else {
      equalNums.push(nums[i])
    }
  }

  return [...startNums, ...equalNums, ...endNums]
};
// @lc code=end

/*
// @lcpr case=start
// [9,12,5,10,14,3,10]\n10\n
// @lcpr case=end

// @lcpr case=start
// [-3,4,3,2]\n2\n
// @lcpr case=end

 */
