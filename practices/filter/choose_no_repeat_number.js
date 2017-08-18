'use strict';
/*function includes(collection, ch){
    for(let item of collection){
        if(item === ch){
            return true;
        }
    }
    return false;
}*/
function choose_no_repeat_number(collection) {

  //在这里写入代码

  return [...new Set(collection)];
  /*let result = [];
  for(let item of collection){
    if(!includes(result, item)){
    result.push(item);
    } else{
        continue;
    }
}*/
  //return result;
}

module.exports = choose_no_repeat_number;
