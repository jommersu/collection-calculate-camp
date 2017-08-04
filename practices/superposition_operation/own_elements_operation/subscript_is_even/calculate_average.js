'use strict';
var calculate_average = function(collection){
   let arr = 0;
   let sum = 0;
   let flag = 0;
   for(let i = 1; i < collection.length ; i++){
       if(i % 2 === 0 ) {
           sum += collection[i];
           flag ++;
       }
   }
   arr = sum / flag;
   return arr;
};
module.exports = calculate_average;
