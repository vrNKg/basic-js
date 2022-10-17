const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
  let secretName=[];
  for (memberName in members){
    if(typeof members[memberName]==='string' && members.length>1) {
      secretName.push(/[a-zA-Z]/g.exec(members[memberName]));
    }
  }
  return secretName.join('').toUpperCase().split('').sort().join('');
}


module.exports = {
  createDreamTeam
};
