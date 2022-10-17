const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

// [a,[],[[[]]],a,s,c]


class DepthCalculator {
  calculateDepth(array) {
    let depth = 1;
    let maxDepth = 0; 
  for (let element of array) {
    if (Array.isArray(element)) {
      const newDepth = this.calculateDepth(element);
      maxDepth = newDepth>maxDepth?newDepth:maxDepth;
    }
  }
  return depth + maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
