'use strict';
function changeToLetter(collection){
    let result = [];
    for(let item of collection){
        let num = "a".charCodeAt(0)- 1;
        if(item  <= 26){
            let letter = String.fromCharCode(item + num);
             result.push(letter);
        }else if(item == 52){
            let letter = String.fromCharCode(1 + num, 26 + num);
            result.push(letter);
        }else{
            let k = Math.floor(item / 26);
            let j = item % 26;
            let letter = String.fromCharCode(k + num, j + num);
            result.push(letter);
        }
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
function get_letter_interval_2(a, b) {
  //在这里写入代码
    let result = [];
    if(a <= b){
        pushsum(result, a, b);      
    }else{
     pushsub(result, a, b);
    }
  return changeToLetter(result);
}


module.exports = get_letter_interval_2;

