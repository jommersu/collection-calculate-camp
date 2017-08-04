function find(col , ch){
    for(let item of col){
        if(item.key === ch){
            return item;
        }
    }
    return null;
}
function sum(collection){
     let result = [];
     for(let item of collection){
         let obj = find(result , item);
         if(obj){
             obj.count ++;
         }else{
             result.push({key: item , count:1});
         }
     }
     return result;
     
}
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
function count_same_elements(collection) {
  //在这里写入代码
  let result = [];
  let expandedCol = expand(collection);
  result = sum(expandedCol);
  return result;
}

module.exports = count_same_elements;
