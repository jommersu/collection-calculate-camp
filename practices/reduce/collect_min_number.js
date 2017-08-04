'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  let num = collection[0];
  for(let item of collection){
      if(item < num){
          num = item;
      }
  }
  return num;
}

module.exports = collect_min_number;

