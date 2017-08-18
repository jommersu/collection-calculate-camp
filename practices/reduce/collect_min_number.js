'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  /*
  let num = collection[0];
  for(let item of collection){
      if(item < num){
          num = item;
      }
  }*/
  let num = collection.reduce((a , b) => a < b ? a : b);
  return num;
}

module.exports = collect_min_number;

