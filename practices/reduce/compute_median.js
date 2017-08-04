'use strict';
function getMedian(collection){
    let result = 0;
    let len = collection.length
    if(len % 2 === 0){
        result = (collection[len/2 -1 ] + collection[len/2 ] )  / 2 ;
    }else{
        result = collection[(len - 1) / 2];
    }
    return result;
}
function Numsort(a,b){
    return a - b;    
}

function compute_median(collection) {
  //在这里写入代码
   let result;
   let newCol = collection.sort(Numsort);
   console.log(newCol);
   result = getMedian(newCol);
   return result;
}

module.exports = compute_median;


