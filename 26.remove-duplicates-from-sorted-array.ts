/*
 * @lc app=leetcode id=26 lang=typescript
 * @lcpr version=21914
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let i = 0
  const readed = new Set()
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index]
    if (readed.has(element)) {
      continue
    }

    readed.add(element)
    nums[i++] = element
  }
  return i
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
