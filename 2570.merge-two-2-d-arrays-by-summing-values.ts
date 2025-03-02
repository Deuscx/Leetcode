/*
 * @lc app=leetcode.cn id=2570 lang=typescript
 * @lcpr version=30204
 *
 * [2570] Merge Two 2D Arrays by Summing Values
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
  const result: number[][] = []
  let i = 0
  let j = 0

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i][0] === nums2[j][0]) {
      result.push([nums1[i][0], nums1[i][1] + nums2[j][1]])
      i++
      j++
    }
    else if (nums1[i][0] < nums2[j][0]) {
      result.push(nums1[i])
      i++
    }
    else {
      result.push(nums2[j])
      j++
    }
  }
  if (i < nums1.length) {
    result.push(...nums1.slice(i))
  }
  else if (j < nums2.length) {
    result.push(...nums2.slice(j))
  }
  return result
};
// @lc code=end

/*
// @lcpr case=start
// [[1,2],[2,3],[4,5]]\n[[1,4],[3,2],[4,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[2,4],[3,6],[5,5]]\n[[1,3],[4,3]]\n
// @lcpr case=end

 */
