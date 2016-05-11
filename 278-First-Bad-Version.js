/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = (isBadVersion) => {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return (n) => {
      "use strict";
      let start = 1;
      let end = n;
      let bad = -1;
      while(start<=end){
        let mid = Math.floor((start + end)/2);
        if(isBadVersion(mid)===true){
          end = mid-1;
          bad = mid
        }
        else{
          start = mid+1;
        }
      }
      return bad;
    };
};
// Binary Search: only for orded list/array. 二分法遍历整个数组! 变种, 不是找某个值