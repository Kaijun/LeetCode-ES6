/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  "use strict"
  let numsHash = {}
  let results = []
  nums.forEach((item, idx) => {
    let diff = target - item
    if(numsHash[diff] !== undefined)
      results = [idx, numsHash[diff]]
    numsHash[item] = idx
  })
  return results
}