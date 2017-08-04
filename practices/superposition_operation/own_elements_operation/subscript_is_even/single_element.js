'use strict';
function getEven(col){
    let result = [];
    for(let i = 0; i < col.length; i ++ ){
        if(i % 2 !== 0){
            result.push(col[i]);
        }
    }
    return result;
}

function includes(col , ch){
    for(let item of col){
        if(item === ch){
            return true;
        }
    }
    return false;
}
function getNew(col){
    let result = [];
    let obj = {key : 'first' , count : 0};
    let j = 0;
    result.push(col[0]);
    for(let i = 0; i < col.length; i++){
        if(includes(result , col[i])){
          obj.count ++;
         }else{
             result.push(col[i]);
             obj.key = col[i];
             obj.count =1;
             j ++;
         }
    console.log(result);
    } 
    if(obj.count !== 1){
        result.splice(j , 1);
    }else{
        result.splice(0 , 1);
    }

    return result;
}
var single_element = function(collection){
    let EvenCol = [];
    //得到第偶数个元素组成的集合
    EvenCol = getEven(collection);
    console.log(EvenCol);
    //元素去重
    let newCol = getNew(EvenCol);
     console.log(newCol);
    return newCol;
};
module.exports = single_element;
