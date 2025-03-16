/*
 * @lc app=leetcode.cn id=875 lang=typescript
 * @lcpr version=30204
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function minEatingSpeed(piles: number[], h: number): number {
  let left = 1
  let right = Math.max(...piles)
  // [left, right)
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)
    const time = getTime(piles, mid)
    // 可以在h小时内吃完，[left, mid)
    if (time <= h) {
      right = mid
    }
    // 不能在h小时内吃完，[mid + 1, right)
    else {
      left = mid + 1
    }
  }
  return left
};

function getTime(piles: number[], speed: number): number {
  let time = 0
  for (const pile of piles) {
    time += Math.ceil(pile / speed)
  }
  return time
}
// @lc code=end

/*
// @lcpr case=start
// [3,6,7,11]\n8\n
// @lcpr case=end

// @lcpr case=start
// [30,11,23,4,20]\n5\n
// @lcpr case=end

// @lcpr case=start
// [30,11,23,4,20]\n6\n
// @lcpr case=end

 */
