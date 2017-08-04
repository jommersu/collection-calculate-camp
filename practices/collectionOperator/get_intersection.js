'use strict';
function includes(collection , ch){
    for(let item of collection){
        if(item === ch){
            return true;
        }
    }
    return false;
}
function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  let result = [];
  for(let item of collection_b){
      if(includes(collection_a, item)){
          result.push(item);
      }
  }
  return result;
}

module.exports = get_intersection;
