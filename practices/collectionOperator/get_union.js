'use strict';
function includes(collection_a, ch){
    for(let item of collection_a){
        if(item === ch){
            return true;
        }
    }
    return false;
}
function get_union(collection_a, collection_b) {
  //在这里写入代码
  let result = [];
  for(let item of collection_a){
      result.push(item);
  }
  for(let item of collection_b){
    if(!includes(collection_a , item)){
      result.push(item);
    }
  }
  return result;
}

module.exports = get_union;

