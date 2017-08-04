'use strict';
function changeToLetter(collection){
    let result = [];
    for(let item of collection){    
        let letter = String.fromCharCode(item + "a".charCodeAt(0)- 1);
        console.log(letter);
        result.push(letter);
    }
    return result;
}
function pushsum(result, a, b){
    for(let i = a; i <= b; i++){
        result.push(i);
    }
    return result;
}
function pushsub(result, a, b){
    for(let i = a; i >=b; i--){
        result.push(i);
    }
    return result;
}
function get_letter_interval(a, b) {
  //在这里写入代码
  let result = [];
  if(a <= b){
     pushsum(result, a, b);      
  }else{
     pushsub(result, a, b);
  }

  return changeToLetter(result);
}

module.exports = get_letter_interval;
