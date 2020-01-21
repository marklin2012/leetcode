/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let mappings = {
    '{': '}',
    '(': ')',
    '[': ']',
  }
  let stack = []
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (char in mappings) {
      stack.push(char)
    } else {
      if (char !== mappings[stack.pop()]) {
        return false
      }
    }
  }

  return !stack.length

};
// @lc code=end

