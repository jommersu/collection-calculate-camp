'use strict';
function includes(collection ,ch ){
    for(let item of collection){
        if(item === ch){
            return true;
        }
    }
    return false;
}

function double_to_one(collection) {

  //在这里写入代码
  let result = [];
  let col = [];
  for(let item of collection){
      result = result.concat(item);
  }
  for(let item of result){
      if(!includes(col , item)){
          col.push(item);
      }
  }
  //console.log(result);
  //console.log(col);
  return col;
}

module.exports = double_to_one;
