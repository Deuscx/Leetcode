/*
 * @lc app=leetcode id=26 lang=typescript
 * @lcpr version=21914
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function removeDuplicates(nums: number[]): number {
  // j始终在开头
  let j = 0
  // i 遍历数组
  for (let i = 1; i < nums.length; i++) {
    // 将不重复的元素添加到数组开头
    if (nums[i] !== nums[j]) {
      j++
      nums[j] = nums[i]
    }
  }
  return j + 1
};
// @lc code=end

/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,1,1,1,2,2,3,3,4]\n
// @lcpr case=end

 */
