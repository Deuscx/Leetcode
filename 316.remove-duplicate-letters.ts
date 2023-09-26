/*
 * @lc app=leetcode id=316 lang=typescript
 * @lcpr version=21917
 *
 * [316] Remove Duplicate Letters
 */

// @lc code=start
function removeDuplicateLetters(s: string): string {
    const mp = {}
    
    for (const char of s) {
        if(mp[char]){
            mp[char] += 1
        } else {
            mp[char] = 1
        }
    }

    let ans: string[]= []
    for (const currentChar of s) {
        mp[currentChar] -= 1;
        if(ans.includes(currentChar)) continue;

        while(ans.length && ans[ans.length - 1] > currentChar && mp[ans[ans.length - 1]]){
           ans.pop()            
        }
        ans.push(currentChar)
    }
    
    return ans.join('')
};
// @lc code=end



/*
// @lcpr case=start
// "bcabc"\n
// @lcpr case=end

// @lcpr case=start
// "cbacdcbc"\n
// @lcpr case=end

 */

