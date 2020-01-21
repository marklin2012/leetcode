/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let results = []
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let res = [nums[i], nums[j], nums[k]].sort()
          let isBreak = false
          for (let x = 0; x < results.length; x++) {
            let item = results[x]
            if (item[0] === res[0] && item[1] === res[1] && item[2] === res[2]) {
              isBreak = true
              break
            }
          }
          if (!isBreak) {
            results.push(res)
          }
        }
      }
    }
  }
  return results
};
// @lc code=end

