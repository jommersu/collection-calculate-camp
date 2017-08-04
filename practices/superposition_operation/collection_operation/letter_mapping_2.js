'use strict';
function changeToLetter(num){
    let a = String.fromCharCode(num + 'a'.charCodeAt(0) -1);
    return a;
}
function average_to_letter(collection) {

  //在这里写入代码
  let result = 0;
  let sum = 0;
  let arr = 0;
  for(let item of collection){
      sum += item;
  }
  arr = Math.ceil(sum / collection.length);
  return changeToLetter(arr);
}

module.exports = average_to_letter;

