'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  let sum = 0;
  for(let item of collection){
      sum += item * 3 +2;
  }
  return sum;
}


module.exports = hybrid_operation;

