/*
 * @lc app=leetcode id=456 lang=typescript
 * @lcpr version=21917
 *
 * [456] 132 Pattern
 */

// @lc code=start
function find132pattern(nums: number[]): boolean {
    let stack: number[] = []
    let num2: number = Number.MIN_SAFE_INTEGER;

    for (let i = nums.length - 1; i >= 0; i--) {
        const element = nums[i];

        if (element < num2) {
            return true
        }

        while (stack.length && element > stack[stack.length - 1]) {
            num2 = stack.pop()
        }

        stack.push(element)
    }

    return false
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [3,1,4,2]\n
// @lcpr case=end

// @lcpr case=start
// [-1,3,2,0]\n
// @lcpr case=end

 */

