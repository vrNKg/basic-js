const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
// function transform(/* arr */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function transform(arr) {
  let array = Array.from(arr);
  if(!Array.isArray(arr)) throw new Error("Error: 'arr' parameter must be an instance of the Array!");
  
  for (let i = 0; i < array.length; i++) {
       if (typeof array[i] === 'string') {
       if (array[i] == '--discard-next') {
             if(i < array.length-1) {
              array.splice(i+1, 1); 
              }
       } 
       else if (array[i] == '--discard-prev') {
       if(i > 0){
        array.splice(i-1, 1);
               i--;
             }
       } 
       else if (array[i] == '--double-next') {
        if(i < array.length-1) {
          array.splice(i+1, 0, array[i+1]);
 
        }
       }
       else if (array[i] == '--double-prev') {
        if(i > 0 ){
          array.splice(i-1, 0, array[i-1]);
               i++;
             }
 }       
 array.splice(i, 1);
           i--;
   }
 }
     return arr
 }


module.exports = {
  transform
};
