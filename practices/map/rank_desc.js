'use strict';
/*function sortNumber(a , b){
    return a - b ;
}*/
var rank_desc = function(collection){
/*    let result = [];
    result = collection.sort(sortNumber);
*/
  let result = collection.sort((a,b) => a-b);
  return result;
};

module.exports = rank_desc;
