'use strict';
function includes(collection, ch){
    for(let item of collection){
        if(item === ch){
            return true;
        }
    }
    return false;
}
module.exports = function create_updated_collection(collectionA, objectB) {
    let result = [];
    for(let item of collectionA){
        let key = item.key;
        let count = item.count;
        if(includes(objectB.value,item.key)){
           count --;
         }
        result.push({key, count});
        
    }
    return result;
   

}