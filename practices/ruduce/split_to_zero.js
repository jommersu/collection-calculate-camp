'use strict';
function ifstop(result){
    if(result[result.length - 1] <= 0){
        return true;
    }
    return false;
}
function spilt_to_zero(number, interval) {
  //在这里写入代码
  let result = [];
  result.push(number);
  while(!ifstop(result)){
      number -= interval;
      number = parseFloat(number.toFixed(1));
      result.push(number);
  }
  return result;
}

module.exports = spilt_to_zero;
