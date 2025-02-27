/*
 * @lc app=leetcode id=1337 lang=typescript
 * @lcpr version=21913
 *
 * [1337] The K Weakest Rows in a Matrix
 */

// @lc code=start
function kWeakestRows(mat: number[][], k: number): number[] {
  const row_sum = []
  mat.forEach((value, index) => {
    row_sum.push([sum(value), index])
  })
  row_sum.sort((a, b) => a[0] - b[0])
  return row_sum.map(row => row[1]).slice(0, k)
};

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0)
}
// @lc code=end

/*
// @lcpr case=start
// [[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]]\n3\n
// @lcpr case=end

// @lcpr case=start
// [[1,0,0,0],[1,1,1,1],[1,0,0,0],[1,0,0,0]]\n2\n
// @lcpr case=end

 */
