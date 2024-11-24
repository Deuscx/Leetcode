/*
 * @lc app=leetcode id=1456 lang=typescript
 * @lcpr version=30204
 *
 * [1456] Maximum Number of Vowels in a Substring of Given Length
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function maxVowels(s: string, k: number): number {
    let maxVowel =0 , ans = 0;

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let i =0 ; i< s.length; i++){

        if(vowels.includes(s[i])){
            maxVowel++;
        }

        // 固定窗口大小 0-i 的长度为 k
        if(i < k - 1)
            continue
        ans = Math.max(ans, maxVowel);

        // 移动窗口
        if(vowels.includes(s[i - k + 1])){
            maxVowel--;
        }
    }

    return ans;
};
// @lc code=end



/*
// @lcpr case=start
// "abciiidef"\n3\n
// @lcpr case=end

// @lcpr case=start
// "aeiou"\n2\n
// @lcpr case=end

// @lcpr case=start
// "leetcode"\n3\n
// @lcpr case=end

 */

