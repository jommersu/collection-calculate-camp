'use strict';
/*function div(collection , num){
    for(let item of collection){
        if(num % item === 0 ){
            return true;
        }
    }
    return false;
}*/
function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  let result = collection_a.filter( ele => {
    return collection_b.find(item => {
      return ele % item === 0;
    });
  });
/*  let result = [];
  for(let item of collection_a){
      if(div(collection_b , item)){
          result.push(item);
      }
  }*/
  return result;

}

module.exports = choose_divisible_integer;
