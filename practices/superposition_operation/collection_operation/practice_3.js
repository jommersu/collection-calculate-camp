'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  let sum = 0;
  for(let item of collection){
      if(item % 2 != 0){
          sum += item * 3 + 5;
      }
  }
  return sum;
  
}

module.exports = hybrid_operation_to_uneven;

