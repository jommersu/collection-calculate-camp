'use strict';
function map_to_even(collection){
    let result = [];
    for(let item of collection){
        result.push(item * 2);
    }
  return result;
}
module.exports = map_to_even;
