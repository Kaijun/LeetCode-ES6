/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    "use strict"
    let map = {};
    let left = 0;
    let max = 0;
    s.split('').forEach((c, idx) => {
        left = (map[c]+1) ? Math.max(left, map[c]+1) : left
        map[c] = idx
        max = Math.max(max, idx-left+1)
    })
    return max
};

/* Use HashMap to increase time complexity. as #1 did */