'use strict';
function pushsum(col, a ,b){
    for(let i = a; i <= b; i++){
        if(i % 2 == 0){
            col.push(i);
        }
    }
    return col;
}
function pushsub(col, a ,b){
    for(let i = a; i>= b; i--){
        if(i % 2 == 0){
            col.push(i);
        }
        
    }
    return col;
}
function get_integer_interval_2(a, b) {
  //在这里写入代码
  let result = [];
  if(a <= b){
      pushsum(result, a , b);
  }else{
      pushsub(result, a , b);
  }
  return result;
}

module.exports = get_integer_interval_2;
