const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numArr = Array.from(String(n), Number),
      minNum = 0;
  for (i=0; i < numArr.length; i++) {
    if (numArr[i] < numArr[i+1]) {
      minNum = numArr[i];
      break;
    }
  }
  numArr.splice(numArr.indexOf(minNum), 1);
  return +numArr.join('')
}

module.exports = {
  deleteDigit
};
