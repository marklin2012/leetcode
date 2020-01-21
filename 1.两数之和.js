/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let numMap = []
  for (let i = 0; i < nums.length; i++) {
    let ret = target - nums[i]
    if (numMap[ret] !== undefined) {
      return [numMap[ret], i]
    } else {
      numMap[nums[i]] = i
    }
  }
  return null
};
// @lc code=end

