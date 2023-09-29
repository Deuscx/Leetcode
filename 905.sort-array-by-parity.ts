/*
 * @lc app=leetcode id=905 lang=typescript
 * @lcpr version=21917
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
function sortArrayByParity(nums: number[]): number[] {
    const res: number[] = []
    nums.forEach((value) => {
        if (value % 2 === 0) {
            res.unshift(value)
        } else {
            res.push(value)
        }
    })
    return res
};
// @lc code=end



/*
// @lcpr case=start
// [3,1,2,4]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */

