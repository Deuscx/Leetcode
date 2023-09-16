/*
 * @lc app=leetcode id=1 lang=typescript
 * @lcpr version=21913
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const diff = target - num;
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(num, i);
    }

};
// @lc code=end



/*
// @lcpr case=start
// [2,7,11,15]\n9\n
// @lcpr case=end

// @lcpr case=start
// [3,2,4]\n6\n
// @lcpr case=end

// @lcpr case=start
// [3,3]\n6\n
// @lcpr case=end

 */

