'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
/*  let flag = [];
  for(let i = 0; i < collection_a.length; i++){
      if(collection_a[i] === collection_b[i]){
          flag.push(1);
      }else{
          flag.push(0);
      }
  }
  for(let item of flag){
      if(item === 0){
          return false;
      }
  }
  return true;*/

  if(collection_b.toString() === collection_a.toString()){
    return true;
  }else{
    return false;
  }
}

module.exports = compare_collections;


