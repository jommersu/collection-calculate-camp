'use strict';
function sortNumber(a,b){
    return b - a ;
}
var rank_asc = function(collection){
    let result = [];
    result = collection.sort(sortNumber);
  return result;
};

module.exports = rank_asc;
