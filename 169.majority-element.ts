/*
 * @lc app=leetcode id=169 lang=typescript
 * @lcpr version=21917
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
    const sorted = nums.sort((a,b) => a - b) 
    return sorted[Math.floor(nums.length / 2)]

};
// @lc code=end



/*
// @lcpr case=start
// [3,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [2,2,1,1,1,2,2]\n
// @lcpr case=end

 */

