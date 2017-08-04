'use strict';
function changeToLetter(num){
    let a = 'a'.charCodeAt() - 1;
    let result ;
    if(num <= 26){
        result = String.fromCharCode(num + a);
    }else if(num == 52){
        result = String.fromCharCode(1 + a ,26 + a );
    }else{
        let k = Math.floor(num / 26);
        let j = num % 26;
        result = String.fromCharCode(k + a , j + a);
    }
    return result;
}
function getMedian(collection){
    let result = 0;
    let len = collection.length
    if(len % 2 === 0){
        result = (collection[len/2 ] + collection[len/2 + 1] )  / 2 ;
    }else{
        result = collection[(len + 1) / 2];
    }
    return result;
}
function median_to_letter(collection) {

  //在这里写入代码
  let median = 0;
  median = getMedian(collection);
  let letter = changeToLetter(median);
  return letter;
}

module.exports = median_to_letter;
