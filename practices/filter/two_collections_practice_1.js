'use strict';
/*function includes(collection , ch){
    for(let item of collection){
        if(item === ch){
            return true;
        }
    }
    return false;
}*/
function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
  let result = collection_a.filter( ele => {
    return collection_b.includes(ele);

  });
  /*let result = [];
  for(let item of collection_a){
      if(includes(collection_b , item)){
          result.push(item);
      }
  }*/
  return result;
}

module.exports = choose_common_elements;
