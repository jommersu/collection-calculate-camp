'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
/*  let j = 0;
  for(let i = 0; i < collection.length; i++ ){
      if(collection[i] == element){
          j = i;
      }
  }*/
  let j = collection.lastIndexOf(element);
  return j;
}

module.exports = calculate_elements_sum;
