function split(item){
    let arr = item.split("-");
    return {key : arr[0] , count : arr[1]};
}
function push(result , key ,count){
    for( i = 0; i < count; i++){
        result.push(key);
    }
}
function expand(collection){
    let result = [];
    for(let item of collection){
        if(item.length == 1){
            result.push(item);
        }else{
            let {key , count } = split(item);
            push(result , key , count );
        }
    }
    return result;
}
function find(collection , ch){
    for(let item of collection){
        if(item.key === ch){
            return item;
        }
    }
    return null;
}
function includes(collection, ch){
    for(let item of collection){
        if(item === ch){
            return true;
        }
    }
    return false;
}
function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
    let result = [];
    let expandedCol = expand(collection_a);
    let collection_c = [];//{key:'a' , count:3}
    for(let item of expandedCol){
     let obj = find(collection_c , item);
     if(obj){
         obj.count ++;
     }else{
         collection_c.push({key: item , count : 1});
     }
  }
    for(let item of collection_c){
        let key = item.key;
        let count = item.count;
        if(includes(object_b.value,item.key)){
            count -= (count - (count % 3)) / 3;
        }
        result.push({key, count});  
    }
  
  return result;
}

module.exports = create_updated_collection;
