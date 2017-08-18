'use strict';

function compute_average(collection) {
  //在这里写入代码
/*  let ave = 0;
  let sum = 0;
  for(let item of collection){
      sum += item;
  }
  ave = sum / collection.length;
  */
  let ave = collection.reduce((a,b) => a+b) / collection.length;
  return ave;
}

module.exports = compute_average;

