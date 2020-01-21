/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let contents = path.split('/')
  let stack = []
  for (let i = 0; i < contents.length; i++) {
    let str = contents[i]
    if (str === '..') {
      stack.pop()
    } else {
      if (str.length > 0 && str !== '.') {
        stack.push(str)
      }
    }
  }

  return '/' + stack.join('/')
};
// @lc code=end

