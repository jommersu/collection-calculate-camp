'use strict';

function amount_even(collection) {

  //在这里写入代码
  let sum = 0;
  for(let item of collection){
      if(item % 2 === 0){
          sum += item;
      }
  }
  return sum;
}

module.exports = amount_even;
