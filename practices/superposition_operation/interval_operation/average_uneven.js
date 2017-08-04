'use strict';

function average_uneven(collection) {

  //在这里写入代码
  let arr = 0;
  let sum = 0;
  let flag = 0;
  for(let item of collection){
      if(item % 2 !== 0){
          sum += item;
          flag ++;
      }
  }
  arr = sum / flag;
  return arr;
}

module.exports = average_uneven;
