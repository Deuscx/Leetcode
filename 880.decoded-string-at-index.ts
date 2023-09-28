/*
 * @lc app=leetcode id=880 lang=typescript
 * @lcpr version=21917
 *
 * [880] Decoded String at Index
 */

// @lc code=start

function isNumber(char: string) {
    return !isNaN(Number(char))
}
function decodeAtIndex(s: string, k: number): string {
    let length = 0;
    for (const char of s) {
        let pre = length
        if (isNumber(char)) {
            length *= Number(char)
            if (length >= k)
                return decodeAtIndex(s, (k - 1) % pre + 1) 
        }else{
            length += 1
            if(length === k) return char
        }
    }
};
// @lc code=end



/*
// @lcpr case=start
// "cpmxv8ewnfk3xxcilcmm68d2ygc88daomywc3imncfjgtwj8nrxjtwhiem5nzqnicxzo248g52y72v3yujqpvqcssrofd99lkovg"\n480551547\n
// @lcpr case=end

// @lcpr case=start
// "ha22"\n5\n
// @lcpr case=end

// @lcpr case=start
// "a2345678999999999999999"\n1\n
// @lcpr case=end

 */

