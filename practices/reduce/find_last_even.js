'use strict';

function find_last_even(collection) {
  //在这里写入代码
  let num = 0;
  for(let item of collection){
      if(item % 2 == 0){
          num = item;
      }
  }
  return num;
}

module.exports = find_last_even;
