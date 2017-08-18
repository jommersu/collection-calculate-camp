'use strict';
/*function changeToArr(collection){
    let result = [];
    for(let item of collection){
        result.push(parseInt(item));
    }
    return result;
}
function getMedian(collection){
    let median = 0;
    let len = collection.length
    if(len % 2 === 0){
        median = (collection[len / 2 -1 ] + collection[len / 2] )  / 2;
    }else{
        median = collection[(len - 1) / 2];
        console.log(collection[(len - 1) / 2 ]);
    }
    return median;
}*/
/*function split(chain){
    let arr = chain.split("->");
    return arr;
}
function numSort(a , b){
    return a - b;
}*/
function compute_chain_median(chain) {
  //在这里写入代码
 /* let result = 0;
  let arr = split(chain);//分割为数组
  let newCol = arr.sort(numSort);//从小到大排序
//newCol是字符串数组，要转换为数组
  let arrCol = changeToArr(newCol);
  //计算中位数
  result = getMedian(arrCol);
  */
 let arr = chain.split("->");
 let arr2 = arr.map( ele => parseInt(ele));
 let newArr = arr2.sort((a,b) => a-b);
 if(newArr.length % 2 === 0){
   return (newArr[newArr.length / 2 - 1] + newArr[newArr.length / 2]) / 2;
 }else {
   return newArr[newArr.length / 2 - 1];
 }

  return result;
}

module.exports = compute_chain_median;
