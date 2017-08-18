'use strict';
/*function includes(collection, ch){
    for(let item of collection){
        if(item === ch){
            return true;
        }
    }
    return false;
}*/
module.exports = function create_updated_collection(collectionA, objectB) {
/*    let result = [];
    for(let item of collectionA){
        let key = item.key;
        let count = item.count;
        if(includes(objectB.value,item.key)){
           count --;
         }
        result.push({key, count});

    }*/
    let result = [];
    collectionA.forEach(ele => {
      if(objectB.value.find(item => item === ele.key)){
        result.push({key : ele.key, count: ele.count - 1});
      }else {
        result.push(ele);
      }
    });
    console.log(result);
   return result;

};
