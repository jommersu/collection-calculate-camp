'use strict';
function getMedian(col){
    let result = 0;
    let len = col.length;
    //console.log(len);
    if(len % 2 === 0){
        result = (col[len/2 -1 ] + col[len/2 ] )  / 2 ;
    }else{
        result = col[(len - 1) / 2];
    }
    return result;
}
function getEven(collection){
    let Col = [];
    for(let i = 0; i < collection.length ; i++){
       if(i % 2 !== 0 ) {
           Col.push(collection[i]);
       }
   }
   return Col;
}
var calculate_median = function(collection){
   let newCol = [];
   newCol = getEven(collection);
   console.log(newCol);
   let arv = 0;
   arv = getMedian(newCol);
   console.log(arv);
   return arv;
};
module.exports = calculate_median;
