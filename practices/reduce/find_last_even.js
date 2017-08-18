'use strict';

function find_last_even(collection) {
  //在这里写入代码
/*  let num = 0;
  for(let item of collection){
      if(item % 2 == 0){
          num = item;
      }
  }*/
  let num = collection.reduce((a,b) =>{
    console.log("a"+a+"b"+b);
    if(b % 2 === 0){
      return b;
    }
    return a;
  });
  return num;
}

module.exports = find_last_even;
