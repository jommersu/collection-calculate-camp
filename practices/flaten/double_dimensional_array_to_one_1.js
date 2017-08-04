'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let result = [];
  for(let item of collection){
      result = result.concat(item);
}
return result;
}
module.exports = double_to_one;
