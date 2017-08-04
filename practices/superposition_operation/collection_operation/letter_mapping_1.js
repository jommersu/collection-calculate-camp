'use strict';
function changeToLetter(item){
    let a = String.fromCharCode(item + 'a'.charCodeAt(0) -1);
    return a;
}
function even_to_letter(collection) {

  //在这里写入代码
  let result = [];
  for(let item of collection){
      if(item % 2 === 0){
          result.push(changeToLetter(item));
      }

}
return result;
}
module.exports = even_to_letter;
