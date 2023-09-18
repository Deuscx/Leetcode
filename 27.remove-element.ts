/*
 * @lc app=leetcode id=27 lang=typescript
 * @lcpr version=21914
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
    let index = 0
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (element !== val) {
            nums[index++] = element
        }
    }
    return index
};
// @lc code=end



/*
// @lcpr case=start
// [3,2,2,3]\n3\n
// @lcpr case=end

// @lcpr case=start
// [0,1,2,2,3,0,4,2]\n2\n
// @lcpr case=end

 */

