'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  let result = collection.filter( ele => ele % 3 === 0);
/*  let result = [];
  for(let item of collection){
      if(item % 3 === 0){
          result.push(item);
      }
  }*/
  return result;
}

module.exports = choose_multiples_of_three;
