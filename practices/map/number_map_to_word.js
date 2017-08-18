'use strict';
/*function changeToLetter(num){
    let a = String.fromCharCode(num + 'a'.charCodeAt(0) -1);
    return a;
}*/
var number_map_to_word = function(collection){
/*    let result = [];
    for(let item of collection){
        result.push(changeToLetter(item));
    }*/
  let result = collection.map( ele => String.fromCharCode(ele + 'a'.charCodeAt(0) -1));
  return result;
};

module.exports = number_map_to_word;
