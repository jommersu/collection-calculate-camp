'use strict';
function twoLarge(col){
    let small = col[0];
    col.splice(0 ,1 );
    console.log(col);
    col.push(small);
    return col;
}
function sortNum(a, b){
    return a - b;
}
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  let result = [];
  let sortCol = collection.sort(sortNum);//对数组排序
  let num = Math.floor(collection.length / 3);
  let flag = 0;
  console.log(sortCol);
  for(let i = 0; i < num; i++){
      let col = [];
      col = sortCol.slice(flag , flag + 3);
      console.log(col);
      result = result.concat(twoLarge(col));
      console.log(result);
      flag += 3;
  }  
  result = result.concat(sortCol.slice(num * 3));
  console.log(result);
  return result;
}
module.exports = rank_by_two_large_one_small;
