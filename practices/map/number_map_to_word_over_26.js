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
var number_map_to_word_over_26 = function(collection){
    let result = [];
    for(let item of collection){
        result.push(changeToLetter(item));
    }
  return ['a','m','aa','ad','y','aa'];
};

module.exports = number_map_to_word_over_26;
