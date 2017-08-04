'use strict';

function grouping_count(collection) {

  //在这里写入代码
  let result = {}; //{"1":4,"2":4}
 
  for(let item of collection){
     
      if(result.hasOwnProperty( `${item}`)){
          result[`${item}`] ++;
      }else{
          result[`${item}`] = 1;
          
      }
  }

 //result['1'] = 6;

  return result;
}

module.exports = grouping_count;
