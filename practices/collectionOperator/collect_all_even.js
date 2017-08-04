'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  let result = [];
  for(let item of collection){
      if(item % 2 == 0){
          result.push(item);
      }
  }
  return result;
}

module.exports = collect_all_even;
