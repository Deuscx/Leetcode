/*
 * @lc app=leetcode id=189 lang=typescript
 * @lcpr version=21917
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    let step = k % nums.length
    while (step > 0) {
        const v = nums.pop() as number
        nums.unshift(v)
        step--;
    }
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5,6,7]\n3\n
// @lcpr case=end

// @lcpr case=start
// [-1,-100,3,99]\n2\n
// @lcpr case=end

 */

