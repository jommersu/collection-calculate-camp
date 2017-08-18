'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
/*  let j = 0;
  for(let i = 0; i< collection.length; i++){
      if(collection[i] == element ){
          j = i;
          console.log(j);
          return j;
      }
    }*/
  let index = collection.indexOf(element );
  return index;

}
module.exports = calculate_elements_sum;

