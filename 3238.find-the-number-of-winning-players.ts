/*
 * @lc app=leetcode id=3238 lang=typescript
 * @lcpr version=30204
 *
 * [3238] Find the Number of Winning Players
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function winningPlayerCount(n: number, pick: number[][]): number {
  const players = new Set()

  const map = new Map<number, Map<number, number>>()

  for (const [player, color] of pick) {
    if (players.has(player)) {
      continue
    }

    if (!map.has(player)) {
      map.set(player, new Map<number, number>())
    }

    const colorsMap = map.get(player)
    const colorCount = (colorsMap!.get(color) || 0) + 1
    if (colorCount > player) {
      players.add(player)
    }
    colorsMap!.set(color, colorCount)
  }

  return players.size
};
// @lc code=end

/*
// @lcpr case=start
// 4\n[[0,0],[1,0],[1,0],[2,1],[2,1],[2,0]]\n
// @lcpr case=end

// @lcpr case=start
// 5\n[[1,1],[1,2],[1,3],[1,4]]\n
// @lcpr case=end

// @lcpr case=start
// 5\n[[1,1],[2,4],[2,4],[2,4]]\n
// @lcpr case=end

 */
