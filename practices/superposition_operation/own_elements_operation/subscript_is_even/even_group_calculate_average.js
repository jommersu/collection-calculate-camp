'use strict';
//计算平均数
function getAve(col){
    let sum = 0;
    let ave = 0;
    for(let item of col){
        sum += item;
    }
    ave = sum / col.length;
    return ave;
}
//得到集合中的偶数
function getNew(col){
    let result = [];
    for(let item of col){
        if(item % 2 === 0){
            result.push(item);
        }
    }
    if(result.length === 0){
        result = [0];
    }
    return result;
}
//得到第偶数个元素组成的集合
function getEven(collection){
    let Col = [];
    for(let i = 0; i < collection.length ; i++){
       if(i % 2 !== 0 ) {
           Col.push(collection[i]);
       }
   }
   return Col;
}
var even_group_calculate_average = function(collection){
  let result = [];
  let EvenCol = getEven(collection);//选出第偶数个元素
  console.log(EvenCol);
  let newCol = getNew(EvenCol);//选出数组中的偶数
  console.log(newCol);
  if(newCol.length !== 1){
      
 
  //按几位数分组
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  for(let item of newCol){
      if(item / 100 >= 1){
          arr3.push(item);
      }else if(item / 10 >= 1){
          arr2.push(item);
      }else{
          arr1.push(item);
      }
  }
  //当不含有1位，2位的数字，但含有3位的情况时，计算这组的平均数
  
  if((arr1.length === 0) && (arr2.length === 0) &&(arr3.length !== 0)){
      let col3 = [];
      col3.push(getAve(arr3));
      console.log(col3);
      return col3;
  }else{
        //按几位数分组，并计算每组的平均数
        
        let ave1 = getAve(arr1);
        let ave2 = getAve(arr2);
        let ave3 = getAve(arr3);
        result = [ave1 , ave2 , ave3];
  }
}else{
    result = newCol;
}
  return result;
  
};
module.exports = even_group_calculate_average;
