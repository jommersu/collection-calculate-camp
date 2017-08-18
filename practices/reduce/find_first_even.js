'use strict';

function find_first_even(collection) {
  //在这里写入代码
/*  let num = 0;
  for(let item of collection){
      if(item % 2 == 0){
          num = item;
          return num;
      }
  }*/
  let num = collection.reduce((a ,b)=> {
    console.log("a"+a+"b"+b);
    if(a % 2 === 0){
      return a;
    }
    return b;
  });
  console.log(num);
  return num;
}

module.exports = find_first_even;

