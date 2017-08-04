'use strict';
function getEven(collection){
    let result = [];
    for(let item of collection){
        if(item % 2 === 0){
            result.push(item);
        }
    }
    return result;
}
function getOdd(collection){
    let result = [];
    for(let item of collection){
        if(item % 2 !== 0){
            result.push(item);
        }
    }
    return result;
}
function minTomax(collection){
    let col = [];
    col = collection.sort(mintoM);
    return col;
    
}
function mintoM(a, b ){
    return a- b;
}
function maxTomin(collection){
    let col = [];
    col = collection.sort(maxtoM);
    return col;
}
function maxtoM(a, b ){
    return b - a;
}
var even_asc_odd_desc = function(collection){

    let result = [];
    let evenCol = getEven(collection);//获取数组中的偶数
   // console.log(evenCol);
    let oddCol = getOdd(collection);//获取数组中的奇数
    //console.log(oddCol);
    let evenCol2 = minTomax(evenCol);//对偶数数字进行从小到大排列
    //console.log(evenCol2);
    let oddCol2 = maxTomin(oddCol);//对奇数数组进行从大到到小排列
    console.log(oddCol2);
    for(let item of evenCol2){
        result = result.concat(item);
    }
    for(let item of oddCol2){
        result = result.concat(item);//连接两个数组
        //console.log(result);
    }

    return result;
};
module.exports = even_asc_odd_desc;
