'use strict';
function isexist(col, num){
    for(let item of col){
        if(item === num){
            return true;
        }
    }
    return false;
}
function getEven(col){
    let result = [];
    for(let i = 0; i < col.length; i++){
        if(i % 2 === 0){
            result.push(col[i]);
        }
    }
    return result;
}
var is_exist_element = function(collection,element){
   //获取下标为偶数的元素
   let newCol = getEven(collection);
   return isexist(newCol, element);
};
module.exports = is_exist_element;
